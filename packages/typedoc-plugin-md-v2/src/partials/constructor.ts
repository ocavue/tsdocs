import type * as mdast from 'mdast'
import type { DeclarationReflection } from 'typedoc'

import type { MarkdownThemeContext } from '../theme'
import * as m from '../utils/mdast'

import { renderMemberSignature } from './type'

export function getConstructor(
  ctx: MarkdownThemeContext,
  model: DeclarationReflection,
): mdast.RootContent[] {
  if (!model.signatures?.length) {
    return []
  }

  return [
    m.code(
      { lang: '' },
      model.signatures
        .map((s) =>
          renderMemberSignature(s, { hideName: false, arrowStyle: false }),
        )
        .join('\n'),
    ),
  ]
}
