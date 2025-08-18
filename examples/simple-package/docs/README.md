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

## Enumerations

### SimpleEnum {#simpleenum}

A simple enum.

#### Enumeration Members

##### Value1 {#value1}

<dl>

<dt>

<code data-typedoc-code><a id="value1" href="#value1">Value1</a>: `0`</code>

</dt>

</dl>

##### Value2 {#value2}

<dl>

<dt>

<code data-typedoc-code><a id="value2" href="#value2">Value2</a>: `1`</code>

</dt>

</dl>

## Classes

### SimpleClass {#simpleclass}

#### Constructors

##### Constructor

<dl>

<dt>

<code data-typedoc-code>new <a id="constructor" href="#constructor">SimpleClass</a>(): [`SimpleClass`](#simpleclass)</code>

</dt>

</dl>

#### Properties

<dl>

<dt>

<code data-typedoc-code><a id="simpleproperty" href="#simpleproperty">simpleProperty</a>: `string`</code>

</dt>

<dd>

Comment for simpleProperty

</dd>

</dl>

#### Accessors

<dl>

<dt>

<code data-typedoc-code>get <a id="complexgetter" href="#complexgetter">complexGetter</a>(): `object`</code>

</dt>

<dd>

Comment for complexGetter

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code>get <a id="simplegetter" href="#simplegetter">simpleGetter</a>(): `string`</code>

</dt>

<dd>

Comment for simpleGetter

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code>set <a id="simplesetter" href="#simplesetter">simpleSetter</a>(`value`): `void`</code>

</dt>

<dd>

Comment for simpleSetter

</dd>

</dl>

***

### SimpleReader {#simplereader}

A simple class.

#### Constructors

##### Constructor

<dl>

<dt>

<code data-typedoc-code>new <a id="constructor-1" href="#constructor-1">SimpleReader</a>(): [`SimpleReader`](#simplereader)</code>

</dt>

</dl>

#### Methods

<dl>

<dt>

<code data-typedoc-code><a id="read" href="#read">read</a>(): `string`</code>

</dt>

<dd>

Reads a value from the reader.

</dd>

</dl>

***

### SimpleWriter\<T\> {#simplewriter}

A simple class with a type parameter.

This class implements [Writer](#writer).

#### Constructors

##### Constructor

<dl>

<dt>

<code data-typedoc-code>new <a id="constructor-2" href="#constructor-2">SimpleWriter</a>\<T\>(): [`SimpleWriter`](#simplewriter)\<`T`\></code>

</dt>

</dl>

#### Methods

<dl>

<dt>

<code data-typedoc-code><a id="write" href="#write">write</a>(`value`): `void`</code>

</dt>

<dd>

Writes a value to the writer.

</dd>

</dl>

***

### SubClass {#subclass}

#### Constructors

##### Constructor

<dl>

<dt>

<code data-typedoc-code>new <a id="constructor-3" href="#constructor-3">SubClass</a>(): [`SubClass`](#subclass)</code>

</dt>

</dl>

#### Properties

<dl>

<dt>

<code data-typedoc-code><a id="simpleproperty-1" href="#simpleproperty-1">simpleProperty</a>: `string`</code>

</dt>

<dd>

Comment for simpleProperty

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="subproperty" href="#subproperty">subProperty</a>: `string`</code>

</dt>

<dd>

Comment for subProperty

</dd>

</dl>

#### Accessors

<dl>

<dt>

<code data-typedoc-code>get <a id="complexgetter-1" href="#complexgetter-1">complexGetter</a>(): `object`</code>

</dt>

<dd>

Comment for complexGetter

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code>get <a id="simplegetter-1" href="#simplegetter-1">simpleGetter</a>(): `string`</code>

</dt>

<dd>

Comment for simpleGetter

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code>set <a id="simplesetter-1" href="#simplesetter-1">simpleSetter</a>(`value`): `void`</code>

</dt>

<dd>

Comment for simpleSetter

</dd>

</dl>

## Interfaces

### Reader {#reader}

A simple interface.

#### Methods

<dl>

<dt>

<code data-typedoc-code><a id="read-2" href="#read-2">read</a>(): `string`</code>

</dt>

<dd>

Reads a value.

</dd>

</dl>

***

### SimpleInterface {#simpleinterface}

#### Properties

<dl>

<dt>

<code data-typedoc-code><a id="fn" href="#fn">fn</a>: (`options`) => `number`</code>

</dt>

<dd>

A function with a complex parameter.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="property" href="#property">property</a>: `string`</code>

</dt>

<dd>

A simple property.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="withdefault" href="#withdefault">withDefault</a><i>?</i>: `number`</code>

</dt>

<dd>

A simple property with a default tag.

###### Default

`123`

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="withexample" href="#withexample">withExample</a><i>?</i>: `number`</code>

</dt>

<dd>

A simple method with an example tag.

###### Examples

```ts
const a = 1
const b = 2
const c = a + b
```

```ts
const a = 2
const b = 3
const c = a + b
```

</dd>

</dl>

#### Methods

<dl>

<dt>

<code data-typedoc-code><a id="method" href="#method">method</a>(): `void`</code>

</dt>

<dd>

A simple method.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="method2" href="#method2">method2</a>\<T\>(`value`): `void`</code>

</dt>

<dd>

A method with a type parameter.

</dd>

</dl>

***

### SubInterface {#subinterface}

#### Properties

<dl>

<dt>

<code data-typedoc-code><a id="fn-1" href="#fn-1">fn</a>: (`options`) => `number`</code>

</dt>

<dd>

A function with a complex parameter.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="property-1" href="#property-1">property</a>: `string`</code>

</dt>

<dd>

A simple property.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="subproperty-1" href="#subproperty-1">subProperty</a>: `string`</code>

</dt>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="withdefault-1" href="#withdefault-1">withDefault</a><i>?</i>: `number`</code>

</dt>

<dd>

A simple property with a default tag.

###### Default

`123`

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="withexample-1" href="#withexample-1">withExample</a><i>?</i>: `number`</code>

</dt>

<dd>

A simple method with an example tag.

###### Examples

```ts
const a = 1
const b = 2
const c = a + b
```

```ts
const a = 2
const b = 3
const c = a + b
```

</dd>

</dl>

#### Methods

<dl>

<dt>

<code data-typedoc-code><a id="method-2" href="#method-2">method</a>(): `void`</code>

</dt>

<dd>

A simple method.

</dd>

</dl>

<dl>

<dt>

<code data-typedoc-code><a id="method2-2" href="#method2-2">method2</a>\<T\>(`value`): `void`</code>

</dt>

<dd>

A method with a type parameter.

</dd>

</dl>

***

### Writer\<T\> {#writer}

An interface with a generic type parameter.

#### Methods

<dl>

<dt>

<code data-typedoc-code><a id="write-2" href="#write-2">write</a>(`value`): `void`</code>

</dt>

<dd>

Writes a value.

</dd>

</dl>

## Type Aliases

### Fn1() {#fn1}

<dl>

<dt>

<code data-typedoc-code>type <a id="fn1" href="#fn1">Fn1</a> = () => `number`</code>

</dt>

<dd>

Implemented by [fn1](#fn1-1), [fn1\_1](#fn1_1), [fn1\_1\_1](#fn1_1_1) and [fn\_x](#fn_x)

</dd>

</dl>

***

### Fn2() {#fn2}

<dl>

<dt>

<code data-typedoc-code>type <a id="fn2" href="#fn2">Fn2</a> = () => `number`</code>

</dt>

</dl>

***

### SimpleType {#simpletype}

<dl>

<dt>

<code data-typedoc-code>type <a id="simpletype" href="#simpletype">SimpleType</a> = `string` \| `number`</code>

</dt>

<dd>

A simple type.

</dd>

</dl>

***

### SubType {#subtype}

<dl>

<dt>

<code data-typedoc-code>type <a id="subtype" href="#subtype">SubType</a> = [`SimpleInterface`](#simpleinterface) & `object`</code>

</dt>

<dd>

#### Type declaration

<dl>

<dt>

<code data-typedoc-code>subProperty: `string`</code>

</dt>

</dl>

</dd>

</dl>

## Variables

### variable {#variable}

<dl>

<dt>

<code data-typedoc-code><i>const</i> <a id="variable" href="#variable">variable</a>: `1` = `1`</code>

</dt>

<dd>

A simple variable.

</dd>

</dl>

## Functions

### add() {#add}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="add" href="#add">add</a>(`a`, `b`): `number`</code>

</dt>

<dd>

A simple function.

</dd>

</dl>

***

### fn\_x() {#fn_x}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="fn_x" href="#fn_x">fn_x</a>(): `number`</code>

</dt>

</dl>

***

### fn1() {#fn1-1}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="fn1-1" href="#fn1-1">fn1</a>(): `number`</code>

</dt>

<dd>

See also [Fn1](#fn1)

</dd>

</dl>

***

### fn1\_1() {#fn1_1}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="fn1_1" href="#fn1_1">fn1_1</a>(): `number`</code>

</dt>

</dl>

***

### fn1\_1\_1() {#fn1_1_1}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="fn1_1_1" href="#fn1_1_1">fn1_1_1</a>(): `number`</code>

</dt>

<dd>

See also [Fn1](#fn1)

</dd>

</dl>

***

### fn1\_2() {#fn1_2}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="fn1_2" href="#fn1_2">fn1_2</a>(): `number`</code>

</dt>

<dd>

See also [Fn1](#fn1)

</dd>

</dl>

***

### fn2() {#fn2-1}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="fn2-1" href="#fn2-1">fn2</a>(): `number`</code>

</dt>

</dl>

***

### functionWithFunctionParameter() {#functionwithfunctionparameter}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="functionwithfunctionparameter" href="#functionwithfunctionparameter">functionWithFunctionParameter</a>(`fn`): (`num`) => `boolean`</code>

</dt>

</dl>

***

### functionWithUnionParameters() {#functionwithunionparameters}

<dl>

<dt>

<code data-typedoc-code><i>function</i> <a id="functionwithunionparameters" href="#functionwithunionparameters">functionWithUnionParameters</a>(`a`, `b`): `string`</code>

</dt>

</dl>
