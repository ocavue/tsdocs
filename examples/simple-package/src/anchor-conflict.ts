/**
 * See also {@link Fn1}
 */
export function fn1() {
  return 1
}

export function fn2() {
  return 2
}

/**
 * Implemented by {@link fn1}, {@link fn1_1}, {@link fn1_1_1} and {@link fn_x}
 */
export type Fn1 = () => number
export type Fn2 = () => number

export function fn1_1() {
  return 1
}

/**
 * See also {@link Fn1}
 */
export function fn1_2() {
  return 1
}

/**
 * See also {@link Fn1}
 */
export function fn1_1_1() {
  return 1
}

export function fn_x() {
  return 1
}
