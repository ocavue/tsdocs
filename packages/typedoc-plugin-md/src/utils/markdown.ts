import type { PhrasingContent, Root, RootContent } from 'mdast'
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
