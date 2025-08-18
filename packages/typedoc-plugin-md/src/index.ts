import {
  MarkdownRendererEvent,
  type MarkdownApplication,
  type PluginOptions,
} from 'typedoc-plugin-markdown'

import { TSDocsMarkdownTheme } from './markdown-theme'

export function load(app: MarkdownApplication) {
  // Define the markdown theme
  app.renderer.defineTheme('md-theme', TSDocsMarkdownTheme)

  app.renderer.on(MarkdownRendererEvent.BEGIN, () => {
    updateOptions(app)
  })
}

function updateOptions(app: MarkdownApplication) {
  if (app.options.getValue('theme') !== 'md-theme') {
    throw new Error(
      `[typedoc-plugin-md] You must set the "theme" option to "md-theme" in your typedoc config. Got ${JSON.stringify(app.options.getValue('theme'))}`,
    )
  }

  const markdownPluginOptions: PluginOptions = {
    hidePageHeader: true,
    hideBreadcrumbs: true,
    hidePageTitle: true,
    useCustomAnchors: true,
    useCodeBlocks: false,
  }

  for (const [key, value] of Object.entries(markdownPluginOptions)) {
    if (app.options.isSet(key)) {
      continue
    }
    app.options.setValue(key, value)
  }
}
