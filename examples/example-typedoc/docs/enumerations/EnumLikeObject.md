[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / EnumLikeObject

# Enumeration: EnumLikeObject

Defined in: [examples/example-typedoc/src/enums.ts:51](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/enums.ts#L51)

Since TypeScript's `enum` can be inconvenient to work with, some packages define their own enum-like objects:

```
export const EnumLikeObject = {
    Pending: 'pending',
    InProgress: 'inProgress',
    Completed: 'completed'
} as const
```

Use the `@enum` tag to make TypeDoc document this object as an enum.

## Enumeration Members

### Pending

> **Pending**: `"pending"`

Defined in: [examples/example-typedoc/src/enums.ts:52](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/enums.ts#L52)

***

### InProgress

> **InProgress**: `"inProgress"`

Defined in: [examples/example-typedoc/src/enums.ts:55](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/enums.ts#L55)

Indicates that a courier is en route delivering this order.

***

### Completed

> **Completed**: `"completed"`

Defined in: [examples/example-typedoc/src/enums.ts:57](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/enums.ts#L57)
