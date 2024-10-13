import type * as mdast from 'mdast'
import type { DeclarationReflection } from 'typedoc'

import type { MarkdownThemeContext } from '../theme'
import * as m from '../utils/mdast'

import { renderMemberSignature } from './type'

export function getMethod(
  ctx: MarkdownThemeContext,
  model: DeclarationReflection,
): mdast.RootContent[] {
  if (!model.signatures?.length) {
    return []
  }
  const methodName = model.name

  const overrides = model.signatures.map((signature) =>
    renderMemberSignature(signature, { arrowStyle: true, hideName: true }),
  )

  const code = `const ${methodName}: ${
    overrides.length === 1
      ? overrides[0]
      : '(' + overrides.map((override) => `(${override})`).join(' | ') + ')'
  }`

  return [m.code({ lang: 'ts' }, code)]
}
