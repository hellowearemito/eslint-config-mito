# [eslint](http://eslint.org)-config-mito `legacy` configurations
> Generated: Mon Apr 25 2016 14:20:40 GMT+0200 (CEST)

## Table of contents

1. [accessor-pairs](#enforces-gettersetter-pairs-in-objects-accessor-pairs)
1. [block-scoped-var](#treat-var-as-block-scoped-block-scoped-var)
1. [complexity](#limit-cyclomatic-complexity-complexity)
1. [consistent-return](#require-consistent-returns-consistent-return)
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
1. [no-octal-escape](#disallow-octal-escapes-no-octal-escape)
1. [no-param-reassign](#disallow-reassignment-of-function-parameters-no-param-reassign)
1. [no-process-exit](#disallow-processexit-no-process-exit)
1. [no-proto](#disallow-use-of-__proto__-no-proto)
1. [no-redeclare](#disallow-redeclaring-variables-no-redeclare)
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
1. [no-with](#no-with-statements-no-with)
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
1. [no-empty-character-class](#disallow-empty-character-classes-no-empty-character-class)
1. [no-ex-assign](#disallow-assignment-of-the-exception-parameter-no-ex-assign)
1. [no-extra-boolean-cast](#disallow-extra-boolean-casts-no-extra-boolean-cast)
1. [no-extra-parens](#disallow-extra-parens-no-extra-parens)
1. [no-extra-semi](#disallow-extra-semicolons-no-extra-semi)
1. [no-func-assign](#disallow-function-assignment-no-func-assign)
1. [no-inner-declarations](#declarations-in-program-or-function-body-no-inner-declarations)
1. [no-invalid-regexp](#disallow-invalid-regular-expressions-no-invalid-regexp)
1. [no-irregular-whitespace](#no-irregular-whitespace-no-irregular-whitespace)
1. [no-negated-in-lhs](#disallow-negated-left-operand-of-in-operator-no-negated-in-lhs)
1. [no-new-require](#disallow-new-require-no-new-require)
1. [no-obj-calls](#disallow-global-object-function-calls-no-obj-calls)
1. [no-path-concat](#disallow-string-concatenation-when-using-__dirname-and-__filename-no-path-concat)
1. [no-regex-spaces](#disallow-spaces-in-regular-expressions-no-regex-spaces)
1. [no-sparse-arrays](#disallow-sparse-arrays-no-sparse-arrays)
1. [no-unreachable](#disallow-unreachable-code-no-unreachable)
1. [use-isnan](#require-isnan-use-isnan)
1. [valid-jsdoc](#validates-jsdoc-comments-are-syntactically-correct-valid-jsdoc)
1. [valid-typeof](#ensures-that-the-results-of-typeof-are-compared-against-a-valid-string-valid-typeof)
1. [no-unexpected-multiline](#avoid-unexpected-multiline-expressions-no-unexpected-multiline)
1. [max-depth](#enforce-a-maximum-depth-that-blocks-can-be-nested-max-depth)
1. [max-len](#enforce-a-maximum-line-length-max-len)
1. [max-params](#enforce-a-maximum-number-of-parameters-in-function-definitions-max-params)
1. [max-statements](#enforce-a-maximum-number-of-statements-allowed-in-function-blocks-max-statements)
1. [no-bitwise](#disallow-bitwise-operators-no-bitwise)
1. [no-plusplus](#disallow--and----no-plusplus)
1. [callback-return](#enforce-return-after-callback-callback-return)
1. [no-mixed-requires](#disallow-mixed-requires-no-mixed-requires)
1. [no-restricted-modules](#disallow-nodejs-modules-no-restricted-modules)
1. [no-sync](#disallow-synchronous-methods-no-sync)
1. [strict](#strict-mode-directives-strict)
1. [array-bracket-spacing](#disallow-or-enforce-spaces-inside-of-brackets-array-bracket-spacing)
1. [indent](#enforce-consistent-indentation-indent)
1. [brace-style](#require-brace-style-brace-style)
1. [camelcase](#require-camelcase-camelcase)
1. [comma-spacing](#enforces-spacing-around-commas-comma-spacing)
1. [comma-style](#comma-style-comma-style)
1. [computed-property-spacing](#disallow-or-enforce-spaces-inside-of-computed-properties-computed-property-spacing)
1. [consistent-this](#require-consistent-this-consistent-this)
1. [eol-last](#require-file-to-end-with-single-newline-eol-last)
1. [func-names](#require-function-expressions-to-have-a-name-func-names)
1. [func-style](#enforce-the-consistent-use-of-either-function-declarations-or-expressions-func-style)
1. [id-length](#enforce-minimum-and-maximum-identifier-lengths-id-length)
1. [key-spacing](#enforce-consistent-spacing-between-keys-and-values-in-object-literal-properties-key-spacing)
1. [lines-around-comment](#require-empty-lines-around-comments-lines-around-comment)
1. [linebreak-style](#enforce-consistent-linebreak-style-linebreak-style)
1. [max-nested-callbacks](#enforce-a-maximum-depth-that-callbacks-can-be-nested-max-nested-callbacks)
1. [new-cap](#require-constructors-to-use-initial-caps-new-cap)
1. [new-parens](#require-parens-for-constructors-new-parens)
1. [newline-after-var](#require-or-disallow-an-empty-newline-after-variable-declarations-newline-after-var)
1. [no-array-constructor](#disallow-creation-of-dense-arrays-using-the-array-constructor-no-array-constructor)
1. [no-continue](#disallow-continue-no-continue)
1. [no-inline-comments](#disallows-comments-after-code-comments-must-come-on-their-own-lines-no-inline-comments)
1. [no-lonely-if](#disallow-if-as-the-only-statement-in-an-else-block-no-lonely-if)
1. [no-mixed-spaces-and-tabs](#disallow-mixed-spaces-and-tabs-for-indentation-no-mixed-spaces-and-tabs)
1. [no-multiple-empty-lines](#disallows-multiple-blank-lines-no-multiple-empty-lines)
1. [no-nested-ternary](#disallow-nested-ternaries-no-nested-ternary)
1. [no-new-object](#disallow-the-use-of-the-object-constructor-no-new-object)
1. [no-spaced-func](#disallow-spaces-in-function-calls-no-spaced-func)
1. [no-ternary](#disallow-ternary-operators-no-ternary)
1. [no-trailing-spaces](#disallow-trailing-spaces-at-the-end-of-lines-no-trailing-spaces)
1. [no-underscore-dangle](#disallow-dangling-underscores-in-identifiers-no-underscore-dangle)
1. [no-unneeded-ternary](#disallow-conditional-expressions-that-can-be-expressed-with-simpler-constructs-no-unneeded-ternary)
1. [object-curly-spacing](#disallow-or-enforce-spaces-inside-of-curly-braces-in-objects-object-curly-spacing)
1. [one-var](#require-or-disallow-one-variable-declaration-per-scope-one-var)
1. [operator-assignment](#operator-assignment-shorthand-operator-assignment)
1. [operator-linebreak](#operator-linebreak-operator-linebreak)
1. [quote-props](#quoting-style-for-property-names-quote-props)
1. [quotes](#enforce-quote-style-quotes)
1. [id-match](#require-identifiers-to-match-a-specified-regular-expression-id-match)
1. [padded-blocks](#enforce-padding-within-blocks-padded-blocks)
1. [semi](#enforce-or-disallow-semicolons-semi)
1. [semi-spacing](#enforce-spacing-before-and-after-semicolons-semi-spacing)
1. [sort-vars](#variable-sorting-sort-vars)
1. [keyword-spacing](#enforce-consistent-spacing-before-and-after-keywords-keyword-spacing)
1. [space-before-blocks](#require-or-disallow-space-before-blocks-space-before-blocks)
1. [space-before-function-paren](#require-or-disallow-a-space-before-function-parenthesis-space-before-function-paren)
1. [space-in-parens](#disallow-or-enforce-spaces-inside-of-parentheses-space-in-parens)
1. [space-infix-ops](#require-spaces-around-infix-operators-space-infix-ops)
1. [space-unary-ops](#require-or-disallow-spaces-beforeafter-unary-operators-space-unary-ops)
1. [spaced-comment](#requires-or-disallows-a-whitespace-space-or-tab-beginning-a-comment-spaced-comment)
1. [wrap-regex](#require-regex-literals-to-be-wrapped-wrap-regex)
1. [init-declarations](#enforcedisallow-variable-initializations-init-declarations)
1. [no-catch-shadow](#disallow-shadowing-of-variables-inside-of-catch-no-catch-shadow)
1. [no-delete-var](#disallow-variables-deletion-no-delete-var)
1. [no-label-var](#disallow-labels-that-are-variables-names-no-label-var)
1. [no-shadow](#disallow-shadowing-no-shadow)
1. [no-shadow-restricted-names](#disallow-shadowing-of-restricted-names-no-shadow-restricted-names)
1. [no-unused-vars](#disallow-unused-variables-no-unused-vars)
1. [no-use-before-define](#disallow-early-use-no-use-before-define)

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

## Require Consistent Returns (consistent-return)

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

## Disallow Octal Literals (no-octal)

**Key:** no-octal ([docs](http://eslint.org/docs/rules/no-octal))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Octal Escapes (no-octal-escape)

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

## Disallow Redeclaring Variables (no-redeclare)

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

## No with Statements (no-with)

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

## Disallow Empty Character Classes (no-empty-character-class)

**Key:** no-empty-character-class ([docs](http://eslint.org/docs/rules/no-empty-character-class))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Assignment of the Exception Parameter (no-ex-assign)

**Key:** no-ex-assign ([docs](http://eslint.org/docs/rules/no-ex-assign))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Extra Boolean Casts (no-extra-boolean-cast)

**Key:** no-extra-boolean-cast ([docs](http://eslint.org/docs/rules/no-extra-boolean-cast))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Extra Parens (no-extra-parens)

**Key:** no-extra-parens ([docs](http://eslint.org/docs/rules/no-extra-parens))

**Value:** 
```javascript
[
  2,
  "functions"
]
```

**[&#8679; back to top](#table-of-contents)**

## Disallow Extra Semicolons (no-extra-semi)

**Key:** no-extra-semi ([docs](http://eslint.org/docs/rules/no-extra-semi))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Function Assignment (no-func-assign)

**Key:** no-func-assign ([docs](http://eslint.org/docs/rules/no-func-assign))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Declarations in Program or Function Body (no-inner-declarations)

**Key:** no-inner-declarations ([docs](http://eslint.org/docs/rules/no-inner-declarations))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Invalid Regular Expressions (no-invalid-regexp)

**Key:** no-invalid-regexp ([docs](http://eslint.org/docs/rules/no-invalid-regexp))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## No irregular whitespace (no-irregular-whitespace)

**Key:** no-irregular-whitespace ([docs](http://eslint.org/docs/rules/no-irregular-whitespace))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow negated left operand of `in` operator (no-negated-in-lhs)

**Key:** no-negated-in-lhs ([docs](http://eslint.org/docs/rules/no-negated-in-lhs))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow new require (no-new-require)

**Key:** no-new-require ([docs](http://eslint.org/docs/rules/no-new-require))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Global Object Function Calls (no-obj-calls)

**Key:** no-obj-calls ([docs](http://eslint.org/docs/rules/no-obj-calls))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow string concatenation when using `__dirname` and `__filename` (no-path-concat)

**Key:** no-path-concat ([docs](http://eslint.org/docs/rules/no-path-concat))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Spaces in Regular Expressions (no-regex-spaces)

**Key:** no-regex-spaces ([docs](http://eslint.org/docs/rules/no-regex-spaces))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Sparse Arrays (no-sparse-arrays)

**Key:** no-sparse-arrays ([docs](http://eslint.org/docs/rules/no-sparse-arrays))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Unreachable Code (no-unreachable)

**Key:** no-unreachable ([docs](http://eslint.org/docs/rules/no-unreachable))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require isNaN() (use-isnan)

**Key:** use-isnan ([docs](http://eslint.org/docs/rules/use-isnan))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Validates JSDoc comments are syntactically correct (valid-jsdoc)

**Key:** valid-jsdoc ([docs](http://eslint.org/docs/rules/valid-jsdoc))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Ensures that the results of typeof are compared against a valid string (valid-typeof)

**Key:** valid-typeof ([docs](http://eslint.org/docs/rules/valid-typeof))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Avoid unexpected multiline expressions (no-unexpected-multiline)

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

## Enforce a maximum number of parameters in `function` definitions (max-params)

**Key:** max-params ([docs](http://eslint.org/docs/rules/max-params))

**Value:** 
```javascript
[
  0,
  3
]
```

**[&#8679; back to top](#table-of-contents)**

## Enforce a maximum number of statements allowed in `function` blocks (max-statements)

**Key:** max-statements ([docs](http://eslint.org/docs/rules/max-statements))

**Value:** 
```javascript
[
  0,
  10
]
```

**[&#8679; back to top](#table-of-contents)**

## Disallow Bitwise Operators (no-bitwise)

**Key:** no-bitwise ([docs](http://eslint.org/docs/rules/no-bitwise))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow ++ and -- (no-plusplus)

**Key:** no-plusplus ([docs](http://eslint.org/docs/rules/no-plusplus))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce Return After Callback (callback-return)

**Key:** callback-return ([docs](http://eslint.org/docs/rules/callback-return))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Mixed Requires (no-mixed-requires)

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

## Strict Mode Directives (strict)

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

## Require file to end with single newline (eol-last)

**Key:** eol-last ([docs](http://eslint.org/docs/rules/eol-last))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require Function Expressions to have a Name (func-names)

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

## Require Constructors to Use Initial Caps (new-cap)

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

## Require Parens for Constructors (new-parens)

**Key:** new-parens ([docs](http://eslint.org/docs/rules/new-parens))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Require or disallow an empty newline after variable declarations (newline-after-var)

**Key:** newline-after-var ([docs](http://eslint.org/docs/rules/newline-after-var))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow creation of dense arrays using the `Array` constructor (no-array-constructor)

**Key:** no-array-constructor ([docs](http://eslint.org/docs/rules/no-array-constructor))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow continue (no-continue)

**Key:** no-continue ([docs](http://eslint.org/docs/rules/no-continue))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallows comments after code. Comments must come on their own lines (no-inline-comments)

**Key:** no-inline-comments ([docs](http://eslint.org/docs/rules/no-inline-comments))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow `if` as the Only Statement in an `else` Block (no-lonely-if)

**Key:** no-lonely-if ([docs](http://eslint.org/docs/rules/no-lonely-if))

**Value:** ``1``

**[&#8679; back to top](#table-of-contents)**

## Disallow mixed spaces and tabs for indentation (no-mixed-spaces-and-tabs)

**Key:** no-mixed-spaces-and-tabs ([docs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallows multiple blank lines (no-multiple-empty-lines)

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

## Disallow Nested Ternaries (no-nested-ternary)

**Key:** no-nested-ternary ([docs](http://eslint.org/docs/rules/no-nested-ternary))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow the use of the Object constructor (no-new-object)

**Key:** no-new-object ([docs](http://eslint.org/docs/rules/no-new-object))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Spaces in Function Calls (no-spaced-func)

**Key:** no-spaced-func ([docs](http://eslint.org/docs/rules/no-spaced-func))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Ternary Operators (no-ternary)

**Key:** no-ternary ([docs](http://eslint.org/docs/rules/no-ternary))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow trailing spaces at the end of lines (no-trailing-spaces)

**Key:** no-trailing-spaces ([docs](http://eslint.org/docs/rules/no-trailing-spaces))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Dangling Underscores in Identifiers (no-underscore-dangle)

**Key:** no-underscore-dangle ([docs](http://eslint.org/docs/rules/no-underscore-dangle))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow conditional expressions that can be expressed with simpler constructs (no-unneeded-ternary)

**Key:** no-unneeded-ternary ([docs](http://eslint.org/docs/rules/no-unneeded-ternary))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow or enforce spaces inside of curly braces in objects. (object-curly-spacing)

**Key:** object-curly-spacing ([docs](http://eslint.org/docs/rules/object-curly-spacing))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Require or Disallow One Variable Declaration per Scope (one-var)

**Key:** one-var ([docs](http://eslint.org/docs/rules/one-var))

**Value:** 
```javascript
[
  2,
  "never"
]
```

**[&#8679; back to top](#table-of-contents)**

## Operator Assignment Shorthand (operator-assignment)

**Key:** operator-assignment ([docs](http://eslint.org/docs/rules/operator-assignment))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Operator Linebreak (operator-linebreak)

**Key:** operator-linebreak ([docs](http://eslint.org/docs/rules/operator-linebreak))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Quoting Style for Property Names (quote-props)

**Key:** quote-props ([docs](http://eslint.org/docs/rules/quote-props))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Enforce Quote Style (quotes)

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

## Enforce padding within blocks (padded-blocks)

**Key:** padded-blocks ([docs](http://eslint.org/docs/rules/padded-blocks))

**Value:** 
```javascript
[
  2,
  "never"
]
```

**[&#8679; back to top](#table-of-contents)**

## Enforce or Disallow Semicolons (semi)

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

## Require Spaces Around Infix Operators (space-infix-ops)

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

## Enforce/Disallow Variable Initializations (init-declarations)

**Key:** init-declarations ([docs](http://eslint.org/docs/rules/init-declarations))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Shadowing of Variables Inside of catch (no-catch-shadow)

**Key:** no-catch-shadow ([docs](http://eslint.org/docs/rules/no-catch-shadow))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Variables Deletion (no-delete-var)

**Key:** no-delete-var ([docs](http://eslint.org/docs/rules/no-delete-var))

**Value:** ``2``

**[&#8679; back to top](#table-of-contents)**

## Disallow Labels That Are Variables Names (no-label-var)

**Key:** no-label-var ([docs](http://eslint.org/docs/rules/no-label-var))

**Value:** ``0``

**[&#8679; back to top](#table-of-contents)**

## Disallow Shadowing (no-shadow)

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

## License
MIT © 2016 Gergely Kovács (gg.kovacs@gmail.com)
