# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > basic > 1`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.jsx"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array ["jsx"]
	loc: Object {
		filename: "input.jsx"
		end: Object {
			column: 5
			index: 5
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.jsx"
				end: Object {
					column: 5
					index: 5
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSXElement {
				name: JSXIdentifier {
					name: "a"
					loc: Object {
						filename: "input.jsx"
						end: Object {
							column: 2
							index: 2
							line: 1
						}
						start: Object {
							column: 1
							index: 1
							line: 1
						}
					}
				}
				attributes: Array []
				children: Array []
				selfClosing: true
				typeArguments: undefined
				loc: Object {
					filename: "input.jsx"
					end: Object {
						column: 5
						index: 5
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
