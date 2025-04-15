[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / CardA

# Function: CardA()

> **CardA**(`__namedParameters`): `ReactElement`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:42](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L42)

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

## Parameters

### \_\_namedParameters

`PropsWithChildren`\<[`CardAProps`](../interfaces/CardAProps.md)\>

## Returns

`ReactElement`
