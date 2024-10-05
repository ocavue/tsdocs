import type * as mdast from 'mdast'
import type { DeclarationReflection } from 'typedoc'

import type { MarkdownThemeContext } from '../theme'
import * as m from '../utils/mdast'

import { getComment } from './comment'
import { formatSignature } from './type'

export function getFunction(
  ctx: MarkdownThemeContext,
  model: DeclarationReflection,
): mdast.RootContent[] {
  if (!model.signatures?.length) {
    return []
  }
  const functionName = model.name
  const result: mdast.RootContent[] = []

  for (const signature of model.signatures) {
    result.push(
      m.code(
        { lang: 'ts' },
        `function ${functionName}${formatSignature(signature, false)}`,
      ),
      ...getComment(ctx, signature.comment),
    )
  }
  return result
}
