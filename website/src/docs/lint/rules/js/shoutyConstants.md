---
title: Lint Rule js/shoutyConstants
layout: layouts/page.njk
description: MISSING DOCUMENTATION
eleventyNavigation: {
	key: lint-rules/js/shoutyConstants,
	parent: lint-rules,
	title: js/shoutyConstants
}
---

# js/shoutyConstants

MISSING DOCUMENTATION

<!-- EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS -->


## Examples
## Invalid
```typescript
const FOO = "FOO";
console.log(FOO);
```
```typescript
const FOO = "FOO";
function f() {
	return FOO;
}
```
```typescript
const FOO = "FOO", BAR = "bar";
console.log(FOO);
```
## Valid
```typescript
let FOO = "FOO";
console.log(FOO);
```
```typescript
export const FOO = "FOO";
console.log(FOO);
```
```typescript
function f(FOO = "FOO") {
	return FOO;
}
```
