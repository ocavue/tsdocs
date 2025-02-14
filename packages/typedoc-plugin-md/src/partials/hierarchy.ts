import type * as mdast from 'mdast'
import { TypeContext, type DeclarationHierarchy } from 'typedoc'

import type { MarkdownThemeContext } from '../theme'
import * as m from '../utils/mdast'

import { renderType } from './type'

export function getHierarchy(
  ctx: MarkdownThemeContext,
  model: DeclarationHierarchy | undefined,
): mdast.RootContent[] {
  if (!model || !model.types || model.types.length === 0 || model.isTarget) {
    return []
  }

  return [
    m.paragraph([
      m.strong([m.text('Extends')]),
      m.text(' '),
      ...model.types
        .map((type) => renderType(type, TypeContext.conditionalExtends))
        .flatMap((str) => {
          return m.inlineCode(str)
        }),
    ]),
  ]
}
