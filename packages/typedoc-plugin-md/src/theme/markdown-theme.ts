import * as path from 'node:path'

import slugify from '@sindresorhus/slugify'
import {
  ContainerReflection,
  DeclarationReflection,
  EntryPointStrategy,
  type PageEvent,
  type ProjectReflection,
  type Reflection,
  ReflectionKind,
  type RenderTemplate,
  Theme,
  type UrlMapping,
} from 'typedoc'

import { getContainer } from '../partials/container'
import { getFileNameWithExtension } from '../utils/get-file-name-with-extension'
import { stringify } from '../utils/markdown'

import { MarkdownThemeContext } from './markdown-theme-context'

/**
 * The main theme class for the plugin.
 *
 * The class controls how TypeDoc models are mapped to files and templates and
 * extends TypeDoc's base Theme class.
 */
export class MarkdownTheme extends Theme {
  /**
   * Renders a template and page model to a string.
   */
  render(
    page: PageEvent<Reflection>,
    template: RenderTemplate<PageEvent<Reflection>>,
  ) {
    try {
      const result = template(page)
      if (typeof result === 'string') {
        return result
      }
      throw new Error(
        `Invalid template result. Expected string, got ${typeof result}`,
      )
    } catch (e) {
      throw new Error(`Error rendering page ${page.url}`, { cause: e })
    }
  }

  /**
   * Renders the provided page to a string, which will be written to disk.
   */
  getUrls(project: ProjectReflection): UrlMapping[] {
    const options = this.application.options
    const fileExtension: string = options.getValue('fileExtension')
    const entryFileName: string = getFileNameWithExtension(
      options.getValue('entryFileName'),
      fileExtension,
    )

    const getAnchorId = (reflection: DeclarationReflection): string => {
      if (reflection.kind === ReflectionKind.Constructor) {
        return 'Constructors'
      }

      return slugify(reflection.name)
    }

    const anchorCounter: Record<string, number> = {}

    const getUniqueAnchor = (anchor: string): string => {
      const count = anchorCounter[anchor] || 0
      anchorCounter[anchor] = count + 1

      if (count === 0) {
        return anchor
      }
      return getUniqueAnchor(`${anchor}-${count}`)
    }

    const applyAnchorUrl = (
      reflection: DeclarationReflection,
      containerUrl: string,
    ) => {
      if (reflection.kind === ReflectionKind.TypeLiteral) {
        return
      }

      const anchorPrefix = options.getValue('anchorPrefix')
      const anchorId = getAnchorId(reflection)
      if (!anchorId) {
        return
      }
      const anchor = [anchorPrefix, getUniqueAnchor(anchorId)]
        .filter(Boolean)
        .join('')
      const anchorUrl = containerUrl + '#' + anchor

      reflection.url = anchorUrl
      reflection.anchor = anchor
      reflection.hasOwnDocument = false
    }

    const mappings: UrlMapping[] = []

    const traverseDeclaration = (
      reflection: DeclarationReflection,
      containerUrl: string,
    ): void => {
      if (reflection.kind === ReflectionKind.Module) {
        containerUrl = getFileNameWithExtension(reflection.name, fileExtension)

        mappings.push({
          url: containerUrl,
          model: reflection,
          template: this.projectTemplate,
        })
      }

      if (containerUrl) {
        applyAnchorUrl(reflection, containerUrl)
      }

      if (reflection.parent) {
        reflection.traverse((child) => {
          if (child instanceof DeclarationReflection) {
            traverseDeclaration(child, containerUrl)
          }
        })
      }
    }

    const traversePackage = (
      model: DeclarationReflection,
      containerUrl: string,
    ) => {
      const packageUrl = path.join(
        path.dirname(containerUrl),
        model.name,
        entryFileName,
      )
      const children = model.children || []
      model.url = packageUrl
      children.forEach((child) => {
        traverseDeclaration(child, packageUrl)
      })
      mappings.push({
        url: packageUrl,
        model: model,
        template: this.projectTemplate,
      })
    }

    const traverseProject = (project: ProjectReflection) => {
      const projectUrl = entryFileName
      const children = project.children || []

      // Whether if the project has multiple packages as children
      const isPackagesRoot =
        project.variant === 'project' &&
        children.length > 1 &&
        children.every((child) => child.kind === ReflectionKind.Module) &&
        options.getValue('entryPointStrategy') === EntryPointStrategy.Packages

      if (isPackagesRoot) {
        children.forEach((child) => traversePackage(child, projectUrl))
      } else {
        children.forEach((child) => traverseDeclaration(child, projectUrl))
      }
      mappings.push({
        url: projectUrl,
        model: project,
        template: this.projectTemplate,
      })
    }

    traverseProject(project)

    return mappings
  }

  /**
   * Renders a project page to a string.
   */
  private projectTemplate = (page: PageEvent<Reflection>): string => {
    const ctx = new MarkdownThemeContext(page, this.application.options)

    const model = page.model
    if (model instanceof ContainerReflection) {
      const root = getContainer(ctx, model)
      return stringify(root)
    }
    throw new Error(`A container reflection is expected but get ${model?.kind}`)
  }
}
