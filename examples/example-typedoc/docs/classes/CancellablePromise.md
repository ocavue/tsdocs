[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / CancellablePromise

# Class: CancellablePromise\<T\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:52](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L52)

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

## Type Parameters

• **T**

what the `CancellablePromise` resolves to

## Constructors

### new CancellablePromise()

> **new CancellablePromise**\<`T`\>(`promise`, `cancel`): [`CancellablePromise`](CancellablePromise.md)\<`T`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:76](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L76)

#### Parameters

##### promise

`PromiseLike`\<`T`\>

a normal promise or thenable

##### cancel

(`reason`?) => `void`

a function that cancels `promise`. **Calling `cancel` after
`promise` has resolved must be a no-op.**

#### Returns

[`CancellablePromise`](CancellablePromise.md)\<`T`\>

## Properties

### promise

> `protected` `readonly` **promise**: `Promise`\<`T`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:60](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L60)

As a consumer of the library, you shouldn't ever need to access
`CancellablePromise.promise` directly.

If you are subclassing `CancellablePromise` for some reason, you
can access this property.

***

### cancel()

> `readonly` **cancel**: (`reason`?) => `void`

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:69](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L69)

Cancel the `CancellablePromise`.

#### Parameters

##### reason?

`string`

#### Returns

`void`

## Methods

Descriptions can be added for groups with `@groupDescription`, which will show up in
the index where groups are listed. This works for both manually created groups which
are created with `@group`, and implicit groups like the `Methods` group that this
description is attached to.

### then()

> **then**\<`TResult1`, `TResult2`\>(`onFulfilled`?, `onRejected`?): [`CancellablePromise`](CancellablePromise.md)\<`TResult1` \| `TResult2`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:101](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L101)

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

#### Type Parameters

• **TResult1** = `T`

• **TResult2** = `never`

#### Parameters

##### onFulfilled?

`null` | (`value`) => `TResult1` \| `PromiseLike`\<`TResult1`\>

##### onRejected?

`null` | (`reason`) => `TResult2` \| `PromiseLike`\<`TResult2`\>

#### Returns

[`CancellablePromise`](CancellablePromise.md)\<`TResult1` \| `TResult2`\>

a new CancellablePromise

***

### catch()

> **catch**\<`TResult`\>(`onRejected`?): [`CancellablePromise`](CancellablePromise.md)\<`T` \| `TResult`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:152](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L152)

Analogous to `Promise.catch`.

#### Type Parameters

• **TResult** = `never`

#### Parameters

##### onRejected?

`null` | (`reason`) => `TResult` \| `PromiseLike`\<`TResult`\>

#### Returns

[`CancellablePromise`](CancellablePromise.md)\<`T` \| `TResult`\>

***

### finally()

> **finally**(`onFinally`?): [`CancellablePromise`](CancellablePromise.md)\<`T`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:169](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L169)

Attaches a callback that is invoked when the Promise is settled
(fulfilled or rejected). The resolved value cannot be modified from the
callback.

#### Parameters

##### onFinally?

The callback to execute when the Promise is settled
(fulfilled or rejected).

`null` | () => `void`

#### Returns

[`CancellablePromise`](CancellablePromise.md)\<`T`\>

A Promise for the completion of the callback.

***

### resolve()

#### Call Signature

> `static` **resolve**(): [`CancellablePromise`](CancellablePromise.md)\<`void`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:185](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L185)

Analogous to `Promise.resolve`.

The returned promise should resolve even if it is canceled. The idea is
that the promise is resolved instantaneously, so by the time the promise
is canceled, it has already resolved.

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<`void`\>

#### Call Signature

> `static` **resolve**\<`T`\>(`value`): [`CancellablePromise`](CancellablePromise.md)\<`T`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:187](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L187)

Analogous to `Promise.resolve`.

The returned promise should resolve even if it is canceled. The idea is
that the promise is resolved instantaneously, so by the time the promise
is canceled, it has already resolved.

##### Type Parameters

• **T**

##### Parameters

###### value

`T`

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<`T`\>

***

### reject()

> `static` **reject**\<`T`\>(`reason`?): [`CancellablePromise`](CancellablePromise.md)\<`T`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:201](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L201)

Analogous to `Promise.reject`.

Like `CancellablePromise.resolve`, canceling the returned
`CancellablePromise` is a no-op.

#### Type Parameters

• **T**

#### Parameters

##### reason?

`unknown`

this should probably be an `Error` object

#### Returns

[`CancellablePromise`](CancellablePromise.md)\<`T`\>

***

### all()

Analogous to `Promise.all`.

#### Param

an array that may contain `CancellablePromise`s, promises,
thenables, and resolved values

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\>(`values`): [`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:205](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L205)

##### Type Parameters

• **T1**

• **T2**

• **T3**

• **T4**

• **T5**

• **T6**

• **T7**

• **T8**

• **T9**

• **T10**

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>, `T9` \| `PromiseLike`\<`T9`\>, `T10` \| `PromiseLike`\<`T10`\>\]

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`, `T10`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\>(`values`): [`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:220](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L220)

##### Type Parameters

• **T1**

• **T2**

• **T3**

• **T4**

• **T5**

• **T6**

• **T7**

• **T8**

• **T9**

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>, `T9` \| `PromiseLike`\<`T9`\>\]

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`, `T9`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\>(`values`): [`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:234](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L234)

##### Type Parameters

• **T1**

• **T2**

• **T3**

• **T4**

• **T5**

• **T6**

• **T7**

• **T8**

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>, `T8` \| `PromiseLike`\<`T8`\>\]

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\>(`values`): [`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:247](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L247)

##### Type Parameters

• **T1**

• **T2**

• **T3**

• **T4**

• **T5**

• **T6**

• **T7**

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>, `T7` \| `PromiseLike`\<`T7`\>\]

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\>(`values`): [`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:259](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L259)

##### Type Parameters

• **T1**

• **T2**

• **T3**

• **T4**

• **T5**

• **T6**

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>, `T6` \| `PromiseLike`\<`T6`\>\]

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`, `T5`\>(`values`): [`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`, `T5`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:270](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L270)

##### Type Parameters

• **T1**

• **T2**

• **T3**

• **T4**

• **T5**

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>, `T5` \| `PromiseLike`\<`T5`\>\]

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`, `T5`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`, `T4`\>(`values`): [`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:280](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L280)

##### Type Parameters

• **T1**

• **T2**

• **T3**

• **T4**

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>, `T4` \| `PromiseLike`\<`T4`\>\]

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`, `T4`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`, `T3`\>(`values`): [`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:289](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L289)

##### Type Parameters

• **T1**

• **T2**

• **T3**

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>, `T3` \| `PromiseLike`\<`T3`\>\]

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`, `T3`\]\>

#### Call Signature

> `static` **all**\<`T1`, `T2`\>(`values`): [`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`\]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:297](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L297)

##### Type Parameters

• **T1**

• **T2**

##### Parameters

###### values

readonly \[`T1` \| `PromiseLike`\<`T1`\>, `T2` \| `PromiseLike`\<`T2`\>\]

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<\[`T1`, `T2`\]\>

#### Call Signature

> `static` **all**\<`T`\>(`values`): [`CancellablePromise`](CancellablePromise.md)\<`T`[]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:301](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L301)

##### Type Parameters

• **T**

##### Parameters

###### values

readonly (`T` \| `PromiseLike`\<`T`\>)[]

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<`T`[]\>

***

### allSettled()

#### Call Signature

> `static` **allSettled**\<`T`\>(`values`): [`CancellablePromise`](CancellablePromise.md)\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<T\[P\<P\>\] extends PromiseLike\<U\> ? U : T\[P\<P\>\]\> \}\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:327](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L327)

Creates a `CancellablePromise` that is resolved with an array of results
when all of the provided `Promises` resolve or reject.

##### Type Parameters

• **T** *extends* readonly `unknown`[] \| readonly \[`unknown`\]

##### Parameters

###### values

`T`

An array of `Promises`.

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<\{ -readonly \[P in string \| number \| symbol\]: PromiseSettledResult\<T\[P\<P\>\] extends PromiseLike\<U\> ? U : T\[P\<P\>\]\> \}\>

A new `CancellablePromise`.

#### Call Signature

> `static` **allSettled**\<`T`\>(`values`): [`CancellablePromise`](CancellablePromise.md)\<`PromiseSettledResult`\<`T` *extends* `PromiseLike`\<`U`\> ? `U` : `T`\>[]\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:345](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L345)

Creates a `CancellablePromise` that is resolved with an array of results
when all of the provided `Promise`s resolve or reject.

##### Type Parameters

• **T**

##### Parameters

###### values

`Iterable`\<`T`\>

An array of `Promise`s.

##### Returns

[`CancellablePromise`](CancellablePromise.md)\<`PromiseSettledResult`\<`T` *extends* `PromiseLike`\<`U`\> ? `U` : `T`\>[]\>

A new `CancellablePromise`. Canceling it cancels all of the input
promises.

***

### race()

> `static` **race**\<`T`\>(`values`): [`CancellablePromise`](CancellablePromise.md)\<`Awaited`\<`T`\>\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:370](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L370)

Creates a `CancellablePromise` that is resolved or rejected when any of
the provided `Promises` are resolved or rejected.

#### Type Parameters

• **T**

#### Parameters

##### values

readonly `T`[]

An array of `Promises`.

#### Returns

[`CancellablePromise`](CancellablePromise.md)\<`Awaited`\<`T`\>\>

A new `CancellablePromise`. Canceling it cancels all of the input
promises.

***

### delay()

> `static` **delay**(`ms`): [`CancellablePromise`](CancellablePromise.md)\<`void`\>

Defined in: [examples/example-typedoc/src/classes/CancellablePromise.ts:385](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/CancellablePromise.ts#L385)

#### Parameters

##### ms

`number`

#### Returns

[`CancellablePromise`](CancellablePromise.md)\<`void`\>

a `CancellablePromise` that resolves after `ms` milliseconds.
