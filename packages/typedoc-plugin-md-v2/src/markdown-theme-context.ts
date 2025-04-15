import { MarkdownThemeContext } from 'typedoc-plugin-markdown'

export class MyMarkdownThemeContext extends MarkdownThemeContext {
  constructor(...args: ConstructorParameters<typeof MarkdownThemeContext>) {
    super(...args)
  }
}
