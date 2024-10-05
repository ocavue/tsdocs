/**
 * A simple variable.
 */
export const variable = 1

/**
 * A simple function.
 */
export function add(a: number, b: number): number {
  return a + b
}

/**
 * A simple interface.
 */
export interface Reader {
  /**
   * Reads a value.
   */
  read(): string
}

/**
 * An interface with a generic type parameter.
 */
export interface Writer<T> {
  /**
   * Writes a value.
   */
  write(value: T): void
}

export interface SimpleInterface {
  /**
   * A simple property.
   */
  property: string

  /**
   * A simple method.
   */
  method(): void

  /**
   * A simple method with a type parameter.
   */
  method2<T>(value: T): void

  /**
   * A simple property with a default tag.
   *
   * @default 123
   */
  withDefault?: number

  /**
   * A simple method with an example tag.
   *
   * @example
   *
   * ```ts
   * const a = 1
   * const b = 2
   * const c = a + b
   * ```
   *
   * @example
   *
   * ```ts
   * const a = 2
   * const b = 3
   * const c = a + b
   * ```
   */
  withExample?: number
}

/**
 * A simple class.
 */
export class SimpleReader implements Reader {
  /**
   * Reads a value from the reader.
   */
  read(): string {
    return 'Hello, world!'
  }
}

/**
 * A simple class with a type parameter.
 *
 * This class implements {@link Writer}.
 */
export class SimpleWriter<T> implements Writer<T> {
  /**
   * Writes a value to the writer.
   */
  write(value: T): void {
    throw new Error(`Method not implemented. ${value}`)
  }
}

/**
 * A simple enum.
 */
export enum SimpleEnum {
  Value1,
  Value2,
}

/**
 * A simple type.
 */
export type SimpleType = string | number

export * from './anchor-conflict'
