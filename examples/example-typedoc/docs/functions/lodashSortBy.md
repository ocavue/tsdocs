[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / lodashSortBy

# Function: lodashSortBy()

## Call Signature

> **lodashSortBy**\<`T`\>(`collection`, ...`iteratees`?): `T`[]

Defined in: node\_modules/.pnpm/@types+lodash@4.17.16/node\_modules/@types/lodash/common/collection.d.ts:1908

Creates an array of elements, sorted in ascending order by the results of
running each element in a collection through each iteratee. This method
performs a stable sort, that is, it preserves the original sort order of
equal elements. The iteratees are invoked with one argument: (value).

### Type Parameters

• **T**

### Parameters

#### collection

The collection to iterate over.

`undefined` | `null` | `List`\<`T`\>

#### iteratees?

...`Many`\<`ListIteratee`\<`T`\>\>[]

The iteratees to sort by, specified individually or in arrays.

### Returns

`T`[]

Returns the new sorted array.

### Example

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

## Call Signature

> **lodashSortBy**\<`T`\>(`collection`, ...`iteratees`): `T`\[keyof `T`\][]

Defined in: node\_modules/.pnpm/@types+lodash@4.17.16/node\_modules/@types/lodash/common/collection.d.ts:1912

### Type Parameters

• **T** *extends* `object`

### Parameters

#### collection

`undefined` | `null` | `T`

#### iteratees

...`Many`\<`ObjectIteratee`\<`T`\>\>[]

### Returns

`T`\[keyof `T`\][]

### See

_.sortBy
