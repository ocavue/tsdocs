**TypeDoc Example**

***

https://github.com/TypeStrong/typedoc/tree/v0.28.2/example

## Collection

### lodashSortBy()

Here is a useful function re-exported from Lodash.

#### Call Signature

> **lodashSortBy**\<`T`\>(`collection`, ...`iteratees?`): `T`[]

Defined in: node\_modules/.pnpm/@types+lodash@4.17.16/node\_modules/@types/lodash/common/collection.d.ts:1908

Creates an array of elements, sorted in ascending order by the results of
running each element in a collection through each iteratee. This method
performs a stable sort, that is, it preserves the original sort order of
equal elements. The iteratees are invoked with one argument: (value).

##### Type Parameters

###### T

`T`

##### Parameters

###### collection

The collection to iterate over.

`undefined` | `null` | `List`\<`T`\>

###### iteratees?

...`Many`\<`ListIteratee`\<`T`\>\>[]

The iteratees to sort by, specified individually or in arrays.

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

> **lodashSortBy**\<`T`\>(`collection`, ...`iteratees`): `T`\[keyof `T`\][]

Defined in: node\_modules/.pnpm/@types+lodash@4.17.16/node\_modules/@types/lodash/common/collection.d.ts:1912

##### Type Parameters

###### T

`T` *extends* `object`

##### Parameters

###### collection

`undefined` | `null` | `T`

###### iteratees

...`Many`\<`ObjectIteratee`\<`T`\>\>[]

##### Returns

`T`\[keyof `T`\][]

##### See

_.sortBy

## Component

React Components -- This description is added with the `@categoryDescription` tag
on the entry point in src/index.ts

### CardA()

> **CardA**(`__namedParameters`): `ReactElement`

Defined in: examples/example-typedoc/src/reactComponents.tsx:42

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

#### Parameters

##### \_\_namedParameters

`PropsWithChildren`\<[`CardAProps`](#cardaprops)\>

#### Returns

`ReactElement`

***

### CardB()

> **CardB**(`__namedParameters`): `ReactElement`

Defined in: examples/example-typedoc/src/reactComponents.tsx:74

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

#### Parameters

##### \_\_namedParameters

`PropsWithChildren`\<\{ `variant`: `"primary"` \| `"secondary"` \| `"success"` \| `"danger"` \| `"light"` \| `"dark"`; \}\>

#### Returns

`ReactElement`

***

### EasyFormDialog()

> **EasyFormDialog**(`props`): `ReactElement`

Defined in: examples/example-typedoc/src/reactComponents.tsx:254

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

#### Parameters

##### props

`PropsWithChildren`\<[`EasyFormDialogProps`](#easyformdialogprops)\>

#### Returns

`ReactElement`

## Documents

- [External Markdown](documents/External-Markdown.md)
- [Markdown Showcase](documents/Markdown-Showcase.md)
- [Syntax Highlighting](documents/Syntax-Highlighting.md)
- [Include and Include Code](documents/Include-and-Include-Code.md)

## Model

### `abstract` Customer

Defined in: examples/example-typedoc/src/classes/Customer.ts:8

An abstract base class for the customer entity in our application.

Notice how TypeDoc shows the inheritance hierarchy for our class.

#### Extended by

- [`DeliveryCustomer`](#deliverycustomer)
- [`WalkInCustomer`](#walkincustomer)

#### Constructors

##### Constructor

> **new Customer**(`id`, `name`, `nextOrderNumber`): [`Customer`](#customer)

Defined in: examples/example-typedoc/src/classes/Customer.ts:48

The constructor of the `Customer` class.

###### Parameters

###### id

`number`

the customer's database ID

###### name

`string`

the customer's name

###### nextOrderNumber

the next number to use when this customer places an order

`string` | `number`

###### Returns

[`Customer`](#customer)

#### Properties

##### id

> `readonly` **id**: `number`

Defined in: examples/example-typedoc/src/classes/Customer.ts:10

A public readonly property.

##### name

> **name**: `string`

Defined in: examples/example-typedoc/src/classes/Customer.ts:13

A public property that can be reassigned.

##### contactName?

> `protected` `optional` **contactName**: `string`

Defined in: examples/example-typedoc/src/classes/Customer.ts:16

An optional protected property.

#### Accessors

##### nextOrderNumber

###### Get Signature

> **get** **nextOrderNumber**(): `string`

Defined in: examples/example-typedoc/src/classes/Customer.ts:25

A getter that prepends a number sign to the private `_nextOrderNumber`
property.

###### Returns

`string`

###### Set Signature

> **set** **nextOrderNumber**(`value`): `void`

Defined in: examples/example-typedoc/src/classes/Customer.ts:33

A setter that takes in either a string or a number and sets the private
`_nextOrderNumber` property.

###### Parameters

###### value

`string` | `number`

###### Returns

`void`

#### Methods

##### onOrderPlaced()

> **onOrderPlaced**(): `void`

Defined in: examples/example-typedoc/src/classes/Customer.ts:56

A public method. To be called when an order is placed for this customer.

###### Returns

`void`

##### onOrderPlacedArrowFunction()

> **onOrderPlacedArrowFunction**(): `void`

Defined in: examples/example-typedoc/src/classes/Customer.ts:65

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

###### Returns

`void`

##### isValid()

> `protected` **isValid**(): `boolean`

Defined in: examples/example-typedoc/src/classes/Customer.ts:70

A protected method.

###### Returns

`boolean`

## Other

### CancellablePromise\<T\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:52

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

> **new CancellablePromise**\<`T`\>(`promise`, `cancel`): [`CancellablePromise`](#cancellablepromise)\<`T`\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:76

###### Parameters

###### promise

`PromiseLike`\<`T`\>

a normal promise or thenable

###### cancel

(`reason?`) => `void`

a function that cancels `promise`. **Calling `cancel` after
`promise` has resolved must be a no-op.**

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`T`\>

#### Properties

##### promise

> `protected` `readonly` **promise**: `Promise`\<`T`\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:60

As a consumer of the library, you shouldn't ever need to access
`CancellablePromise.promise` directly.

If you are subclassing `CancellablePromise` for some reason, you
can access this property.

##### cancel()

> `readonly` **cancel**: (`reason?`) => `void`

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:69

Cancel the `CancellablePromise`.

###### Parameters

###### reason?

`string`

###### Returns

`void`

#### Methods

Descriptions can be added for groups with `@groupDescription`, which will show up in
the index where groups are listed. This works for both manually created groups which
are created with `@group`, and implicit groups like the `Methods` group that this
description is attached to.

##### then()

> **then**\<`TResult1`, `TResult2`\>(`onFulfilled?`, `onRejected?`): [`CancellablePromise`](#cancellablepromise)\<`TResult1` \| `TResult2`\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:101

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

###### Parameters

###### onFulfilled?

`null` | (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\>

###### onRejected?

`null` | (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`TResult1` \| `TResult2`\>

a new CancellablePromise

##### catch()

> **catch**\<`TResult`\>(`onRejected?`): [`CancellablePromise`](#cancellablepromise)\<`T` \| `TResult`\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:152

Analogous to `Promise.catch`.

###### Type Parameters

###### TResult

`TResult` = `never`

###### Parameters

###### onRejected?

`null` | (`reason`) => `TResult` \| `PromiseLike`\<`TResult`\>

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`T` \| `TResult`\>

##### finally()

> **finally**(`onFinally?`): [`CancellablePromise`](#cancellablepromise)\<`T`\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:169

Attaches a callback that is invoked when the Promise is settled
(fulfilled or rejected). The resolved value cannot be modified from the
callback.

###### Parameters

###### onFinally?

The callback to execute when the Promise is settled
(fulfilled or rejected).

`null` | () => `void`

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`T`\>

A Promise for the completion of the callback.

##### resolve()

###### Call Signature

> `static` **resolve**(): [`CancellablePromise`](#cancellablepromise)\<`void`\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:185

Analogous to `Promise.resolve`.

The returned promise should resolve even if it is canceled. The idea is
that the promise is resolved instantaneously, so by the time the promise
is canceled, it has already resolved.

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`void`\>

###### Call Signature

> `static` **resolve**\<`T`\>(`value`): [`CancellablePromise`](#cancellablepromise)\<`T`\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:187

Analogous to `Promise.resolve`.

The returned promise should resolve even if it is canceled. The idea is
that the promise is resolved instantaneously, so by the time the promise
is canceled, it has already resolved.

###### Type Parameters

###### T

`T`

###### Parameters

###### value

`T`

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`T`\>

##### reject()

> `static` **reject**\<`T`\>(`reason?`): [`CancellablePromise`](#cancellablepromise)\<`T`\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:201

Analogous to `Promise.reject`.

Like `CancellablePromise.resolve`, canceling the returned
`CancellablePromise` is a no-op.

###### Type Parameters

###### T

`T`

###### Parameters

###### reason?

`unknown`

this should probably be an `Error` object

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`T`\>

##### all()

Analogous to `Promise.all`.

###### Param

an array that may contain `CancellablePromise`s, promises,
thenables, and resolved values

###### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\]\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:205

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

###### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>, `T9` \| `PromiseLike`\<`T9`\>, `T10` \| `PromiseLike`\<`T10`\>\]

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\]\>

###### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\]\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:220

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

###### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>, `T9` \| `PromiseLike`\<`T9`\>\]

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\]\>

###### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\]\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:234

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

###### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>\]

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\]\>

###### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\]\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:247

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

###### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>\]

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\]\>

###### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\]\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:259

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

###### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>\]

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\]\>

###### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`\]\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:270

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

###### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>\]

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`\]\>

###### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`\]\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:280

###### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### T4

`T4`

###### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>\]

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`\]\>

###### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`\]\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:289

###### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### T3

`T3`

###### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>\]

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`\]\>

###### Call Signature

> `static` **all**\<`T1`, `T2`\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`\]\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:297

###### Type Parameters

###### T1

`T1`

###### T2

`T2`

###### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>\]

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`\]\>

###### Call Signature

> `static` **all**\<`T`\>(`values`): [`CancellablePromise`](#cancellablepromise)\<`T`[]\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:301

###### Type Parameters

###### T

`T`

###### Parameters

###### values

readonly (`T` \| `PromiseLike`\<`T`\>)[]

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`T`[]\>

##### allSettled()

###### Call Signature

> `static` **allSettled**\<`T`\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<T\[P\<P\>\] extends PromiseLike\<U\> ? U : T\[P\<P\>\]\> \}\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:327

Creates a `CancellablePromise` that is resolved with an array of results
when all of the provided `Promises` resolve or reject.

###### Type Parameters

###### T

`T` *extends* readonly `unknown`[] \| readonly \[`unknown`\]

###### Parameters

###### values

`T`

An array of `Promises`.

###### Returns

[`CancellablePromise`](#cancellablepromise)\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<T\[P\<P\>\] extends PromiseLike\<U\> ? U : T\[P\<P\>\]\> \}\>

A new `CancellablePromise`.

###### Call Signature

> `static` **allSettled**\<`T`\>(`values`): [`CancellablePromise`](#cancellablepromise)\<`PromiseSettledResult`\<`T` *extends* `PromiseLike`\<`U`\> ? `U` : `T`\>[]\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:345

Creates a `CancellablePromise` that is resolved with an array of results
when all of the provided `Promise`s resolve or reject.

###### Type Parameters

###### T

`T`

###### Parameters

###### values

`Iterable`\<`T`\>

An array of `Promise`s.

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`PromiseSettledResult`\<`T` *extends* `PromiseLike`\<`U`\> ? `U` : `T`\>[]\>

A new `CancellablePromise`. Canceling it cancels all of the input
promises.

##### race()

> `static` **race**\<`T`\>(`values`): [`CancellablePromise`](#cancellablepromise)\<`Awaited`\<`T`\>\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:370

Creates a `CancellablePromise` that is resolved or rejected when any of
the provided `Promises` are resolved or rejected.

###### Type Parameters

###### T

`T`

###### Parameters

###### values

readonly `T`[]

An array of `Promises`.

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`Awaited`\<`T`\>\>

A new `CancellablePromise`. Canceling it cancels all of the input
promises.

##### delay()

> `static` **delay**(`ms`): [`CancellablePromise`](#cancellablepromise)\<`void`\>

Defined in: examples/example-typedoc/src/classes/CancellablePromise.ts:385

###### Parameters

###### ms

`number`

###### Returns

[`CancellablePromise`](#cancellablepromise)\<`void`\>

a `CancellablePromise` that resolves after `ms` milliseconds.

***

### DeliveryCustomer

Defined in: examples/example-typedoc/src/classes/Customer.ts:85

A class that extends [\`Customer\`](#customer).

Notice how TypeDoc shows the inheritance hierarchy for our class.

#### Extends

- [`Customer`](#customer)

#### Constructors

##### Constructor

> **new DeliveryCustomer**(`id`, `name`, `nextOrderNumber`, `subscriptionType`): [`DeliveryCustomer`](#deliverycustomer)

Defined in: examples/example-typedoc/src/classes/Customer.ts:100

The constructor of the `DeliveryCustomer` class.

###### Parameters

###### id

`number`

the customer's database ID

###### name

`string`

the customer's name

###### nextOrderNumber

the next number to use when this customer places an order

`string` | `number`

###### subscriptionType

whether this customer has a basic or enterprise subscription

`"basic"` | `"enterprise"`

###### Returns

[`DeliveryCustomer`](#deliverycustomer)

###### Overrides

[`Customer`](#customer).[`constructor`](#constructor-1)

#### Properties

##### id

> `readonly` **id**: `number`

Defined in: examples/example-typedoc/src/classes/Customer.ts:10

A public readonly property.

###### Inherited from

[`Customer`](#customer).[`id`](#id)

##### name

> **name**: `string`

Defined in: examples/example-typedoc/src/classes/Customer.ts:13

A public property that can be reassigned.

###### Inherited from

[`Customer`](#customer).[`name`](#name)

##### contactName?

> `protected` `optional` **contactName**: `string`

Defined in: examples/example-typedoc/src/classes/Customer.ts:16

An optional protected property.

###### Inherited from

[`Customer`](#customer).[`contactName`](#contactname)

##### preferredCourierId?

> `optional` **preferredCourierId**: `number`

Defined in: examples/example-typedoc/src/classes/Customer.ts:87

A property defined on the subclass.

##### subscriptionType

> `readonly` **subscriptionType**: `"basic"` \| `"enterprise"`

Defined in: examples/example-typedoc/src/classes/Customer.ts:90

Another property defined on the subclass.

#### Accessors

##### nextOrderNumber

###### Get Signature

> **get** **nextOrderNumber**(): `string`

Defined in: examples/example-typedoc/src/classes/Customer.ts:25

A getter that prepends a number sign to the private `_nextOrderNumber`
property.

###### Returns

`string`

###### Set Signature

> **set** **nextOrderNumber**(`value`): `void`

Defined in: examples/example-typedoc/src/classes/Customer.ts:33

A setter that takes in either a string or a number and sets the private
`_nextOrderNumber` property.

###### Parameters

###### value

`string` | `number`

###### Returns

`void`

###### Inherited from

[`Customer`](#customer).[`nextOrderNumber`](#nextordernumber)

#### Methods

##### onOrderPlaced()

> **onOrderPlaced**(): `void`

Defined in: examples/example-typedoc/src/classes/Customer.ts:56

A public method. To be called when an order is placed for this customer.

###### Returns

`void`

###### Inherited from

[`Customer`](#customer).[`onOrderPlaced`](#onorderplaced)

##### onOrderPlacedArrowFunction()

> **onOrderPlacedArrowFunction**(): `void`

Defined in: examples/example-typedoc/src/classes/Customer.ts:65

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

###### Returns

`void`

###### Inherited from

[`Customer`](#customer).[`onOrderPlacedArrowFunction`](#onorderplacedarrowfunction)

##### isValid()

> `protected` **isValid**(): `boolean`

Defined in: examples/example-typedoc/src/classes/Customer.ts:116

An example of overriding a protected method.

A `DeliveryCustomer` can only have a preferred courier if its
subscription type is enterprise.

###### Returns

`boolean`

###### Overrides

[`Customer`](#customer).[`isValid`](#isvalid)

***

### WalkInCustomer

Defined in: examples/example-typedoc/src/classes/Customer.ts:129

A class that extends [\`Customer\`](#customer).

Notice how TypeDoc shows the inheritance hierarchy for our class.

#### Extends

- [`Customer`](#customer)

#### Constructors

##### Constructor

> **new WalkInCustomer**(`id`, `name`, `nextOrderNumber`): [`WalkInCustomer`](#walkincustomer)

Defined in: examples/example-typedoc/src/classes/Customer.ts:48

The constructor of the `Customer` class.

###### Parameters

###### id

`number`

the customer's database ID

###### name

`string`

the customer's name

###### nextOrderNumber

the next number to use when this customer places an order

`string` | `number`

###### Returns

[`WalkInCustomer`](#walkincustomer)

###### Inherited from

[`Customer`](#customer).[`constructor`](#constructor-1)

#### Properties

##### id

> `readonly` **id**: `number`

Defined in: examples/example-typedoc/src/classes/Customer.ts:10

A public readonly property.

###### Inherited from

[`Customer`](#customer).[`id`](#id)

##### name

> **name**: `string`

Defined in: examples/example-typedoc/src/classes/Customer.ts:13

A public property that can be reassigned.

###### Inherited from

[`Customer`](#customer).[`name`](#name)

##### contactName?

> `protected` `optional` **contactName**: `string`

Defined in: examples/example-typedoc/src/classes/Customer.ts:16

An optional protected property.

###### Inherited from

[`Customer`](#customer).[`contactName`](#contactname)

##### trustedCustomer?

> `optional` **trustedCustomer**: `boolean`

Defined in: examples/example-typedoc/src/classes/Customer.ts:131

A property defined on the subclass.

#### Accessors

##### nextOrderNumber

###### Get Signature

> **get** **nextOrderNumber**(): `string`

Defined in: examples/example-typedoc/src/classes/Customer.ts:25

A getter that prepends a number sign to the private `_nextOrderNumber`
property.

###### Returns

`string`

###### Set Signature

> **set** **nextOrderNumber**(`value`): `void`

Defined in: examples/example-typedoc/src/classes/Customer.ts:33

A setter that takes in either a string or a number and sets the private
`_nextOrderNumber` property.

###### Parameters

###### value

`string` | `number`

###### Returns

`void`

###### Inherited from

[`Customer`](#customer).[`nextOrderNumber`](#nextordernumber)

#### Methods

##### onOrderPlacedArrowFunction()

> **onOrderPlacedArrowFunction**(): `void`

Defined in: examples/example-typedoc/src/classes/Customer.ts:65

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

###### Returns

`void`

###### Inherited from

[`Customer`](#customer).[`onOrderPlacedArrowFunction`](#onorderplacedarrowfunction)

##### isValid()

> `protected` **isValid**(): `boolean`

Defined in: examples/example-typedoc/src/classes/Customer.ts:70

A protected method.

###### Returns

`boolean`

###### Inherited from

[`Customer`](#customer).[`isValid`](#isvalid)

##### onOrderPlaced()

> **onOrderPlaced**(): `void`

Defined in: examples/example-typedoc/src/classes/Customer.ts:139

An example of overriding a public method.

###### Returns

`void`

###### Overrides

[`Customer`](#customer).[`onOrderPlaced`](#onorderplaced)

***

### StringArray

Defined in: examples/example-typedoc/src/classes/StringArray.ts:14

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

> **new StringArray**(`arrayLength`): [`StringArray`](#stringarray)

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1515

###### Parameters

###### arrayLength

`number`

###### Returns

[`StringArray`](#stringarray)

###### Inherited from

`Array<string>.constructor`

##### Constructor

> **new StringArray**(...`items`): [`StringArray`](#stringarray)

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1516

###### Parameters

###### items

...`string`[]

###### Returns

[`StringArray`](#stringarray)

###### Inherited from

`Array<string>.constructor`

#### Properties

##### \[unscopables\]

> `readonly` **\[unscopables\]**: `object`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:97

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

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:316

###### Inherited from

`Array.[species]`

##### length

> **length**: `number`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1329

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

###### Inherited from

`Array.length`

#### Methods

##### customMethod()

> **customMethod**(): `void`

Defined in: examples/example-typedoc/src/classes/StringArray.ts:16

A method that extends the functionality of a basic JavaScript array.

###### Returns

`void`

##### find()

###### Call Signature

> **find**\<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:29

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

###### Type Parameters

###### S

`S` *extends* `string`

###### Parameters

###### predicate

(`value`, `index`, `obj`) => `value is S`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

###### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

###### Returns

`undefined` \| `S`

###### Inherited from

`Array.find`

###### Call Signature

> **find**(`predicate`, `thisArg?`): `undefined` \| `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:30

###### Parameters

###### predicate

(`value`, `index`, `obj`) => `unknown`

###### thisArg?

`any`

###### Returns

`undefined` \| `string`

###### Inherited from

`Array.find`

##### findIndex()

> **findIndex**(`predicate`, `thisArg?`): `number`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:41

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

###### Parameters

###### predicate

(`value`, `index`, `obj`) => `unknown`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

###### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

###### Returns

`number`

###### Inherited from

`Array.findIndex`

##### fill()

> **fill**(`value`, `start?`, `end?`): `this`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:51

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

###### Parameters

###### value

`string`

value to fill array section with

###### start?

`number`

index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.

###### end?

`number`

index to stop filling the array at. If end is negative, it is treated as
length+end.

###### Returns

`this`

###### Inherited from

`Array.fill`

##### copyWithin()

> **copyWithin**(`target`, `start`, `end?`): `this`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:62

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

###### Parameters

###### target

`number`

If target is negative, it is treated as length+target where length is the
length of the array.

###### start

`number`

If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.

###### end?

`number`

If not specified, length of the this object is used as its default value.

###### Returns

`this`

###### Inherited from

`Array.copyWithin`

##### from()

###### Call Signature

> `static` **from**\<`T`\>(`arrayLike`): `T`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:72

Creates an array from an array-like object.

###### Type Parameters

###### T

`T`

###### Parameters

###### arrayLike

`ArrayLike`\<`T`\>

An array-like object to convert to an array.

###### Returns

`T`[]

###### Inherited from

`Array.from`

###### Call Signature

> `static` **from**\<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:80

Creates an array from an iterable object.

###### Type Parameters

###### T

`T`

###### U

`U`

###### Parameters

###### arrayLike

`ArrayLike`\<`T`\>

An array-like object to convert to an array.

###### mapfn

(`v`, `k`) => `U`

A mapping function to call on every element of the array.

###### thisArg?

`any`

Value of 'this' used to invoke the mapfn.

###### Returns

`U`[]

###### Inherited from

`Array.from`

###### Call Signature

> `static` **from**\<`T`\>(`iterable`): `T`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:101

Creates an array from an iterable object.

###### Type Parameters

###### T

`T`

###### Parameters

###### iterable

An iterable object to convert to an array.

`Iterable`\<`T`, `any`, `any`\> | `ArrayLike`\<`T`\>

###### Returns

`T`[]

###### Inherited from

`Array.from`

###### Call Signature

> `static` **from**\<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:109

Creates an array from an iterable object.

###### Type Parameters

###### T

`T`

###### U

`U`

###### Parameters

###### iterable

An iterable object to convert to an array.

`Iterable`\<`T`, `any`, `any`\> | `ArrayLike`\<`T`\>

###### mapfn

(`v`, `k`) => `U`

A mapping function to call on every element of the array.

###### thisArg?

`any`

Value of 'this' used to invoke the mapfn.

###### Returns

`U`[]

###### Inherited from

`Array.from`

##### of()

> `static` **of**\<`T`\>(...`items`): `T`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:86

Returns a new array from a set of elements.

###### Type Parameters

###### T

`T`

###### Parameters

###### items

...`T`[]

A set of elements to include in the new array object.

###### Returns

`T`[]

###### Inherited from

`Array.of`

##### \[iterator\]()

> **\[iterator\]**(): `ArrayIterator`\<`string`\>

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:78

Iterator

###### Returns

`ArrayIterator`\<`string`\>

###### Inherited from

`Array.[iterator]`

##### entries()

> **entries**(): `ArrayIterator`\<\[`number`, `string`\]\>

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:83

Returns an iterable of key, value pairs for every entry in the array

###### Returns

`ArrayIterator`\<\[`number`, `string`\]\>

###### Inherited from

`Array.entries`

##### keys()

> **keys**(): `ArrayIterator`\<`number`\>

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:88

Returns an iterable of keys in the array

###### Returns

`ArrayIterator`\<`number`\>

###### Inherited from

`Array.keys`

##### values()

> **values**(): `ArrayIterator`\<`string`\>

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:93

Returns an iterable of values in the array

###### Returns

`ArrayIterator`\<`string`\>

###### Inherited from

`Array.values`

##### includes()

> **includes**(`searchElement`, `fromIndex?`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2016.array.include.d.ts:25

Determines whether an array includes a certain element, returning true or false as appropriate.

###### Parameters

###### searchElement

`string`

The element to search for.

###### fromIndex?

`number`

The position in this array at which to begin searching for searchElement.

###### Returns

`boolean`

###### Inherited from

`Array.includes`

##### flatMap()

> **flatMap**\<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2019.array.d.ts:64

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

###### Type Parameters

###### U

`U`

###### This

`This` = `undefined`

###### Parameters

###### callback

(`this`, `value`, `index`, `array`) => `U` \| readonly `U`[]

A function that accepts up to three arguments. The flatMap method calls the
callback function one time for each element in the array.

###### thisArg?

`This`

An object to which the this keyword can refer in the callback function. If
thisArg is omitted, undefined is used as the this value.

###### Returns

`U`[]

###### Inherited from

`Array.flatMap`

##### flat()

> **flat**\<`A`, `D`\>(`this`, `depth?`): `FlatArray`\<`A`, `D`\>[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2019.array.d.ts:75

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

###### Type Parameters

###### A

`A`

###### D

`D` *extends* `number` = `1`

###### Parameters

###### this

`A`

###### depth?

`D`

The maximum recursion depth

###### Returns

`FlatArray`\<`A`, `D`\>[]

###### Inherited from

`Array.flat`

##### at()

> **at**(`index`): `undefined` \| `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2022.array.d.ts:24

Returns the item located at the specified index.

###### Parameters

###### index

`number`

The zero-based index of the desired code unit. A negative index will count back from the last item.

###### Returns

`undefined` \| `string`

###### Inherited from

`Array.at`

##### findLast()

###### Call Signature

> **findLast**\<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2023.array.d.ts:29

Returns the value of the last element in the array where predicate is true, and undefined
otherwise.

###### Type Parameters

###### S

`S` *extends* `string`

###### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

findLast calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found, findLast
immediately returns that element value. Otherwise, findLast returns undefined.

###### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

###### Returns

`undefined` \| `S`

###### Inherited from

`Array.findLast`

###### Call Signature

> **findLast**(`predicate`, `thisArg?`): `undefined` \| `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2023.array.d.ts:30

###### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

###### thisArg?

`any`

###### Returns

`undefined` \| `string`

###### Inherited from

`Array.findLast`

##### findLastIndex()

> **findLastIndex**(`predicate`, `thisArg?`): `number`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2023.array.d.ts:41

Returns the index of the last element in the array where predicate is true, and -1
otherwise.

###### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

findLastIndex calls predicate once for each element of the array, in descending
order, until it finds one where predicate returns true. If such an element is found,
findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.

###### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

###### Returns

`number`

###### Inherited from

`Array.findLastIndex`

##### toReversed()

> **toReversed**(): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2023.array.d.ts:46

Returns a copy of an array with its elements reversed.

###### Returns

`string`[]

###### Inherited from

`Array.toReversed`

##### toSorted()

> **toSorted**(`compareFn?`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2023.array.d.ts:57

Returns a copy of an array with its elements sorted.

###### Parameters

###### compareFn?

(`a`, `b`) => `number`

Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.
```ts
[11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22]
```

###### Returns

`string`[]

###### Inherited from

`Array.toSorted`

##### toSpliced()

###### Call Signature

> **toSpliced**(`start`, `deleteCount`, ...`items`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2023.array.d.ts:66

Copies an array and removes elements and, if necessary, inserts new elements in their place. Returns the copied array.

###### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount

`number`

The number of elements to remove.

###### items

...`string`[]

Elements to insert into the copied array in place of the deleted elements.

###### Returns

`string`[]

The copied array.

###### Inherited from

`Array.toSpliced`

###### Call Signature

> **toSpliced**(`start`, `deleteCount?`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2023.array.d.ts:74

Copies an array and removes elements while returning the remaining elements.

###### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount?

`number`

The number of elements to remove.

###### Returns

`string`[]

A copy of the original array with the remaining elements.

###### Inherited from

`Array.toSpliced`

##### with()

> **with**(`index`, `value`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2023.array.d.ts:85

Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array.

###### Parameters

###### index

`number`

The index of the value to overwrite. If the index is
negative, then it replaces from the end of the array.

###### value

`string`

The value to write into the copied array.

###### Returns

`string`[]

The copied array with the updated value.

###### Inherited from

`Array.with`

##### toString()

> **toString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1333

Returns a string representation of an array.

###### Returns

`string`

###### Inherited from

`Array.toString`

##### toLocaleString()

###### Call Signature

> **toLocaleString**(): `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1337

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

###### Returns

`string`

###### Inherited from

`Array.toLocaleString`

###### Call Signature

> **toLocaleString**(`locales`, `options?`): `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es2015.core.d.ts:64

###### Parameters

###### locales

`string` | `string`[]

###### options?

`NumberFormatOptions` & `DateTimeFormatOptions`

###### Returns

`string`

###### Inherited from

`Array.toLocaleString`

##### pop()

> **pop**(): `undefined` \| `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1342

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

###### Returns

`undefined` \| `string`

###### Inherited from

`Array.pop`

##### push()

> **push**(...`items`): `number`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1347

Appends new elements to the end of an array, and returns the new length of the array.

###### Parameters

###### items

...`string`[]

New elements to add to the array.

###### Returns

`number`

###### Inherited from

`Array.push`

##### concat()

###### Call Signature

> **concat**(...`items`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1353

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

###### Parameters

###### items

...`ConcatArray`\<`string`\>[]

Additional arrays and/or items to add to the end of the array.

###### Returns

`string`[]

###### Inherited from

`Array.concat`

###### Call Signature

> **concat**(...`items`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1359

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

###### Parameters

###### items

...(`string` \| `ConcatArray`\<`string`\>)[]

Additional arrays and/or items to add to the end of the array.

###### Returns

`string`[]

###### Inherited from

`Array.concat`

##### join()

> **join**(`separator?`): `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1364

Adds all the elements of an array into a string, separated by the specified separator string.

###### Parameters

###### separator?

`string`

A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

###### Returns

`string`

###### Inherited from

`Array.join`

##### reverse()

> **reverse**(): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1369

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

###### Returns

`string`[]

###### Inherited from

`Array.reverse`

##### shift()

> **shift**(): `undefined` \| `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1374

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

###### Returns

`undefined` \| `string`

###### Inherited from

`Array.shift`

##### slice()

> **slice**(`start?`, `end?`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1384

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

###### Parameters

###### start?

`number`

The beginning index of the specified portion of the array.
If start is undefined, then the slice begins at index 0.

###### end?

`number`

The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.
If end is undefined, then the slice extends to the end of the array.

###### Returns

`string`[]

###### Inherited from

`Array.slice`

##### sort()

> **sort**(`compareFn?`): `this`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1395

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

###### Parameters

###### compareFn?

(`a`, `b`) => `number`

Function used to determine the order of the elements. It is expected to return
a negative value if the first argument is less than the second argument, zero if they're equal, and a positive
value otherwise. If omitted, the elements are sorted in ascending, UTF-16 code unit order.
```ts
[11,2,22,1].sort((a, b) => a - b)
```

###### Returns

`this`

###### Inherited from

`Array.sort`

##### splice()

###### Call Signature

> **splice**(`start`, `deleteCount?`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1404

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

###### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount?

`number`

The number of elements to remove. Omitting this argument will remove all elements from the start
paramater location to end of the array. If value of this argument is either a negative number, zero, undefined, or a type
that cannot be converted to an integer, the function will evaluate the argument as zero and not remove any elements.

###### Returns

`string`[]

An array containing the elements that were deleted.

###### Inherited from

`Array.splice`

###### Call Signature

> **splice**(`start`, `deleteCount`, ...`items`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1414

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

###### Parameters

###### start

`number`

The zero-based location in the array from which to start removing elements.

###### deleteCount

`number`

The number of elements to remove. If value of this argument is either a negative number, zero,
undefined, or a type that cannot be converted to an integer, the function will evaluate the argument as zero and
not remove any elements.

###### items

...`string`[]

Elements to insert into the array in place of the deleted elements.

###### Returns

`string`[]

An array containing the elements that were deleted.

###### Inherited from

`Array.splice`

##### unshift()

> **unshift**(...`items`): `number`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1419

Inserts new elements at the start of an array, and returns the new length of the array.

###### Parameters

###### items

...`string`[]

Elements to insert at the start of the array.

###### Returns

`number`

###### Inherited from

`Array.unshift`

##### indexOf()

> **indexOf**(`searchElement`, `fromIndex?`): `number`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1425

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

###### Parameters

###### searchElement

`string`

The value to locate in the array.

###### fromIndex?

`number`

The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.

###### Returns

`number`

###### Inherited from

`Array.indexOf`

##### lastIndexOf()

> **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1431

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

###### Parameters

###### searchElement

`string`

The value to locate in the array.

###### fromIndex?

`number`

The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array.

###### Returns

`number`

###### Inherited from

`Array.lastIndexOf`

##### every()

###### Call Signature

> **every**\<`S`\>(`predicate`, `thisArg?`): `this is S[]`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1440

Determines whether all the members of an array satisfy the specified test.

###### Type Parameters

###### S

`S` *extends* `string`

###### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

###### Returns

`this is S[]`

###### Inherited from

`Array.every`

###### Call Signature

> **every**(`predicate`, `thisArg?`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1449

Determines whether all the members of an array satisfy the specified test.

###### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

###### Returns

`boolean`

###### Inherited from

`Array.every`

##### some()

> **some**(`predicate`, `thisArg?`): `boolean`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1458

Determines whether the specified callback function returns true for any element of an array.

###### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

###### Returns

`boolean`

###### Inherited from

`Array.some`

##### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1464

Performs the specified action for each element in an array.

###### Parameters

###### callbackfn

(`value`, `index`, `array`) => `void`

A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

###### Returns

`void`

###### Inherited from

`Array.forEach`

##### map()

> **map**\<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1470

Calls a defined callback function on each element of an array, and returns an array that contains the results.

###### Type Parameters

###### U

`U`

###### Parameters

###### callbackfn

(`value`, `index`, `array`) => `U`

A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.

###### Returns

`U`[]

###### Inherited from

`Array.map`

##### filter()

###### Call Signature

> **filter**\<`S`\>(`predicate`, `thisArg?`): `S`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1476

Returns the elements of an array that meet the condition specified in a callback function.

###### Type Parameters

###### S

`S` *extends* `string`

###### Parameters

###### predicate

(`value`, `index`, `array`) => `value is S`

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

###### Returns

`S`[]

###### Inherited from

`Array.filter`

###### Call Signature

> **filter**(`predicate`, `thisArg?`): `string`[]

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1482

Returns the elements of an array that meet the condition specified in a callback function.

###### Parameters

###### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

###### thisArg?

`any`

An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.

###### Returns

`string`[]

###### Inherited from

`Array.filter`

##### reduce()

###### Call Signature

> **reduce**(`callbackfn`): `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1488

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

###### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `string`

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

###### Returns

`string`

###### Inherited from

`Array.reduce`

###### Call Signature

> **reduce**(`callbackfn`, `initialValue`): `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1489

###### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `string`

###### initialValue

`string`

###### Returns

`string`

###### Inherited from

`Array.reduce`

###### Call Signature

> **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1495

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

###### Type Parameters

###### U

`U`

###### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

###### Returns

`U`

###### Inherited from

`Array.reduce`

##### reduceRight()

###### Call Signature

> **reduceRight**(`callbackfn`): `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1501

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

###### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `string`

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

###### Returns

`string`

###### Inherited from

`Array.reduceRight`

###### Call Signature

> **reduceRight**(`callbackfn`, `initialValue`): `string`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1502

###### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `string`

###### initialValue

`string`

###### Returns

`string`

###### Inherited from

`Array.reduceRight`

###### Call Signature

> **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1508

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

###### Type Parameters

###### U

`U`

###### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

###### Returns

`U`

###### Inherited from

`Array.reduceRight`

##### isArray()

> `static` **isArray**(`arg`): `arg is any[]`

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.es5.d.ts:1520

###### Parameters

###### arg

`any`

###### Returns

`arg is any[]`

###### Inherited from

`Array.isArray`

##### fromAsync()

###### Call Signature

> `static` **fromAsync**\<`T`\>(`iterableOrArrayLike`): `Promise`\<`T`[]\>

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.esnext.array.d.ts:24

Creates an array from an async iterator or iterable object.

###### Type Parameters

###### T

`T`

###### Parameters

###### iterableOrArrayLike

An async iterator or array-like object to convert to an array.

`AsyncIterable`\<`T`, `any`, `any`\> | `Iterable`\<`T` \| `PromiseLike`\<`T`\>, `any`, `any`\> | `ArrayLike`\<`T` \| `PromiseLike`\<`T`\>\>

###### Returns

`Promise`\<`T`[]\>

###### Inherited from

`Array.fromAsync`

###### Call Signature

> `static` **fromAsync**\<`T`, `U`\>(`iterableOrArrayLike`, `mapFn`, `thisArg?`): `Promise`\<`Awaited`\<`U`\>[]\>

Defined in: node\_modules/.pnpm/typescript@5.9.2/node\_modules/typescript/lib/lib.esnext.array.d.ts:34

Creates an array from an async iterator or iterable object.

###### Type Parameters

###### T

`T`

###### U

`U`

###### Parameters

###### iterableOrArrayLike

An async iterator or array-like object to convert to an array.

`AsyncIterable`\<`T`, `any`, `any`\> | `Iterable`\<`T`, `any`, `any`\> | `ArrayLike`\<`T`\>

###### mapFn

(`value`, `index`) => `U`

###### thisArg?

`any`

Value of 'this' used when executing mapfn.

###### Returns

`Promise`\<`Awaited`\<`U`\>[]\>

###### Inherited from

`Array.fromAsync`

***

### SimpleEnum

Defined in: examples/example-typedoc/src/enums.ts:5

Describes the status of a delivery order.

#### Enumeration Members

##### Pending

> **Pending**: `0`

Defined in: examples/example-typedoc/src/enums.ts:7

This order has just been placed and is yet to be processed.

##### InProgress

> **InProgress**: `1`

Defined in: examples/example-typedoc/src/enums.ts:10

A courier is en route delivering this order.

##### Complete

> **Complete**: `"COMPLETE"`

Defined in: examples/example-typedoc/src/enums.ts:13

The order has been delivered.

***

### CrazyEnum

Defined in: examples/example-typedoc/src/enums.ts:26

[A crazy enum from the TypeScript
handbook](https://www.typescriptlang.org/docs/handbook/enums.html#computed-and-constant-members).
This enum contains both constant and computed members.

TypeDoc won't show the value of computed members since this information is
only available at runtime.

#### Enumeration Members

##### None

> **None**: `0`

Defined in: examples/example-typedoc/src/enums.ts:28

##### Read

> **Read**: `2`

Defined in: examples/example-typedoc/src/enums.ts:29

##### Write

> **Write**: `4`

Defined in: examples/example-typedoc/src/enums.ts:30

##### ReadWrite

> **ReadWrite**: `6`

Defined in: examples/example-typedoc/src/enums.ts:31

##### ComputedMember

> **ComputedMember**: `number`

Defined in: examples/example-typedoc/src/enums.ts:33

***

### EnumLikeObject

Defined in: examples/example-typedoc/src/enums.ts:51

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

Defined in: examples/example-typedoc/src/enums.ts:52

##### InProgress

> **InProgress**: `"inProgress"`

Defined in: examples/example-typedoc/src/enums.ts:55

Indicates that a courier is en route delivering this order.

##### Completed

> **Completed**: `"completed"`

Defined in: examples/example-typedoc/src/enums.ts:57

***

### EnumLikeObjectNumValues

Defined in: examples/example-typedoc/src/enums.ts:75

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

Defined in: examples/example-typedoc/src/enums.ts:76

##### InProgress

> **InProgress**: `2`

Defined in: examples/example-typedoc/src/enums.ts:79

Indicates that a courier is en route delivering this order.

##### Completed

> **Completed**: `3`

Defined in: examples/example-typedoc/src/enums.ts:81

***

### sqrt()

> **sqrt**(`x`): `number`

Defined in: examples/example-typedoc/src/functions.ts:7

Calculates the square root of a number.

#### Parameters

##### x

`number`

the number to calculate the root of.

#### Returns

`number`

the square root if `x` is non-negative or `NaN` if `x` is negative.

***

### sqrtArrowFunction()

> **sqrtArrowFunction**(`x`): `number`

Defined in: examples/example-typedoc/src/functions.ts:25

Calculates the square root of a number.

`sqrtArrowFunction` is defined using a variable declaration:

```
export const sqrtArrowFunction = (x: number): number => Math.sqrt(x);
```

TypeDoc is smart and documents `sqrtArrowFunction` as a function rather than a variable.

#### Parameters

##### x

`number`

the number do calculate the root of.

#### Returns

`number`

the square root if `x` is non-negative or `NaN` if `x` is negative.

***

### concat()

> **concat**\<`T`\>(`array1`, `array2`): `T`[]

Defined in: examples/example-typedoc/src/functions.ts:39

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

#### Parameters

##### array1

`T`[]

##### array2

`T`[]

#### Returns

`T`[]

***

### MakeHttpCallAOptions

Defined in: examples/example-typedoc/src/functions.ts:46

The options type for [makeHttpCallA](#makehttpcalla).

#### Properties

##### url

> **url**: `string`

Defined in: examples/example-typedoc/src/functions.ts:47

##### method

> **method**: `string`

Defined in: examples/example-typedoc/src/functions.ts:50

e.g. GET, POST, PUT, DELETE

##### headers

> **headers**: `Record`\<`string`, `string`\>

Defined in: examples/example-typedoc/src/functions.ts:53

e.g. `{ 'Authorization': 'Bearer <access token>' }`

##### body

> **body**: `string` \| `Blob` \| `FormData`

Defined in: examples/example-typedoc/src/functions.ts:54

##### mode

> **mode**: `"cors"` \| `"no-cors"` \| `"same-origin"`

Defined in: examples/example-typedoc/src/functions.ts:55

***

### makeHttpCallA()

> **makeHttpCallA**(`options`): `Promise`\<`Response`\>

Defined in: examples/example-typedoc/src/functions.ts:65

A function that takes in an options object that is defined as a separate
interface and makes an HTTP call.

**Make sure to export the options type when using this pattern.** Otherwise,
TypeDoc will not document the options.

#### Parameters

##### options

[`MakeHttpCallAOptions`](#makehttpcallaoptions)

#### Returns

`Promise`\<`Response`\>

***

### makeHttpCallB()

> **makeHttpCallB**(`options`): `Promise`\<`Response`\>

Defined in: examples/example-typedoc/src/functions.ts:78

A function that takes in an options object and makes an HTTP call.

The options type is written directly in the function definition.

#### Parameters

##### options

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

#### Returns

`Promise`\<`Response`\>

***

### overloadedFunction()

#### Call Signature

> **overloadedFunction**(`a`, `b`): `string`

Defined in: examples/example-typedoc/src/functions.ts:102

Stringifies and concatenates two numbers into a single string.

The documentation site allows you to toggle between the different overloads
of a function. The implementation signature of the overloaded function is not
included in the documentation.

##### Parameters

###### a

`number`

###### b

`number`

##### Returns

`string`

#### Call Signature

> **overloadedFunction**(`a`, `b`): `string`

Defined in: examples/example-typedoc/src/functions.ts:111

Concatenates two strings.

The documentation site allows you to toggle between the different overloads
of a function. The implementation signature of the overloaded function is not
included in the documentation.

##### Parameters

###### a

`string`

###### b

`string`

##### Returns

`string`

***

### anInternalFunction()

> **anInternalFunction**(): `void`

Defined in: examples/example-typedoc/src/internals.ts:8

**`Internal`**

Use `@internal` to indicate that something is for internal use. If the
`--excludeInternal` option is passed, TypeDoc will not document the given
code.

#### Returns

`void`

***

### CardAProps

Defined in: examples/example-typedoc/src/reactComponents.tsx:6

The props type for [CardA](#carda).

#### Properties

##### variant

> **variant**: `"primary"` \| `"secondary"` \| `"success"` \| `"danger"` \| `"light"` \| `"dark"`

Defined in: examples/example-typedoc/src/reactComponents.tsx:8

The theme of the card. Defaults to `primary`.

***

### EasyFormDialogProps

Defined in: examples/example-typedoc/src/reactComponents.tsx:85

The props type of [\`EasyFormDialog\`](#easyformdialog).

#### Properties

##### title

> **title**: `ReactNode`

Defined in: examples/example-typedoc/src/reactComponents.tsx:87

The title of the dialog. Can be a JSX element.

##### submitButtonText

> **submitButtonText**: `string`

Defined in: examples/example-typedoc/src/reactComponents.tsx:90

The text of the submit button.

##### submitButtonClass?

> `optional` **submitButtonClass**: `string`

Defined in: examples/example-typedoc/src/reactComponents.tsx:93

The CSS class of the submit button.

##### cancelButtonText?

> `optional` **cancelButtonText**: `string`

Defined in: examples/example-typedoc/src/reactComponents.tsx:96

The text of the cancel button. Defaults to "Cancel".

##### submitEnabled?

> `optional` **submitEnabled**: `boolean`

Defined in: examples/example-typedoc/src/reactComponents.tsx:105

Allows you to disable the submit button even if `getSubmitEnabled()`
would return true.

This can be useful if you want to disable the submit button while a query
is in progress.

##### formIsValid

> **formIsValid**: `boolean`

Defined in: examples/example-typedoc/src/reactComponents.tsx:108

A boolean indicating if the form is valid.

##### showValidation

> **showValidation**: `boolean`

Defined in: examples/example-typedoc/src/reactComponents.tsx:111

A boolean indicating if validation feedback is being shown.

##### closeRef?

> `optional` **closeRef**: `MutableRefObject`\<() => `void`\>

Defined in: examples/example-typedoc/src/reactComponents.tsx:177

This prop accepts a ref object that holds a function of type `() =>
void`. You can execute the function to programmatically close the dialog:

```
closeRef.current()
```

##### modalClass?

> `optional` **modalClass**: `string`

Defined in: examples/example-typedoc/src/reactComponents.tsx:180

The CSS class added to the underlying Bootstrap modal.

##### focusFirst?

> `optional` **focusFirst**: `boolean`

Defined in: examples/example-typedoc/src/reactComponents.tsx:186

Set to `false` to disable the default behavior of focusing the first
input.

##### showFooter?

> `optional` **showFooter**: `boolean`

Defined in: examples/example-typedoc/src/reactComponents.tsx:192

Set to `false` to hide the modal footer, which contains the submit and
cancel buttons.

#### Methods

##### onShowValidationChange()

> **onShowValidationChange**(`showValidation`): `void`

Defined in: examples/example-typedoc/src/reactComponents.tsx:114

A callback that fires when the dialog is submitted.

###### Parameters

###### showValidation

`boolean`

###### Returns

`void`

##### onSuccess()

> **onSuccess**(`payload`): `Promise`\<`void`\>

Defined in: examples/example-typedoc/src/reactComponents.tsx:126

A callback that fires after the `submit` function succeeds.

If the `submit` function returned `responseData`, it is passed to your
`onSuccess` function.

Your `onSuccess` callback must return a promise. The submit button will
continue showing a loading indicator until the promise resolves. This is
to support refetching the data that was updated by the form submission.

###### Parameters

###### payload

`unknown`

###### Returns

`Promise`\<`void`\>

##### onClose()

> **onClose**(): `void`

Defined in: examples/example-typedoc/src/reactComponents.tsx:134

A callback that fires when the dialog has completely closed. Your
`onClose` callback should update call, for example,
`setDialogVisible(false)` so that the `EasyFormDialog` is no longer
rendered.

###### Returns

`void`

##### onSubmit()

> **onSubmit**(`formData`): `Promise`\<`void`\> \| `Promise`\<`undefined` \| \{ `shouldClose?`: `boolean`; `responseData`: `unknown`; \}\>

Defined in: examples/example-typedoc/src/reactComponents.tsx:154

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

###### Parameters

###### formData

`Record`\<`string`, `string` \| `boolean`\>

###### Returns

`Promise`\<`void`\> \| `Promise`\<`undefined` \| \{ `shouldClose?`: `boolean`; `responseData`: `unknown`; \}\>

##### onCancel()?

> `optional` **onCancel**(): `void`

Defined in: examples/example-typedoc/src/reactComponents.tsx:167

An uncommonly-used callback that fires when the user clicks the cancel button.

###### Returns

`void`

***

### SimpleTypeAlias

> **SimpleTypeAlias** = `string` \| `number` \| `boolean`

Defined in: examples/example-typedoc/src/types.ts:2

A simple type alias defined using the `type` keyword.

***

### ComplexGenericTypeAlias\<T\>

> **ComplexGenericTypeAlias**\<`T`\> = `T` \| `T`[] \| `Promise`\<`T`\> \| `Promise`\<`T`[]\> \| `Record`\<`string`, `Promise`\<`T`\>\>

Defined in: examples/example-typedoc/src/types.ts:5

A complex generic type.

#### Type Parameters

##### T

`T`

***

### User

Defined in: examples/example-typedoc/src/types.ts:17

A simple interface. Each property has its own doc comment.

TypeDoc even supports doc comments on nested type definitions, as shown by the `name` property.

#### Extended by

- [`AdminUser`](#adminuser)

#### Properties

##### id

> **id**: `number`

Defined in: examples/example-typedoc/src/types.ts:19

The user's ID.

##### email

> **email**: `string`

Defined in: examples/example-typedoc/src/types.ts:22

The user's email address.

##### name

> **name**: `object`

Defined in: examples/example-typedoc/src/types.ts:25

The user's name.

###### first

> **first**: `string`

The person's given name.

###### last

> **last**: `string`

The person's family name.

***

### AdminUser

Defined in: examples/example-typedoc/src/types.ts:40

An interface that extends [\`User\`](#user) and adds more properties.

Notice how TypeDoc automatically shows the inheritance hierarchy and where
each property was originally defined.

#### Extends

- [`User`](#user)

#### Properties

##### id

> **id**: `number`

Defined in: examples/example-typedoc/src/types.ts:19

The user's ID.

###### Inherited from

[`User`](#user).[`id`](#id-3)

##### email

> **email**: `string`

Defined in: examples/example-typedoc/src/types.ts:22

The user's email address.

###### Inherited from

[`User`](#user).[`email`](#email)

##### name

> **name**: `object`

Defined in: examples/example-typedoc/src/types.ts:25

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

Defined in: examples/example-typedoc/src/types.ts:41

##### jobTitle

> **jobTitle**: `string`

Defined in: examples/example-typedoc/src/types.ts:42

***

### PI

> `const` **PI**: `3.14159265359` = `3.14159265359`

Defined in: examples/example-typedoc/src/variables.ts:2

A simple numeric constant.

***

### STRING\_CONSTANT

> `const` **STRING\_CONSTANT**: `"FOOBAR"` = `"FOOBAR"`

Defined in: examples/example-typedoc/src/variables.ts:5

A simple string constant.

***

### ObjectConstant

> `const` **ObjectConstant**: `object`

Defined in: examples/example-typedoc/src/variables.ts:8

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

Defined in: examples/example-typedoc/src/variables.ts:22

An exported variable defined with `let`.

This pattern should generally be avoided because the variable can be reassigned.
