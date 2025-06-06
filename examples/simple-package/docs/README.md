# simple-package

A simple package.

## Installation

```bash
npm install simple-package
```

## Usage

```ts
import { variable } from 'simple-package'
```

## API Reference

### SimpleEnum <a id="simple-enum" href="#simple-enum">#</a>

A simple enum.

<dl>

<dt>

`Value1 = 0`

</dt>

<dd>

</dd>

<dt>

`Value2 = 1`

</dt>

<dd>

</dd>

</dl>

### SimpleClass <a id="simple-class" href="#simple-class">#</a>

<dl>

<dt>

`constructor`

</dt>

<dd>

```
new SimpleClass(): SimpleClass
```

</dd>

<dt>

`simpleProperty: string`

</dt>

<dd>

Comment for simpleProperty

</dd>

<dt>

`get complexGetter(): { a: number; b?: string; c: number | (() => number); d: { fn: () => number } }`

</dt>

<dd>

Comment for complexGetter

</dd>

<dt>

`get simpleGetter(): string`

</dt>

<dd>

Comment for simpleGetter

</dd>

<dt>

`set simpleSetter(value: string)`

</dt>

<dd>

Comment for simpleSetter

</dd>

</dl>

### SimpleReader <a id="simple-reader" href="#simple-reader">#</a>

A simple class.

<dl>

<dt>

`constructor`

</dt>

<dd>

```
new SimpleReader(): SimpleReader
```

</dd>

<dt>

`read`

</dt>

<dd>

Reads a value from the reader.

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

```
new SimpleWriter<T>(): SimpleWriter<T>
```

</dd>

<dt>

`write`

</dt>

<dd>

Writes a value to the writer.

```ts
const write: (value: T) => void
```

</dd>

</dl>

### SubClass <a id="sub-class" href="#sub-class">#</a>

**Extends** `SimpleClass`

<dl>

<dt>

`constructor`

</dt>

<dd>

```
new SubClass(): SubClass
```

</dd>

<dt>

`subProperty: string`

</dt>

<dd>

Comment for subProperty

</dd>

</dl>

### Reader <a id="reader" href="#reader">#</a>

A simple interface.

<dl>

<dt>

`read`

</dt>

<dd>

Reads a value.

```ts
const read: () => string
```

</dd>

</dl>

### SimpleInterface <a id="simple-interface" href="#simple-interface">#</a>

<dl>

<dt>

`fn: (options: { a: number; b: Pick<{ b1: string; b2: number }, "b1">; c: () => Promise<void>; d: <T>(...args: T[]) => T extends string ? string : number }) => number`

</dt>

<dd>

A function with a complex parameter.

</dd>

<dt>

`property: string`

</dt>

<dd>

A simple property.

</dd>

<dt>

`withDefault?: number`

</dt>

<dd>

A simple property with a default tag.

**Default**: `123`

</dd>

<dt>

`withExample?: number`

</dt>

<dd>

A simple method with an example tag.

**Example**

```ts
const a = 1
const b = 2
const c = a + b
```

**Example**

```ts
const a = 2
const b = 3
const c = a + b
```

</dd>

<dt>

`method`

</dt>

<dd>

A simple method.

```ts
const method: () => void
```

</dd>

<dt>

`method2`

</dt>

<dd>

A method with a type parameter.

```ts
const method2: <T>(value: T) => void
```

</dd>

</dl>

### SubInterface <a id="sub-interface" href="#sub-interface">#</a>

<dl>

<dt>

`fn: (options: { a: number; b: Pick<{ b1: string; b2: number }, "b1">; c: () => Promise<void>; d: <T>(...args: T[]) => T extends string ? string : number }) => number`

</dt>

<dd>

A function with a complex parameter.

</dd>

<dt>

`property: string`

</dt>

<dd>

A simple property.

</dd>

<dt>

`subProperty: string`

</dt>

<dd>

</dd>

<dt>

`withDefault?: number`

</dt>

<dd>

A simple property with a default tag.

**Default**: `123`

</dd>

<dt>

`withExample?: number`

</dt>

<dd>

A simple method with an example tag.

**Example**

```ts
const a = 1
const b = 2
const c = a + b
```

**Example**

```ts
const a = 2
const b = 3
const c = a + b
```

</dd>

<dt>

`method`

</dt>

<dd>

A simple method.

```ts
const method: () => void
```

</dd>

<dt>

`method2`

</dt>

<dd>

A method with a type parameter.

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

Writes a value.

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

### SubType <a id="sub-type" href="#sub-type">#</a>

**Type**: `SimpleInterface & { subProperty: string }`

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

### functionWithFunctionParameter <a id="function-with-function-parameter" href="#function-with-function-parameter">#</a>

```ts
function functionWithFunctionParameter(fn: (num: number) => boolean): (num: number) => boolean
```

### functionWithUnionParameters <a id="function-with-union-parameters" href="#function-with-union-parameters">#</a>

```ts
function functionWithUnionParameters(a: string | number, b: number | ((num: number) => boolean)): string
```
