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
 * By default references to symbol anchor links are lowercased.
 *
 * This option can be used for engines that require the preservation of anchor link casing.
 *
 * @default false
 */
export const preserveAnchorCasing: DeclarationOption = {
  name: 'preserveAnchorCasing',
  help: 'Preserve anchor casing when generating link to symbols.',
  type: ParameterType.Boolean,
  defaultValue: false,
}
