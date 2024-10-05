/**
 * Describes the options declared by the plugin.
 */
export interface PluginOptions {
  /**
   * Custom anchor prefix when anchoring to in-page symbols.
   */
  anchorPrefix: string

  /**
   * The file name of the entry page.
   */
  entryFileName: string

  /**
   * Specify the file extension for generated output files.
   */
  fileExtension: string

  /**
   * Preserve anchor casing when generating link to symbols.
   */
  preserveAnchorCasing: boolean
}
