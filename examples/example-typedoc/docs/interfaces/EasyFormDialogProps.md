[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / EasyFormDialogProps

# Interface: EasyFormDialogProps

Defined in: [examples/example-typedoc/src/reactComponents.tsx:85](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L85)

The props type of [\`EasyFormDialog\`](../functions/EasyFormDialog.md).

## Properties

### title

> **title**: `ReactNode`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:87](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L87)

The title of the dialog. Can be a JSX element.

***

### submitButtonText

> **submitButtonText**: `string`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:90](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L90)

The text of the submit button.

***

### submitButtonClass?

> `optional` **submitButtonClass**: `string`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:93](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L93)

The CSS class of the submit button.

***

### cancelButtonText?

> `optional` **cancelButtonText**: `string`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:96](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L96)

The text of the cancel button. Defaults to "Cancel".

***

### submitEnabled?

> `optional` **submitEnabled**: `boolean`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:105](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L105)

Allows you to disable the submit button even if `getSubmitEnabled()`
would return true.

This can be useful if you want to disable the submit button while a query
is in progress.

***

### formIsValid

> **formIsValid**: `boolean`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:108](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L108)

A boolean indicating if the form is valid.

***

### showValidation

> **showValidation**: `boolean`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:111](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L111)

A boolean indicating if validation feedback is being shown.

***

### closeRef?

> `optional` **closeRef**: `MutableRefObject`\<() => `void`\>

Defined in: [examples/example-typedoc/src/reactComponents.tsx:177](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L177)

This prop accepts a ref object that holds a function of type `() =>
void`. You can execute the function to programmatically close the dialog:

```
closeRef.current()
```

***

### modalClass?

> `optional` **modalClass**: `string`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:180](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L180)

The CSS class added to the underlying Bootstrap modal.

***

### focusFirst?

> `optional` **focusFirst**: `boolean`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:186](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L186)

Set to `false` to disable the default behavior of focusing the first
input.

***

### showFooter?

> `optional` **showFooter**: `boolean`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:192](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L192)

Set to `false` to hide the modal footer, which contains the submit and
cancel buttons.

## Methods

### onShowValidationChange()

> **onShowValidationChange**(`showValidation`): `void`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:114](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L114)

A callback that fires when the dialog is submitted.

#### Parameters

##### showValidation

`boolean`

#### Returns

`void`

***

### onSuccess()

> **onSuccess**(`payload`): `Promise`\<`void`\>

Defined in: [examples/example-typedoc/src/reactComponents.tsx:126](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L126)

A callback that fires after the `submit` function succeeds.

If the `submit` function returned `responseData`, it is passed to your
`onSuccess` function.

Your `onSuccess` callback must return a promise. The submit button will
continue showing a loading indicator until the promise resolves. This is
to support refetching the data that was updated by the form submission.

#### Parameters

##### payload

`unknown`

#### Returns

`Promise`\<`void`\>

***

### onClose()

> **onClose**(): `void`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:134](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L134)

A callback that fires when the dialog has completely closed. Your
`onClose` callback should update call, for example,
`setDialogVisible(false)` so that the `EasyFormDialog` is no longer
rendered.

#### Returns

`void`

***

### onSubmit()

> **onSubmit**(`formData`): `Promise`\<`void`\> \| `Promise`\<`undefined` \| \{ `shouldClose`: `boolean`; `responseData`: `unknown`; \}\>

Defined in: [examples/example-typedoc/src/reactComponents.tsx:154](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L154)

A callback that fires when the form is submitted. You will typically
perform an API call in your `submit` function.

Your `submit` function can optionally return an object in the shape

```
{
    shouldClose?: boolean
    responseData: unknown
}
```

Using `formData` is deprecated. Use controlled components instead.

`formData` will be `{}` if the optional peer dependency `jquery` is not
installed.

#### Parameters

##### formData

`Record`\<`string`, `string` \| `boolean`\>

#### Returns

`Promise`\<`void`\> \| `Promise`\<`undefined` \| \{ `shouldClose`: `boolean`; `responseData`: `unknown`; \}\>

***

### onCancel()?

> `optional` **onCancel**(): `void`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:167](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L167)

An uncommonly-used callback that fires when the user clicks the cancel button.

#### Returns

`void`
