import type * as mdast from 'mdast'
import { ReflectionKind, type DeclarationReflection } from 'typedoc'

import type { MarkdownThemeContext } from '../theme/markdown-theme-context'
import * as m from '../utils/mdast'

import { getComment } from './comment'
import { getCommentBlockTags } from './comment-block-tags'
import { getCommentSummary } from './comment-summary'
import { getConstructor } from './constructor'
import { getFunction } from './function'
import { getMethod } from './method'
import { formatSomeType, getType } from './type'

export function getDeclaration(
  ctx: MarkdownThemeContext,
  model: DeclarationReflection,
  options: { headingLevel: m.HeadingLevel },
): mdast.RootContent[] {
  const markdownHeadingId = ctx.options.getValue('markdownHeadingId')

  if (model.kind === ReflectionKind.Property) {
    return [
      m.html('<dt>'),
      m.paragraph([m.inlineCode(model.name)]),
      m.html('</dt>'),
      m.html('<dd>'),
      ...getCommentSummary(ctx, model.comment),
      ...getDeclarationType(model, true),
      ...getCommentBlockTags(ctx, model.comment, { headingLevel: undefined }),
      m.html('</dd>'),
    ]
  }

  if (model.kind === ReflectionKind.Accessor) {
    return [
      m.html('<dt>'),
      m.paragraph([m.inlineCode(model.name)]),
      m.html('</dt>'),
      m.html('<dd>'),
      ...getCommentSummary(ctx, model.comment),
      ...getDeclarationType(model, true),
      ...getCommentBlockTags(ctx, model.comment, { headingLevel: undefined }),
      m.html('</dd>'),
    ]
  }

  if (model.kind === ReflectionKind.Method) {
    return [
      m.html('<dt>'),
      m.paragraph([m.inlineCode(model.name)]),
      m.html('</dt>'),
      m.html('<dd>'),
      ...getComment(ctx, model.comment, { headingLevel: undefined }),
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
    const typeText = type ? formatSomeType(type) : ''
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

function getDeclarationType(
  model: DeclarationReflection,
  preferSingleLine: boolean,
): mdast.RootContent[] {
  const type =
    model.getSignature?.type || model.setSignature?.type || model.type

  return getType(type, preferSingleLine)
}
