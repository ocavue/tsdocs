/**
 * Based on https://github.com/TypeStrong/typedoc/blob/eb9c967277ba9b01a10b69424e70d09dec52e879/src/lib/output/themes/default/partials/type.tsx
 */

import {
  type DeclarationReflection,
  type ParameterReflection,
  ReflectionKind,
  type SignatureReflection,
  type Type,
  TypeContext,
  type TypeKindMap,
  type TypeParameterReflection,
} from 'typedoc'

import { stringify } from '../utils/stringify'

function renderTypeParametersSignature(
  typeParameters: readonly TypeParameterReflection[] | undefined,
): string {
  if (!typeParameters || typeParameters.length === 0) return ''

  return [
    '<',
    typeParameters
      .map(
        (item) =>
          (item.flags.isConst ? 'const ' : '') +
          (item.varianceModifier ? `${item.varianceModifier} ` : '') +
          item.name +
          (item.type
            ? ` extends ${renderType(item.type, TypeContext.none)}`
            : ''),
      )
      .join(', '),
    '>',
  ].join('')
}

function renderParameter(item: ParameterReflection): string {
  const parts: string[] = [
    item.flags.isRest ? '...' : '',
    item.name,
    item.flags.isOptional || item.defaultValue ? '?' : '',
    ': ',
    renderType(item.type),
  ]
  return parts.filter(Boolean).join('')
}

export function renderMemberSignature(
  props: SignatureReflection,
  {
    hideName = false,
    arrowStyle = false,
  }: {
    hideName?: boolean
    arrowStyle?: boolean
  } = {},
): string {
  const parts: string[] = [
    !hideName
      ? props.name
      : props.kind === ReflectionKind.ConstructorSignature
        ? (props.flags.isAbstract ? 'abstract ' : '') + 'new '
        : '',
    renderTypeParametersSignature(props.typeParameters),
    '(',
    (props.parameters ?? []).map(renderParameter).join(', '),
    ')',
    props.type
      ? (arrowStyle ? ' => ' : ': ') + renderType(props.type, TypeContext.none)
      : '',
  ]

  return parts.filter(Boolean).join('')
}

// The type helper accepts an optional needsParens parameter that is checked
// if an inner type may result in invalid output without them. For example:
// 1 | 2[] !== (1 | 2)[]
// () => 1 | 2 !== (() => 1) | 2
const typeRenderers: {
  [K in keyof TypeKindMap]: (type: TypeKindMap[K]) => string
} = {
  array(type) {
    return renderType(type.elementType, TypeContext.arrayElement) + '[]'
  },
  conditional(type) {
    const parts: string[] = [
      renderType(type.checkType, TypeContext.conditionalCheck),
      'extends',
      renderType(type.extendsType, TypeContext.conditionalExtends),
      '?',
      renderType(type.trueType, TypeContext.conditionalTrue),
      ':',
      renderType(type.falseType, TypeContext.conditionalFalse),
    ]
    return parts.join(' ')
  },
  indexedAccess(type) {
    const indexType: string = renderType(
      type.indexType,
      TypeContext.indexedIndex,
    )
    const objectType: string = renderType(
      type.objectType,
      TypeContext.indexedObject,
    )
    return objectType + '[' + indexType + ']'
  },
  inferred(type) {
    return (
      'infer ' +
      type.name +
      (type.constraint
        ? ' extends ' +
          renderType(type.constraint, TypeContext.inferredConstraint)
        : '')
    )
  },
  intersection(type) {
    return type.types
      .map((item) => {
        return renderType(item, TypeContext.intersectionElement)
      })
      .join(' & ')
  },
  intrinsic(type) {
    return type.name
  },
  literal(type) {
    return stringify(type.value)
  },
  mapped(type) {
    const parts: string[] = ['{']

    switch (type.readonlyModifier) {
      case '+':
        parts.push('readonly')
        break
      case '-':
        parts.push('-readonly')
        break
    }

    parts.push(
      '[',
      type.parameter,
      ' in ',
      renderType(type.parameterType, TypeContext.mappedParameter),
    )

    if (type.nameType) {
      parts.push(' as ', renderType(type.nameType, TypeContext.mappedName))
    }

    parts.push(']')

    switch (type.optionalModifier) {
      case '+':
        parts.push('?: ')
        break
      case '-':
        parts.push('-?: ')
        break
      default:
        parts.push(': ')
    }

    parts.push(renderType(type.templateType, TypeContext.mappedTemplate), '}')

    return parts.join('')
  },
  namedTupleMember(type) {
    return (
      type.name +
      (type.isOptional ? '?: ' : ': ') +
      renderType(type.element, TypeContext.tupleElement)
    )
  },
  optional(type) {
    return renderType(type.elementType, TypeContext.optionalElement) + '?'
  },
  predicate(type) {
    const parts: string[] = []

    if (type.asserts) {
      parts.push('asserts ')
    }

    parts.push(type.name)

    if (type.targetType) {
      parts.push(
        ' is ',
        renderType(type.targetType, TypeContext.predicateTarget),
      )
    }

    return parts.join('')
  },
  query(type) {
    return 'typeof ' + renderType(type.queryType, TypeContext.queryTypeTarget)
  },
  reference(type) {
    const reflection = type.reflection

    const name: string = reflection?.name || type.name

    const parts: string[] = [name]

    if (type.typeArguments?.length) {
      const typeArguments = type.typeArguments
        .map((item) => renderType(item, TypeContext.referenceTypeArgument))
        .join(', ')
      parts.push('<', typeArguments, '>')
    }

    return parts.join('')
  },
  reflection(type): string {
    const members: string[] = []
    const children: DeclarationReflection[] = type.declaration.children || []

    for (const item of children) {
      if (item.getSignature && item.setSignature) {
        members.push(
          item.name,
          +': ' + renderType(item.getSignature.type, TypeContext.none),
        )
        continue
      }

      if (item.getSignature) {
        members.push(
          'get ' +
            item.getSignature.name +
            '(): ' +
            renderType(item.getSignature.type, TypeContext.none),
        )
        continue
      }

      if (item.setSignature) {
        members.push(
          'set ' +
            item.setSignature.name +
            '(' +
            (item.setSignature.parameters || [])
              .map((item) => {
                return (
                  item.name + ': ' + renderType(item.type, TypeContext.none)
                )
              })
              .join('') +
            ')',
        )
        continue
      }

      members.push(
        item.name +
          (item.flags.isOptional ? '?: ' : ': ') +
          renderType(item.type, TypeContext.none),
      )
    }

    if (type.declaration.indexSignatures) {
      for (const index of type.declaration.indexSignatures) {
        members.push(
          '[' +
            index.parameters![0].name +
            ']: ' +
            renderType(index.type, TypeContext.none),
        )
      }
    }

    if (members.length === 0 && type.declaration.signatures?.length === 1) {
      return renderMemberSignature(type.declaration.signatures[0], {
        hideName: true,
        arrowStyle: true,
      })
    }

    for (const item of type.declaration.signatures || []) {
      members.push(
        renderMemberSignature(item, {
          hideName: true,
        }),
      )
    }

    if (members.length > 0) {
      return '{ ' + members.join('; ') + ' }'
    }

    return '{}'
  },
  rest(type) {
    return '...' + renderType(type.elementType, TypeContext.restElement)
  },
  templateLiteral(type) {
    return (
      '`' +
      (type.head ? type.head : '') +
      type.tail
        .map(
          (item) =>
            '${' +
            renderType(item[0], TypeContext.templateLiteralElement) +
            '}' +
            (item[1] || ''),
        )
        .join('') +
      '`'
    )
  },
  tuple(type) {
    return (
      '[' +
      type.elements
        .map((item) => renderType(item, TypeContext.tupleElement))
        .join(', ') +
      ']'
    )
  },
  typeOperator(type) {
    return (
      type.operator +
      ' ' +
      renderType(type.target, TypeContext.typeOperatorTarget)
    )
  },
  union(type) {
    return type.types
      .map((item) => renderType(item, TypeContext.unionElement))
      .join(' | ')
  },
  unknown(type) {
    return type.name
  },
}

export function renderType(
  type: Type | undefined,
  where: TypeContext = TypeContext.none,
): string {
  if (!type) {
    return 'any'
  }

  const renderFn = typeRenderers[type.type]

  const rendered = renderFn(type as never)

  if (type.needsParenthesis(where)) {
    return '(<>' + rendered + '<>)'
  }

  return rendered
}
