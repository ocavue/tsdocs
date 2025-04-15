[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / User

# Interface: User

Defined in: [examples/example-typedoc/src/types.ts:17](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/types.ts#L17)

A simple interface. Each property has its own doc comment.

TypeDoc even supports doc comments on nested type definitions, as shown by the `name` property.

## Extended by

- [`AdminUser`](AdminUser.md)

## Properties

### id

> **id**: `number`

Defined in: [examples/example-typedoc/src/types.ts:19](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/types.ts#L19)

The user's ID.

***

### email

> **email**: `string`

Defined in: [examples/example-typedoc/src/types.ts:22](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/types.ts#L22)

The user's email address.

***

### name

> **name**: `object`

Defined in: [examples/example-typedoc/src/types.ts:25](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/types.ts#L25)

The user's name.

#### first

> **first**: `string`

The person's given name.

#### last

> **last**: `string`

The person's family name.
