---
title: Lint Rule js/noDelete
layout: layouts/page.njk
description: MISSING DOCUMENTATION
eleventyNavigation: {
	key: lint-rules/js/noDelete,
	parent: lint-rules,
	title: js/noDelete
}
---

# js/noDelete

MISSING DOCUMENTATION

<!-- EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS -->


## Examples
## Invalid
```typescript
const arr = [['a','b','c'], [1, 2, 3]];
delete arr[0][2];
```
```typescript
const obj = {a: {b: {c: 123}}};
delete obj.a.b.c;
```
## Valid
```typescript
const foo = new Set([1,2,3]);
foo.delete(1);
```
