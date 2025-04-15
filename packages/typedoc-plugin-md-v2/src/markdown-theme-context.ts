import { MarkdownThemeContext } from 'typedoc-plugin-markdown'

export class MyMarkdownThemeContext extends MarkdownThemeContext {
  constructor(...args: ConstructorParameters<typeof MarkdownThemeContext>) {
    super(...args)

    const partials = { ...this.partials }

    this.partials.signatureTitle = (...args) => {
      const result = partials.signatureTitle(...args)
      return `<!-- DEBUG_signatureTitle -->` + '\n\n' + result
    }
  }
}
