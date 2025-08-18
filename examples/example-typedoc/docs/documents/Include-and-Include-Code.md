# Including other files

It can be convenient to write long-form guides/tutorials outside of doc comments.
To support this, TypeDoc supports including documents (like this page!) which exist
as standalone `.md` files in your repository.
These files can then import other files using the `@include` tag.

For example, the rest of this page is imported from `include-code.md` using:

```md
{@include ./include-code.md}
```

## The `@includeCode` Tag

For convenience, an `@includeCode` inline tag is also recognized, which will include the referenced file within a code block, using the file extension for selecting the syntax highlighting language.
As an example, this file is inserting the code block below using:

```md
{@includeCode ../reexports.ts}
```

**Result:**

```ts
/**
 * Here is a useful function re-exported from Lodash.
 */
export { sortBy as lodashSortBy } from "lodash";
```
