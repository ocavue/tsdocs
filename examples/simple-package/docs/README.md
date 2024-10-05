# simple-package

## API

### SimpleEnum <a id="simple-enum" href="#simple-enum">#</a>

<!-- Declaration kind 8 is not implemented (name: SimpleEnum) -->

### SimpleReader <a id="simple-reader" href="#simple-reader">#</a>

A simple class.

<dl>

<dt>

`constructor`

</dt>

<dd>

```ts
new SimpleReader()
```

</dd>

<dt>

`read`

</dt>

<dd>

```ts
const read: () => string
```

</dd>

</dl>

### SimpleWriter <a id="simple-writer" href="#simple-writer">#</a>

A simple class with a type parameter.

This class implements [Writer](README.md#writer).

<dl>

<dt>

`constructor`

</dt>

<dd>

```ts
new SimpleWriter<T>()
```

</dd>

<dt>

`write`

</dt>

<dd>

```ts
const write: (value: T) => void
```

</dd>

</dl>

### Reader <a id="reader" href="#reader">#</a>

A simple interface.

<dl>

<dt>

`read`

</dt>

<dd>

```ts
const read: () => string
```

</dd>

</dl>

### SimpleInterface <a id="simple-interface" href="#simple-interface">#</a>

<dl>

<dt>

`property`

</dt>

<dd>

A simple property.

**Type**: `string`

</dd>

<dt>

`withDefault`

</dt>

<dd>

A simple property with a default tag.

**Type**: `number`

**Default**: `1`

</dd>

<dt>

`withExample`

</dt>

<dd>

A simple method with an example tag.

**Type**: `number`

**Example**

```````ts
const a = 1
const b = 2
const c = a + b
``````ts
const a = 2
const b = 3
const c = a + b
```````

</dd>

<dt>

`method`

</dt>

<dd>

```ts
const method: () => void
```

</dd>

<dt>

`method2`

</dt>

<dd>

```ts
const method2: <T>(value: T) => void
```

</dd>

</dl>

### Writer <a id="writer" href="#writer">#</a>

An interface with a generic type parameter.

<dl>

<dt>

`write`

</dt>

<dd>

```ts
const write: (value: T) => void
```

</dd>

</dl>

### Fn1 <a id="fn1" href="#fn1">#</a>

Implemented by [fn1](README.md#fn1-1), [fn1\_1](README.md#fn1-1-1), [fn1\_1\_1](README.md#fn1-1-1-1) and [fn\_x](README.md#fn-x)

**Type**: `() => number`

### Fn2 <a id="fn2" href="#fn2">#</a>

**Type**: `() => number`

### SimpleType <a id="simple-type" href="#simple-type">#</a>

A simple type.

**Type**: `string | number`

### variable <a id="variable" href="#variable">#</a>

A simple variable.

**Type**: `1`

### add <a id="add" href="#add">#</a>

```ts
function add(a: number, b: number): number
```

A simple function.

### fn\_x <a id="fn-x" href="#fn-x">#</a>

```ts
function fn_x(): number
```

### fn1 <a id="fn1-1" href="#fn1-1">#</a>

```ts
function fn1(): number
```

See also [Fn1](README.md#fn1)

### fn1\_1 <a id="fn1-1-1" href="#fn1-1-1">#</a>

```ts
function fn1_1(): number
```

### fn1\_1\_1 <a id="fn1-1-1-1" href="#fn1-1-1-1">#</a>

```ts
function fn1_1_1(): number
```

See also [Fn1](README.md#fn1)

### fn1\_2 <a id="fn1-2" href="#fn1-2">#</a>

```ts
function fn1_2(): number
```

See also [Fn1](README.md#fn1)

### fn2 <a id="fn2-1" href="#fn2-1">#</a>

```ts
function fn2(): number
```
