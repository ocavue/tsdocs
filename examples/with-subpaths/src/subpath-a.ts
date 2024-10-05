import type { InterfaceC } from './deep/subpath-c'

/**
 * {@link InterfaceC} An optional object.
 */
export function fnA(options?: InterfaceC) {
  options?.fn()
}
