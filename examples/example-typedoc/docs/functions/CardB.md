[**TypeDoc Example**](../README.md)

***

[TypeDoc Example](../globals.md) / CardB

# Function: CardB()

> **CardB**(`__namedParameters`): `ReactElement`

Defined in: [examples/example-typedoc/src/reactComponents.tsx:74](https://github.com/ocavue/tsdocs/blob/2f8c0a17dd6e463365fb6ab0a4b429c67f8821f6/examples/example-typedoc/src/reactComponents.tsx#L74)

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

## Parameters

### \_\_namedParameters

`PropsWithChildren`\<\{ `variant`: `"primary"` \| `"secondary"` \| `"success"` \| `"danger"` \| `"light"` \| `"dark"`; \}\>

## Returns

`ReactElement`
