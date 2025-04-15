import type * as ast from 'mdast'

export function root(children: ast.RootContent[]): ast.Root {
  return {
    type: 'root',
    children,
  }
}

export function paragraph(children: ast.PhrasingContent[]): ast.Paragraph {
  return {
    type: 'paragraph',
    children,
  }
}

export function text(value: string): ast.Text {
  return {
    type: 'text',
    value,
  }
}

export function heading(
  level: HeadingLevel,
  children: ast.PhrasingContent[],
): ast.Heading {
  return {
    type: 'heading',
    depth: level,
    children,
  }
}

export function anchor(
  anchor?: string,
  options?: {
    markdownHeadingId?: boolean
  },
): ast.PhrasingContent[] {
  const id = (anchor || '').replace(/^#/, '')

  if (!id) {
    return []
  }

  if (options?.markdownHeadingId) {
    return [text(' '), html(`{#${id}}`)]
  }

  return [text(' '), html(`<a id="${id}" href="#${id}">#</a>`)]
}

export function html(value: string): ast.Html {
  return {
    type: 'html',
    value,
  }
}

export function comment(value: string): ast.Html {
  return html(`<!-- ${value} -->`)
}

export function link(
  attrs: ast.Resource,
  children: ast.PhrasingContent[],
): ast.Link {
  return { type: 'link', ...attrs, children }
}

export function autolink(url: string): ast.Link {
  return link({ url, title: null }, [text(url)])
}

export function inlineCode(value: string): ast.InlineCode {
  return { type: 'inlineCode', value }
}

export function strong(children: ast.PhrasingContent[]): ast.Strong {
  return { type: 'strong', children }
}

export function code(value: string): ast.Code
export function code(
  attrs: { lang?: string | null | undefined; meta?: string | null | undefined },
  value: string,
): ast.Code
export function code(
  ...args: Array<
    | { lang?: string | null | undefined; meta?: string | null | undefined }
    | string
  >
): ast.Code {
  const node: ast.Code = {
    type: 'code',
    value: '',
  }

  for (const arg of args) {
    if (arg && typeof arg === 'string') {
      node.value = arg
    } else if (arg && typeof arg === 'object') {
      Object.assign(node, arg)
    }
  }

  return node
}

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export function getNextHeadingLevel(level: HeadingLevel): HeadingLevel {
  switch (level) {
    case 1:
      return 2
    case 2:
      return 3
    case 3:
      return 4
    case 4:
      return 5
    default:
      return 6
  }
}
