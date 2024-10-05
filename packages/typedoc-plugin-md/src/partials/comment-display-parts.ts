import type * as mdast from 'mdast'
import {
  ReflectionSymbolId,
  type CommentDisplayPart,
  type InlineTagDisplayPart,
} from 'typedoc'

import type { MarkdownThemeContext } from '../theme/markdown-theme-context'
import { parseRootContent, stringifyPhrasingContent } from '../utils/markdown'
import * as m from '../utils/mdast'

export function getCommentDisplayParts(
  ctx: MarkdownThemeContext,
  parts: CommentDisplayPart[],
): mdast.RootContent[] {
  const text = parts
    .map((part) => getCommentDisplayPartMarkdown(ctx, part))
    .join('')
  return parseRootContent(text)
}

/**
 * Returns the markdown string for a single comment display part.
 */
function getCommentDisplayPartMarkdown(
  ctx: MarkdownThemeContext,
  part: CommentDisplayPart,
): string {
  switch (part.kind) {
    case 'text':
      return part.text
    case 'code':
      return part.text
    case 'inline-tag':
      switch (part.tag) {
        case '@label':
        case '@inheritdoc':
          return ''
        case '@link':
        case '@linkcode':
        case '@linkplain': {
          if (part.target) {
            const url = getUrl(part)
            const linkContent =
              part.tag === '@linkcode' ? `\`${part.text}\`` : part.text
            const linkUrl = ctx.getRelativeUrl(url)
            return stringifyPhrasingContent(
              m.link({ url: linkUrl }, [m.text(linkContent)]),
            )
          }
          return part.text
        }
        default:
          return `{${part.tag} ${part.text}}`
      }
    case 'relative-link':
      switch (typeof part.target) {
        case 'number': {
          const reflection = ctx.page.project.files.resolve(part.target)
          if (typeof reflection === 'object' && reflection.url) {
            return stringifyPhrasingContent(m.autolink(reflection.url))
          }
          const fileName = ctx.page.project.files.getName(part.target)
          throw new Error(`Linking to file ${fileName} is not implemented`)
        }
        default:
          return part.text
      }
    default:
      throw new Error(`Unexpected CommentDisplayPart: ${JSON.stringify(part)}`)
  }
}

function getUrl(part: InlineTagDisplayPart) {
  const target = part.target

  if (typeof target === 'string') {
    return target
  }

  if (target instanceof ReflectionSymbolId) {
    return ''
  }

  return target?.url || target?.parent?.url || ''
}
