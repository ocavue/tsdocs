# TypeDoc Example

## Collection

### lodashSortBy() {#lodashsortby}

Here is a useful function re-exported from Lodash.

#### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="lodashsortby" href="#lodashsortby">lodashSortBy</a>\<T\>(`collection`, ...`iteratees?`): `T`[]</code>

</dt>

<dd>

Creates an array of elements, sorted in ascending order by the results of
running each element in a collection through each iteratee. This method
performs a stable sort, that is, it preserves the original sort order of
equal elements. The iteratees are invoked with one argument: (value).

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

</dd>

</dl>

#### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="lodashsortby" href="#lodashsortby">lodashSortBy</a>\<T\>(`collection`, ...`iteratees`): `T`\[keyof `T`\][]</code>

</dt>

<dd>

##### See

_.sortBy

</dd>

</dl>

## Component

React Components -- This description is added with the `@categoryDescription` tag
on the entry point in src/index.ts

### CardA() {#carda}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="carda" href="#carda">CardA</a>(`__namedParameters`): `ReactElement`</code>

</dt>

<dd>

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

</dd>

</dl>

***

### CardB() {#cardb}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="cardb" href="#cardb">CardB</a>(`__namedParameters`): `ReactElement`</code>

</dt>

<dd>

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

</dd>

</dl>

***

### EasyFormDialog() {#easyformdialog}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="easyformdialog" href="#easyformdialog">EasyFormDialog</a>(`props`): `ReactElement`</code>

</dt>

<dd>

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

</dd>

</dl>

## Documents

- [External Markdown](documents/External-Markdown.md)
- [Markdown Showcase](documents/Markdown-Showcase.md)
- [Syntax Highlighting](documents/Syntax-Highlighting.md)
- [Include and Include Code](documents/Include-and-Include-Code.md)

## Model

### abstract Customer {#customer}

An abstract base class for the customer entity in our application.

Notice how TypeDoc shows the inheritance hierarchy for our class.

#### Constructors

##### Constructor

<dl>

<dt>

<code data-typedoc-code>new <a id="constructor-1" href="#constructor-1">Customer</a>(`id`, `name`, `nextOrderNumber`): [`Customer`](#customer)</code>

</dt>

<dd>

The constructor of the `Customer` class.

</dd>

</dl>

#### Properties

<dl>

<dt>

<code data-typedoc-code><i>readonly</i> <a id="id" href="#id">id</a>: `number`</code>

</dt>

<dd>

A public readonly property.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="name" href="#name">name</a>: `string`</code>

</dt>

<dd>

A public property that can be reassigned.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>protected</i> <a id="contactname" href="#contactname">contactName</a><i>?</i>: `string`</code>

</dt>

<dd>

An optional protected property.

</dd>

</dl>

#### Accessors

<dl>

<dt>

<code data-typedoc-code>get <a id="nextordernumber" href="#nextordernumber">nextOrderNumber</a>(): `string`</code>

</dt>

<dd>

A getter that prepends a number sign to the private `_nextOrderNumber`
property.

</dd>

<dt>

<code data-typedoc-code>set <a id="nextordernumber" href="#nextordernumber">nextOrderNumber</a>(`value`): `void`</code>

</dt>

<dd>

A setter that takes in either a string or a number and sets the private
`_nextOrderNumber` property.

</dd>

</dl>

#### Methods

<dl>

<dt>

<code data-typedoc-code><a id="onorderplaced" href="#onorderplaced">onOrderPlaced</a>(): `void`</code>

</dt>

<dd>

A public method. To be called when an order is placed for this customer.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="onorderplacedarrowfunction" href="#onorderplacedarrowfunction">onOrderPlacedArrowFunction</a>(): `void`</code>

</dt>

<dd>

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>protected</i> <a id="isvalid" href="#isvalid">isValid</a>(): `boolean`</code>

</dt>

<dd>

A protected method.

</dd>

</dl>

## Other

### CancellablePromise\<T\> {#cancellablepromise}

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

#### Constructors

##### Constructor

<dl>

<dt>

<code data-typedoc-code>new <a id="constructor" href="#constructor">CancellablePromise</a>\<T\>(`promise`, `cancel`): [`CancellablePromise`](#cancellablepromise)\<`T`\></code>

</dt>

<dd>

</dd>

</dl>

#### Properties

<dl>

<dt>

<code data-typedoc-code><i>protected</i> <i>readonly</i> <a id="promise" href="#promise">promise</a>: `Promise`\<`T`\></code>

</dt>

<dd>

As a consumer of the library, you shouldn't ever need to access
`CancellablePromise.promise` directly.

If you are subclassing `CancellablePromise` for some reason, you
can access this property.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>readonly</i> <a id="cancel" href="#cancel">cancel</a>: (`reason?`) => `void`</code>

</dt>

<dd>

Cancel the `CancellablePromise`.

</dd>

</dl>

#### Methods

Descriptions can be added for groups with `@groupDescription`, which will show up in
the index where groups are listed. This works for both manually created groups which
are created with `@group`, and implicit groups like the `Methods` group that this
description is attached to.

<dl>

<dt>

<code data-typedoc-code><a id="then" href="#then">then</a>\<TResult1, TResult2\>(`onFulfilled?`, `onRejected?`): [`CancellablePromise`](#cancellablepromise)\<`TResult1` \| `TResult2`\></code>

</dt>

<dd>

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

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="catch" href="#catch">catch</a>\<TResult\>(`onRejected?`): [`CancellablePromise`](#cancellablepromise)\<`T` \| `TResult`\></code>

</dt>

<dd>

Analogous to `Promise.catch`.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="finally" href="#finally">finally</a>(`onFinally?`): [`CancellablePromise`](#cancellablepromise)\<`T`\></code>

</dt>

<dd>

Attaches a callback that is invoked when the Promise is settled
(fulfilled or rejected). The resolved value cannot be modified from the
callback.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="resolve" href="#resolve">resolve</a>(): [`CancellablePromise`](#cancellablepromise)\<`void`\></code>

</dt>

<dd>

Analogous to `Promise.resolve`.

The returned promise should resolve even if it is canceled. The idea is
that the promise is resolved instantaneously, so by the time the promise
is canceled, it has already resolved.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="resolve" href="#resolve">resolve</a>\<T\>(`value`): [`CancellablePromise`](#cancellablepromise)\<`T`\></code>

</dt>

<dd>

Analogous to `Promise.resolve`.

The returned promise should resolve even if it is canceled. The idea is
that the promise is resolved instantaneously, so by the time the promise
is canceled, it has already resolved.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="reject" href="#reject">reject</a>\<T\>(`reason?`): [`CancellablePromise`](#cancellablepromise)\<`T`\></code>

</dt>

<dd>

Analogous to `Promise.reject`.

Like `CancellablePromise.resolve`, canceling the returned
`CancellablePromise` is a no-op.

</dd>

</dl>

Analogous to `Promise.all`.

###### Param

an array that may contain `CancellablePromise`s, promises,
thenables, and resolved values

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="all" href="#all">all</a>\<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\]\></code>

</dt>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="all" href="#all">all</a>\<T1, T2, T3, T4, T5, T6, T7, T8, T9\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\]\></code>

</dt>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="all" href="#all">all</a>\<T1, T2, T3, T4, T5, T6, T7, T8\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\]\></code>

</dt>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="all" href="#all">all</a>\<T1, T2, T3, T4, T5, T6, T7\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\]\></code>

</dt>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="all" href="#all">all</a>\<T1, T2, T3, T4, T5, T6\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\]\></code>

</dt>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="all" href="#all">all</a>\<T1, T2, T3, T4, T5\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`, `T5`\]\></code>

</dt>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="all" href="#all">all</a>\<T1, T2, T3, T4\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`, `T4`\]\></code>

</dt>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="all" href="#all">all</a>\<T1, T2, T3\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`, `T3`\]\></code>

</dt>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="all" href="#all">all</a>\<T1, T2\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\[`T1`, `T2`\]\></code>

</dt>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="all" href="#all">all</a>\<T\>(`values`): [`CancellablePromise`](#cancellablepromise)\<`T`[]\></code>

</dt>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="allsettled" href="#allsettled">allSettled</a>\<T\>(`values`): [`CancellablePromise`](#cancellablepromise)\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<T\[P\<P\>\] extends PromiseLike\<U\> ? U : T\[P\<P\>\]\> \}\></code>

</dt>

<dd>

Creates a `CancellablePromise` that is resolved with an array of results
when all of the provided `Promises` resolve or reject.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="allsettled" href="#allsettled">allSettled</a>\<T\>(`values`): [`CancellablePromise`](#cancellablepromise)\<`PromiseSettledResult`\<`T` *extends* `PromiseLike`\<`U`\> ? `U` : `T`\>[]\></code>

</dt>

<dd>

Creates a `CancellablePromise` that is resolved with an array of results
when all of the provided `Promise`s resolve or reject.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="race" href="#race">race</a>\<T\>(`values`): [`CancellablePromise`](#cancellablepromise)\<`Awaited`\<`T`\>\></code>

</dt>

<dd>

Creates a `CancellablePromise` that is resolved or rejected when any of
the provided `Promises` are resolved or rejected.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="delay" href="#delay">delay</a>(`ms`): [`CancellablePromise`](#cancellablepromise)\<`void`\></code>

</dt>

<dd>

</dd>

</dl>

***

### DeliveryCustomer {#deliverycustomer}

A class that extends [\`Customer\`](#customer).

Notice how TypeDoc shows the inheritance hierarchy for our class.

#### Constructors

##### Constructor

<dl>

<dt>

<code data-typedoc-code>new <a id="constructor-2" href="#constructor-2">DeliveryCustomer</a>(`id`, `name`, `nextOrderNumber`, `subscriptionType`): [`DeliveryCustomer`](#deliverycustomer)</code>

</dt>

<dd>

The constructor of the `DeliveryCustomer` class.

</dd>

</dl>

#### Properties

<dl>

<dt>

<code data-typedoc-code><i>readonly</i> <a id="id-1" href="#id-1">id</a>: `number`</code>

</dt>

<dd>

A public readonly property.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="name-1" href="#name-1">name</a>: `string`</code>

</dt>

<dd>

A public property that can be reassigned.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>protected</i> <a id="contactname-1" href="#contactname-1">contactName</a><i>?</i>: `string`</code>

</dt>

<dd>

An optional protected property.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="preferredcourierid" href="#preferredcourierid">preferredCourierId</a><i>?</i>: `number`</code>

</dt>

<dd>

A property defined on the subclass.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>readonly</i> <a id="subscriptiontype" href="#subscriptiontype">subscriptionType</a>: `"basic"` \| `"enterprise"`</code>

</dt>

<dd>

Another property defined on the subclass.

</dd>

</dl>

#### Accessors

<dl>

<dt>

<code data-typedoc-code>get <a id="nextordernumber-1" href="#nextordernumber-1">nextOrderNumber</a>(): `string`</code>

</dt>

<dd>

A getter that prepends a number sign to the private `_nextOrderNumber`
property.

</dd>

<dt>

<code data-typedoc-code>set <a id="nextordernumber-1" href="#nextordernumber-1">nextOrderNumber</a>(`value`): `void`</code>

</dt>

<dd>

A setter that takes in either a string or a number and sets the private
`_nextOrderNumber` property.

</dd>

</dl>

#### Methods

<dl>

<dt>

<code data-typedoc-code><a id="onorderplaced-2" href="#onorderplaced-2">onOrderPlaced</a>(): `void`</code>

</dt>

<dd>

A public method. To be called when an order is placed for this customer.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="onorderplacedarrowfunction-2" href="#onorderplacedarrowfunction-2">onOrderPlacedArrowFunction</a>(): `void`</code>

</dt>

<dd>

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>protected</i> <a id="isvalid-2" href="#isvalid-2">isValid</a>(): `boolean`</code>

</dt>

<dd>

An example of overriding a protected method.

A `DeliveryCustomer` can only have a preferred courier if its
subscription type is enterprise.

</dd>

</dl>

***

### WalkInCustomer {#walkincustomer}

A class that extends [\`Customer\`](#customer).

Notice how TypeDoc shows the inheritance hierarchy for our class.

#### Constructors

##### Constructor

<dl>

<dt>

<code data-typedoc-code>new <a id="constructor-3" href="#constructor-3">WalkInCustomer</a>(`id`, `name`, `nextOrderNumber`): [`WalkInCustomer`](#walkincustomer)</code>

</dt>

<dd>

The constructor of the `Customer` class.

</dd>

</dl>

#### Properties

<dl>

<dt>

<code data-typedoc-code><i>readonly</i> <a id="id-2" href="#id-2">id</a>: `number`</code>

</dt>

<dd>

A public readonly property.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="name-2" href="#name-2">name</a>: `string`</code>

</dt>

<dd>

A public property that can be reassigned.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>protected</i> <a id="contactname-2" href="#contactname-2">contactName</a><i>?</i>: `string`</code>

</dt>

<dd>

An optional protected property.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="trustedcustomer" href="#trustedcustomer">trustedCustomer</a><i>?</i>: `boolean`</code>

</dt>

<dd>

A property defined on the subclass.

</dd>

</dl>

#### Accessors

<dl>

<dt>

<code data-typedoc-code>get <a id="nextordernumber-2" href="#nextordernumber-2">nextOrderNumber</a>(): `string`</code>

</dt>

<dd>

A getter that prepends a number sign to the private `_nextOrderNumber`
property.

</dd>

<dt>

<code data-typedoc-code>set <a id="nextordernumber-2" href="#nextordernumber-2">nextOrderNumber</a>(`value`): `void`</code>

</dt>

<dd>

A setter that takes in either a string or a number and sets the private
`_nextOrderNumber` property.

</dd>

</dl>

#### Methods

<dl>

<dt>

<code data-typedoc-code><a id="onorderplacedarrowfunction-4" href="#onorderplacedarrowfunction-4">onOrderPlacedArrowFunction</a>(): `void`</code>

</dt>

<dd>

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>protected</i> <a id="isvalid-4" href="#isvalid-4">isValid</a>(): `boolean`</code>

</dt>

<dd>

A protected method.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="onorderplaced-4" href="#onorderplaced-4">onOrderPlaced</a>(): `void`</code>

</dt>

<dd>

An example of overriding a public method.

</dd>

</dl>

***

### StringArray {#stringarray}

An array of strings that's defined as

```
export class StringArray extends Array<string> {
    // ...
}
```

Notice how TypeDoc has substituted `string` for the generic type argument in all
the methods inherited from `Array`. For example, the `values` method returns
`IterableIterator<string>`.

#### Indexable

<dl>

<dt>

<code data-typedoc-code>\[n: `number`\]: `string`</code>

</dt>

</dl>

#### Constructors

##### Constructor

<dl>

<dt>

<code data-typedoc-code>new <a id="constructor-4" href="#constructor-4">StringArray</a>(`arrayLength`): [`StringArray`](#stringarray)</code>

</dt>

</dl>

##### Constructor

<dl>

<dt>

<code data-typedoc-code>new <a id="constructor-4" href="#constructor-4">StringArray</a>(...`items`): [`StringArray`](#stringarray)</code>

</dt>

</dl>

#### Properties

<dl>

<dt>

<code data-typedoc-code><i>readonly</i> <a id="unscopables" href="#unscopables">[unscopables]</a>: `object`</code>

</dt>

<dd>

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>readonly</i> <i>static</i> <a id="species" href="#species">[species]</a>: `ArrayConstructor`</code>

</dt>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="length" href="#length">length</a>: `number`</code>

</dt>

<dd>

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

</dd>

</dl>

#### Methods

<dl>

<dt>

<code data-typedoc-code><a id="custommethod" href="#custommethod">customMethod</a>(): `void`</code>

</dt>

<dd>

A method that extends the functionality of a basic JavaScript array.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="find" href="#find">find</a>\<S\>(`predicate`, `thisArg?`): `undefined` \| `S`</code>

</dt>

<dd>

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="find" href="#find">find</a>(`predicate`, `thisArg?`): `undefined` \| `string`</code>

</dt>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="findindex" href="#findindex">findIndex</a>(`predicate`, `thisArg?`): `number`</code>

</dt>

<dd>

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="fill" href="#fill">fill</a>(`value`, `start?`, `end?`): `this`</code>

</dt>

<dd>

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="copywithin" href="#copywithin">copyWithin</a>(`target`, `start`, `end?`): `this`</code>

</dt>

<dd>

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="from" href="#from">from</a>\<T\>(`arrayLike`): `T`[]</code>

</dt>

<dd>

Creates an array from an array-like object.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="from" href="#from">from</a>\<T, U\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]</code>

</dt>

<dd>

Creates an array from an iterable object.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="from" href="#from">from</a>\<T\>(`iterable`): `T`[]</code>

</dt>

<dd>

Creates an array from an iterable object.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="from" href="#from">from</a>\<T, U\>(`iterable`, `mapfn`, `thisArg?`): `U`[]</code>

</dt>

<dd>

Creates an array from an iterable object.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="of" href="#of">of</a>\<T\>(...`items`): `T`[]</code>

</dt>

<dd>

Returns a new array from a set of elements.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="iterator" href="#iterator">[iterator]</a>(): `ArrayIterator`\<`string`\></code>

</dt>

<dd>

Iterator

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="entries" href="#entries">entries</a>(): `ArrayIterator`\<\[`number`, `string`\]\></code>

</dt>

<dd>

Returns an iterable of key, value pairs for every entry in the array

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="keys" href="#keys">keys</a>(): `ArrayIterator`\<`number`\></code>

</dt>

<dd>

Returns an iterable of keys in the array

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="values" href="#values">values</a>(): `ArrayIterator`\<`string`\></code>

</dt>

<dd>

Returns an iterable of values in the array

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="includes" href="#includes">includes</a>(`searchElement`, `fromIndex?`): `boolean`</code>

</dt>

<dd>

Determines whether an array includes a certain element, returning true or false as appropriate.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="flatmap" href="#flatmap">flatMap</a>\<U, This\>(`callback`, `thisArg?`): `U`[]</code>

</dt>

<dd>

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="flat" href="#flat">flat</a>\<A, D\>(`this`, `depth?`): `FlatArray`\<`A`, `D`\>[]</code>

</dt>

<dd>

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="at" href="#at">at</a>(`index`): `undefined` \| `string`</code>

</dt>

<dd>

Returns the item located at the specified index.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="findlast" href="#findlast">findLast</a>\<S\>(`predicate`, `thisArg?`): `undefined` \| `S`</code>

</dt>

<dd>

Returns the value of the last element in the array where predicate is true, and undefined
otherwise.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="findlast" href="#findlast">findLast</a>(`predicate`, `thisArg?`): `undefined` \| `string`</code>

</dt>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="findlastindex" href="#findlastindex">findLastIndex</a>(`predicate`, `thisArg?`): `number`</code>

</dt>

<dd>

Returns the index of the last element in the array where predicate is true, and -1
otherwise.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="toreversed" href="#toreversed">toReversed</a>(): `string`[]</code>

</dt>

<dd>

Returns a copy of an array with its elements reversed.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="tosorted" href="#tosorted">toSorted</a>(`compareFn?`): `string`[]</code>

</dt>

<dd>

Returns a copy of an array with its elements sorted.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="tospliced" href="#tospliced">toSpliced</a>(`start`, `deleteCount`, ...`items`): `string`[]</code>

</dt>

<dd>

Copies an array and removes elements and, if necessary, inserts new elements in their place. Returns the copied array.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="tospliced" href="#tospliced">toSpliced</a>(`start`, `deleteCount?`): `string`[]</code>

</dt>

<dd>

Copies an array and removes elements while returning the remaining elements.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="with" href="#with">with</a>(`index`, `value`): `string`[]</code>

</dt>

<dd>

Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="tostring" href="#tostring">toString</a>(): `string`</code>

</dt>

<dd>

Returns a string representation of an array.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="tolocalestring" href="#tolocalestring">toLocaleString</a>(): `string`</code>

</dt>

<dd>

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="tolocalestring" href="#tolocalestring">toLocaleString</a>(`locales`, `options?`): `string`</code>

</dt>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="pop" href="#pop">pop</a>(): `undefined` \| `string`</code>

</dt>

<dd>

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="push" href="#push">push</a>(...`items`): `number`</code>

</dt>

<dd>

Appends new elements to the end of an array, and returns the new length of the array.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="concat" href="#concat">concat</a>(...`items`): `string`[]</code>

</dt>

<dd>

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="concat" href="#concat">concat</a>(...`items`): `string`[]</code>

</dt>

<dd>

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="join" href="#join">join</a>(`separator?`): `string`</code>

</dt>

<dd>

Adds all the elements of an array into a string, separated by the specified separator string.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="reverse" href="#reverse">reverse</a>(): `string`[]</code>

</dt>

<dd>

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="shift" href="#shift">shift</a>(): `undefined` \| `string`</code>

</dt>

<dd>

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="slice" href="#slice">slice</a>(`start?`, `end?`): `string`[]</code>

</dt>

<dd>

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="sort" href="#sort">sort</a>(`compareFn?`): `this`</code>

</dt>

<dd>

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="splice" href="#splice">splice</a>(`start`, `deleteCount?`): `string`[]</code>

</dt>

<dd>

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="splice" href="#splice">splice</a>(`start`, `deleteCount`, ...`items`): `string`[]</code>

</dt>

<dd>

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="unshift" href="#unshift">unshift</a>(...`items`): `number`</code>

</dt>

<dd>

Inserts new elements at the start of an array, and returns the new length of the array.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="indexof" href="#indexof">indexOf</a>(`searchElement`, `fromIndex?`): `number`</code>

</dt>

<dd>

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="lastindexof" href="#lastindexof">lastIndexOf</a>(`searchElement`, `fromIndex?`): `number`</code>

</dt>

<dd>

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="every" href="#every">every</a>\<S\>(`predicate`, `thisArg?`): `this is S[]`</code>

</dt>

<dd>

Determines whether all the members of an array satisfy the specified test.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="every" href="#every">every</a>(`predicate`, `thisArg?`): `boolean`</code>

</dt>

<dd>

Determines whether all the members of an array satisfy the specified test.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="some" href="#some">some</a>(`predicate`, `thisArg?`): `boolean`</code>

</dt>

<dd>

Determines whether the specified callback function returns true for any element of an array.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="foreach" href="#foreach">forEach</a>(`callbackfn`, `thisArg?`): `void`</code>

</dt>

<dd>

Performs the specified action for each element in an array.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="map" href="#map">map</a>\<U\>(`callbackfn`, `thisArg?`): `U`[]</code>

</dt>

<dd>

Calls a defined callback function on each element of an array, and returns an array that contains the results.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="filter" href="#filter">filter</a>\<S\>(`predicate`, `thisArg?`): `S`[]</code>

</dt>

<dd>

Returns the elements of an array that meet the condition specified in a callback function.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="filter" href="#filter">filter</a>(`predicate`, `thisArg?`): `string`[]</code>

</dt>

<dd>

Returns the elements of an array that meet the condition specified in a callback function.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="reduce" href="#reduce">reduce</a>(`callbackfn`): `string`</code>

</dt>

<dd>

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="reduce" href="#reduce">reduce</a>(`callbackfn`, `initialValue`): `string`</code>

</dt>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="reduce" href="#reduce">reduce</a>\<U\>(`callbackfn`, `initialValue`): `U`</code>

</dt>

<dd>

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="reduceright" href="#reduceright">reduceRight</a>(`callbackfn`): `string`</code>

</dt>

<dd>

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="reduceright" href="#reduceright">reduceRight</a>(`callbackfn`, `initialValue`): `string`</code>

</dt>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><a id="reduceright" href="#reduceright">reduceRight</a>\<U\>(`callbackfn`, `initialValue`): `U`</code>

</dt>

<dd>

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="isarray" href="#isarray">isArray</a>(`arg`): `arg is any[]`</code>

</dt>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="fromasync" href="#fromasync">fromAsync</a>\<T\>(`iterableOrArrayLike`): `Promise`\<`T`[]\></code>

</dt>

<dd>

Creates an array from an async iterator or iterable object.

</dd>

</dl>

###### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>static</i> <a id="fromasync" href="#fromasync">fromAsync</a>\<T, U\>(`iterableOrArrayLike`, `mapFn`, `thisArg?`): `Promise`\<`Awaited`\<`U`\>[]\></code>

</dt>

<dd>

Creates an array from an async iterator or iterable object.

</dd>

</dl>

***

### SimpleEnum {#simpleenum}

Describes the status of a delivery order.

#### Enumeration Members

##### Pending {#pending}

<dl>

<dt>

<code data-typedoc-code><a id="pending" href="#pending">Pending</a>: `0`</code>

</dt>

<dd>

This order has just been placed and is yet to be processed.

</dd>

</dl>

##### InProgress {#inprogress}

<dl>

<dt>

<code data-typedoc-code><a id="inprogress" href="#inprogress">InProgress</a>: `1`</code>

</dt>

<dd>

A courier is en route delivering this order.

</dd>

</dl>

##### Complete {#complete}

<dl>

<dt>

<code data-typedoc-code><a id="complete" href="#complete">Complete</a>: `"COMPLETE"`</code>

</dt>

<dd>

The order has been delivered.

</dd>

</dl>

***

### CrazyEnum {#crazyenum}

[A crazy enum from the TypeScript
handbook](https://www.typescriptlang.org/docs/handbook/enums.html#computed-and-constant-members).
This enum contains both constant and computed members.

TypeDoc won't show the value of computed members since this information is
only available at runtime.

#### Enumeration Members

##### None {#none}

<dl>

<dt>

<code data-typedoc-code><a id="none" href="#none">None</a>: `0`</code>

</dt>

</dl>

##### Read {#read}

<dl>

<dt>

<code data-typedoc-code><a id="read" href="#read">Read</a>: `2`</code>

</dt>

</dl>

##### Write {#write}

<dl>

<dt>

<code data-typedoc-code><a id="write" href="#write">Write</a>: `4`</code>

</dt>

</dl>

##### ReadWrite {#readwrite}

<dl>

<dt>

<code data-typedoc-code><a id="readwrite" href="#readwrite">ReadWrite</a>: `6`</code>

</dt>

</dl>

##### ComputedMember {#computedmember}

<dl>

<dt>

<code data-typedoc-code><a id="computedmember" href="#computedmember">ComputedMember</a>: `number`</code>

</dt>

</dl>

***

### EnumLikeObject {#enumlikeobject}

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

##### Pending {#pending-1}

<dl>

<dt>

<code data-typedoc-code><a id="pending-1" href="#pending-1">Pending</a>: `"pending"`</code>

</dt>

</dl>

##### InProgress {#inprogress-1}

<dl>

<dt>

<code data-typedoc-code><a id="inprogress-1" href="#inprogress-1">InProgress</a>: `"inProgress"`</code>

</dt>

<dd>

Indicates that a courier is en route delivering this order.

</dd>

</dl>

##### Completed {#completed}

<dl>

<dt>

<code data-typedoc-code><a id="completed" href="#completed">Completed</a>: `"completed"`</code>

</dt>

</dl>

***

### EnumLikeObjectNumValues {#enumlikeobjectnumvalues}

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

##### Pending {#pending-2}

<dl>

<dt>

<code data-typedoc-code><a id="pending-2" href="#pending-2">Pending</a>: `1`</code>

</dt>

</dl>

##### InProgress {#inprogress-2}

<dl>

<dt>

<code data-typedoc-code><a id="inprogress-2" href="#inprogress-2">InProgress</a>: `2`</code>

</dt>

<dd>

Indicates that a courier is en route delivering this order.

</dd>

</dl>

##### Completed {#completed-1}

<dl>

<dt>

<code data-typedoc-code><a id="completed-1" href="#completed-1">Completed</a>: `3`</code>

</dt>

</dl>

***

### sqrt() {#sqrt}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="sqrt" href="#sqrt">sqrt</a>(`x`): `number`</code>

</dt>

<dd>

Calculates the square root of a number.

</dd>

</dl>

***

### sqrtArrowFunction() {#sqrtarrowfunction}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="sqrtarrowfunction" href="#sqrtarrowfunction">sqrtArrowFunction</a>(`x`): `number`</code>

</dt>

<dd>

Calculates the square root of a number.

`sqrtArrowFunction` is defined using a variable declaration:

```
export const sqrtArrowFunction = (x: number): number => Math.sqrt(x);
```

TypeDoc is smart and documents `sqrtArrowFunction` as a function rather than a variable.

</dd>

</dl>

***

### concat() {#concat-3}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="concat-3" href="#concat-3">concat</a>\<T\>(`array1`, `array2`): `T`[]</code>

</dt>

<dd>

A simple generic function that concatenates two arrays.

Use [`@typeParam <param name>`](https://typedoc.org/tags/typeParam/)
to document generic type parameters, e.g.

```text
@typeParam T the element type of the arrays
```

</dd>

</dl>

***

### MakeHttpCallAOptions {#makehttpcallaoptions}

The options type for [makeHttpCallA](#makehttpcalla).

#### Properties

<dl>

<dt>

<code data-typedoc-code><a id="url" href="#url">url</a>: `string`</code>

</dt>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="method" href="#method">method</a>: `string`</code>

</dt>

<dd>

e.g. GET, POST, PUT, DELETE

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="headers" href="#headers">headers</a>: `Record`\<`string`, `string`\></code>

</dt>

<dd>

e.g. `{ 'Authorization': 'Bearer <access token>' }`

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="body" href="#body">body</a>: `string` \| `Blob` \| `FormData`</code>

</dt>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="mode" href="#mode">mode</a>: `"cors"` \| `"no-cors"` \| `"same-origin"`</code>

</dt>

</dl>

***

### makeHttpCallA() {#makehttpcalla}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="makehttpcalla" href="#makehttpcalla">makeHttpCallA</a>(`options`): `Promise`\<`Response`\></code>

</dt>

<dd>

A function that takes in an options object that is defined as a separate
interface and makes an HTTP call.

**Make sure to export the options type when using this pattern.** Otherwise,
TypeDoc will not document the options.

</dd>

</dl>

***

### makeHttpCallB() {#makehttpcallb}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="makehttpcallb" href="#makehttpcallb">makeHttpCallB</a>(`options`): `Promise`\<`Response`\></code>

</dt>

<dd>

A function that takes in an options object and makes an HTTP call.

The options type is written directly in the function definition.

</dd>

</dl>

***

### overloadedFunction() {#overloadedfunction}

#### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="overloadedfunction" href="#overloadedfunction">overloadedFunction</a>(`a`, `b`): `string`</code>

</dt>

<dd>

Stringifies and concatenates two numbers into a single string.

The documentation site allows you to toggle between the different overloads
of a function. The implementation signature of the overloaded function is not
included in the documentation.

</dd>

</dl>

#### Call Signature

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="overloadedfunction" href="#overloadedfunction">overloadedFunction</a>(`a`, `b`): `string`</code>

</dt>

<dd>

Concatenates two strings.

The documentation site allows you to toggle between the different overloads
of a function. The implementation signature of the overloaded function is not
included in the documentation.

</dd>

</dl>

***

### anInternalFunction() {#aninternalfunction}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="aninternalfunction" href="#aninternalfunction">anInternalFunction</a>(): `void`</code>

</dt>

<dd>

**`Internal`**

Use `@internal` to indicate that something is for internal use. If the
`--excludeInternal` option is passed, TypeDoc will not document the given
code.

</dd>

</dl>

***

### CardAProps {#cardaprops}

The props type for [CardA](#carda).

#### Properties

<dl>

<dt>

<code data-typedoc-code><a id="variant" href="#variant">variant</a>: `"primary"` \| `"secondary"` \| `"success"` \| `"danger"` \| `"light"` \| `"dark"`</code>

</dt>

<dd>

The theme of the card. Defaults to `primary`.

</dd>

</dl>

***

### EasyFormDialogProps {#easyformdialogprops}

The props type of [\`EasyFormDialog\`](#easyformdialog).

#### Properties

<dl>

<dt>

<code data-typedoc-code><a id="title" href="#title">title</a>: `ReactNode`</code>

</dt>

<dd>

The title of the dialog. Can be a JSX element.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="submitbuttontext" href="#submitbuttontext">submitButtonText</a>: `string`</code>

</dt>

<dd>

The text of the submit button.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="submitbuttonclass" href="#submitbuttonclass">submitButtonClass</a><i>?</i>: `string`</code>

</dt>

<dd>

The CSS class of the submit button.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="cancelbuttontext" href="#cancelbuttontext">cancelButtonText</a><i>?</i>: `string`</code>

</dt>

<dd>

The text of the cancel button. Defaults to "Cancel".

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="submitenabled" href="#submitenabled">submitEnabled</a><i>?</i>: `boolean`</code>

</dt>

<dd>

Allows you to disable the submit button even if `getSubmitEnabled()`
would return true.

This can be useful if you want to disable the submit button while a query
is in progress.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="formisvalid" href="#formisvalid">formIsValid</a>: `boolean`</code>

</dt>

<dd>

A boolean indicating if the form is valid.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="showvalidation" href="#showvalidation">showValidation</a>: `boolean`</code>

</dt>

<dd>

A boolean indicating if validation feedback is being shown.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="closeref" href="#closeref">closeRef</a><i>?</i>: `MutableRefObject`\<() => `void`\></code>

</dt>

<dd>

This prop accepts a ref object that holds a function of type `() =>
void`. You can execute the function to programmatically close the dialog:

```
closeRef.current()
```

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="modalclass" href="#modalclass">modalClass</a><i>?</i>: `string`</code>

</dt>

<dd>

The CSS class added to the underlying Bootstrap modal.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="focusfirst" href="#focusfirst">focusFirst</a><i>?</i>: `boolean`</code>

</dt>

<dd>

Set to `false` to disable the default behavior of focusing the first
input.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="showfooter" href="#showfooter">showFooter</a><i>?</i>: `boolean`</code>

</dt>

<dd>

Set to `false` to hide the modal footer, which contains the submit and
cancel buttons.

</dd>

</dl>

#### Methods

<dl>

<dt>

<code data-typedoc-code><a id="onshowvalidationchange" href="#onshowvalidationchange">onShowValidationChange</a>(`showValidation`): `void`</code>

</dt>

<dd>

A callback that fires when the dialog is submitted.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="onsuccess" href="#onsuccess">onSuccess</a>(`payload`): `Promise`\<`void`\></code>

</dt>

<dd>

A callback that fires after the `submit` function succeeds.

If the `submit` function returned `responseData`, it is passed to your
`onSuccess` function.

Your `onSuccess` callback must return a promise. The submit button will
continue showing a loading indicator until the promise resolves. This is
to support refetching the data that was updated by the form submission.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="onclose" href="#onclose">onClose</a>(): `void`</code>

</dt>

<dd>

A callback that fires when the dialog has completely closed. Your
`onClose` callback should update call, for example,
`setDialogVisible(false)` so that the `EasyFormDialog` is no longer
rendered.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="onsubmit" href="#onsubmit">onSubmit</a>(`formData`): `Promise`\<`void`\> \| `Promise`\<`undefined` \| \{ `shouldClose?`: `boolean`; `responseData`: `unknown`; \}\></code>

</dt>

<dd>

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

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="oncancel" href="#oncancel">onCancel</a>(): `void`</code>

</dt>

<dd>

An uncommonly-used callback that fires when the user clicks the cancel button.

</dd>

</dl>

***

### SimpleTypeAlias {#simpletypealias}

<dl>

<dt>

<code data-typedoc-code>type <a id="simpletypealias" href="#simpletypealias">SimpleTypeAlias</a> = `string` \| `number` \| `boolean`</code>

</dt>

<dd>

A simple type alias defined using the `type` keyword.

</dd>

</dl>

***

### ComplexGenericTypeAlias\<T\> {#complexgenerictypealias}

<dl>

<dt>

<code data-typedoc-code>type <a id="complexgenerictypealias" href="#complexgenerictypealias">ComplexGenericTypeAlias</a>\<T\> = `T` \| `T`[] \| `Promise`\<`T`\> \| `Promise`\<`T`[]\> \| `Record`\<`string`, `Promise`\<`T`\>\></code>

</dt>

<dd>

A complex generic type.

</dd>

</dl>

***

### User {#user}

A simple interface. Each property has its own doc comment.

TypeDoc even supports doc comments on nested type definitions, as shown by the `name` property.

#### Properties

<dl>

<dt>

<code data-typedoc-code><a id="id-3" href="#id-3">id</a>: `number`</code>

</dt>

<dd>

The user's ID.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="email" href="#email">email</a>: `string`</code>

</dt>

<dd>

The user's email address.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="name-3" href="#name-3">name</a>: `object`</code>

</dt>

<dd>

The user's name.

</dd>

</dl>

***

### AdminUser {#adminuser}

An interface that extends [\`User\`](#user) and adds more properties.

Notice how TypeDoc automatically shows the inheritance hierarchy and where
each property was originally defined.

#### Properties

<dl>

<dt>

<code data-typedoc-code><a id="id-4" href="#id-4">id</a>: `number`</code>

</dt>

<dd>

The user's ID.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="email-1" href="#email-1">email</a>: `string`</code>

</dt>

<dd>

The user's email address.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="name-4" href="#name-4">name</a>: `object`</code>

</dt>

<dd>

The user's name.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="administrativearea" href="#administrativearea">administrativeArea</a>: `"sales"` \| `"delivery"` \| `"billing"`</code>

</dt>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="jobtitle" href="#jobtitle">jobTitle</a>: `string`</code>

</dt>

</dl>

***

### PI {#pi}

<dl>

<dt>

<code data-typedoc-code><i>const</i> <a id="pi" href="#pi">PI</a>: `3.14159265359` = `3.14159265359`</code>

</dt>

<dd>

A simple numeric constant.

</dd>

</dl>

***

### STRING\_CONSTANT {#string_constant}

<dl>

<dt>

<code data-typedoc-code><i>const</i> <a id="string_constant" href="#string_constant">STRING_CONSTANT</a>: `"FOOBAR"` = `"FOOBAR"`</code>

</dt>

<dd>

A simple string constant.

</dd>

</dl>

***

### ObjectConstant {#objectconstant}

<dl>

<dt>

<code data-typedoc-code><i>const</i> <a id="objectconstant" href="#objectconstant">ObjectConstant</a>: `object`</code>

</dt>

<dd>

An plain JavaScript object using `as const`.

</dd>

</dl>

***

### E {#e}

<dl>

<dt>

<code data-typedoc-code><a id="e" href="#e">E</a>: `number` = `2.718281828459045235`</code>

</dt>

<dd>

An exported variable defined with `let`.

This pattern should generally be avoided because the variable can be reassigned.

</dd>

</dl>
