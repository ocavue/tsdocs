import type * as mdast from 'mdast'
import type { ContainerReflection } from 'typedoc'

import type { MarkdownThemeContext } from '../theme/markdown-theme-context'
import * as m from '../utils/mdast'

import { getComment } from './comment'
import { getDeclaration } from './declaration'

export function getContainer(
  ctx: MarkdownThemeContext,
  project: ContainerReflection,
): mdast.Root {
  return m.root([
    m.heading(1, [m.text(project.name)]),
    ...getComment(ctx, project.comment, { headingLevel: 2 }),
    ...getProjectChildren(ctx, project),
  ])
}

function getProjectChildren(
  ctx: MarkdownThemeContext,
  project: ContainerReflection,
): mdast.RootContent[] {
  const children = project.children || []

  return [
    ...children.flatMap((child) =>
      getDeclaration(ctx, child, { headingLevel: 2 }),
    ),
  ]
}
