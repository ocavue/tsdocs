import { Application, type TypeDocOptions } from 'typedoc'
import {
  type MarkdownApplication,
  type PluginOptions,
} from 'typedoc-plugin-markdown'

import { TSDocsMarkdownTheme } from './markdown-theme'

export function load(app: MarkdownApplication) {
  // Define the markdown theme
  app.renderer.defineTheme('md-theme', TSDocsMarkdownTheme)

  app.on(Application.EVENT_BOOTSTRAP_END, (app) => {
    updateOptions(app)
  })
}

function updateOptions(app: Application) {
  const markdownPluginOptions: PluginOptions = {
    hidePageHeader: true,
    hideBreadcrumbs: true,
    // hidePageTitle: true,
    useCustomAnchors: true,
    useCodeBlocks: false,
  }

  const typedocOptions: TypeDocOptions = {
    router: 'module',
    readme: 'none',
    theme: 'md-theme',
    disableSources: true,
  }

  for (const [key, value] of Object.entries({
    ...markdownPluginOptions,
    ...typedocOptions,
  })) {
    if (app.options.isSet(key)) {
      continue
    }
    app.options.setValue(key, value)
  }
}
