import type { PluginOptions } from './options'

declare module 'typedoc' {
  export interface TypeDocOptionMap extends PluginOptions {}
}
