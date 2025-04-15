[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / WalkInCustomer

# Class: WalkInCustomer

Defined in: [examples/example-typedoc/src/classes/Customer.ts:129](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L129)

A class that extends [\`Customer\`](Customer.md).

Notice how TypeDoc shows the inheritance hierarchy for our class.

## Extends

- [`Customer`](Customer.md)

## Constructors

### new WalkInCustomer()

> **new WalkInCustomer**(`id`, `name`, `nextOrderNumber`): [`WalkInCustomer`](WalkInCustomer.md)

Defined in: [examples/example-typedoc/src/classes/Customer.ts:48](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L48)

The constructor of the `Customer` class.

#### Parameters

##### id

`number`

the customer's database ID

##### name

`string`

the customer's name

##### nextOrderNumber

the next number to use when this customer places an order

`string` | `number`

#### Returns

[`WalkInCustomer`](WalkInCustomer.md)

#### Inherited from

[`Customer`](Customer.md).[`constructor`](Customer.md#constructors)

## Properties

### id

> `readonly` **id**: `number`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:10](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L10)

A public readonly property.

#### Inherited from

[`Customer`](Customer.md).[`id`](Customer.md#id-1)

***

### name

> **name**: `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:13](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L13)

A public property that can be reassigned.

#### Inherited from

[`Customer`](Customer.md).[`name`](Customer.md#name-1)

***

### contactName?

> `protected` `optional` **contactName**: `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:16](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L16)

An optional protected property.

#### Inherited from

[`Customer`](Customer.md).[`contactName`](Customer.md#contactname)

***

### trustedCustomer?

> `optional` **trustedCustomer**: `boolean`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:131](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L131)

A property defined on the subclass.

## Accessors

### nextOrderNumber

#### Get Signature

> **get** **nextOrderNumber**(): `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:25](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L25)

A getter that prepends a number sign to the private `_nextOrderNumber`
property.

##### Returns

`string`

#### Set Signature

> **set** **nextOrderNumber**(`value`): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:33](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L33)

A setter that takes in either a string or a number and sets the private
`_nextOrderNumber` property.

##### Parameters

###### value

`string` | `number`

##### Returns

`void`

#### Inherited from

[`Customer`](Customer.md).[`nextOrderNumber`](Customer.md#nextordernumber-1)

## Methods

### onOrderPlacedArrowFunction()

> **onOrderPlacedArrowFunction**(): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:65](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L65)

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

#### Returns

`void`

#### Inherited from

[`Customer`](Customer.md).[`onOrderPlacedArrowFunction`](Customer.md#onorderplacedarrowfunction)

***

### isValid()

> `protected` **isValid**(): `boolean`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:70](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L70)

A protected method.

#### Returns

`boolean`

#### Inherited from

[`Customer`](Customer.md).[`isValid`](Customer.md#isvalid)

***

### onOrderPlaced()

> **onOrderPlaced**(): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:139](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L139)

An example of overriding a public method.

#### Returns

`void`

#### Overrides

[`Customer`](Customer.md).[`onOrderPlaced`](Customer.md#onorderplaced)
