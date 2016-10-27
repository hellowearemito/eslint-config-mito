# [eslint](http://eslint.org)-config-mito `standalone` configurations
> Generated: Thu Oct 27 2016 09:39:04 GMT+0200 (CEST)

## Table of contents

1. [accessor-pairs](#enforces-gettersetter-pairs-in-objects-accessor-pairs)
1. [block-scoped-var](#treat-var-as-block-scoped-block-scoped-var)
1. [complexity](#limit-cyclomatic-complexity-complexity)
1. [consistent-return](#require-return-statements-to-either-always-or-never-specify-values-consistent-return)
1. [curly](#require-following-curly-brace-conventions-curly)
1. [default-case](#require-default-case-in-switch-statements-default-case)
1. [dot-notation](#require-dot-notation-dot-notation)
1. [dot-location](#enforce-newline-before-and-after-dot-dot-location)
1. [eqeqeq](#require--and-!-eqeqeq)
1. [guard-for-in](#require-guarding-for-in-guard-for-in)
1. [no-caller](#disallow-use-of-callercallee-no-caller)
1. [no-div-regex](#disallow-regexs-that-look-like-division-no-div-regex)
1. [no-else-return](#disallow-return-before-else-no-else-return)
1. [no-eq-null](#disallow-null-comparisons-no-eq-null)
1. [no-eval](#disallow-eval-no-eval)
1. [no-extend-native](#disallow-extending-of-native-objects-no-extend-native)
1. [no-extra-bind](#disallow-unnecessary-function-binding-no-extra-bind)
1. [no-fallthrough](#disallow-case-statement-fallthrough-no-fallthrough)
1. [no-floating-decimal](#disallow-floating-decimals-no-floating-decimal)
1. [no-implicit-coercion](#disallow-the-type-conversion-with-shorter-notations-no-implicit-coercion)
1. [no-implied-eval](#disallow-implied-eval-no-implied-eval)
1. [no-invalid-this](#disallow-this-keywords-outside-of-classes-or-class-like-objects-no-invalid-this)
1. [no-iterator](#disallow-iterator-no-iterator)
1. [no-labels](#disallow-labeled-statements-no-labels)
1. [no-lone-blocks](#disallow-unnecessary-nested-blocks-no-lone-blocks)
1. [no-loop-func](#disallow-functions-in-loops-no-loop-func)
1. [no-multi-spaces](#disallow-multiple-spaces-no-multi-spaces)
1. [no-multi-str](#disallow-multiline-strings-no-multi-str)
1. [no-native-reassign](#disallow-reassignment-of-native-objects-no-native-reassign)
1. [no-new](#disallow-new-for-side-effects-no-new)
1. [no-new-func](#disallow-function-constructor-no-new-func)
1. [no-new-wrappers](#disallow-primitive-wrapper-instances-no-new-wrappers)
1. [no-octal](#disallow-octal-literals-no-octal)
1. [no-octal-escape](#disallow-octal-escape-sequences-in-string-literals-no-octal-escape)
1. [no-param-reassign](#disallow-reassignment-of-function-parameters-no-param-reassign)
1. [no-process-exit](#disallow-processexit-no-process-exit)
1. [no-proto](#disallow-use-of-__proto__-no-proto)
1. [no-redeclare](#disallow-variable-redeclaration-no-redeclare)
1. [no-return-assign](#disallow-assignment-in-return-statement-no-return-assign)
1. [no-script-url](#disallow-script-urls-no-script-url)
1. [no-self-compare](#disallow-self-compare-no-self-compare)
1. [no-sequences](#disallow-use-of-the-comma-operator-no-sequences)
1. [no-throw-literal](#restrict-what-can-be-thrown-as-an-exception-no-throw-literal)
1. [no-unused-expressions](#disallow-unused-expressions-no-unused-expressions)
1. [no-useless-call](#disallow-unnecessary-call-and-apply-no-useless-call)
1. [no-void](#disallow-use-of-the-void-operator-no-void)
1. [no-warning-comments](#disallow-warning-comments-no-warning-comments)
1. [no-undef](#disallow-undeclared-variables-no-undef)
1. [no-undef-init](#disallow-initializing-to-undefined-no-undef-init)
1. [no-undefined](#disallow-use-of-undefined-variable-no-undefined)
1. [no-with](#disallow-with-statements-no-with)
1. [handle-callback-err](#enforce-callback-error-handling-handle-callback-err)
1. [radix](#require-radix-parameter-radix)
1. [vars-on-top](#require-variable-declarations-to-be-at-the-top-of-their-scope-vars-on-top)
1. [wrap-iife](#require-iifes-to-be-wrapped-wrap-iife)
1. [yoda](#require-or-disallow-yoda-conditions-yoda)
1. [comma-dangle](#require-or-disallow-trailing-commas-comma-dangle)
1. [no-cond-assign](#disallow-assignment-operators-in-conditional-statements-no-cond-assign)
1. [no-console](#disallow-the-use-of-console-no-console)
1. [no-debugger](#disallow-the-use-of-debugger-no-debugger)
1. [no-alert](#disallow-use-of-alert-no-alert)
1. [no-constant-condition](#disallow-constant-expressions-in-conditions-no-constant-condition)
1. [no-control-regex](#disallow-control-characters-in-regular-expressions-no-control-regex)
1. [no-dupe-args](#disallow-duplicate-arguments-in-function-definitions-no-dupe-args)
1. [no-dupe-keys](#disallow-duplicate-keys-in-object-literals-no-dupe-keys)
1. [no-duplicate-case](#rule-to-disallow-a-duplicate-case-label-no-duplicate-case)
1. [no-empty](#disallow-empty-block-statements-no-empty)
1. [no-empty-character-class](#disallow-empty-character-classes-in-regular-expressions-no-empty-character-class)
1. [no-ex-assign](#disallow-reassigning-exceptions-in-catch-clauses-no-ex-assign)
1. [no-extra-boolean-cast](#disallow-unnecessary-boolean-casts-no-extra-boolean-cast)
1. [no-extra-parens](#disallow-unnecessary-parentheses-no-extra-parens)
1. [no-extra-semi](#disallow-unnecessary-semicolons-no-extra-semi)
1. [no-func-assign](#disallow-reassigning-function-declarations-no-func-assign)
1. [no-inner-declarations](#disallow-variable-or-function-declarations-in-nested-blocks--no-inner-declarations)
1. [no-invalid-regexp](#disallow-invalid-regular-expression-strings-in-regexp-constructors-no-invalid-regexp)
1. [no-irregular-whitespace](#disallow-irregular-whitespace-no-irregular-whitespace)
1. [no-negated-in-lhs](#disallow-negating-the-left-operand-in-in-expressions-no-negated-in-lhs)
1. [no-new-require](#disallow-new-require-no-new-require)
1. [no-obj-calls](#disallow-calling-global-object-properties-as-functions-no-obj-calls)
1. [no-path-concat](#disallow-string-concatenation-when-using-__dirname-and-__filename-no-path-concat)
1. [no-regex-spaces](#disallow-multiple-spaces-in-regular-expression-literals-no-regex-spaces)
1. [no-sparse-arrays](#disallow-sparse-arrays-no-sparse-arrays)
1. [no-unreachable](#disallow-unreachable-code-after-return-throw-continue-and-break-statements-no-unreachable)
1. [use-isnan](#require-calls-to-isnan-when-checking-for-nan-use-isnan)
1. [valid-jsdoc](#enforce-valid-jsdoc-comments-valid-jsdoc)
1. [valid-typeof](#enforce-comparing-typeof-expressions-against-valid-strings-valid-typeof)
1. [no-unexpected-multiline](#disallow-confusing-multiline-expressions-no-unexpected-multiline)
1. [max-depth](#enforce-a-maximum-depth-that-blocks-can-be-nested-max-depth)
1. [max-len](#enforce-a-maximum-line-length-max-len)
1. [max-params](#enforce-a-maximum-number-of-parameters-in-function-definitions-max-params)
1. [max-statements](#enforce-a-maximum-number-of-statements-allowed-in-function-blocks-max-statements)
1. [no-bitwise](#disallow-bitwise-operators-no-bitwise)
1. [no-plusplus](#disallow-the-unary-operators--and----no-plusplus)
1. [callback-return](#enforce-return-after-callback-callback-return)
1. [no-mixed-requires](#disallow-require-calls-to-be-mixed-with-regular-variable-declarations-no-mixed-requires)
1. [no-restricted-modules](#disallow-nodejs-modules-no-restricted-modules)
1. [no-sync](#disallow-synchronous-methods-no-sync)
1. [strict](#require-or-disallow-strict-mode-directives-strict)
1. [array-bracket-spacing](#disallow-or-enforce-spaces-inside-of-brackets-array-bracket-spacing)
1. [indent](#enforce-consistent-indentation-indent)
1. [brace-style](#require-brace-style-brace-style)
1. [camelcase](#require-camelcase-camelcase)
1. [comma-spacing](#enforces-spacing-around-commas-comma-spacing)
1. [comma-style](#comma-style-comma-style)
1. [computed-property-spacing](#disallow-or-enforce-spaces-inside-of-computed-properties-computed-property-spacing)
1. [consistent-this](#require-consistent-this-consistent-this)
1. [eol-last](#require-or-disallow-newline-at-the-end-of-files-eol-last)
1. [func-names](#require-or-disallow-named-function-expressions-func-names)
1. [func-style](#enforce-the-consistent-use-of-either-function-declarations-or-expressions-func-style)
1. [id-length](#enforce-minimum-and-maximum-identifier-lengths-id-length)
1. [key-spacing](#enforce-consistent-spacing-between-keys-and-values-in-object-literal-properties-key-spacing)
1. [lines-around-comment](#require-empty-lines-around-comments-lines-around-comment)
1. [linebreak-style](#enforce-consistent-linebreak-style-linebreak-style)
1. [max-nested-callbacks](#enforce-a-maximum-depth-that-callbacks-can-be-nested-max-nested-callbacks)
1. [new-cap](#require-constructor-names-to-begin-with-a-capital-letter-new-cap)
1. [new-parens](#require-parentheses-when-invoking-a-constructor-with-no-arguments-new-parens)
1. [newline-after-var](#require-or-disallow-an-empty-line-after-variable-declarations-newline-after-var)
1. [no-array-constructor](#disallow-array-constructors-no-array-constructor)
1. [no-continue](#disallow-continue-statements-no-continue)
1. [no-inline-comments](#disallow-inline-comments-after-code-no-inline-comments)
1. [no-lonely-if](#disallow-if-statements-as-the-only-statement-in-else-blocks-no-lonely-if)
1. [no-mixed-spaces-and-tabs](#disallow-mixed-spaces-and-tabs-for-indentation-no-mixed-spaces-and-tabs)
1. [no-multiple-empty-lines](#disallow-multiple-empty-lines-no-multiple-empty-lines)
1. [no-nested-ternary](#disallow-nested-ternary-expressions-no-nested-ternary)
1. [no-new-object](#disallow-object-constructors-no-new-object)
1. [no-spaced-func](#disallow-spacing-between-function-identifiers-and-their-applications-no-spaced-func)
1. [no-ternary](#disallow-ternary-operators-no-ternary)
1. [no-trailing-spaces](#disallow-trailing-whitespace-at-the-end-of-lines-no-trailing-spaces)
1. [no-underscore-dangle](#disallow-dangling-underscores-in-identifiers-no-underscore-dangle)
1. [no-unneeded-ternary](#disallow-ternary-operators-when-simpler-alternatives-exist-no-unneeded-ternary)
1. [object-curly-spacing](#enforce-consistent-spacing-inside-braces-object-curly-spacing)
1. [one-var](#enforce-variables-to-be-declared-either-together-or-separately-in-functions-one-var)
1. [operator-assignment](#require-or-disallow-assignment-operator-shorthand-where-possible-operator-assignment)
1. [operator-linebreak](#enforce-consistent-linebreak-style-for-operators-operator-linebreak)
1. [quote-props](#require-quotes-around-object-literal-property-names-quote-props)
1. [quotes](#enforce-the-consistent-use-of-either-backticks-double-or-single-quotes-quotes)
1. [id-match](#require-identifiers-to-match-a-specified-regular-expression-id-match)
1. [padded-blocks](#require-or-disallow-padding-within-blocks-padded-blocks)
1. [semi](#require-or-disallow-semicolons-instead-of-asi-semi)
1. [semi-spacing](#enforce-spacing-before-and-after-semicolons-semi-spacing)
1. [sort-vars](#variable-sorting-sort-vars)
1. [keyword-spacing](#enforce-consistent-spacing-before-and-after-keywords-keyword-spacing)
1. [space-before-blocks](#require-or-disallow-space-before-blocks-space-before-blocks)
1. [space-before-function-paren](#require-or-disallow-a-space-before-function-parenthesis-space-before-function-paren)
1. [space-in-parens](#disallow-or-enforce-spaces-inside-of-parentheses-space-in-parens)
1. [space-infix-ops](#require-spacing-around-infix-operators-space-infix-ops)
1. [space-unary-ops](#require-or-disallow-spaces-beforeafter-unary-operators-space-unary-ops)
1. [spaced-comment](#requires-or-disallows-a-whitespace-space-or-tab-beginning-a-comment-spaced-comment)
1. [wrap-regex](#require-regex-literals-to-be-wrapped-wrap-regex)
1. [init-declarations](#require-or-disallow-initialization-in-variable-declarations-init-declarations)
1. [no-catch-shadow](#disallow-shadowing-of-variables-inside-of-catch-no-catch-shadow)
1. [no-delete-var](#disallow-deleting-variables-no-delete-var)
1. [no-label-var](#disallow-labels-that-are-variables-names-no-label-var)
1. [no-shadow](#disallow-variable-declarations-from-shadowing-variables-declared-in-the-outer-scope-no-shadow)
1. [no-shadow-restricted-names](#disallow-shadowing-of-restricted-names-no-shadow-restricted-names)
1. [no-unused-vars](#disallow-unused-variables-no-unused-vars)
1. [no-use-before-define](#disallow-early-use-no-use-before-define)
1. [arrow-body-style](#require-braces-in-arrow-function-body-arrow-body-style)
1. [arrow-parens](#require-parens-in-arrow-function-arguments-arrow-parens)
1. [arrow-spacing](#require-space-beforeafter-arrow-functions-arrow-arrow-spacing)
1. [constructor-super](#verify-calls-of-super-in-constructors-constructor-super)
1. [generator-star-spacing](#enforce-spacing-around-the--in-generator-functions-generator-star-spacing)
1. [no-class-assign](#disallow-modifying-variables-of-class-declarations-no-class-assign)
1. [no-confusing-arrow](#disallow-arrow-functions-where-they-could-be-confused-with-comparisons-no-confusing-arrow)
1. [no-const-assign](#disallow-modifying-variables-that-are-declared-using-const-no-const-assign)
1. [no-dupe-class-members](#disallow-duplicate-name-in-class-members-no-dupe-class-members)
1. [no-duplicate-imports](#disallow-duplicate-imports-no-duplicate-imports)
1. [no-new-symbol](#disallow-symbol-constructor-no-new-symbol)
1. [no-restricted-globals](#disallow-specific-global-variables-no-restricted-globals)
1. [no-restricted-imports](#disallow-specific-imports-no-restricted-imports)
1. [no-this-before-super](#disallow-use-of-thissuper-before-calling-super-in-constructors-no-this-before-super)
1. [no-var](#require-let-or-const-instead-of-var-no-var)
1. [no-useless-computed-key](#disallow-unnecessary-computed-property-keys-on-objects-no-useless-computed-key)
1. [no-useless-constructor](#disallow-unnecessary-constructor-no-useless-constructor)
1. [object-shorthand](#require-object-literal-shorthand-syntax-object-shorthand)
1. [prefer-arrow-callback](#suggest-using-arrow-functions-as-callbacks-prefer-arrow-callback)
1. [prefer-const](#suggest-using-const-prefer-const)
1. [prefer-spread](#suggest-using-the-spread-operator-instead-of-apply-prefer-spread)
1. [prefer-reflect](#suggest-using-reflect-methods-where-applicable-prefer-reflect)
1. [prefer-rest-params](#suggest-using-the-rest-parameters-instead-of-arguments-prefer-rest-params)
1. [prefer-template](#suggest-using-template-literals-instead-of-string-concatenation-prefer-template)
1. [require-yield](#disallow-generator-functions-that-do-not-have-yield-require-yield)
1. [sort-imports](#import-sorting-sort-imports)
1. [template-curly-spacing](#enforce-usage-of-spacing-in-template-strings-template-curly-spacing)
1. [yield-star-spacing](#enforce-spacing-around-the--in-yield-expressions-yield-star-spacing)
1. [import/export](#export)
1. [import/default](#default)
1. [import/extensions](#extensions---ensure-consistent-use-of-file-extension-within-the-import-path)
1. [import/named](#named)
1. [import/namespace](#namespace)
1. [import/no-extraneous-dependencies](#forbid-the-use-of-extraneous-packages)
1. [import/no-unresolved](#no-unresolved)
1. [import/no-named-as-default](#no-named-as-default)
1. [import/no-commonjs](#no-commonjs)
1. [import/no-amd](#no-amd)
1. [import/first](#first)
1. [import/no-duplicates](#no-duplicates)
1. [import/no-deprecated](#no-deprecated)
1. [import/no-namespace](#no-namespace)
1. [import/no-named-as-default-member](#no-named-as-default-member)
1. [import/no-nodejs-modules](#no-nodejs-builtin-modules)
1. [import/order](#enforce-a-convention-in-module-import-order)

## Enforces getter/setter pairs in objects (accessor-pairs)

**Key:** accessor-pairs ([docs](http://eslint.org/docs/rules/accessor-pairs))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Treat var as Block Scoped (block-scoped-var)

**Key:** block-scoped-var ([docs](http://eslint.org/docs/rules/block-scoped-var))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Limit Cyclomatic Complexity (complexity)

**Key:** complexity ([docs](http://eslint.org/docs/rules/complexity))

**Value:** 
```javascript
[
  0,
  11
]
```

**[&#8679; back to top](#table-of-contents)**

## Require `return` statements to either always or never specify values (consistent-return)

**Key:** consistent-return ([docs](http://eslint.org/docs/rules/consistent-return))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require Following Curly Brace Conventions (curly)

**Key:** curly ([docs](http://eslint.org/docs/rules/curly))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require Default Case in Switch Statements (default-case)

**Key:** default-case ([docs](http://eslint.org/docs/rules/default-case))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require Dot Notation (dot-notation)

**Key:** dot-notation ([docs](http://eslint.org/docs/rules/dot-notation))

**Value:** 
```javascript
[
  2,
  {
    "allowKeywords": true
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Enforce newline before and after dot (dot-location)

**Key:** dot-location ([docs](http://eslint.org/docs/rules/dot-location))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require === and !== (eqeqeq)

**Key:** eqeqeq ([docs](http://eslint.org/docs/rules/eqeqeq))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require Guarding for-in (guard-for-in)

**Key:** guard-for-in ([docs](http://eslint.org/docs/rules/guard-for-in))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Use of caller/callee (no-caller)

**Key:** no-caller ([docs](http://eslint.org/docs/rules/no-caller))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Regexs That Look Like Division (no-div-regex)

**Key:** no-div-regex ([docs](http://eslint.org/docs/rules/no-div-regex))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow return before else (no-else-return)

**Key:** no-else-return ([docs](http://eslint.org/docs/rules/no-else-return))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Null Comparisons (no-eq-null)

**Key:** no-eq-null ([docs](http://eslint.org/docs/rules/no-eq-null))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow eval() (no-eval)

**Key:** no-eval ([docs](http://eslint.org/docs/rules/no-eval))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Extending of Native Objects (no-extend-native)

**Key:** no-extend-native ([docs](http://eslint.org/docs/rules/no-extend-native))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow unnecessary function binding (no-extra-bind)

**Key:** no-extra-bind ([docs](http://eslint.org/docs/rules/no-extra-bind))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Case Statement Fallthrough (no-fallthrough)

**Key:** no-fallthrough ([docs](http://eslint.org/docs/rules/no-fallthrough))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Floating Decimals (no-floating-decimal)

**Key:** no-floating-decimal ([docs](http://eslint.org/docs/rules/no-floating-decimal))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow the type conversion with shorter notations. (no-implicit-coercion)

**Key:** no-implicit-coercion ([docs](http://eslint.org/docs/rules/no-implicit-coercion))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Implied eval() (no-implied-eval)

**Key:** no-implied-eval ([docs](http://eslint.org/docs/rules/no-implied-eval))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow `this` keywords outside of classes or class-like objects. (no-invalid-this)

**Key:** no-invalid-this ([docs](http://eslint.org/docs/rules/no-invalid-this))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Iterator (no-iterator)

**Key:** no-iterator ([docs](http://eslint.org/docs/rules/no-iterator))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Labeled Statements (no-labels)

**Key:** no-labels ([docs](http://eslint.org/docs/rules/no-labels))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Unnecessary Nested Blocks (no-lone-blocks)

**Key:** no-lone-blocks ([docs](http://eslint.org/docs/rules/no-lone-blocks))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Functions in Loops (no-loop-func)

**Key:** no-loop-func ([docs](http://eslint.org/docs/rules/no-loop-func))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow multiple spaces (no-multi-spaces)

**Key:** no-multi-spaces ([docs](http://eslint.org/docs/rules/no-multi-spaces))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Multiline Strings (no-multi-str)

**Key:** no-multi-str ([docs](http://eslint.org/docs/rules/no-multi-str))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Reassignment of Native Objects (no-native-reassign)

**Key:** no-native-reassign ([docs](http://eslint.org/docs/rules/no-native-reassign))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow new For Side Effects (no-new)

**Key:** no-new ([docs](http://eslint.org/docs/rules/no-new))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Function Constructor (no-new-func)

**Key:** no-new-func ([docs](http://eslint.org/docs/rules/no-new-func))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Primitive Wrapper Instances (no-new-wrappers)

**Key:** no-new-wrappers ([docs](http://eslint.org/docs/rules/no-new-wrappers))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow octal literals (no-octal)

**Key:** no-octal ([docs](http://eslint.org/docs/rules/no-octal))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow octal escape sequences in string literals (no-octal-escape)

**Key:** no-octal-escape ([docs](http://eslint.org/docs/rules/no-octal-escape))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Reassignment of Function Parameters (no-param-reassign)

**Key:** no-param-reassign ([docs](http://eslint.org/docs/rules/no-param-reassign))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow process.exit() (no-process-exit)

**Key:** no-process-exit ([docs](http://eslint.org/docs/rules/no-process-exit))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Use of `__proto__` (no-proto)

**Key:** no-proto ([docs](http://eslint.org/docs/rules/no-proto))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow variable redeclaration (no-redeclare)

**Key:** no-redeclare ([docs](http://eslint.org/docs/rules/no-redeclare))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Assignment in return Statement (no-return-assign)

**Key:** no-return-assign ([docs](http://eslint.org/docs/rules/no-return-assign))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Script URLs (no-script-url)

**Key:** no-script-url ([docs](http://eslint.org/docs/rules/no-script-url))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Self Compare (no-self-compare)

**Key:** no-self-compare ([docs](http://eslint.org/docs/rules/no-self-compare))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Use of the Comma Operator (no-sequences)

**Key:** no-sequences ([docs](http://eslint.org/docs/rules/no-sequences))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Restrict what can be thrown as an exception (no-throw-literal)

**Key:** no-throw-literal ([docs](http://eslint.org/docs/rules/no-throw-literal))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Unused Expressions (no-unused-expressions)

**Key:** no-unused-expressions ([docs](http://eslint.org/docs/rules/no-unused-expressions))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow unnecessary `.call()` and `.apply()`. (no-useless-call)

**Key:** no-useless-call ([docs](http://eslint.org/docs/rules/no-useless-call))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow use of the void operator. (no-void)

**Key:** no-void ([docs](http://eslint.org/docs/rules/no-void))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Warning Comments (no-warning-comments)

**Key:** no-warning-comments ([docs](http://eslint.org/docs/rules/no-warning-comments))

**Value:** 
```javascript
[
  0,
  {
    "terms": [
      "todo",
      "fixme",
      "xxx"
    ],
    "location": "start"
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Disallow Undeclared Variables (no-undef)

**Key:** no-undef ([docs](http://eslint.org/docs/rules/no-undef))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Initializing to undefined (no-undef-init)

**Key:** no-undef-init ([docs](http://eslint.org/docs/rules/no-undef-init))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Use of `undefined` Variable (no-undefined)

**Key:** no-undefined ([docs](http://eslint.org/docs/rules/no-undefined))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow `with` statements (no-with)

**Key:** no-with ([docs](http://eslint.org/docs/rules/no-with))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Enforce Callback Error Handling (handle-callback-err)

**Key:** handle-callback-err ([docs](http://eslint.org/docs/rules/handle-callback-err))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require Radix Parameter (radix)

**Key:** radix ([docs](http://eslint.org/docs/rules/radix))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require Variable Declarations to be at the top of their scope (vars-on-top)

**Key:** vars-on-top ([docs](http://eslint.org/docs/rules/vars-on-top))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require IIFEs to be Wrapped (wrap-iife)

**Key:** wrap-iife ([docs](http://eslint.org/docs/rules/wrap-iife))

**Value:** 
```javascript
[
  2,
  "any"
]
```

**[&#8679; back to top](#table-of-contents)**

## Require or disallow Yoda Conditions (yoda)

**Key:** yoda ([docs](http://eslint.org/docs/rules/yoda))

**Value:** 
```javascript
[
  2,
  "never",
  {
    "exceptRange": true
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Require or disallow trailing commas (comma-dangle)

**Key:** comma-dangle ([docs](http://eslint.org/docs/rules/comma-dangle))

**Value:** 
```javascript
[
  2,
  "never"
]
```

**[&#8679; back to top](#table-of-contents)**

## Disallow assignment operators in conditional statements (no-cond-assign)

**Key:** no-cond-assign ([docs](http://eslint.org/docs/rules/no-cond-assign))

**Value:** 
```javascript
[
  2,
  "always"
]
```

**[&#8679; back to top](#table-of-contents)**

## Disallow the use of `console` (no-console)

**Key:** no-console ([docs](http://eslint.org/docs/rules/no-console))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow the use of `debugger` (no-debugger)

**Key:** no-debugger ([docs](http://eslint.org/docs/rules/no-debugger))

**Value:** ``1``

**[&#8679; back to top](#table-of-contents)**

## Disallow Use of Alert (no-alert)

**Key:** no-alert ([docs](http://eslint.org/docs/rules/no-alert))

**Value:** ``1``

**[&#8679; back to top](#table-of-contents)**

## Disallow constant expressions in conditions (no-constant-condition)

**Key:** no-constant-condition ([docs](http://eslint.org/docs/rules/no-constant-condition))

**Value:** ``1``

**[&#8679; back to top](#table-of-contents)**

## Disallow control characters in regular expressions (no-control-regex)

**Key:** no-control-regex ([docs](http://eslint.org/docs/rules/no-control-regex))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow duplicate arguments in `function` definitions (no-dupe-args)

**Key:** no-dupe-args ([docs](http://eslint.org/docs/rules/no-dupe-args))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow duplicate keys in object literals (no-dupe-keys)

**Key:** no-dupe-keys ([docs](http://eslint.org/docs/rules/no-dupe-keys))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Rule to disallow a duplicate case label (no-duplicate-case)

**Key:** no-duplicate-case ([docs](http://eslint.org/docs/rules/no-duplicate-case))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow empty block statements (no-empty)

**Key:** no-empty ([docs](http://eslint.org/docs/rules/no-empty))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow empty character classes in regular expressions (no-empty-character-class)

**Key:** no-empty-character-class ([docs](http://eslint.org/docs/rules/no-empty-character-class))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow reassigning exceptions in `catch` clauses (no-ex-assign)

**Key:** no-ex-assign ([docs](http://eslint.org/docs/rules/no-ex-assign))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow unnecessary boolean casts (no-extra-boolean-cast)

**Key:** no-extra-boolean-cast ([docs](http://eslint.org/docs/rules/no-extra-boolean-cast))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow unnecessary parentheses (no-extra-parens)

**Key:** no-extra-parens ([docs](http://eslint.org/docs/rules/no-extra-parens))

**Value:** 
```javascript
[
  2,
  "functions"
]
```

**[&#8679; back to top](#table-of-contents)**

## Disallow unnecessary semicolons (no-extra-semi)

**Key:** no-extra-semi ([docs](http://eslint.org/docs/rules/no-extra-semi))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow reassigning `function` declarations (no-func-assign)

**Key:** no-func-assign ([docs](http://eslint.org/docs/rules/no-func-assign))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow variable or `function` declarations in nested blocks  (no-inner-declarations)

**Key:** no-inner-declarations ([docs](http://eslint.org/docs/rules/no-inner-declarations))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow invalid regular expression strings in `RegExp` constructors (no-invalid-regexp)

**Key:** no-invalid-regexp ([docs](http://eslint.org/docs/rules/no-invalid-regexp))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow irregular whitespace (no-irregular-whitespace)

**Key:** no-irregular-whitespace ([docs](http://eslint.org/docs/rules/no-irregular-whitespace))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow negating the left operand in `in` expressions (no-negated-in-lhs)

**Key:** no-negated-in-lhs ([docs](http://eslint.org/docs/rules/no-negated-in-lhs))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow new require (no-new-require)

**Key:** no-new-require ([docs](http://eslint.org/docs/rules/no-new-require))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow calling global object properties as functions (no-obj-calls)

**Key:** no-obj-calls ([docs](http://eslint.org/docs/rules/no-obj-calls))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow string concatenation when using `__dirname` and `__filename` (no-path-concat)

**Key:** no-path-concat ([docs](http://eslint.org/docs/rules/no-path-concat))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow multiple spaces in regular expression literals (no-regex-spaces)

**Key:** no-regex-spaces ([docs](http://eslint.org/docs/rules/no-regex-spaces))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow sparse arrays (no-sparse-arrays)

**Key:** no-sparse-arrays ([docs](http://eslint.org/docs/rules/no-sparse-arrays))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements (no-unreachable)

**Key:** no-unreachable ([docs](http://eslint.org/docs/rules/no-unreachable))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require calls to `isNaN()` when checking for `NaN` (use-isnan)

**Key:** use-isnan ([docs](http://eslint.org/docs/rules/use-isnan))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Enforce valid JSDoc comments (valid-jsdoc)

**Key:** valid-jsdoc ([docs](http://eslint.org/docs/rules/valid-jsdoc))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Enforce comparing `typeof` expressions against valid strings (valid-typeof)

**Key:** valid-typeof ([docs](http://eslint.org/docs/rules/valid-typeof))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow confusing multiline expressions (no-unexpected-multiline)

**Key:** no-unexpected-multiline ([docs](http://eslint.org/docs/rules/no-unexpected-multiline))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Enforce a maximum depth that blocks can be nested (max-depth)

**Key:** max-depth ([docs](http://eslint.org/docs/rules/max-depth))

**Value:** 
```javascript
[
  0,
  4
]
```

**[&#8679; back to top](#table-of-contents)**

## Enforce a maximum line length (max-len)

**Key:** max-len ([docs](http://eslint.org/docs/rules/max-len))

**Value:** 
```javascript
[
  0,
  80,
  4
]
```

**[&#8679; back to top](#table-of-contents)**

## Enforce a maximum number of parameters in function definitions (max-params)

**Key:** max-params ([docs](http://eslint.org/docs/rules/max-params))

**Value:** 
```javascript
[
  0,
  3
]
```

**[&#8679; back to top](#table-of-contents)**

## Enforce a maximum number of statements allowed in function blocks (max-statements)

**Key:** max-statements ([docs](http://eslint.org/docs/rules/max-statements))

**Value:** 
```javascript
[
  0,
  10
]
```

**[&#8679; back to top](#table-of-contents)**

## Disallow bitwise operators (no-bitwise)

**Key:** no-bitwise ([docs](http://eslint.org/docs/rules/no-bitwise))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow the unary operators `++` and `--` (no-plusplus)

**Key:** no-plusplus ([docs](http://eslint.org/docs/rules/no-plusplus))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce Return After Callback (callback-return)

**Key:** callback-return ([docs](http://eslint.org/docs/rules/callback-return))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow `require` calls to be mixed with regular variable declarations (no-mixed-requires)

**Key:** no-mixed-requires ([docs](http://eslint.org/docs/rules/no-mixed-requires))

**Value:** 
```javascript
[
  0,
  false
]
```

**[&#8679; back to top](#table-of-contents)**

## Disallow Node.js modules (no-restricted-modules)

**Key:** no-restricted-modules ([docs](http://eslint.org/docs/rules/no-restricted-modules))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Synchronous Methods (no-sync)

**Key:** no-sync ([docs](http://eslint.org/docs/rules/no-sync))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require or disallow strict mode directives (strict)

**Key:** strict ([docs](http://eslint.org/docs/rules/strict))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow or enforce spaces inside of brackets (array-bracket-spacing)

**Key:** array-bracket-spacing ([docs](http://eslint.org/docs/rules/array-bracket-spacing))

**Value:** 
```javascript
[
  2,
  "never"
]
```

**[&#8679; back to top](#table-of-contents)**

## Enforce consistent indentation (indent)

**Key:** indent ([docs](http://eslint.org/docs/rules/indent))

**Value:** 
```javascript
[
  2,
  4,
  {
    "SwitchCase": 1
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Require Brace Style (brace-style)

**Key:** brace-style ([docs](http://eslint.org/docs/rules/brace-style))

**Value:** 
```javascript
[
  2,
  "1tbs",
  {
    "allowSingleLine": true
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Require Camelcase (camelcase)

**Key:** camelcase ([docs](http://eslint.org/docs/rules/camelcase))

**Value:** 
```javascript
[
  2,
  {
    "properties": "never"
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Enforces spacing around commas (comma-spacing)

**Key:** comma-spacing ([docs](http://eslint.org/docs/rules/comma-spacing))

**Value:** 
```javascript
[
  2,
  {
    "before": false,
    "after": true
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Comma style (comma-style)

**Key:** comma-style ([docs](http://eslint.org/docs/rules/comma-style))

**Value:** 
```javascript
[
  2,
  "last"
]
```

**[&#8679; back to top](#table-of-contents)**

## Disallow or enforce spaces inside of computed properties (computed-property-spacing)

**Key:** computed-property-spacing ([docs](http://eslint.org/docs/rules/computed-property-spacing))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require Consistent This (consistent-this)

**Key:** consistent-this ([docs](http://eslint.org/docs/rules/consistent-this))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require or disallow newline at the end of files (eol-last)

**Key:** eol-last ([docs](http://eslint.org/docs/rules/eol-last))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require or disallow named `function` expressions (func-names)

**Key:** func-names ([docs](http://eslint.org/docs/rules/func-names))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce the consistent use of either `function` declarations or expressions (func-style)

**Key:** func-style ([docs](http://eslint.org/docs/rules/func-style))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce minimum and maximum identifier lengths (id-length)

**Key:** id-length ([docs](http://eslint.org/docs/rules/id-length))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce consistent spacing between keys and values in object literal properties (key-spacing)

**Key:** key-spacing ([docs](http://eslint.org/docs/rules/key-spacing))

**Value:** 
```javascript
[
  2,
  {
    "beforeColon": false,
    "afterColon": true
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Require empty lines around comments (lines-around-comment)

**Key:** lines-around-comment ([docs](http://eslint.org/docs/rules/lines-around-comment))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce consistent linebreak style (linebreak-style)

**Key:** linebreak-style ([docs](http://eslint.org/docs/rules/linebreak-style))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Enforce a maximum depth that callbacks can be nested (max-nested-callbacks)

**Key:** max-nested-callbacks ([docs](http://eslint.org/docs/rules/max-nested-callbacks))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require constructor names to begin with a capital letter (new-cap)

**Key:** new-cap ([docs](http://eslint.org/docs/rules/new-cap))

**Value:** 
```javascript
[
  2,
  {
    "newIsCap": true
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Require parentheses when invoking a constructor with no arguments (new-parens)

**Key:** new-parens ([docs](http://eslint.org/docs/rules/new-parens))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require or disallow an empty line after variable declarations (newline-after-var)

**Key:** newline-after-var ([docs](http://eslint.org/docs/rules/newline-after-var))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow `Array` constructors (no-array-constructor)

**Key:** no-array-constructor ([docs](http://eslint.org/docs/rules/no-array-constructor))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow `continue` statements (no-continue)

**Key:** no-continue ([docs](http://eslint.org/docs/rules/no-continue))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow inline comments after code (no-inline-comments)

**Key:** no-inline-comments ([docs](http://eslint.org/docs/rules/no-inline-comments))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow `if` statements as the only statement in `else` blocks (no-lonely-if)

**Key:** no-lonely-if ([docs](http://eslint.org/docs/rules/no-lonely-if))

**Value:** ``1``

**[&#8679; back to top](#table-of-contents)**

## Disallow mixed spaces and tabs for indentation (no-mixed-spaces-and-tabs)

**Key:** no-mixed-spaces-and-tabs ([docs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow multiple empty lines (no-multiple-empty-lines)

**Key:** no-multiple-empty-lines ([docs](http://eslint.org/docs/rules/no-multiple-empty-lines))

**Value:** 
```javascript
[
  2,
  {
    "max": 2,
    "maxEOF": 1
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Disallow nested ternary expressions (no-nested-ternary)

**Key:** no-nested-ternary ([docs](http://eslint.org/docs/rules/no-nested-ternary))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow `Object` constructors (no-new-object)

**Key:** no-new-object ([docs](http://eslint.org/docs/rules/no-new-object))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow spacing between function identifiers and their applications (no-spaced-func)

**Key:** no-spaced-func ([docs](http://eslint.org/docs/rules/no-spaced-func))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow ternary operators (no-ternary)

**Key:** no-ternary ([docs](http://eslint.org/docs/rules/no-ternary))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow trailing whitespace at the end of lines (no-trailing-spaces)

**Key:** no-trailing-spaces ([docs](http://eslint.org/docs/rules/no-trailing-spaces))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow dangling underscores in identifiers (no-underscore-dangle)

**Key:** no-underscore-dangle ([docs](http://eslint.org/docs/rules/no-underscore-dangle))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow ternary operators when simpler alternatives exist (no-unneeded-ternary)

**Key:** no-unneeded-ternary ([docs](http://eslint.org/docs/rules/no-unneeded-ternary))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce consistent spacing inside braces (object-curly-spacing)

**Key:** object-curly-spacing ([docs](http://eslint.org/docs/rules/object-curly-spacing))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce variables to be declared either together or separately in functions (one-var)

**Key:** one-var ([docs](http://eslint.org/docs/rules/one-var))

**Value:** 
```javascript
[
  2,
  "never"
]
```

**[&#8679; back to top](#table-of-contents)**

## Require or disallow assignment operator shorthand where possible (operator-assignment)

**Key:** operator-assignment ([docs](http://eslint.org/docs/rules/operator-assignment))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce consistent linebreak style for operators (operator-linebreak)

**Key:** operator-linebreak ([docs](http://eslint.org/docs/rules/operator-linebreak))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require quotes around object literal property names (quote-props)

**Key:** quote-props ([docs](http://eslint.org/docs/rules/quote-props))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce the consistent use of either backticks, double, or single quotes (quotes)

**Key:** quotes ([docs](http://eslint.org/docs/rules/quotes))

**Value:** 
```javascript
[
  2,
  "single",
  "avoid-escape"
]
```

**[&#8679; back to top](#table-of-contents)**

## Require identifiers to match a specified regular expression (id-match)

**Key:** id-match ([docs](http://eslint.org/docs/rules/id-match))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require or disallow padding within blocks (padded-blocks)

**Key:** padded-blocks ([docs](http://eslint.org/docs/rules/padded-blocks))

**Value:** 
```javascript
[
  2,
  "never"
]
```

**[&#8679; back to top](#table-of-contents)**

## Require or disallow semicolons instead of ASI (semi)

**Key:** semi ([docs](http://eslint.org/docs/rules/semi))

**Value:** 
```javascript
[
  2,
  "always"
]
```

**[&#8679; back to top](#table-of-contents)**

## Enforce spacing before and after semicolons (semi-spacing)

**Key:** semi-spacing ([docs](http://eslint.org/docs/rules/semi-spacing))

**Value:** 
```javascript
[
  2,
  {
    "before": false,
    "after": true
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Variable Sorting (sort-vars)

**Key:** sort-vars ([docs](http://eslint.org/docs/rules/sort-vars))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce consistent spacing before and after keywords (keyword-spacing)

**Key:** keyword-spacing ([docs](http://eslint.org/docs/rules/keyword-spacing))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require Or Disallow Space Before Blocks (space-before-blocks)

**Key:** space-before-blocks ([docs](http://eslint.org/docs/rules/space-before-blocks))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require or disallow a space before function parenthesis (space-before-function-paren)

**Key:** space-before-function-paren ([docs](http://eslint.org/docs/rules/space-before-function-paren))

**Value:** 
```javascript
[
  2,
  "never"
]
```

**[&#8679; back to top](#table-of-contents)**

## Disallow or enforce spaces inside of parentheses (space-in-parens)

**Key:** space-in-parens ([docs](http://eslint.org/docs/rules/space-in-parens))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require spacing around infix operators (space-infix-ops)

**Key:** space-infix-ops ([docs](http://eslint.org/docs/rules/space-infix-ops))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require or disallow spaces before/after unary operators (space-unary-ops)

**Key:** space-unary-ops ([docs](http://eslint.org/docs/rules/space-unary-ops))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Requires or disallows a whitespace (space or tab) beginning a comment (spaced-comment)

**Key:** spaced-comment ([docs](http://eslint.org/docs/rules/spaced-comment))

**Value:** 
```javascript
[
  2,
  "always",
  {
    "exceptions": [
      "-",
      "+"
    ],
    "markers": [
      "=",
      "!"
    ]
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Require Regex Literals to be Wrapped (wrap-regex)

**Key:** wrap-regex ([docs](http://eslint.org/docs/rules/wrap-regex))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require or disallow initialization in variable declarations (init-declarations)

**Key:** init-declarations ([docs](http://eslint.org/docs/rules/init-declarations))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Shadowing of Variables Inside of catch (no-catch-shadow)

**Key:** no-catch-shadow ([docs](http://eslint.org/docs/rules/no-catch-shadow))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow deleting variables (no-delete-var)

**Key:** no-delete-var ([docs](http://eslint.org/docs/rules/no-delete-var))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Labels That Are Variables Names (no-label-var)

**Key:** no-label-var ([docs](http://eslint.org/docs/rules/no-label-var))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow variable declarations from shadowing variables declared in the outer scope (no-shadow)

**Key:** no-shadow ([docs](http://eslint.org/docs/rules/no-shadow))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Shadowing of Restricted Names (no-shadow-restricted-names)

**Key:** no-shadow-restricted-names ([docs](http://eslint.org/docs/rules/no-shadow-restricted-names))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Unused Variables (no-unused-vars)

**Key:** no-unused-vars ([docs](http://eslint.org/docs/rules/no-unused-vars))

**Value:** 
```javascript
[
  2,
  {
    "vars": "local",
    "args": "after-used"
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Disallow Early Use (no-use-before-define)

**Key:** no-use-before-define ([docs](http://eslint.org/docs/rules/no-use-before-define))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require braces in arrow function body (arrow-body-style)

**Key:** arrow-body-style ([docs](http://eslint.org/docs/rules/arrow-body-style))

**Value:** 
```javascript
[
  2,
  "as-needed"
]
```

**[&#8679; back to top](#table-of-contents)**

## Require parens in arrow function arguments (arrow-parens)

**Key:** arrow-parens ([docs](http://eslint.org/docs/rules/arrow-parens))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require space before/after arrow function's arrow (arrow-spacing)

**Key:** arrow-spacing ([docs](http://eslint.org/docs/rules/arrow-spacing))

**Value:** 
```javascript
[
  2,
  {
    "before": true,
    "after": true
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Verify calls of `super()` in constructors (constructor-super)

**Key:** constructor-super ([docs](http://eslint.org/docs/rules/constructor-super))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce spacing around the * in generator functions (generator-star-spacing)

**Key:** generator-star-spacing ([docs](http://eslint.org/docs/rules/generator-star-spacing))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow modifying variables of class declarations (no-class-assign)

**Key:** no-class-assign ([docs](http://eslint.org/docs/rules/no-class-assign))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow arrow functions where they could be confused with comparisons (no-confusing-arrow)

**Key:** no-confusing-arrow ([docs](http://eslint.org/docs/rules/no-confusing-arrow))

**Value:** 
```javascript
[
  2,
  {
    "allowParens": true
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Disallow modifying variables that are declared using `const` (no-const-assign)

**Key:** no-const-assign ([docs](http://eslint.org/docs/rules/no-const-assign))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow duplicate name in class members (no-dupe-class-members)

**Key:** no-dupe-class-members ([docs](http://eslint.org/docs/rules/no-dupe-class-members))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow duplicate imports (no-duplicate-imports)

**Key:** no-duplicate-imports ([docs](http://eslint.org/docs/rules/no-duplicate-imports))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Symbol Constructor (no-new-symbol)

**Key:** no-new-symbol ([docs](http://eslint.org/docs/rules/no-new-symbol))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow specific global variables (no-restricted-globals)

**Key:** no-restricted-globals ([docs](http://eslint.org/docs/rules/no-restricted-globals))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow specific imports (no-restricted-imports)

**Key:** no-restricted-imports ([docs](http://eslint.org/docs/rules/no-restricted-imports))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow use of `this`/`super` before calling `super()` in constructors. (no-this-before-super)

**Key:** no-this-before-super ([docs](http://eslint.org/docs/rules/no-this-before-super))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require `let` or `const` instead of `var` (no-var)

**Key:** no-var ([docs](http://eslint.org/docs/rules/no-var))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow unnecessary computed property keys on objects (no-useless-computed-key)

**Key:** no-useless-computed-key ([docs](http://eslint.org/docs/rules/no-useless-computed-key))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow unnecessary constructor (no-useless-constructor)

**Key:** no-useless-constructor ([docs](http://eslint.org/docs/rules/no-useless-constructor))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require Object Literal Shorthand Syntax (object-shorthand)

**Key:** object-shorthand ([docs](http://eslint.org/docs/rules/object-shorthand))

**Value:** 
```javascript
[
  2,
  "always"
]
```

**[&#8679; back to top](#table-of-contents)**

## Suggest using arrow functions as callbacks. (prefer-arrow-callback)

**Key:** prefer-arrow-callback ([docs](http://eslint.org/docs/rules/prefer-arrow-callback))

**Value:** 
```javascript
[
  2,
  {
    "allowNamedFunctions": false,
    "allowUnboundThis": true
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## Suggest using `const` (prefer-const)

**Key:** prefer-const ([docs](http://eslint.org/docs/rules/prefer-const))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Suggest using the spread operator instead of `.apply()`. (prefer-spread)

**Key:** prefer-spread ([docs](http://eslint.org/docs/rules/prefer-spread))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Suggest using Reflect methods where applicable (prefer-reflect)

**Key:** prefer-reflect ([docs](http://eslint.org/docs/rules/prefer-reflect))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Suggest using the rest parameters instead of `arguments` (prefer-rest-params)

**Key:** prefer-rest-params ([docs](http://eslint.org/docs/rules/prefer-rest-params))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Suggest using template literals instead of string concatenation. (prefer-template)

**Key:** prefer-template ([docs](http://eslint.org/docs/rules/prefer-template))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow generator functions that do not have `yield` (require-yield)

**Key:** require-yield ([docs](http://eslint.org/docs/rules/require-yield))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Import Sorting (sort-imports)

**Key:** sort-imports ([docs](http://eslint.org/docs/rules/sort-imports))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce Usage of Spacing in Template Strings (template-curly-spacing)

**Key:** template-curly-spacing ([docs](http://eslint.org/docs/rules/template-curly-spacing))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Enforce spacing around the `*` in `yield*` expressions (yield-star-spacing)

**Key:** yield-star-spacing ([docs](http://eslint.org/docs/rules/yield-star-spacing))

**Value:** 
```javascript
[
  2,
  "after"
]
```

**[&#8679; back to top](#table-of-contents)**

## Export

**Key:** import/export ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Default

**Key:** import/default ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Extensions - Ensure consistent use of file extension within the import path

**Key:** import/extensions ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md))

**Value:** 
```javascript
[
  0,
  "never"
]
```

**[&#8679; back to top](#table-of-contents)**

## Named

**Key:** import/named ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Namespace

**Key:** import/namespace ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Forbid the use of extraneous packages

**Key:** import/no-extraneous-dependencies ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md))

**Value:** 
```javascript
[
  0,
  {
    "devDependencies": false
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## No-unresolved

**Key:** import/no-unresolved ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md))

**Value:** 
```javascript
[
  2,
  {
    "commonjs": true
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## No-named-as-default

**Key:** import/no-named-as-default ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## No-commonjs

**Key:** import/no-commonjs ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## No-amd

**Key:** import/no-amd ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## First

**Key:** import/first ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md))

**Value:** 
```javascript
[
  0,
  "absolute-first"
]
```

**[&#8679; back to top](#table-of-contents)**

## No-duplicates

**Key:** import/no-duplicates ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## No-deprecated

**Key:** import/no-deprecated ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## No-namespace

**Key:** import/no-namespace ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## No-named-as-default-member

**Key:** import/no-named-as-default-member ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## No Node.js builtin modules

**Key:** import/no-nodejs-modules ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce a convention in module import order

**Key:** import/order ([docs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md))

**Value:** 
```javascript
[
  0,
  {
    "groups": [
      "builtin",
      "external",
      "internal",
      "parent",
      "sibling",
      "index"
    ]
  }
]
```

**[&#8679; back to top](#table-of-contents)**

## License
MIT © 2016 Mito (info@mito.hu)
