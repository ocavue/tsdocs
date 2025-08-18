import { type MarkdownApplication } from 'typedoc-plugin-markdown'

import { TSDocsMarkdownTheme } from './markdown-theme'

export function load(app: MarkdownApplication) {
  // Define the markdown theme
  app.renderer.defineTheme('tsdocs-markdown-theme', TSDocsMarkdownTheme)
}
