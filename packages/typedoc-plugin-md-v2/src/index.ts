/**
 * The plugin entrypoint and bootstrapping of the plugin.
 *
 * @module
 */
import type { Application, Renderer } from 'typedoc'

import { declarations } from './options'
import { MarkdownTheme } from './theme'

/**
 * The function that is called by TypeDoc to bootstrap the plugin.
 *
 * Here we expose additional TypeDoc options and make some adjustments.
 *
 * This method is not intended to be consumed in any other context that via the `plugin` option.
 *
 * @see https://typedoc.org/guides/development/#plugins.
 */
export function load(app: Application) {
  for (const declaration of Object.values(declarations)) {
    app.options.addDeclaration(declaration)
  }

  /**
   * Replace the default HTML theme the with the MarkdownTheme
   */
  Object.defineProperty(app.renderer, 'themes', {
    value: new Map<string, new (renderer: Renderer) => MarkdownTheme>([
      ['default', MarkdownTheme],
    ]),
  })
}
