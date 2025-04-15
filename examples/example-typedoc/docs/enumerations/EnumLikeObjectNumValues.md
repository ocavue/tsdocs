[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / EnumLikeObjectNumValues

# Enumeration: EnumLikeObjectNumValues

Defined in: [examples/example-typedoc/src/enums.ts:75](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/enums.ts#L75)

Since TypeScript's `enum` can be inconvenient to work with, some packages define their own enum-like objects:

```
export const EnumLikeObjectNumValues = {
    Pending: 1,
    InProgress: 2,
    Completed: 3
} as const
```

Use the `@enum` tag to make TypeDoc document this object as an enum.

## Enumeration Members

### Pending

> **Pending**: `1`

Defined in: [examples/example-typedoc/src/enums.ts:76](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/enums.ts#L76)

***

### InProgress

> **InProgress**: `2`

Defined in: [examples/example-typedoc/src/enums.ts:79](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/enums.ts#L79)

Indicates that a courier is en route delivering this order.

***

### Completed

> **Completed**: `3`

Defined in: [examples/example-typedoc/src/enums.ts:81](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/enums.ts#L81)
