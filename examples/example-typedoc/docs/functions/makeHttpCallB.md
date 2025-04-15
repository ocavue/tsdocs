[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / makeHttpCallB

# Function: makeHttpCallB()

> **makeHttpCallB**(`options`): `Promise`\<`Response`\>

Defined in: [examples/example-typedoc/src/functions.ts:78](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/functions.ts#L78)

A function that takes in an options object and makes an HTTP call.

The options type is written directly in the function definition.

## Parameters

### options

#### url

`string`

#### method

`string`

e.g. GET, POST, PUT, DELETE

#### headers

`Record`\<`string`, `string`\>

e.g. `{ 'Authorization': 'Bearer <access token>' }`

#### body

`string` \| `Blob` \| `FormData`

#### mode

`"cors"` \| `"no-cors"` \| `"same-origin"`

## Returns

`Promise`\<`Response`\>
