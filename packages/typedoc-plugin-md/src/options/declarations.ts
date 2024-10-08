/**
 * Typedoc options declarations.
 *
 * This will be exposed to TypeDoc as a new option when bootstrapping the plugin, with the name of the option the name of the exported variable.
 *
 * @module
 */
import { type DeclarationOption, ParameterType } from 'typedoc'

/**
 * This option should be used when parsers require a custom anchor prefix.
 *
 * @example "markdown-header"
 */
export const anchorPrefix: DeclarationOption = {
  name: 'anchorPrefix',
  help: 'Custom anchor prefix when anchoring to in-page symbols.',
  type: ParameterType.String,
  defaultValue: undefined,
}

/**
 * The `entryFileName` in this context is the root page of the documentation and each module directory.
 * This is essentially the equivalent to `index.html` for web pages.
 *
 * `README` is recognized when browsing folders on repos and Wikis and is the plugin default. `index` might be more suitable for static site generators.
 *
 * @example "index"
 *
 * @default "README"
 *
 */
export const entryFileName: DeclarationOption = {
  name: 'entryFileName',
  help: 'The file name of the entry page.',
  type: ParameterType.String,
  defaultValue: 'README',
}

/**
 * Typically Markdown files are recognized by the `.md` or `.markdown` file extensions.`.mdx` maybe required for compatibility with certain Markdown parsers.
 *
 * @example ".mdx"
 *
 * @default ".md"
 */
export const fileExtension: DeclarationOption = {
  name: 'fileExtension',
  help: 'Specify the file extension for generated output files.',
  type: ParameterType.String,
  defaultValue: '.md',
  validate(value) {
    if (!value.startsWith('.')) {
      throw new Error(
        '[typedoc-plugin-markdown] "fileExtension" must start with a period.',
      )
    }
  },
}

/**
 * By default anchor links are generated as an `<a>` HTML element.
 *
 * This option can be used for generating anchor links in markdown heading id
 * syntax like {#custom-id}. This syntax is not supported by CommonMark and
 * GitHub Flavored Markdown, but is supported by Docusaurus and VitePress.
 *
 * @default false
 */
export const markdownHeadingId: DeclarationOption = {
  name: 'markdownHeadingId',
  help: 'Use custom markdown heading id syntax like {#custom-id}.',
  type: ParameterType.Boolean,
  defaultValue: false,
}
