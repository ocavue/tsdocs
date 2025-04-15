**Generated using `index.page.begin` hook**

**TypeDoc Example**

***

https://github.com/TypeStrong/typedoc/tree/v0.28.2/example

**Generated using `content.begin` hook**

## Collection

### lodashSortBy()

#### Call Signature

<!-- DEBUG_signatureTitle -->

> **lodashSortBy**\<`T`\>(`collection`: `undefined` \| `null` \| `List`\<`T`\>, ...`iteratees?`: `Many`\<`ListIteratee`\<`T`\>\>[]): `T`[]

Defined in: node\_modules/.pnpm/@types+lodash@4.17.16/node\_modules/@types/lodash/common/collection.d.ts:1908

Creates an array of elements, sorted in ascending order by the results of
running each element in a collection through each iteratee. This method
performs a stable sort, that is, it preserves the original sort order of
equal elements. The iteratees are invoked with one argument: (value).

##### Type Parameters

###### T

`T`

<dl>

<dt>

##### Parameters

</dt>

<dd>

<dl>

<dt>

###### collection

</dt>

<dd data-debug-parm-list>

The collection to iterate over.

`undefined` | `null` | `List`\<`T`\>

</dd>

</dl>

<dt>

###### iteratees?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

...`Many`\<`ListIteratee`\<`T`\>\>[]

The iteratees to sort by, specified individually or in arrays.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

##### Returns

`T`[]

Returns the new sorted array.

##### Example

```ts
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 34 }
];

_.sortBy(users, function(o) { return o.user; });
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]

_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]

_.sortBy(users, 'user', function(o) {
  return Math.floor(o.age / 10);
});
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
```

#### Call Signature

<!-- DEBUG_signatureTitle -->

> **lodashSortBy**\<`T`\>(`collection`: `undefined` \| `null` \| `T`, ...`iteratees`: `Many`\<`ObjectIteratee`\<`T`\>\>[]): `T`\[keyof `T`\][]

Defined in: node\_modules/.pnpm/@types+lodash@4.17.16/node\_modules/@types/lodash/common/collection.d.ts:1912

##### Type Parameters

###### T

`T` *extends* `object`

<dl>

<dt>

##### Parameters

</dt>

<dd>

<dl>

<dt>

###### collection

</dt>

<dd data-debug-parm-list>

`undefined` | `null` | `T`

</dd>

</dl>

<dt>

###### iteratees

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

...`Many`\<`ObjectIteratee`\<`T`\>\>[]

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

##### Returns

`T`\[keyof `T`\][]

##### See

_.sortBy

## Component

React Components -- This description is added with the `@categoryDescription` tag
on the entry point in src/index.ts

### CardA()

<!-- DEBUG_signatureTitle -->

> **CardA**(`__namedParameters`: `PropsWithChildren`\<[`CardAProps`](#cardaprops)\>): `ReactElement`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:42](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L42)

Renders a card around some content.

```tsx
<CardA variant="secondary">
    <h5>My Title</h5>
    <p>My content</p>
</CardA>
```

The props type is defined as a separate interface **which must be exported!**

```
export interface CardAProps {
    // ...
}

export function CardA({
    children,
    variant = "primary",
}: PropsWithChildren<CardAProps>): ReactElement {
    // ...
}
```

This is our recommended way to define React components as it makes your code
more readable. The minor drawback is you must click the `CardAProps` link to
see the component's props.

<dl>

<dt>

#### Parameters

</dt>

<dd>

<dl>

<dt>

##### \_\_namedParameters

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`PropsWithChildren`\<[`CardAProps`](#cardaprops)\>

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

#### Returns

`ReactElement`

***

### CardB()

<!-- DEBUG_signatureTitle -->

> **CardB**(`__namedParameters`: `PropsWithChildren`\<\{ `variant`: `"primary"` \| `"secondary"` \| `"success"` \| `"danger"` \| `"light"` \| `"dark"`; \}\>): `ReactElement`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:74](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L74)

Renders a card around some content.

```tsx
<CardB variant="secondary">
    <h5>My Title</h5>
    <p>My content</p>
</CardB>
```

The props type is written directly in the function definition:

```
export function CardB({
    children,
    variant = "primary",
}: PropsWithChildren<{
    variant: "primary" | "secondary" | "success" | "danger" | "light" | "dark";
}>): ReactElement {
    // ...
}
```

This can make the TypeDoc documentation a bit cleaner for very simple components,
but it makes your code less readable.

<dl>

<dt>

#### Parameters

</dt>

<dd>

<dl>

<dt>

##### \_\_namedParameters

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`PropsWithChildren`\<\{ `variant`: `"primary"` \| `"secondary"` \| `"success"` \| `"danger"` \| `"light"` \| `"dark"`; \}\>

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

#### Returns

`ReactElement`

***

### EasyFormDialog()

<!-- DEBUG_signatureTitle -->

> **EasyFormDialog**(`props`: `PropsWithChildren`\<[`EasyFormDialogProps`](#easyformdialogprops)\>): `ReactElement`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:254](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L254)

An example of a complex React component.

A wrapper around `ActionDialog` that removes a lot of the boilerplate needed
for dialogs that contain a form.

```tsx
interface ExampleProps {
    onSuccess(responseData: number): Promise<void>
    onClose(): void
}

export function Example({
    onSuccess,
    onClose,
}: ExampleProps): ReactElement {
    const { onChildValidChange, allFieldsValid } = useFieldValidity()
    const [showValidation, setShowValidation] = useState(false)
    const vProps = { showValidation, onValidChange: onChildValidChange }

    const [myNumber, setMyNumber] = useState('')

    async function submit() {
        await api.product.performOperation()

        return {
            responseData: parseInt(myNumber),
        }
    }

    return (
        <EasyFormDialog
            title="Enter a Number"
            submitButtonText="Submit"
            formIsValid={allFieldsValid}
            showValidation={showValidation}
            onShowValidationChange={setShowValidation}
            onSubmit={submit}
            onSuccess={onSuccess}
            onClose={onClose}
        >
            <FormGroup label="My number">
                {(id) => (
                    <ValidatedInput
                        id={id}
                        name="myNumber"
                        validators={[Validators.required(), Validators.integer()]}
                        value={myNumber}
                        onChange={setMyNumber}
                        {...vProps}
                    />
                )}
            </FormGroup>
        </EasyFormDialog>
    )
}
```

<dl>

<dt>

#### Parameters

</dt>

<dd>

<dl>

<dt>

##### props

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`PropsWithChildren`\<[`EasyFormDialogProps`](#easyformdialogprops)\>

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

#### Returns

`ReactElement`

## Documents

- [External Markdown](documents/External-Markdown.md)
- [Markdown Showcase](documents/Markdown-Showcase.md)
- [Syntax Highlighting](documents/Syntax-Highlighting.md)
- [Include and Include Code](documents/Include-and-Include-Code.md)

## Model

### `abstract` Customer

Defined in: [examples/example-typedoc/src/classes/Customer.ts:8](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L8)

An abstract base class for the customer entity in our application.

Notice how TypeDoc shows the inheritance hierarchy for our class.

#### Extended by

- [`DeliveryCustomer`](#deliverycustomer)
- [`WalkInCustomer`](#walkincustomer)

#### Constructors

##### Constructor

<!-- DEBUG_signatureTitle -->

> **new Customer**(`id`: `number`, `name`: `string`, `nextOrderNumber`: `string` \| `number`): [`Customer`](#customer)

Defined in: [examples/example-typedoc/src/classes/Customer.ts:48](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L48)

The constructor of the `Customer` class.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### id

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

the customer's database ID

</dl>

</dd>

</dl>

<dt>

###### name

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

the customer's name

</dl>

</dd>

</dl>

<dt>

###### nextOrderNumber

</dt>

<dd data-debug-parm-list>

the next number to use when this customer places an order

`string` | `number`

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`Customer`](#customer)

#### Properties

##### id

> `readonly` **id**: `number`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:10](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L10)

A public readonly property.

##### name

> **name**: `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:13](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L13)

A public property that can be reassigned.

##### contactName?

> `protected` `optional` **contactName**: `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:16](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L16)

An optional protected property.

#### Accessors

##### nextOrderNumber

###### Get Signature

<!-- DEBUG_signatureTitle -->

> **get** **nextOrderNumber**(): `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:25](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L25)

A getter that prepends a number sign to the private `_nextOrderNumber`
property.

###### Returns

`string`

###### Set Signature

<!-- DEBUG_signatureTitle -->

> **set** **nextOrderNumber**(`value`: `string` \| `number`): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:33](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L33)

A setter that takes in either a string or a number and sets the private
`_nextOrderNumber` property.

###### Parameters

<dl>

<dt>

###### value

</dt>

<dd data-debug-parm-list>

`string` | `number`

</dd>

</dl>

</dl>

###### Returns

`void`

#### Methods

##### onOrderPlaced()

<!-- DEBUG_signatureTitle -->

> **onOrderPlaced**(): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:56](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L56)

A public method. To be called when an order is placed for this customer.

###### Returns

`void`

##### onOrderPlacedArrowFunction()

<!-- DEBUG_signatureTitle -->

> **onOrderPlacedArrowFunction**(): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:65](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L65)

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

###### Returns

`void`

##### isValid()

<!-- DEBUG_signatureTitle -->

> `protected` **isValid**(): `boolean`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:70](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L70)

A protected method.

###### Returns

`boolean`

## Other

### CancellablePromise\<T\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:52](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L52)

This example shows off how TypeDoc handles

- Complex method signatures
- Static methods
- A method with 10 overload signatures. Wow!
    - Only the implementation signature has a doc comment. TypeDoc
      automatically copies the comment from the implementation signature to
      each of the visible signatures if they don't have one.

A promise with a `cancel` method.  If canceled, the `CancellablePromise` will
reject with a `Cancellation` object. Originally from
[real-cancellable-promise](https://github.com/srmagura/real-cancellable-promise).

#### Type Parameters

##### T

`T`

what the `CancellablePromise` resolves to

#### Constructors

##### Constructor

<!-- DEBUG_signatureTitle -->

> **new CancellablePromise**\<`T`\>(`promise`: `PromiseLike`\<`T`\>, `cancel`: (`reason?`: `string`) => `void`): [`CancellablePromise`](#cancellablepromise)\<`T`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:76](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L76)

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### promise

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`PromiseLike`\<`T`\>

a normal promise or thenable

</dl>

</dd>

</dl>

<dt>

###### cancel

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`reason?`: `string`) => `void`

</dl>

<dl data-debug-parm-list-5>

a function that cancels `promise`. **Calling `cancel` after
`promise` has resolved must be a no-op.**

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`T`\>

#### Properties

##### promise

> `protected` `readonly` **promise**: `Promise`\<`T`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:60](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L60)

As a consumer of the library, you shouldn't ever need to access
`CancellablePromise.promise` directly.

If you are subclassing `CancellablePromise` for some reason, you
can access this property.

##### cancel()

> `readonly` **cancel**: (`reason?`: `string`) => `void`

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:69](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L69)

Cancel the `CancellablePromise`.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### reason?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`void`

#### Methods

Descriptions can be added for groups with `@groupDescription`, which will show up in
the index where groups are listed. This works for both manually created groups which
are created with `@group`, and implicit groups like the `Methods` group that this
description is attached to.

##### then()

<!-- DEBUG_signatureTitle -->

> **then**\<`TResult1`, `TResult2`\>(`onFulfilled?`: `null` \| (`value`: `T`) => `TResult1` \| `PromiseLike`\<`TResult1`\>, `onRejected?`: `null` \| (`reason`: `any`) => `TResult2` \| `PromiseLike`\<`TResult2`\>): [`CancellablePromise`](#cancellablepromise)\<`TResult1` \| `TResult2`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:101](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L101)

Analogous to `Promise.then`.

`onFulfilled` on `onRejected` can return a value, a normal promise, or a
`CancellablePromise`. So you can make a chain a `CancellablePromise`s
like this:

```
const overallPromise = cancellableAsyncFunction1()
    .then(cancellableAsyncFunction2)
    .then(cancellableAsyncFunction3)
    .then(cancellableAsyncFunction4)
```

Then if you call `overallPromise.cancel`, `cancel` is called on all
`CancellablePromise`s in the chain! In practice, this means that
whichever async operation is in progress will be canceled.

###### Type Parameters

###### TResult1

`TResult1` = `T`

###### TResult2

`TResult2` = `never`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### onFulfilled?

</dt>

<dd data-debug-parm-list>

`null` | (`value`: `T`) => `TResult1` \| `PromiseLike`\<`TResult1`\>

</dd>

</dl>

<dt>

###### onRejected?

</dt>

<dd data-debug-parm-list>

`null` | (`reason`: `any`) => `TResult2` \| `PromiseLike`\<`TResult2`\>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`TResult1` \| `TResult2`\>

a new CancellablePromise

##### catch()

<!-- DEBUG_signatureTitle -->

> **catch**\<`TResult`\>(`onRejected?`: `null` \| (`reason`: `any`) => `TResult` \| `PromiseLike`\<`TResult`\>): [`CancellablePromise`](#cancellablepromise)\<`T` \| `TResult`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:152](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L152)

Analogous to `Promise.catch`.

###### Type Parameters

###### TResult

`TResult` = `never`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### onRejected?

</dt>

<dd data-debug-parm-list>

`null` | (`reason`: `any`) => `TResult` \| `PromiseLike`\<`TResult`\>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`T` \| `TResult`\>

##### finally()

<!-- DEBUG_signatureTitle -->

> **finally**(`onFinally?`: `null` \| () => `void`): [`CancellablePromise`](#cancellablepromise)\<`T`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:169](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L169)

Attaches a callback that is invoked when the Promise is settled
(fulfilled or rejected). The resolved value cannot be modified from the
callback.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### onFinally?

</dt>

<dd data-debug-parm-list>

The callback to execute when the Promise is settled
(fulfilled or rejected).

`null` | () => `void`

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`T`\>

A Promise for the completion of the callback.

##### resolve()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **resolve**(): [`CancellablePromise`](#cancellablepromise)\<`void`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:185](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L185)

Analogous to `Promise.resolve`.

The returned promise should resolve even if it is canceled. The idea is
that the promise is resolved instantaneously, so by the time the promise
is canceled, it has already resolved.

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`void`\>

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **resolve**\<`T`\>(`value`: `T`): [`CancellablePromise`](#cancellablepromise)\<`T`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:187](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L187)

Analogous to `Promise.resolve`.

The returned promise should resolve even if it is canceled. The idea is
that the promise is resolved instantaneously, so by the time the promise
is canceled, it has already resolved.

###### Type Parameters

###### T

`T`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### value

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`T`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`T`\>

##### reject()

<!-- DEBUG_signatureTitle -->

> `static` **reject**\<`T`\>(`reason?`: `unknown`): [`CancellablePromise`](#cancellablepromise)\<`T`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:201](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L201)

Analogous to `Promise.reject`.

Like `CancellablePromise.resolve`, canceling the returned
`CancellablePromise` is a no-op.

###### Type Parameters

###### T

`T`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### reason?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`unknown`

this should probably be an `Error` object

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`T`\>

##### all()

Analogous to `Promise.all`.

###### Param

an array that may contain `CancellablePromise`s, promises,
thenables, and resolved values

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\>(`values`: readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>, `T9` \| `PromiseLike`\<`T9`\>, `T10` \| `PromiseLike`\<`T10`\>\]): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:205](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L205)

###### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

###### T6

`T6`

###### T7

`T7`

###### T8

`T8`

###### T9

`T9`

###### T10

`T10`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### values

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>, `T9` \| `PromiseLike`\<`T9`\>, `T10` \| `PromiseLike`\<`T10`\>\]

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\]\>

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\>(`values`: readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>, `T9` \| `PromiseLike`\<`T9`\>\]): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:220](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L220)

###### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

###### T6

`T6`

###### T7

`T7`

###### T8

`T8`

###### T9

`T9`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### values

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>, `T9` \| `PromiseLike`\<`T9`\>\]

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\]\>

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\>(`values`: readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>\]): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:234](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L234)

###### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

###### T6

`T6`

###### T7

`T7`

###### T8

`T8`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### values

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>\]

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\]\>

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\>(`values`: readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>\]): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:247](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L247)

###### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

###### T6

`T6`

###### T7

`T7`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### values

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>\]

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\]\>

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\>(`values`: readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>\]): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:259](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L259)

###### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

###### T6

`T6`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### values

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>\]

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\]\>

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`\>(`values`: readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>\]): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:270](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L270)

###### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### T5

`T5`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### values

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>\]

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`\]\>

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **all**\<`T1`, `T2`, `T3`, `T4`\>(`values`: readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>\]): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:280](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L280)

###### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### values

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>\]

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`\]\>

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **all**\<`T1`, `T2`, `T3`\>(`values`: readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>\]): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:289](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L289)

###### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### values

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>\]

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`\]\>

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **all**\<`T1`, `T2`\>(`values`: readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>\]): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:297](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L297)

###### Type Parameters

###### T1

`T1`

###### T2

`T2`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### values

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>\]

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`\]\>

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **all**\<`T`\>(`values`: readonly (`T` \| `PromiseLike`\<`T`\>)[]): [`CancellablePromise`](#cancellablepromise)\<`T`[]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:301](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L301)

###### Type Parameters

###### T

`T`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### values

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

readonly (`T` \| `PromiseLike`\<`T`\>)[]

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`T`[]\>

##### allSettled()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **allSettled**\<`T`\>(`values`: `T`): [`CancellablePromise`](#cancellablepromise)\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<T\[P\<P\>\] extends PromiseLike\<U\> ? U : T\[P\<P\>\]\> \}\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:327](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L327)

Creates a `CancellablePromise` that is resolved with an array of results
when all of the provided `Promises` resolve or reject.

###### Type Parameters

###### T

`T` *extends* readonly `unknown`[] \| readonly \[`unknown`\]

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### values

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`T`

An array of `Promises`.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<T\[P\<P\>\] extends PromiseLike\<U\> ? U : T\[P\<P\>\]\> \}\>

A new `CancellablePromise`.

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **allSettled**\<`T`\>(`values`: `Iterable`\<`T`\>): [`CancellablePromise`](#cancellablepromise)\<`PromiseSettledResult`\<`T` *extends* `PromiseLike`\<`U`\> ? `U` : `T`\>[]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:345](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L345)

Creates a `CancellablePromise` that is resolved with an array of results
when all of the provided `Promise`s resolve or reject.

###### Type Parameters

###### T

`T`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### values

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`Iterable`\<`T`\>

An array of `Promise`s.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`PromiseSettledResult`\<`T` *extends* `PromiseLike`\<`U`\> ? `U` : `T`\>[]\>

A new `CancellablePromise`. Canceling it cancels all of the input
promises.

##### race()

<!-- DEBUG_signatureTitle -->

> `static` **race**\<`T`\>(`values`: readonly `T`[]): [`CancellablePromise`](#cancellablepromise)\<`Awaited`\<`T`\>\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:370](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L370)

Creates a `CancellablePromise` that is resolved or rejected when any of
the provided `Promises` are resolved or rejected.

###### Type Parameters

###### T

`T`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### values

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

readonly `T`[]

An array of `Promises`.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`Awaited`\<`T`\>\>

A new `CancellablePromise`. Canceling it cancels all of the input
promises.

##### delay()

<!-- DEBUG_signatureTitle -->

> `static` **delay**(`ms`: `number`): [`CancellablePromise`](#cancellablepromise)\<`void`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:385](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/CancellablePromise.ts#L385)

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### ms

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`void`\>

a `CancellablePromise` that resolves after `ms` milliseconds.

***

### DeliveryCustomer

Defined in: [examples/example-typedoc/src/classes/Customer.ts:85](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L85)

A class that extends [\`Customer\`](#customer).

Notice how TypeDoc shows the inheritance hierarchy for our class.

#### Extends

- [`Customer`](#customer)

#### Constructors

##### Constructor

<!-- DEBUG_signatureTitle -->

> **new DeliveryCustomer**(`id`: `number`, `name`: `string`, `nextOrderNumber`: `string` \| `number`, `subscriptionType`: `"basic"` \| `"enterprise"`): [`DeliveryCustomer`](#deliverycustomer)

Defined in: [examples/example-typedoc/src/classes/Customer.ts:100](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L100)

The constructor of the `DeliveryCustomer` class.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### id

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

the customer's database ID

</dl>

</dd>

</dl>

<dt>

###### name

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

the customer's name

</dl>

</dd>

</dl>

<dt>

###### nextOrderNumber

</dt>

<dd data-debug-parm-list>

the next number to use when this customer places an order

`string` | `number`

</dd>

</dl>

<dt>

###### subscriptionType

</dt>

<dd data-debug-parm-list>

whether this customer has a basic or enterprise subscription

`"basic"` | `"enterprise"`

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`DeliveryCustomer`](#deliverycustomer)

###### Overrides

[`Customer`](#customer).[`constructor`](#constructor-1)

#### Properties

##### id

> `readonly` **id**: `number`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:10](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L10)

A public readonly property.

###### Inherited from

[`Customer`](#customer).[`id`](#id)

##### name

> **name**: `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:13](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L13)

A public property that can be reassigned.

###### Inherited from

[`Customer`](#customer).[`name`](#name)

##### contactName?

> `protected` `optional` **contactName**: `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:16](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L16)

An optional protected property.

###### Inherited from

[`Customer`](#customer).[`contactName`](#contactname)

##### preferredCourierId?

> `optional` **preferredCourierId**: `number`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:87](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L87)

A property defined on the subclass.

##### subscriptionType

> `readonly` **subscriptionType**: `"basic"` \| `"enterprise"`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:90](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L90)

Another property defined on the subclass.

#### Accessors

##### nextOrderNumber

###### Get Signature

<!-- DEBUG_signatureTitle -->

> **get** **nextOrderNumber**(): `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:25](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L25)

A getter that prepends a number sign to the private `_nextOrderNumber`
property.

###### Returns

`string`

###### Set Signature

<!-- DEBUG_signatureTitle -->

> **set** **nextOrderNumber**(`value`: `string` \| `number`): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:33](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L33)

A setter that takes in either a string or a number and sets the private
`_nextOrderNumber` property.

###### Parameters

<dl>

<dt>

###### value

</dt>

<dd data-debug-parm-list>

`string` | `number`

</dd>

</dl>

</dl>

###### Returns

`void`

###### Inherited from

[`Customer`](#customer).[`nextOrderNumber`](#nextordernumber)

#### Methods

##### onOrderPlaced()

<!-- DEBUG_signatureTitle -->

> **onOrderPlaced**(): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:56](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L56)

A public method. To be called when an order is placed for this customer.

###### Returns

`void`

###### Inherited from

[`Customer`](#customer).[`onOrderPlaced`](#onorderplaced)

##### onOrderPlacedArrowFunction()

<!-- DEBUG_signatureTitle -->

> **onOrderPlacedArrowFunction**(): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:65](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L65)

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

###### Returns

`void`

###### Inherited from

[`Customer`](#customer).[`onOrderPlacedArrowFunction`](#onorderplacedarrowfunction)

##### isValid()

<!-- DEBUG_signatureTitle -->

> `protected` **isValid**(): `boolean`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:116](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L116)

An example of overriding a protected method.

A `DeliveryCustomer` can only have a preferred courier if its
subscription type is enterprise.

###### Returns

`boolean`

###### Overrides

[`Customer`](#customer).[`isValid`](#isvalid)

***

### WalkInCustomer

Defined in: [examples/example-typedoc/src/classes/Customer.ts:129](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L129)

A class that extends [\`Customer\`](#customer).

Notice how TypeDoc shows the inheritance hierarchy for our class.

#### Extends

- [`Customer`](#customer)

#### Constructors

##### Constructor

<!-- DEBUG_signatureTitle -->

> **new WalkInCustomer**(`id`: `number`, `name`: `string`, `nextOrderNumber`: `string` \| `number`): [`WalkInCustomer`](#walkincustomer)

Defined in: [examples/example-typedoc/src/classes/Customer.ts:48](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L48)

The constructor of the `Customer` class.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### id

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

the customer's database ID

</dl>

</dd>

</dl>

<dt>

###### name

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

the customer's name

</dl>

</dd>

</dl>

<dt>

###### nextOrderNumber

</dt>

<dd data-debug-parm-list>

the next number to use when this customer places an order

`string` | `number`

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`WalkInCustomer`](#walkincustomer)

###### Inherited from

[`Customer`](#customer).[`constructor`](#constructor-1)

#### Properties

##### id

> `readonly` **id**: `number`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:10](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L10)

A public readonly property.

###### Inherited from

[`Customer`](#customer).[`id`](#id)

##### name

> **name**: `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:13](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L13)

A public property that can be reassigned.

###### Inherited from

[`Customer`](#customer).[`name`](#name)

##### contactName?

> `protected` `optional` **contactName**: `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:16](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L16)

An optional protected property.

###### Inherited from

[`Customer`](#customer).[`contactName`](#contactname)

##### trustedCustomer?

> `optional` **trustedCustomer**: `boolean`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:131](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L131)

A property defined on the subclass.

#### Accessors

##### nextOrderNumber

###### Get Signature

<!-- DEBUG_signatureTitle -->

> **get** **nextOrderNumber**(): `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:25](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L25)

A getter that prepends a number sign to the private `_nextOrderNumber`
property.

###### Returns

`string`

###### Set Signature

<!-- DEBUG_signatureTitle -->

> **set** **nextOrderNumber**(`value`: `string` \| `number`): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:33](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L33)

A setter that takes in either a string or a number and sets the private
`_nextOrderNumber` property.

###### Parameters

<dl>

<dt>

###### value

</dt>

<dd data-debug-parm-list>

`string` | `number`

</dd>

</dl>

</dl>

###### Returns

`void`

###### Inherited from

[`Customer`](#customer).[`nextOrderNumber`](#nextordernumber)

#### Methods

##### onOrderPlacedArrowFunction()

<!-- DEBUG_signatureTitle -->

> **onOrderPlacedArrowFunction**(): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:65](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L65)

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

###### Returns

`void`

###### Inherited from

[`Customer`](#customer).[`onOrderPlacedArrowFunction`](#onorderplacedarrowfunction)

##### isValid()

<!-- DEBUG_signatureTitle -->

> `protected` **isValid**(): `boolean`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:70](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L70)

A protected method.

###### Returns

`boolean`

###### Inherited from

[`Customer`](#customer).[`isValid`](#isvalid)

##### onOrderPlaced()

<!-- DEBUG_signatureTitle -->

> **onOrderPlaced**(): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:139](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/Customer.ts#L139)

An example of overriding a public method.

###### Returns

`void`

###### Overrides

[`Customer`](#customer).[`onOrderPlaced`](#onorderplaced)

***

### StringArray

Defined in: [examples/example-typedoc/src/classes/StringArray.ts:14](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/StringArray.ts#L14)

An array of strings that's defined as

```
export class StringArray extends Array<string> {
    // ...
}
```

Notice how TypeDoc has substituted `string` for the generic type argument in all
the methods inherited from `Array`. For example, the `values` method returns
`IterableIterator<string>`.

#### Extends

- `Array`\<`string`\>

#### Indexable

\[`n`: `number`\]: `string`

#### Constructors

##### Constructor

<!-- DEBUG_signatureTitle -->

> **new StringArray**(`arrayLength`: `number`): [`StringArray`](#stringarray)

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1508

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### arrayLength

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`StringArray`](#stringarray)

###### Inherited from

`Array<string>.constructor`

##### Constructor

<!-- DEBUG_signatureTitle -->

> **new StringArray**(...`items`: `string`[]): [`StringArray`](#stringarray)

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1509

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### items

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

...`string`[]

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

[`StringArray`](#stringarray)

###### Inherited from

`Array<string>.constructor`

#### Properties

##### \[unscopables\]

> `readonly` **\[unscopables\]**: \{[`key`: `number`]: `undefined` \| `boolean`; `find`: `boolean`; `findIndex`: `boolean`; `fill`: `boolean`; `copyWithin`: `boolean`; `[iterator]`: `boolean`; `entries`: `boolean`; `keys`: `boolean`; `values`: `boolean`; `[unscopables]`: `boolean`; `includes`: `boolean`; `flatMap`: `boolean`; `flat`: `boolean`; `at`: `boolean`; `findLast`: `boolean`; `findLastIndex`: `boolean`; `toReversed`: `boolean`; `toSorted`: `boolean`; `toSpliced`: `boolean`; `with`: `boolean`; `length`: `boolean`; `toString`: `boolean`; `toLocaleString`: `boolean`; `pop`: `boolean`; `push`: `boolean`; `concat`: `boolean`; `join`: `boolean`; `reverse`: `boolean`; `shift`: `boolean`; `slice`: `boolean`; `sort`: `boolean`; `splice`: `boolean`; `unshift`: `boolean`; `indexOf`: `boolean`; `lastIndexOf`: `boolean`; `every`: `boolean`; `some`: `boolean`; `forEach`: `boolean`; `map`: `boolean`; `filter`: `boolean`; `reduce`: `boolean`; `reduceRight`: `boolean`; \}

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:97

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

###### Index Signature

\[`key`: `number`\]: `undefined` \| `boolean`

###### find?

> `optional` **find**: `boolean`

###### findIndex?

> `optional` **findIndex**: `boolean`

###### fill?

> `optional` **fill**: `boolean`

###### copyWithin?

> `optional` **copyWithin**: `boolean`

###### \[iterator\]?

> `optional` **\[iterator\]**: `boolean`

###### entries?

> `optional` **entries**: `boolean`

###### keys?

> `optional` **keys**: `boolean`

###### values?

> `optional` **values**: `boolean`

###### \[unscopables\]?

> `readonly` `optional` **\[unscopables\]**: `boolean`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

###### includes?

> `optional` **includes**: `boolean`

###### flatMap?

> `optional` **flatMap**: `boolean`

###### flat?

> `optional` **flat**: `boolean`

###### at?

> `optional` **at**: `boolean`

###### findLast?

> `optional` **findLast**: `boolean`

###### findLastIndex?

> `optional` **findLastIndex**: `boolean`

###### toReversed?

> `optional` **toReversed**: `boolean`

###### toSorted?

> `optional` **toSorted**: `boolean`

###### toSpliced?

> `optional` **toSpliced**: `boolean`

###### with?

> `optional` **with**: `boolean`

###### length?

> `optional` **length**: `boolean`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

###### toString?

> `optional` **toString**: `boolean`

###### toLocaleString?

> `optional` **toLocaleString**: `boolean`

###### pop?

> `optional` **pop**: `boolean`

###### push?

> `optional` **push**: `boolean`

###### concat?

> `optional` **concat**: `boolean`

###### join?

> `optional` **join**: `boolean`

###### reverse?

> `optional` **reverse**: `boolean`

###### shift?

> `optional` **shift**: `boolean`

###### slice?

> `optional` **slice**: `boolean`

###### sort?

> `optional` **sort**: `boolean`

###### splice?

> `optional` **splice**: `boolean`

###### unshift?

> `optional` **unshift**: `boolean`

###### indexOf?

> `optional` **indexOf**: `boolean`

###### lastIndexOf?

> `optional` **lastIndexOf**: `boolean`

###### every?

> `optional` **every**: `boolean`

###### some?

> `optional` **some**: `boolean`

###### forEach?

> `optional` **forEach**: `boolean`

###### map?

> `optional` **map**: `boolean`

###### filter?

> `optional` **filter**: `boolean`

###### reduce?

> `optional` **reduce**: `boolean`

###### reduceRight?

> `optional` **reduceRight**: `boolean`

###### Inherited from

`Array.[unscopables]`

##### \[species\]

> `readonly` `static` **\[species\]**: `ArrayConstructor`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:316

###### Inherited from

`Array.[species]`

##### length

> **length**: `number`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1326

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

###### Inherited from

`Array.length`

#### Methods

##### customMethod()

<!-- DEBUG_signatureTitle -->

> **customMethod**(): `void`

Defined in: [examples/example-typedoc/src/classes/StringArray.ts:16](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/classes/StringArray.ts#L16)

A method that extends the functionality of a basic JavaScript array.

###### Returns

`void`

##### find()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **find**\<`S`\>(`predicate`: (`value`: `string`, `index`: `number`, `obj`: `string`[]) => `value is S`, `thisArg?`: `any`): `undefined` \| `S`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:29

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

###### Type Parameters

###### S

`S` *extends* `string`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### predicate

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `string`, `index`: `number`, `obj`: `string`[]) => `value is S`

</dl>

<dl data-debug-parm-list-5>

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`undefined` \| `S`

###### Inherited from

`Array.find`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **find**(`predicate`: (`value`: `string`, `index`: `number`, `obj`: `string`[]) => `unknown`, `thisArg?`: `any`): `undefined` \| `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:30

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### predicate

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `string`, `index`: `number`, `obj`: `string`[]) => `unknown`

</dl>

<dl data-debug-parm-list-5>

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`undefined` \| `string`

###### Inherited from

`Array.find`

##### findIndex()

<!-- DEBUG_signatureTitle -->

> **findIndex**(`predicate`: (`value`: `string`, `index`: `number`, `obj`: `string`[]) => `unknown`, `thisArg?`: `any`): `number`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:41

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### predicate

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `string`, `index`: `number`, `obj`: `string`[]) => `unknown`

</dl>

<dl data-debug-parm-list-5>

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`number`

###### Inherited from

`Array.findIndex`

##### fill()

<!-- DEBUG_signatureTitle -->

> **fill**(`value`: `string`, `start?`: `number`, `end?`: `number`): `this`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:51

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### value

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

value to fill array section with

</dl>

</dd>

</dl>

<dt>

###### start?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.

</dl>

</dd>

</dl>

<dt>

###### end?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

index to stop filling the array at. If end is negative, it is treated as
length+end.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`this`

###### Inherited from

`Array.fill`

##### copyWithin()

<!-- DEBUG_signatureTitle -->

> **copyWithin**(`target`: `number`, `start`: `number`, `end?`: `number`): `this`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:62

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### target

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

If target is negative, it is treated as length+target where length is the
length of the array.

</dl>

</dd>

</dl>

<dt>

###### start

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.

</dl>

</dd>

</dl>

<dt>

###### end?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

If not specified, length of the this object is used as its default value.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`this`

###### Inherited from

`Array.copyWithin`

##### from()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **from**\<`T`\>(`arrayLike`: `ArrayLike`\<`T`\>): `T`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:72

Creates an array from an array-like object.

###### Type Parameters

###### T

`T`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### arrayLike

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`ArrayLike`\<`T`\>

An array-like object to convert to an array.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`T`[]

###### Inherited from

`Array.from`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **from**\<`T`, `U`\>(`arrayLike`: `ArrayLike`\<`T`\>, `mapfn`: (`v`: `T`, `k`: `number`) => `U`, `thisArg?`: `any`): `U`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:80

Creates an array from an iterable object.

###### Type Parameters

###### T

`T`

###### U

`U`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### arrayLike

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`ArrayLike`\<`T`\>

An array-like object to convert to an array.

</dl>

</dd>

</dl>

<dt>

###### mapfn

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`v`: `T`, `k`: `number`) => `U`

</dl>

<dl data-debug-parm-list-5>

A mapping function to call on every element of the array.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

Value of 'this' used to invoke the mapfn.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`U`[]

###### Inherited from

`Array.from`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **from**\<`T`\>(`iterable`: `Iterable`\<`T`, `any`, `any`\> \| `ArrayLike`\<`T`\>): `T`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:101

Creates an array from an iterable object.

###### Type Parameters

###### T

`T`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### iterable

</dt>

<dd data-debug-parm-list>

An iterable object to convert to an array.

`Iterable`\<`T`, `any`, `any`\> | `ArrayLike`\<`T`\>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`T`[]

###### Inherited from

`Array.from`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **from**\<`T`, `U`\>(`iterable`: `Iterable`\<`T`, `any`, `any`\> \| `ArrayLike`\<`T`\>, `mapfn`: (`v`: `T`, `k`: `number`) => `U`, `thisArg?`: `any`): `U`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:109

Creates an array from an iterable object.

###### Type Parameters

###### T

`T`

###### U

`U`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### iterable

</dt>

<dd data-debug-parm-list>

An iterable object to convert to an array.

`Iterable`\<`T`, `any`, `any`\> | `ArrayLike`\<`T`\>

</dd>

</dl>

<dt>

###### mapfn

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`v`: `T`, `k`: `number`) => `U`

</dl>

<dl data-debug-parm-list-5>

A mapping function to call on every element of the array.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

Value of 'this' used to invoke the mapfn.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`U`[]

###### Inherited from

`Array.from`

##### of()

<!-- DEBUG_signatureTitle -->

> `static` **of**\<`T`\>(...`items`: `T`[]): `T`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:86

Returns a new array from a set of elements.

###### Type Parameters

###### T

`T`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### items

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

...`T`[]

A set of elements to include in the new array object.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`T`[]

###### Inherited from

`Array.of`

##### \[iterator\]()

<!-- DEBUG_signatureTitle -->

> **\[iterator\]**(): `ArrayIterator`\<`string`\>

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:78

Iterator

###### Returns

`ArrayIterator`\<`string`\>

###### Inherited from

`Array.[iterator]`

##### entries()

<!-- DEBUG_signatureTitle -->

> **entries**(): `ArrayIterator`\<\[`number`, `string`\]\>

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:83

Returns an iterable of key, value pairs for every entry in the array

###### Returns

`ArrayIterator`\<\[`number`, `string`\]\>

###### Inherited from

`Array.entries`

##### keys()

<!-- DEBUG_signatureTitle -->

> **keys**(): `ArrayIterator`\<`number`\>

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:88

Returns an iterable of keys in the array

###### Returns

`ArrayIterator`\<`number`\>

###### Inherited from

`Array.keys`

##### values()

<!-- DEBUG_signatureTitle -->

> **values**(): `ArrayIterator`\<`string`\>

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:93

Returns an iterable of values in the array

###### Returns

`ArrayIterator`\<`string`\>

###### Inherited from

`Array.values`

##### includes()

<!-- DEBUG_signatureTitle -->

> **includes**(`searchElement`: `string`, `fromIndex?`: `number`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2016.array.include.d.ts:25

Determines whether an array includes a certain element, returning true or false as appropriate.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### searchElement

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

The element to search for.

</dl>

</dd>

</dl>

<dt>

###### fromIndex?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The position in this array at which to begin searching for searchElement.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`boolean`

###### Inherited from

`Array.includes`

##### flatMap()

<!-- DEBUG_signatureTitle -->

> **flatMap**\<`U`, `This`\>(`callback`: (`this`: `This`, `value`: `string`, `index`: `number`, `array`: `string`[]) => `U` \| readonly `U`[], `thisArg?`: `This`): `U`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2019.array.d.ts:64

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

###### Type Parameters

###### U

`U`

###### This

`This` = `undefined`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### callback

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`this`: `This`, `value`: `string`, `index`: `number`, `array`: `string`[]) => `U` \| readonly `U`[]

</dl>

<dl data-debug-parm-list-5>

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`This`

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`U`[]

###### Inherited from

`Array.flatMap`

##### flat()

<!-- DEBUG_signatureTitle -->

> **flat**\<`A`, `D`\>(`this`: `A`, `depth?`: `D`): `FlatArray`\<`A`, `D`\>[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2019.array.d.ts:75

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

###### Type Parameters

###### A

`A`

###### D

`D` *extends* `number` = `1`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### this

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`A`

</dl>

</dd>

</dl>

<dt>

###### depth?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`D`

The maximum recursion depth

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`FlatArray`\<`A`, `D`\>[]

###### Inherited from

`Array.flat`

##### at()

<!-- DEBUG_signatureTitle -->

> **at**(`index`: `number`): `undefined` \| `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2022.array.d.ts:24

Returns the item located at the specified index.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### index

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The zero-based index of the desired code unit. A negative index will count back from the last item.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`undefined` \| `string`

###### Inherited from

`Array.at`

##### findLast()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **findLast**\<`S`\>(`predicate`: (`value`: `string`, `index`: `number`, `array`: `string`[]) => `value is S`, `thisArg?`: `any`): `undefined` \| `S`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2023.array.d.ts:29

Returns the value of the last element in the array where predicate is true, and undefined
otherwise.

###### Type Parameters

###### S

`S` *extends* `string`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### predicate

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `string`, `index`: `number`, `array`: `string`[]) => `value is S`

</dl>

<dl data-debug-parm-list-5>

findLast calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found, findLast
immediately returns that element value. Otherwise, findLast returns undefined.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`undefined` \| `S`

###### Inherited from

`Array.findLast`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **findLast**(`predicate`: (`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown`, `thisArg?`: `any`): `undefined` \| `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2023.array.d.ts:30

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### predicate

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown`

</dl>

<dl data-debug-parm-list-5>

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`undefined` \| `string`

###### Inherited from

`Array.findLast`

##### findLastIndex()

<!-- DEBUG_signatureTitle -->

> **findLastIndex**(`predicate`: (`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown`, `thisArg?`: `any`): `number`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2023.array.d.ts:41

Returns the index of the last element in the array where predicate is true, and -1
otherwise.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### predicate

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown`

</dl>

<dl data-debug-parm-list-5>

findLastIndex calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`number`

###### Inherited from

`Array.findLastIndex`

##### toReversed()

<!-- DEBUG_signatureTitle -->

> **toReversed**(): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2023.array.d.ts:46

Returns a copy of an array with its elements reversed.

###### Returns

`string`[]

###### Inherited from

`Array.toReversed`

##### toSorted()

<!-- DEBUG_signatureTitle -->

> **toSorted**(`compareFn?`: (`a`: `string`, `b`: `string`) => `number`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2023.array.d.ts:57

Returns a copy of an array with its elements sorted.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### compareFn?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`a`: `string`, `b`: `string`) => `number`

</dl>

<dl data-debug-parm-list-5>

Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.
```ts
[11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22]
```

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`[]

###### Inherited from

`Array.toSorted`

##### toSpliced()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **toSpliced**(`start`: `number`, `deleteCount`: `number`, ...`items`: `string`[]): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2023.array.d.ts:66

Copies an array and removes elements and, if necessary, inserts new elements in their place. Returns the copied array.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### start

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The zero-based location in the array from which to start removing elements.

</dl>

</dd>

</dl>

<dt>

###### deleteCount

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The number of elements to remove.

</dl>

</dd>

</dl>

<dt>

###### items

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

...`string`[]

Elements to insert into the copied array in place of the deleted elements.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`[]

The copied array.

###### Inherited from

`Array.toSpliced`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **toSpliced**(`start`: `number`, `deleteCount?`: `number`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2023.array.d.ts:74

Copies an array and removes elements while returning the remaining elements.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### start

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The zero-based location in the array from which to start removing elements.

</dl>

</dd>

</dl>

<dt>

###### deleteCount?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The number of elements to remove.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`[]

A copy of the original array with the remaining elements.

###### Inherited from

`Array.toSpliced`

##### with()

<!-- DEBUG_signatureTitle -->

> **with**(`index`: `number`, `value`: `string`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2023.array.d.ts:85

Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### index

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The index of the value to overwrite. If the index is
negative, then it replaces from the end of the array.

</dl>

</dd>

</dl>

<dt>

###### value

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

The value to write into the copied array.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`[]

The copied array with the updated value.

###### Inherited from

`Array.with`

##### toString()

<!-- DEBUG_signatureTitle -->

> **toString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1330

Returns a string representation of an array.

###### Returns

`string`

###### Inherited from

`Array.toString`

##### toLocaleString()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **toLocaleString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1334

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

###### Returns

`string`

###### Inherited from

`Array.toLocaleString`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **toLocaleString**(`locales`: `string` \| `string`[], `options?`: `NumberFormatOptions` & `DateTimeFormatOptions`): `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:64

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### locales

</dt>

<dd data-debug-parm-list>

`string` | `string`[]

</dd>

</dl>

<dt>

###### options?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`NumberFormatOptions` & `DateTimeFormatOptions`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`

###### Inherited from

`Array.toLocaleString`

##### pop()

<!-- DEBUG_signatureTitle -->

> **pop**(): `undefined` \| `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1339

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

###### Returns

`undefined` \| `string`

###### Inherited from

`Array.pop`

##### push()

<!-- DEBUG_signatureTitle -->

> **push**(...`items`: `string`[]): `number`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1344

Appends new elements to the end of an array, and returns the new length of the array.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### items

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

...`string`[]

New elements to add to the array.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`number`

###### Inherited from

`Array.push`

##### concat()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **concat**(...`items`: `ConcatArray`\<`string`\>[]): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1350

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### items

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

...`ConcatArray`\<`string`\>[]

Additional arrays and/or items to add to the end of the array.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`[]

###### Inherited from

`Array.concat`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **concat**(...`items`: (`string` \| `ConcatArray`\<`string`\>)[]): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1356

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### items

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

...(`string` \| `ConcatArray`\<`string`\>)[]

Additional arrays and/or items to add to the end of the array.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`[]

###### Inherited from

`Array.concat`

##### join()

<!-- DEBUG_signatureTitle -->

> **join**(`separator?`: `string`): `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1361

Adds all the elements of an array into a string, separated by the specified separator string.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### separator?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`

###### Inherited from

`Array.join`

##### reverse()

<!-- DEBUG_signatureTitle -->

> **reverse**(): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1366

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

###### Returns

`string`[]

###### Inherited from

`Array.reverse`

##### shift()

<!-- DEBUG_signatureTitle -->

> **shift**(): `undefined` \| `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1371

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

###### Returns

`undefined` \| `string`

###### Inherited from

`Array.shift`

##### slice()

<!-- DEBUG_signatureTitle -->

> **slice**(`start?`: `number`, `end?`: `number`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1381

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### start?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.

</dl>

</dd>

</dl>

<dt>

###### end?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`[]

###### Inherited from

`Array.slice`

##### sort()

<!-- DEBUG_signatureTitle -->

> **sort**(`compareFn?`: (`a`: `string`, `b`: `string`) => `number`): `this`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1392

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### compareFn?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`a`: `string`, `b`: `string`) => `number`

</dl>

<dl data-debug-parm-list-5>

Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.
```ts
[11,2,22,1].sort((a, b) => a - b)
```

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`this`

###### Inherited from

`Array.sort`

##### splice()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **splice**(`start`: `number`, `deleteCount?`: `number`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1399

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### start

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The zero-based location in the array from which to start removing elements.

</dl>

</dd>

</dl>

<dt>

###### deleteCount?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The number of elements to remove.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`[]

An array containing the elements that were deleted.

###### Inherited from

`Array.splice`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **splice**(`start`: `number`, `deleteCount`: `number`, ...`items`: `string`[]): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1407

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### start

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The zero-based location in the array from which to start removing elements.

</dl>

</dd>

</dl>

<dt>

###### deleteCount

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The number of elements to remove.

</dl>

</dd>

</dl>

<dt>

###### items

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

...`string`[]

Elements to insert into the array in place of the deleted elements.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`[]

An array containing the elements that were deleted.

###### Inherited from

`Array.splice`

##### unshift()

<!-- DEBUG_signatureTitle -->

> **unshift**(...`items`: `string`[]): `number`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1412

Inserts new elements at the start of an array, and returns the new length of the array.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### items

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

...`string`[]

Elements to insert at the start of the array.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`number`

###### Inherited from

`Array.unshift`

##### indexOf()

<!-- DEBUG_signatureTitle -->

> **indexOf**(`searchElement`: `string`, `fromIndex?`: `number`): `number`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1418

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### searchElement

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

The value to locate in the array.

</dl>

</dd>

</dl>

<dt>

###### fromIndex?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`number`

###### Inherited from

`Array.indexOf`

##### lastIndexOf()

<!-- DEBUG_signatureTitle -->

> **lastIndexOf**(`searchElement`: `string`, `fromIndex?`: `number`): `number`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1424

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### searchElement

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

The value to locate in the array.

</dl>

</dd>

</dl>

<dt>

###### fromIndex?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`number`

###### Inherited from

`Array.lastIndexOf`

##### every()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **every**\<`S`\>(`predicate`: (`value`: `string`, `index`: `number`, `array`: `string`[]) => `value is S`, `thisArg?`: `any`): `this is S[]`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1433

Determines whether all the members of an array satisfy the specified test.

###### Type Parameters

###### S

`S` *extends* `string`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### predicate

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `string`, `index`: `number`, `array`: `string`[]) => `value is S`

</dl>

<dl data-debug-parm-list-5>

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`this is S[]`

###### Inherited from

`Array.every`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **every**(`predicate`: (`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown`, `thisArg?`: `any`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1442

Determines whether all the members of an array satisfy the specified test.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### predicate

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown`

</dl>

<dl data-debug-parm-list-5>

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`boolean`

###### Inherited from

`Array.every`

##### some()

<!-- DEBUG_signatureTitle -->

> **some**(`predicate`: (`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown`, `thisArg?`: `any`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1451

Determines whether the specified callback function returns true for any element of an array.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### predicate

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown`

</dl>

<dl data-debug-parm-list-5>

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`boolean`

###### Inherited from

`Array.some`

##### forEach()

<!-- DEBUG_signatureTitle -->

> **forEach**(`callbackfn`: (`value`: `string`, `index`: `number`, `array`: `string`[]) => `void`, `thisArg?`: `any`): `void`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1457

Performs the specified action for each element in an array.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### callbackfn

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `string`, `index`: `number`, `array`: `string`[]) => `void`

</dl>

<dl data-debug-parm-list-5>

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`void`

###### Inherited from

`Array.forEach`

##### map()

<!-- DEBUG_signatureTitle -->

> **map**\<`U`\>(`callbackfn`: (`value`: `string`, `index`: `number`, `array`: `string`[]) => `U`, `thisArg?`: `any`): `U`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1463

Calls a defined callback function on each element of an array, and returns an array that contains the results.

###### Type Parameters

###### U

`U`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### callbackfn

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `string`, `index`: `number`, `array`: `string`[]) => `U`

</dl>

<dl data-debug-parm-list-5>

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`U`[]

###### Inherited from

`Array.map`

##### filter()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **filter**\<`S`\>(`predicate`: (`value`: `string`, `index`: `number`, `array`: `string`[]) => `value is S`, `thisArg?`: `any`): `S`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1469

Returns the elements of an array that meet the condition specified in a callback function.

###### Type Parameters

###### S

`S` *extends* `string`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### predicate

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `string`, `index`: `number`, `array`: `string`[]) => `value is S`

</dl>

<dl data-debug-parm-list-5>

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`S`[]

###### Inherited from

`Array.filter`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **filter**(`predicate`: (`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown`, `thisArg?`: `any`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1475

Returns the elements of an array that meet the condition specified in a callback function.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### predicate

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown`

</dl>

<dl data-debug-parm-list-5>

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`[]

###### Inherited from

`Array.filter`

##### reduce()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **reduce**(`callbackfn`: (`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string`): `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1481

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### callbackfn

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string`

</dl>

<dl data-debug-parm-list-5>

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`

###### Inherited from

`Array.reduce`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **reduce**(`callbackfn`: (`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string`, `initialValue`: `string`): `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1482

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### callbackfn

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string`

</dl>

<dl data-debug-parm-list-5>

</dl>

</dd>

</dl>

<dt>

###### initialValue

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`

###### Inherited from

`Array.reduce`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **reduce**\<`U`\>(`callbackfn`: (`previousValue`: `U`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `U`, `initialValue`: `U`): `U`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1488

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

###### Type Parameters

###### U

`U`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### callbackfn

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`previousValue`: `U`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `U`

</dl>

<dl data-debug-parm-list-5>

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

</dl>

</dd>

</dl>

<dt>

###### initialValue

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`U`

###### Inherited from

`Array.reduce`

##### reduceRight()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **reduceRight**(`callbackfn`: (`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string`): `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1494

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### callbackfn

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string`

</dl>

<dl data-debug-parm-list-5>

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`

###### Inherited from

`Array.reduceRight`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **reduceRight**(`callbackfn`: (`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string`, `initialValue`: `string`): `string`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1495

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### callbackfn

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string`

</dl>

<dl data-debug-parm-list-5>

</dl>

</dd>

</dl>

<dt>

###### initialValue

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`string`

###### Inherited from

`Array.reduceRight`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> **reduceRight**\<`U`\>(`callbackfn`: (`previousValue`: `U`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `U`, `initialValue`: `U`): `U`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1501

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

###### Type Parameters

###### U

`U`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### callbackfn

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`previousValue`: `U`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `U`

</dl>

<dl data-debug-parm-list-5>

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

</dl>

</dd>

</dl>

<dt>

###### initialValue

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`U`

###### Inherited from

`Array.reduceRight`

##### isArray()

<!-- DEBUG_signatureTitle -->

> `static` **isArray**(`arg`: `any`): `arg is any[]`

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.es5.d.ts:1513

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### arg

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`arg is any[]`

###### Inherited from

`Array.isArray`

##### fromAsync()

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **fromAsync**\<`T`\>(`iterableOrArrayLike`: `AsyncIterable`\<`T`, `any`, `any`\> \| `Iterable`\<`T` \| `PromiseLike`\<`T`\>, `any`, `any`\> \| `ArrayLike`\<`T` \| `PromiseLike`\<`T`\>\>): `Promise`\<`T`[]\>

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.esnext.array.d.ts:24

Creates an array from an async iterator or iterable object.

###### Type Parameters

###### T

`T`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### iterableOrArrayLike

</dt>

<dd data-debug-parm-list>

An async iterator or array-like object to convert to an array.

`AsyncIterable`\<`T`, `any`, `any`\> | `Iterable`\<`T` \| `PromiseLike`\<`T`\>, `any`, `any`\> | `ArrayLike`\<`T` \| `PromiseLike`\<`T`\>\>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`Promise`\<`T`[]\>

###### Inherited from

`Array.fromAsync`

###### Call Signature

<!-- DEBUG_signatureTitle -->

> `static` **fromAsync**\<`T`, `U`\>(`iterableOrArrayLike`: `AsyncIterable`\<`T`, `any`, `any`\> \| `Iterable`\<`T`, `any`, `any`\> \| `ArrayLike`\<`T`\>, `mapFn`: (`value`: `Awaited`\<`T`\>, `index`: `number`) => `U`, `thisArg?`: `any`): `Promise`\<`Awaited`\<`U`\>[]\>

Defined in: node\_modules/.pnpm/typescript@5.8.3/node\_modules/typescript/lib/lib.esnext.array.d.ts:34

Creates an array from an async iterator or iterable object.

###### Type Parameters

###### T

`T`

###### U

`U`

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### iterableOrArrayLike

</dt>

<dd data-debug-parm-list>

An async iterator or array-like object to convert to an array.

`AsyncIterable`\<`T`, `any`, `any`\> | `Iterable`\<`T`, `any`, `any`\> | `ArrayLike`\<`T`\>

</dd>

</dl>

<dt>

###### mapFn

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-4>

(`value`: `Awaited`\<`T`\>, `index`: `number`) => `U`

</dl>

<dl data-debug-parm-list-5>

</dl>

</dd>

</dl>

<dt>

###### thisArg?

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`any`

Value of 'this' used when executing mapfn.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`Promise`\<`Awaited`\<`U`\>[]\>

###### Inherited from

`Array.fromAsync`

***

### SimpleEnum

Defined in: [examples/example-typedoc/src/enums.ts:5](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L5)

Describes the status of a delivery order.

#### Enumeration Members

##### Pending

> **Pending**: `0`

Defined in: [examples/example-typedoc/src/enums.ts:7](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L7)

This order has just been placed and is yet to be processed.

##### InProgress

> **InProgress**: `1`

Defined in: [examples/example-typedoc/src/enums.ts:10](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L10)

A courier is en route delivering this order.

##### Complete

> **Complete**: `"COMPLETE"`

Defined in: [examples/example-typedoc/src/enums.ts:13](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L13)

The order has been delivered.

***

### CrazyEnum

Defined in: [examples/example-typedoc/src/enums.ts:26](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L26)

[A crazy enum from the TypeScript
handbook](https://www.typescriptlang.org/docs/handbook/enums.html#computed-and-constant-members).
This enum contains both constant and computed members.

TypeDoc won't show the value of computed members since this information is
only available at runtime.

#### Enumeration Members

##### None

> **None**: `0`

Defined in: [examples/example-typedoc/src/enums.ts:28](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L28)

##### Read

> **Read**: `2`

Defined in: [examples/example-typedoc/src/enums.ts:29](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L29)

##### Write

> **Write**: `4`

Defined in: [examples/example-typedoc/src/enums.ts:30](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L30)

##### ReadWrite

> **ReadWrite**: `6`

Defined in: [examples/example-typedoc/src/enums.ts:31](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L31)

##### ComputedMember

> **ComputedMember**: `number`

Defined in: [examples/example-typedoc/src/enums.ts:33](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L33)

***

### EnumLikeObject

Defined in: [examples/example-typedoc/src/enums.ts:51](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L51)

Since TypeScript's `enum` can be inconvenient to work with, some packages define their own enum-like objects:

```
export const EnumLikeObject = {
    Pending: 'pending',
    InProgress: 'inProgress',
    Completed: 'completed'
} as const
```

Use the `@enum` tag to make TypeDoc document this object as an enum.

#### Enumeration Members

##### Pending

> **Pending**: `"pending"`

Defined in: [examples/example-typedoc/src/enums.ts:52](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L52)

##### InProgress

> **InProgress**: `"inProgress"`

Defined in: [examples/example-typedoc/src/enums.ts:55](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L55)

Indicates that a courier is en route delivering this order.

##### Completed

> **Completed**: `"completed"`

Defined in: [examples/example-typedoc/src/enums.ts:57](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L57)

***

### EnumLikeObjectNumValues

Defined in: [examples/example-typedoc/src/enums.ts:75](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L75)

Since TypeScript's `enum` can be inconvenient to work with, some packages define their own enum-like objects:

```
export const EnumLikeObjectNumValues = {
    Pending: 1,
    InProgress: 2,
    Completed: 3
} as const
```

Use the `@enum` tag to make TypeDoc document this object as an enum.

#### Enumeration Members

##### Pending

> **Pending**: `1`

Defined in: [examples/example-typedoc/src/enums.ts:76](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L76)

##### InProgress

> **InProgress**: `2`

Defined in: [examples/example-typedoc/src/enums.ts:79](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L79)

Indicates that a courier is en route delivering this order.

##### Completed

> **Completed**: `3`

Defined in: [examples/example-typedoc/src/enums.ts:81](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/enums.ts#L81)

***

### sqrt()

<!-- DEBUG_signatureTitle -->

> **sqrt**(`x`: `number`): `number`

Defined in: [examples/example-typedoc/src/functions.ts:7](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/functions.ts#L7)

Calculates the square root of a number.

<dl>

<dt>

#### Parameters

</dt>

<dd>

<dl>

<dt>

##### x

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

the number to calculate the root of.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

#### Returns

`number`

the square root if `x` is non-negative or `NaN` if `x` is negative.

***

### sqrtArrowFunction()

<!-- DEBUG_signatureTitle -->

> **sqrtArrowFunction**(`x`: `number`): `number`

Defined in: [examples/example-typedoc/src/functions.ts:25](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/functions.ts#L25)

Calculates the square root of a number.

`sqrtArrowFunction` is defined using a variable declaration:

```
export const sqrtArrowFunction = (x: number): number => Math.sqrt(x);
```

TypeDoc is smart and documents `sqrtArrowFunction` as a function rather than a variable.

<dl>

<dt>

#### Parameters

</dt>

<dd>

<dl>

<dt>

##### x

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

the number do calculate the root of.

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

#### Returns

`number`

the square root if `x` is non-negative or `NaN` if `x` is negative.

***

### concat()

<!-- DEBUG_signatureTitle -->

> **concat**\<`T`\>(`array1`: `T`[], `array2`: `T`[]): `T`[]

Defined in: [examples/example-typedoc/src/functions.ts:39](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/functions.ts#L39)

A simple generic function that concatenates two arrays.

Use [`@typeParam <param name>`](https://typedoc.org/tags/typeParam/)
to document generic type parameters, e.g.

```text
@typeParam T the element type of the arrays
```

#### Type Parameters

##### T

`T`

the element type of the arrays

<dl>

<dt>

#### Parameters

</dt>

<dd>

<dl>

<dt>

##### array1

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`T`[]

</dl>

</dd>

</dl>

<dt>

##### array2

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`T`[]

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

#### Returns

`T`[]

***

### MakeHttpCallAOptions

Defined in: [examples/example-typedoc/src/functions.ts:46](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/functions.ts#L46)

The options type for [makeHttpCallA](#makehttpcalla).

#### Properties

##### url

> **url**: `string`

Defined in: [examples/example-typedoc/src/functions.ts:47](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/functions.ts#L47)

##### method

> **method**: `string`

Defined in: [examples/example-typedoc/src/functions.ts:50](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/functions.ts#L50)

e.g. GET, POST, PUT, DELETE

##### headers

> **headers**: `Record`\<`string`, `string`\>

Defined in: [examples/example-typedoc/src/functions.ts:53](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/functions.ts#L53)

e.g. `{ 'Authorization': 'Bearer <access token>' }`

##### body

> **body**: `string` \| `Blob` \| `FormData`

Defined in: [examples/example-typedoc/src/functions.ts:54](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/functions.ts#L54)

##### mode

> **mode**: `"cors"` \| `"no-cors"` \| `"same-origin"`

Defined in: [examples/example-typedoc/src/functions.ts:55](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/functions.ts#L55)

***

### makeHttpCallA()

<!-- DEBUG_signatureTitle -->

> **makeHttpCallA**(`options`: [`MakeHttpCallAOptions`](#makehttpcallaoptions)): `Promise`\<`Response`\>

Defined in: [examples/example-typedoc/src/functions.ts:65](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/functions.ts#L65)

A function that takes in an options object that is defined as a separate
interface and makes an HTTP call.

**Make sure to export the options type when using this pattern.** Otherwise,
TypeDoc will not document the options.

<dl>

<dt>

#### Parameters

</dt>

<dd>

<dl>

<dt>

##### options

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

[`MakeHttpCallAOptions`](#makehttpcallaoptions)

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

#### Returns

`Promise`\<`Response`\>

***

### makeHttpCallB()

<!-- DEBUG_signatureTitle -->

> **makeHttpCallB**(`options`: \{ `url`: `string`; `method`: `string`; `headers`: `Record`\<`string`, `string`\>; `body`: `string` \| `Blob` \| `FormData`; `mode`: `"cors"` \| `"no-cors"` \| `"same-origin"`; \}): `Promise`\<`Response`\>

Defined in: [examples/example-typedoc/src/functions.ts:78](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/functions.ts#L78)

A function that takes in an options object and makes an HTTP call.

The options type is written directly in the function definition.

<dl>

<dt>

#### Parameters

</dt>

<dd>

<dl>

<dt>

##### options

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-5>

###### url

`string`

###### method

`string`

e.g. GET, POST, PUT, DELETE

###### headers

`Record`\<`string`, `string`\>

e.g. `{ 'Authorization': 'Bearer <access token>' }`

###### body

`string` \| `Blob` \| `FormData`

###### mode

`"cors"` \| `"no-cors"` \| `"same-origin"`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

#### Returns

`Promise`\<`Response`\>

***

### overloadedFunction()

#### Call Signature

<!-- DEBUG_signatureTitle -->

> **overloadedFunction**(`a`: `number`, `b`: `number`): `string`

Defined in: [examples/example-typedoc/src/functions.ts:102](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/functions.ts#L102)

Stringifies and concatenates two numbers into a single string.

The documentation site allows you to toggle between the different overloads
of a function. The implementation signature of the overloaded function is not
included in the documentation.

<dl>

<dt>

##### Parameters

</dt>

<dd>

<dl>

<dt>

###### a

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

</dl>

</dd>

</dl>

<dt>

###### b

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`number`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

##### Returns

`string`

#### Call Signature

<!-- DEBUG_signatureTitle -->

> **overloadedFunction**(`a`: `string`, `b`: `string`): `string`

Defined in: [examples/example-typedoc/src/functions.ts:111](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/functions.ts#L111)

Concatenates two strings.

The documentation site allows you to toggle between the different overloads
of a function. The implementation signature of the overloaded function is not
included in the documentation.

<dl>

<dt>

##### Parameters

</dt>

<dd>

<dl>

<dt>

###### a

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

</dl>

</dd>

</dl>

<dt>

###### b

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`string`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

##### Returns

`string`

***

### anInternalFunction()

<!-- DEBUG_signatureTitle -->

> **anInternalFunction**(): `void`

Defined in: [examples/example-typedoc/src/internals.ts:8](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/internals.ts#L8)

**`Internal`**

Use `@internal` to indicate that something is for internal use. If the
`--excludeInternal` option is passed, TypeDoc will not document the given
code.

#### Returns

`void`

***

### CardAProps

Defined in: [examples/example-typedoc/src/reactComponents.tsx:6](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L6)

The props type for [CardA](#carda).

#### Properties

##### variant

> **variant**: `"primary"` \| `"secondary"` \| `"success"` \| `"danger"` \| `"light"` \| `"dark"`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:8](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L8)

The theme of the card. Defaults to `primary`.

***

### EasyFormDialogProps

Defined in: [examples/example-typedoc/src/reactComponents.tsx:85](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L85)

The props type of [\`EasyFormDialog\`](#easyformdialog).

#### Properties

##### title

> **title**: `ReactNode`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:87](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L87)

The title of the dialog. Can be a JSX element.

##### submitButtonText

> **submitButtonText**: `string`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:90](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L90)

The text of the submit button.

##### submitButtonClass?

> `optional` **submitButtonClass**: `string`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:93](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L93)

The CSS class of the submit button.

##### cancelButtonText?

> `optional` **cancelButtonText**: `string`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:96](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L96)

The text of the cancel button. Defaults to "Cancel".

##### submitEnabled?

> `optional` **submitEnabled**: `boolean`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:105](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L105)

Allows you to disable the submit button even if `getSubmitEnabled()`
would return true.

This can be useful if you want to disable the submit button while a query
is in progress.

##### formIsValid

> **formIsValid**: `boolean`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:108](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L108)

A boolean indicating if the form is valid.

##### showValidation

> **showValidation**: `boolean`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:111](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L111)

A boolean indicating if validation feedback is being shown.

##### closeRef?

> `optional` **closeRef**: `MutableRefObject`\<() => `void`\>

Defined in: [examples/example-typedoc/src/reactComponents.tsx:177](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L177)

This prop accepts a ref object that holds a function of type `() =>
void`. You can execute the function to programmatically close the dialog:

```
closeRef.current()
```

##### modalClass?

> `optional` **modalClass**: `string`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:180](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L180)

The CSS class added to the underlying Bootstrap modal.

##### focusFirst?

> `optional` **focusFirst**: `boolean`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:186](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L186)

Set to `false` to disable the default behavior of focusing the first
input.

##### showFooter?

> `optional` **showFooter**: `boolean`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:192](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L192)

Set to `false` to hide the modal footer, which contains the submit and
cancel buttons.

#### Methods

##### onShowValidationChange()

<!-- DEBUG_signatureTitle -->

> **onShowValidationChange**(`showValidation`: `boolean`): `void`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:114](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L114)

A callback that fires when the dialog is submitted.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### showValidation

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`boolean`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`void`

##### onSuccess()

<!-- DEBUG_signatureTitle -->

> **onSuccess**(`payload`: `unknown`): `Promise`\<`void`\>

Defined in: [examples/example-typedoc/src/reactComponents.tsx:126](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L126)

A callback that fires after the `submit` function succeeds.

If the `submit` function returned `responseData`, it is passed to your
`onSuccess` function.

Your `onSuccess` callback must return a promise. The submit button will
continue showing a loading indicator until the promise resolves. This is
to support refetching the data that was updated by the form submission.

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### payload

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`unknown`

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`Promise`\<`void`\>

##### onClose()

<!-- DEBUG_signatureTitle -->

> **onClose**(): `void`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:134](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L134)

A callback that fires when the dialog has completely closed. Your
`onClose` callback should update call, for example,
`setDialogVisible(false)` so that the `EasyFormDialog` is no longer
rendered.

###### Returns

`void`

##### onSubmit()

<!-- DEBUG_signatureTitle -->

> **onSubmit**(`formData`: `Record`\<`string`, `string` \| `boolean`\>): `Promise`\<`void`\> \| `Promise`\<`undefined` \| \{ `shouldClose`: `boolean`; `responseData`: `unknown`; \}\>

Defined in: [examples/example-typedoc/src/reactComponents.tsx:154](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L154)

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

<dl>

<dt>

###### Parameters

</dt>

<dd>

<dl>

<dt>

###### formData

</dt>

<dd data-debug-parm-list>

<dl data-debug-parm-list-6>

`Record`\<`string`, `string` \| `boolean`\>

</dl>

</dd>

</dl>

</dl>

</dd>

</dl>

###### Returns

`Promise`\<`void`\> \| `Promise`\<`undefined` \| \{ `shouldClose`: `boolean`; `responseData`: `unknown`; \}\>

##### onCancel()?

<!-- DEBUG_signatureTitle -->

> `optional` **onCancel**(): `void`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:167](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/reactComponents.tsx#L167)

An uncommonly-used callback that fires when the user clicks the cancel button.

###### Returns

`void`

***

### SimpleTypeAlias

> **SimpleTypeAlias** = `string` \| `number` \| `boolean`

Defined in: [examples/example-typedoc/src/types.ts:2](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/types.ts#L2)

A simple type alias defined using the `type` keyword.

***

### ComplexGenericTypeAlias\<T\>

> **ComplexGenericTypeAlias**\<`T`\> = `T` \| `T`[] \| `Promise`\<`T`\> \| `Promise`\<`T`[]\> \| `Record`\<`string`, `Promise`\<`T`\>\>

Defined in: [examples/example-typedoc/src/types.ts:5](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/types.ts#L5)

A complex generic type.

#### Type Parameters

##### T

`T`

***

### User

Defined in: [examples/example-typedoc/src/types.ts:17](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/types.ts#L17)

A simple interface. Each property has its own doc comment.

TypeDoc even supports doc comments on nested type definitions, as shown by the `name` property.

#### Extended by

- [`AdminUser`](#adminuser)

#### Properties

##### id

> **id**: `number`

Defined in: [examples/example-typedoc/src/types.ts:19](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/types.ts#L19)

The user's ID.

##### email

> **email**: `string`

Defined in: [examples/example-typedoc/src/types.ts:22](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/types.ts#L22)

The user's email address.

##### name

> **name**: \{ `first`: `string`; `last`: `string`; \}

Defined in: [examples/example-typedoc/src/types.ts:25](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/types.ts#L25)

The user's name.

###### first

> **first**: `string`

The person's given name.

###### last

> **last**: `string`

The person's family name.

***

### AdminUser

Defined in: [examples/example-typedoc/src/types.ts:40](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/types.ts#L40)

An interface that extends [\`User\`](#user) and adds more properties.

Notice how TypeDoc automatically shows the inheritance hierarchy and where
each property was originally defined.

#### Extends

- [`User`](#user)

#### Properties

##### id

> **id**: `number`

Defined in: [examples/example-typedoc/src/types.ts:19](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/types.ts#L19)

The user's ID.

###### Inherited from

[`User`](#user).[`id`](#id-3)

##### email

> **email**: `string`

Defined in: [examples/example-typedoc/src/types.ts:22](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/types.ts#L22)

The user's email address.

###### Inherited from

[`User`](#user).[`email`](#email)

##### name

> **name**: \{ `first`: `string`; `last`: `string`; \}

Defined in: [examples/example-typedoc/src/types.ts:25](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/types.ts#L25)

The user's name.

###### first

> **first**: `string`

The person's given name.

###### last

> **last**: `string`

The person's family name.

###### Inherited from

[`User`](#user).[`name`](#name-3)

##### administrativeArea

> **administrativeArea**: `"sales"` \| `"delivery"` \| `"billing"`

Defined in: [examples/example-typedoc/src/types.ts:41](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/types.ts#L41)

##### jobTitle

> **jobTitle**: `string`

Defined in: [examples/example-typedoc/src/types.ts:42](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/types.ts#L42)

***

### PI

> `const` **PI**: `3.14159265359` = `3.14159265359`

Defined in: [examples/example-typedoc/src/variables.ts:2](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/variables.ts#L2)

A simple numeric constant.

***

### STRING\_CONSTANT

> `const` **STRING\_CONSTANT**: `"FOOBAR"` = `"FOOBAR"`

Defined in: [examples/example-typedoc/src/variables.ts:5](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/variables.ts#L5)

A simple string constant.

***

### ObjectConstant

> `const` **ObjectConstant**: \{ `library`: `"typedoc"`; `version`: `"1.2.3"`; `githubStars`: `1000000`; \}

Defined in: [examples/example-typedoc/src/variables.ts:8](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/variables.ts#L8)

An plain JavaScript object using `as const`.

#### Type declaration

##### library

> `readonly` **library**: `"typedoc"` = `"typedoc"`

##### version

> `readonly` **version**: `"1.2.3"` = `"1.2.3"`

##### githubStars

> `readonly` **githubStars**: `1000000` = `1_000_000`

How many people starred us on GitHub.

***

### E

> **E**: `number` = `2.718281828459045235`

Defined in: [examples/example-typedoc/src/variables.ts:22](https://github.com/ocavue/tsdocs/blob/HEAD/examples/example-typedoc/src/variables.ts#L22)

An exported variable defined with `let`.

This pattern should generally be avoided because the variable can be reassigned.

**Generated using `index.page.end` hook**
