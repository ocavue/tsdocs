import type * as mdast from 'mdast'
import type { DeclarationReflection } from 'typedoc'

import type { MarkdownThemeContext } from '../theme'
import * as m from '../utils/mdast'

import { formatParameters } from './type'

export function getConstructor(
  ctx: MarkdownThemeContext,
  model: DeclarationReflection,
): mdast.RootContent[] {
  if (!model.signatures?.length) {
    return []
  }
  const className = model.parent?.name

  return [
    m.code(
      { lang: 'ts' },
      model.signatures
        .map((s) => `new ${className}${formatParameters(s)}`)
        .join('\n'),
    ),
  ]
}
