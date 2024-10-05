import type * as mdast from 'mdast'
import type { DeclarationReflection } from 'typedoc'

import type { MarkdownThemeContext } from '../theme'
import * as m from '../utils/mdast'

import { formatSignatures } from './type'

export function getMethod(
  ctx: MarkdownThemeContext,
  model: DeclarationReflection,
): mdast.RootContent[] {
  if (!model.signatures?.length) {
    return []
  }
  const methodName = model.name

  return [
    m.code(
      { lang: 'ts' },
      `const ${methodName}: ${formatSignatures(model.signatures)}`,
    ),
  ]
}
