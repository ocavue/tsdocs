import type * as mdast from 'mdast'
import type { Comment } from 'typedoc'

import type { MarkdownThemeContext } from '../theme/markdown-theme-context'
import type * as m from '../utils/mdast'

import { getCommentBlockTags } from './comment-block-tags'
import { getCommentSummary } from './comment-summary'

export function getComment(
  ctx: MarkdownThemeContext,
  comment: Comment | undefined,
  options?: {
    headingLevel?: m.HeadingLevel
  },
): mdast.RootContent[] {
  if (!comment) {
    return []
  }

  return [
    ...getCommentSummary(ctx, comment),
    ...getCommentBlockTags(ctx, comment, options),
  ]
}
