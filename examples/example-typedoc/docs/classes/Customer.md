[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / Customer

# Class: `abstract` Customer

Defined in: [examples/example-typedoc/src/classes/Customer.ts:8](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L8)

An abstract base class for the customer entity in our application.

Notice how TypeDoc shows the inheritance hierarchy for our class.

## Extended by

- [`DeliveryCustomer`](DeliveryCustomer.md)
- [`WalkInCustomer`](WalkInCustomer.md)

## Constructors

### new Customer()

> **new Customer**(`id`, `name`, `nextOrderNumber`): [`Customer`](Customer.md)

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

[`Customer`](Customer.md)

## Properties

### id

> `readonly` **id**: `number`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:10](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L10)

A public readonly property.

***

### name

> **name**: `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:13](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L13)

A public property that can be reassigned.

***

### contactName?

> `protected` `optional` **contactName**: `string`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:16](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L16)

An optional protected property.

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

## Methods

### onOrderPlaced()

> **onOrderPlaced**(): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:56](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L56)

A public method. To be called when an order is placed for this customer.

#### Returns

`void`

***

### onOrderPlacedArrowFunction()

> **onOrderPlacedArrowFunction**(): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:65](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L65)

A public method that's defined using an arrow function.

TypeDoc knows to document this as a method rather than a property.

#### Returns

`void`

***

### isValid()

> `protected` **isValid**(): `boolean`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:70](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L70)

A protected method.

#### Returns

`boolean`
