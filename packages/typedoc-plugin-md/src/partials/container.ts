import type * as mdast from 'mdast'
import type { ContainerReflection } from 'typedoc'
import { visit } from 'unist-util-visit'

import type { MarkdownThemeContext } from '../theme/markdown-theme-context'
import * as m from '../utils/mdast'

import { getComment } from './comment'
import { getDeclaration } from './declaration'

export function getContainer(
  ctx: MarkdownThemeContext,
  project: ContainerReflection,
): mdast.Root {
  const projectComments = getComment(ctx, project.comment, { headingLevel: 2 })

  let hasHeading = false
  visit(m.root(projectComments), 'heading', (node) => {
    if (node.type === 'heading') {
      hasHeading = true
    }
  })

  return m.root([
    m.heading(1, [m.text(project.name)]),
    ...projectComments,
    ...(hasHeading ? [m.heading(2, [m.text('API Reference')])] : []),
    ...getProjectChildren(ctx, project, { headingLevel: hasHeading ? 3 : 2 }),
  ])
}

function getProjectChildren(
  ctx: MarkdownThemeContext,
  project: ContainerReflection,
  options: {
    headingLevel: m.HeadingLevel
  },
): mdast.RootContent[] {
  const children = project.children || []

  return [
    ...children.flatMap((child) =>
      getDeclaration(ctx, child, { headingLevel: options.headingLevel }),
    ),
  ]
}
