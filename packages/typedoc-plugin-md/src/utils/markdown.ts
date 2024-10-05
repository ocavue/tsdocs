import type {
  PhrasingContent,
  Root,
  RootContent,
  Node,
  Parent,
  Literal,
} from 'mdast'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import { unified } from 'unified'

const stringifyProcessor = unified().use(remarkStringify)

export function stringify(root: Root): string {
  return stringifyProcessor.stringify(root).toString()
}

export function stringifyPhrasingContent(content: PhrasingContent): string {
  return stringify({ type: 'root', children: [content] }).trim()
}

const parseProcessor = unified().use(remarkParse)

export function parse(markdown: string): Root {
  const root = parseProcessor.parse(markdown)
  if (root.type !== 'root') {
    throw new Error(`Unexpected markdown parse result: ${JSON.stringify(root)}`)
  }
  return root
}

export function parseRootContent(markdown: string): RootContent[] {
  const root = parse(markdown)
  return root.children
}

export function extractValue(node: Node): string {
  if (isLiteral(node)) {
    return node.value
  }
  if (isParent(node)) {
    return node.children.map(extractValue).join('')
  }
  return ''
}

export function isParent(node: Node): node is Parent {
  return 'children' in node
}

export function isLiteral(node: Node): node is Literal {
  return 'value' in node
}
