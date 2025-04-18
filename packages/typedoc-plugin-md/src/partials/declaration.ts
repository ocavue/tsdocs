import type * as mdast from 'mdast'
import { ReflectionKind, type DeclarationReflection } from 'typedoc'

import type { MarkdownThemeContext } from '../theme/markdown-theme-context'
import * as m from '../utils/mdast'

import { getComment } from './comment'
import { getCommentBlockTags } from './comment-block-tags'
import { getCommentSummary } from './comment-summary'
import { getConstructor } from './constructor'
import { getFunction } from './function'
import { getHierarchy } from './hierarchy'
import { getMethod } from './method'
import { renderMemberSignature, renderType } from './type'

export function getDeclaration(
  ctx: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: m.HeadingLevel },
): mdast.RootContent[] {
  const markdownHeadingId = ctx.options.getValue('markdownHeadingId')

  if (showHideMember(model)) {
    return []
  }

  if (model.kind === ReflectionKind.Property) {
    return [
      m.html('<dt>'),
      ...getPropertyType(model),
      m.html('</dt>'),
      m.html('<dd>'),
      ...getCommentSummary(ctx, model.comment),
      ...getCommentBlockTags(ctx, model.comment, { headingLevel: undefined }),
      m.html('</dd>'),
    ]
  }

  if (model.kind === ReflectionKind.Accessor) {
    const result: mdast.RootContent[] = []

    const { getSignature, setSignature } = model

    if (getSignature) {
      result.push(
        m.html('<dt>'),
        m.paragraph([
          m.inlineCode(
            renderMemberSignature(getSignature, {
              hideName: false,
              arrowStyle: false,
            }),
          ),
        ]),
        m.html('</dt>'),
        m.html('<dd>'),
        ...getComment(ctx, getSignature.comment),
        m.html('</dd>'),
      )
    }

    if (setSignature) {
      result.push(
        m.html('<dt>'),
        m.paragraph([
          m.inlineCode(
            renderMemberSignature(setSignature, {
              hideName: false,
              arrowStyle: false,
            }),
          ),
        ]),
        m.html('</dt>'),
        m.html('<dd>'),
        ...getComment(ctx, setSignature.comment),
        m.html('</dd>'),
      )
    }

    if (!getSignature && !setSignature) {
      result.push(
        m.html('<dt>'),
        m.paragraph([m.inlineCode(model.name)]),
        m.html('</dt>'),
        m.html('<dd>'),
        ...getCommentSummary(ctx, model.comment),
        ...getDeclarationType(model, true),
        ...getCommentBlockTags(ctx, model.comment, { headingLevel: undefined }),
        m.html('</dd>'),
      )
    }

    return result
  }

  if (model.kind === ReflectionKind.Method) {
    return [
      m.html('<dt>'),
      m.paragraph([m.inlineCode(model.name)]),
      m.html('</dt>'),
      m.html('<dd>'),
      ...getComment(
        ctx,
        // TODO: handle multiple signatures
        model.signatures?.[0].comment,
        { headingLevel: undefined },
      ),
      ...getMethod(ctx, model),
      m.html('</dd>'),
    ]
  }

  if (model.kind === ReflectionKind.Constructor) {
    return [
      m.html('<dt>'),
      m.paragraph([m.inlineCode(model.name)]),
      m.html('</dt>'),
      m.html('<dd>'),
      ...getComment(ctx, model.comment, { headingLevel: undefined }),
      ...getConstructor(ctx, model),
      m.html('</dd>'),
    ]
  }

  if (model.kind === ReflectionKind.EnumMember) {
    const type = model.type
    const typeText = type ? renderType(type) : ''
    const nameWithType = typeText ? model.name + ' = ' + typeText : model.name

    return [
      m.html('<dt>'),
      m.paragraph([m.inlineCode(nameWithType)]),
      m.html('</dt>'),
      m.html('<dd>'),
      ...getComment(ctx, model.comment),
      m.html('</dd>'),
    ]
  }

  if (model.kind === ReflectionKind.Function) {
    return [
      m.heading(options.headingLevel, [
        m.text(model.name),
        ...m.anchor(model.anchor, { markdownHeadingId }),
      ]),
      ...getComment(ctx, model.comment),
      ...getFunction(ctx, model),
    ]
  }

  if (model.kind === ReflectionKind.TypeAlias) {
    return [
      m.heading(options.headingLevel, [
        m.text(model.name),
        ...m.anchor(model.anchor, { markdownHeadingId }),
      ]),
      ...getComment(ctx, model.comment, {
        headingLevel: m.getNextHeadingLevel(options.headingLevel),
      }),
      ...getDeclarationType(model, true),
      ...getDeclarationChildren(ctx, model, {
        headingLevel: m.getNextHeadingLevel(options.headingLevel),
      }),
    ]
  }

  if (model.kind === ReflectionKind.Variable) {
    return [
      m.heading(options.headingLevel, [
        m.text(model.name),
        ...m.anchor(model.anchor, { markdownHeadingId }),
      ]),
      ...getComment(ctx, model.comment, {
        headingLevel: m.getNextHeadingLevel(options.headingLevel),
      }),
      ...getDeclarationType(model, true),
    ]
  }

  if (model.kind === ReflectionKind.Interface) {
    return [
      m.heading(options.headingLevel, [
        m.text(model.name),
        ...m.anchor(model.anchor, { markdownHeadingId }),
      ]),

      ...getComment(ctx, model.comment, {
        headingLevel: m.getNextHeadingLevel(options.headingLevel),
      }),

      ...getDeclarationChildren(ctx, model, {
        headingLevel: m.getNextHeadingLevel(options.headingLevel),
      }),
    ]
  }

  if (model.kind === ReflectionKind.Class) {
    return [
      m.heading(options.headingLevel, [
        m.text(model.name),
        ...m.anchor(model.anchor, { markdownHeadingId }),
      ]),

      ...getHierarchy(ctx, model.typeHierarchy),

      ...getComment(ctx, model.comment, {
        headingLevel: m.getNextHeadingLevel(options.headingLevel),
      }),

      ...getDeclarationChildren(ctx, model, {
        headingLevel: m.getNextHeadingLevel(options.headingLevel),
      }),
    ]
  }

  if (model.kind === ReflectionKind.Enum) {
    return [
      m.heading(options.headingLevel, [
        m.text(model.name),
        ...m.anchor(model.anchor, { markdownHeadingId }),
      ]),

      ...getComment(ctx, model.comment, {
        headingLevel: m.getNextHeadingLevel(options.headingLevel),
      }),

      ...getDeclarationChildren(ctx, model, {
        headingLevel: m.getNextHeadingLevel(options.headingLevel),
      }),
    ]
  }

  return [
    m.heading(options.headingLevel, [
      m.text(model.name),
      ...m.anchor(model.anchor, { markdownHeadingId }),
    ]),
    m.comment(
      `Declaration kind ${model.kind} is not implemented (name: ${model.name})`,
    ),
  ]
}

function getDeclarationChildren(
  ctx: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: m.HeadingLevel },
): mdast.RootContent[] {
  const children = model.children || []
  if (children.length === 0) {
    return []
  }

  const content = children.flatMap((child) =>
    getDeclaration(ctx, child, options),
  )

  return [m.html('<dl>'), ...content, m.html('</dl>')]
}

function getPropertyType(model: DeclarationReflection): mdast.RootContent[] {
  let typeString = model.name

  const type = model.type

  if (model.flags.isOptional) {
    typeString += '?: '
  } else {
    typeString += ': '
  }

  if (!type) {
    typeString += 'unknown'
  } else {
    const isSignature =
      type.type === 'reflection' &&
      type.declaration.signatures?.length === 1 &&
      !type.declaration.children?.length
    typeString += isSignature
      ? renderMemberSignature(type.declaration.signatures![0], {
          hideName: true,
          arrowStyle: true,
        })
      : renderType(type)
  }

  return [m.paragraph([m.inlineCode(typeString)])]
}

function getDeclarationType(
  model: DeclarationReflection,
  preferSingleLine: boolean,
): mdast.RootContent[] {
  const type = model.type

  if (!type) {
    return []
  }

  const isSignature =
    type.type === 'reflection' &&
    type.declaration.signatures?.length === 1 &&
    !type.declaration.children?.length

  const typeString = isSignature
    ? renderMemberSignature(type.declaration.signatures![0], {
        hideName: true,
        arrowStyle: true,
      })
    : renderType(type)

  const isSingleLine = !typeString.includes('\n')

  if (isSingleLine && preferSingleLine) {
    return [
      m.paragraph([
        m.strong([m.text('Type')]),
        m.text(': '),
        m.inlineCode(typeString),
      ]),
    ]
  }
  return [m.paragraph([m.strong([m.text('Type')])]), m.code(typeString)]
}

function showHideMember(model: DeclarationReflection): boolean {
  const isParentClass = model.parent?.kind === ReflectionKind.Class
  const isInherited = !!model.inheritedFrom
  return isParentClass && isInherited
}
