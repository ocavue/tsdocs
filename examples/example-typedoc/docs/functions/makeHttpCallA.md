[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / makeHttpCallA

# Function: makeHttpCallA()

> **makeHttpCallA**(`options`): `Promise`\<`Response`\>

Defined in: [examples/example-typedoc/src/functions.ts:65](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/functions.ts#L65)

A function that takes in an options object that is defined as a separate
interface and makes an HTTP call.

**Make sure to export the options type when using this pattern.** Otherwise,
TypeDoc will not document the options.

## Parameters

### options

[`MakeHttpCallAOptions`](../interfaces/MakeHttpCallAOptions.md)

## Returns

`Promise`\<`Response`\>
