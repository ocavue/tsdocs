[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / sqrtArrowFunction

# Function: sqrtArrowFunction()

> **sqrtArrowFunction**(`x`): `number`

Defined in: [examples/example-typedoc/src/functions.ts:25](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/functions.ts#L25)

Calculates the square root of a number.

`sqrtArrowFunction` is defined using a variable declaration:

```
export const sqrtArrowFunction = (x: number): number => Math.sqrt(x);
```

TypeDoc is smart and documents `sqrtArrowFunction` as a function rather than a variable.

## Parameters

### x

`number`

the number do calculate the root of.

## Returns

`number`

the square root if `x` is non-negative or `NaN` if `x` is negative.
