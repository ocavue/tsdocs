import type { MarkdownApplication } from 'typedoc-plugin-markdown'

export function load(app: MarkdownApplication) {
  console.log('[typedoc-plugin-md-v2] load 1:', app)

  app.renderer.markdownHooks.on(
    'page.begin',
    () => `**Generated using \`page.begin\` hook**`,
  )

  app.renderer.markdownHooks.on(
    'page.end',
    () => `**Generated using \`page.end\` hook**`,
  )

  app.renderer.markdownHooks.on(
    'content.begin',
    () => `**Generated using \`content.begin\` hook**`,
  )

  app.renderer.markdownHooks.on(
    'index.page.begin',
    () => `**Generated using \`index.page.begin\` hook**`,
  )

  app.renderer.markdownHooks.on(
    'index.page.end',
    () => `**Generated using \`index.page.end\` hook**`,
  )
}
