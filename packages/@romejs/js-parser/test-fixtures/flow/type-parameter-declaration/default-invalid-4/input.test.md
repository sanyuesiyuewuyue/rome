# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `flow > type-parameter-declaration > default-invalid-4`

```javascript
Program {
  comments: Array []
  corrupt: false
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'module'
  syntax: Array [
    'jsx'
    'flow'
  ]
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 35
      line: 4
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  diagnostics: Array [
    Object {
      origins: Array [Object {category: 'js-parser'}]
      description: Object {
        category: 'parse/js'
        message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: 'Default type parameters arent allowed here'}
      }
      location: Object {
        filename: 'input.js'
        mtime: undefined
        sourceType: 'module'
        end: Object {
          column: 7
          index: 17
          line: 2
        }
        start: Object {
          column: 8
          index: 18
          line: 2
        }
      }
    }
  ]
  body: Array [
    ClassDeclaration {
      id: BindingIdentifier {
        name: 'A'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 7
            index: 7
            line: 1
          }
          start: Object {
            column: 6
            index: 6
            line: 1
          }
        }
      }
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 1
          index: 34
          line: 3
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      meta: ClassHead {
        implements: undefined
        superClass: undefined
        superTypeParameters: undefined
        typeParameters: undefined
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 1
            index: 34
            line: 3
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        body: Array [
          ClassMethod {
            kind: 'method'
            key: StaticPropertyKey {
              value: Identifier {
                name: 'foo'
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 5
                    index: 15
                    line: 2
                  }
                  start: Object {
                    column: 2
                    index: 12
                    line: 2
                  }
                }
              }
              variance: undefined
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 5
                  index: 15
                  line: 2
                }
                start: Object {
                  column: 2
                  index: 12
                  line: 2
                }
              }
            }
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 22
                index: 32
                line: 2
              }
              start: Object {
                column: 2
                index: 12
                line: 2
              }
            }
            body: BlockStatement {
              body: Array []
              directives: Array []
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 22
                  index: 32
                  line: 2
                }
                start: Object {
                  column: 20
                  index: 30
                  line: 2
                }
              }
            }
            meta: ClassPropertyMeta {
              abstract: false
              accessibility: undefined
              optional: false
              readonly: false
              static: false
              typeAnnotation: undefined
              start: Object {
                column: 2
                index: 12
                line: 2
              }
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 5
                  index: 15
                  line: 2
                }
                start: Object {
                  column: 2
                  index: 12
                  line: 2
                }
              }
            }
            head: FunctionHead {
              async: false
              generator: false
              hasHoistedVars: false
              params: Array []
              predicate: undefined
              rest: undefined
              returnType: undefined
              thisType: undefined
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 20
                  index: 30
                  line: 2
                }
                start: Object {
                  column: 17
                  index: 27
                  line: 2
                }
              }
              typeParameters: FlowTypeParameterDeclaration {
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 17
                    index: 27
                    line: 2
                  }
                  start: Object {
                    column: 5
                    index: 15
                    line: 2
                  }
                }
                params: Array [
                  FlowTypeParameter {
                    name: 'T'
                    bound: undefined
                    variance: undefined
                    loc: Object {
                      filename: 'input.js'
                      end: Object {
                        column: 16
                        index: 26
                        line: 2
                      }
                      start: Object {
                        column: 6
                        index: 16
                        line: 2
                      }
                    }
                    default: StringKeywordTypeAnnotation {
                      loc: Object {
                        filename: 'input.js'
                        end: Object {
                          column: 16
                          index: 26
                          line: 2
                        }
                        start: Object {
                          column: 10
                          index: 20
                          line: 2
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
```