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
