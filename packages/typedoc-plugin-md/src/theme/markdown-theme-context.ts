import * as path from 'node:path'

import type { Options, PageEvent, Reflection } from 'typedoc'

export class MarkdownThemeContext {
  constructor(
    /**
     * The current page event.
     */
    readonly page: PageEvent<Reflection>,
    /**
     * The options provided to the application.
     */
    readonly options: Options,
  ) {}

  /**
   * Returns the relative URL (from the current page context url).
   *
   * If public path is set, it will be used as the base URL.
   *
   * @param url - The URL to make relative.
   */
  getRelativeUrl(url: string) {
    const URL_PREFIX = /^(http|ftp)s?:\/\//

    if (URL_PREFIX.test(url)) {
      return url
    }

    const baseUrl = path.relative(
      path.dirname(this.page?.url || '.'),
      path.dirname(url),
    )

    const relativeUrl = path
      .join(baseUrl, path.basename(url))
      .replace(/\\/g, '/')

    return encodeURI(relativeUrl)
  }
}
