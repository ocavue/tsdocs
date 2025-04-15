[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / DeliveryCustomer

# Class: DeliveryCustomer

Defined in: [examples/example-typedoc/src/classes/Customer.ts:85](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L85)

A class that extends [\`Customer\`](Customer.md).

Notice how TypeDoc shows the inheritance hierarchy for our class.

## Extends

- [`Customer`](Customer.md)

## Constructors

### new DeliveryCustomer()

> **new DeliveryCustomer**(`id`, `name`, `nextOrderNumber`, `subscriptionType`): [`DeliveryCustomer`](DeliveryCustomer.md)

Defined in: [examples/example-typedoc/src/classes/Customer.ts:100](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L100)

The constructor of the `DeliveryCustomer` class.

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

##### subscriptionType

whether this customer has a basic or enterprise subscription

`"basic"` | `"enterprise"`

#### Returns

[`DeliveryCustomer`](DeliveryCustomer.md)

#### Overrides

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

### preferredCourierId?

> `optional` **preferredCourierId**: `number`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:87](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L87)

A property defined on the subclass.

***

### subscriptionType

> `readonly` **subscriptionType**: `"basic"` \| `"enterprise"`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:90](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L90)

Another property defined on the subclass.

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

### onOrderPlaced()

> **onOrderPlaced**(): `void`

Defined in: [examples/example-typedoc/src/classes/Customer.ts:56](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L56)

A public method. To be called when an order is placed for this customer.

#### Returns

`void`

#### Inherited from

[`Customer`](Customer.md).[`onOrderPlaced`](Customer.md#onorderplaced)

***

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

Defined in: [examples/example-typedoc/src/classes/Customer.ts:116](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/classes/Customer.ts#L116)

An example of overriding a protected method.

A `DeliveryCustomer` can only have a preferred courier if its
subscription type is enterprise.

#### Returns

`boolean`

#### Overrides

[`Customer`](Customer.md).[`isValid`](Customer.md#isvalid)
