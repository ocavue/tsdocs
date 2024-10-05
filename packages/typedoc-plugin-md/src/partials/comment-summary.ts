import type * as mdast from 'mdast'
import type { Comment } from 'typedoc'

import type { MarkdownThemeContext } from '../theme/markdown-theme-context'

import { getCommentDisplayParts } from './comment-display-parts'

export function getCommentSummary(
  ctx: MarkdownThemeContext,
  comment: Comment | undefined,
): mdast.RootContent[] {
  if (!comment) {
    return []
  }
  return getCommentDisplayParts(ctx, comment.summary)
}
