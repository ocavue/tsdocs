import { pascalCase } from 'change-case'
import type * as mdast from 'mdast'
import type { Comment } from 'typedoc'

import type { MarkdownThemeContext } from '../theme/markdown-theme-context'
import { extractValue } from '../utils/markdown'
import * as m from '../utils/mdast'

import { getCommentDisplayParts } from './comment-display-parts'

export function getCommentBlockTags(
  ctx: MarkdownThemeContext,
  comment: Comment | undefined,
  options?: {
    headingLevel?: m.HeadingLevel
  },
): mdast.RootContent[] {
  if (!comment) {
    return []
  }

  const headingLevel = options?.headingLevel ?? undefined

  const result: mdast.RootContent[] = []

  const blockTags = comment.blockTags

  for (const blockTag of blockTags) {
    if (headingLevel) {
      result.push(
        m.heading(headingLevel, [
          m.text(pascalCase(blockTag.tag.replace(/^@/, ''))),
        ]),
        ...getCommentDisplayParts(ctx, blockTag.content),
      )
    } else {
      if (blockTag.tag === '@default') {
        result.push(
          m.paragraph([
            m.strong([m.text(pascalCase(blockTag.tag.replace(/^@/, '')))]),
            m.text(': '),
            m.inlineCode(
              getCommentDisplayParts(ctx, blockTag.content)
                .map(extractValue)
                .join(''),
            ),
          ]),
        )
      } else {
        result.push(
          m.paragraph([
            m.strong([m.text(pascalCase(blockTag.tag.replace(/^@/, '')))]),
          ]),
          ...getCommentDisplayParts(ctx, blockTag.content),
        )
      }
    }
  }

  return result
}
