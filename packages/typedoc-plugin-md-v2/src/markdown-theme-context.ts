import { MarkdownThemeContext } from 'typedoc-plugin-markdown'

import { partials } from './theme/context'

export class MyMarkdownThemeContext extends MarkdownThemeContext {
  constructor(...args: ConstructorParameters<typeof MarkdownThemeContext>) {
    super(...args)

    const originalPartials = { ...this.partials }

    this.partials.signatureTitle = (...args) => {
      const result = originalPartials.signatureTitle(...args)
      return `<!-- DEBUG_signatureTitle -->` + '\n\n' + result
    }

    this.partials.signature = (...args) => partials.signature.apply(this, args)
    this.partials.parametersList = (...args) =>
      partials.parametersList.apply(this, args)
  }
}
