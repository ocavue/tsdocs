import { pascalCase } from 'change-case'
import type * as mdast from 'mdast'
import type { Comment, CommentTag } from 'typedoc'

import type { MarkdownThemeContext } from '../theme/markdown-theme-context'
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

  const blockTags = mergeExampleBlockTags(comment.blockTags)

  for (const blockTag of blockTags) {
    if (headingLevel) {
      result.push(
        m.heading(headingLevel, [
          m.text(pascalCase(blockTag.tag.replace(/^@/, ''))),
        ]),
        ...getCommentDisplayParts(ctx, blockTag.content),
      )
    } else {
      result.push(
        ...mergeMergeParagraphs([
          m.paragraph([
            m.strong([m.text(pascalCase(blockTag.tag.replace(/^@/, '')))]),
          ]),
          ...getCommentDisplayParts(ctx, blockTag.content),
        ]),
      )
    }
  }

  return result
}

function mergeExampleBlockTags(blockTags: CommentTag[]): CommentTag[] {
  let exampleBlockTag: CommentTag | undefined
  const result: CommentTag[] = []

  for (const blockTag of blockTags) {
    if (blockTag.tag === '@example') {
      if (!exampleBlockTag) {
        exampleBlockTag = blockTag
        result.push(exampleBlockTag)
      } else {
        exampleBlockTag.content.push(...blockTag.content)
      }
    } else {
      result.push(blockTag)
    }
  }

  return result
}

function mergeMergeParagraphs(content: mdast.RootContent[]) {
  if (content.length === 2) {
    const a = content[0]
    const b = content[1]
    if (a.type === 'paragraph' && b.type === 'paragraph') {
      return [m.paragraph([...a.children, m.text(': '), ...b.children])]
    }
  }
  return content
}
