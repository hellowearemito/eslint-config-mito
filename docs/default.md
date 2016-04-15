# [eslint](http://eslint.org)-config-mito `default` configurations
> Generated: Fri Apr 15 2016 11:15:51 GMT+0200 (CEST)

## Table of contents

* [accessor-pairs](#enforces-gettersetter-pairs-in-objects-accessorpairs)
* [block-scoped-var](#treat-var-as-block-scoped-blockscopedvar)
* [complexity](#limit-cyclomatic-complexity-complexity)
* [consistent-return](#require-consistent-returns-consistentreturn)
* [curly](#require-following-curly-brace-conventions-curly)
* [default-case](#require-default-case-in-switch-statements-defaultcase)
* [dot-notation](#require-dot-notation-dotnotation)
* [dot-location](#enforce-newline-before-and-after-dot-dotlocation)
* [eqeqeq](#require--and--eqeqeq)
* [guard-for-in](#require-guarding-forin-guardforin)
* [no-caller](#disallow-use-of-callercallee-nocaller)
* [no-div-regex](#disallow-regexs-that-look-like-division-nodivregex)
* [no-else-return](#disallow-return-before-else-noelsereturn)
* [no-eq-null](#disallow-null-comparisons-noeqnull)
* [no-eval](#disallow-eval-noeval)
* [no-extend-native](#disallow-extending-of-native-objects-noextendnative)
* [no-extra-bind](#disallow-unnecessary-function-binding-noextrabind)
* [no-fallthrough](#disallow-case-statement-fallthrough-nofallthrough)
* [no-floating-decimal](#disallow-floating-decimals-nofloatingdecimal)
* [no-implicit-coercion](#disallow-the-type-conversion-with-shorter-notations-noimplicitcoercion)
* [no-implied-eval](#disallow-implied-eval-noimpliedeval)
* [no-invalid-this](#disallow-this-keywords-outside-of-classes-or-classlike-objects-noinvalidthis)
* [no-iterator](#disallow-iterator-noiterator)
* [no-labels](#disallow-labeled-statements-nolabels)
* [no-lone-blocks](#disallow-unnecessary-nested-blocks-noloneblocks)
* [no-loop-func](#disallow-functions-in-loops-noloopfunc)
* [no-multi-spaces](#disallow-multiple-spaces-nomultispaces)
* [no-multi-str](#disallow-multiline-strings-nomultistr)
* [no-native-reassign](#disallow-reassignment-of-native-objects-nonativereassign)
* [no-new](#disallow-new-for-side-effects-nonew)
* [no-new-func](#disallow-function-constructor-nonewfunc)
* [no-new-wrappers](#disallow-primitive-wrapper-instances-nonewwrappers)
* [no-octal](#disallow-octal-literals-nooctal)
* [no-octal-escape](#disallow-octal-escapes-nooctalescape)
* [no-param-reassign](#disallow-reassignment-of-function-parameters-noparamreassign)
* [no-process-exit](#disallow-processexit-noprocessexit)
* [no-proto](#disallow-use-of-__proto__-noproto)
* [no-redeclare](#disallow-redeclaring-variables-noredeclare)
* [no-return-assign](#disallow-assignment-in-return-statement-noreturnassign)
* [no-script-url](#disallow-script-urls-noscripturl)
* [no-self-compare](#disallow-self-compare-noselfcompare)
* [no-sequences](#disallow-use-of-the-comma-operator-nosequences)
* [no-throw-literal](#restrict-what-can-be-thrown-as-an-exception-nothrowliteral)
* [no-unused-expressions](#disallow-unused-expressions-nounusedexpressions)
* [no-useless-call](#disallow-unnecessary-call-and-apply-nouselesscall)
* [no-void](#disallow-use-of-the-void-operator-novoid)
* [no-warning-comments](#disallow-warning-comments-nowarningcomments)
* [no-undef](#disallow-undeclared-variables-noundef)
* [no-undef-init](#disallow-initializing-to-undefined-noundefinit)
* [no-undefined](#disallow-use-of-undefined-variable-noundefined)
* [no-with](#no-with-statements-nowith)
* [handle-callback-err](#enforce-callback-error-handling-handlecallbackerr)
* [radix](#require-radix-parameter-radix)
* [vars-on-top](#require-variable-declarations-to-be-at-the-top-of-their-scope-varsontop)
* [wrap-iife](#require-iifes-to-be-wrapped-wrapiife)
* [yoda](#require-or-disallow-yoda-conditions-yoda)
* [comma-dangle](#disallow-or-enforce-dangling-commas-commadangle)
* [no-cond-assign](#disallow-assignment-in-conditional-statements-nocondassign)
* [no-console](#disallow-use-of-console-noconsole)
* [no-debugger](#disallow-debugger-nodebugger)
* [no-alert](#disallow-use-of-alert-noalert)
* [no-constant-condition](#disallow-use-of-constant-expressions-in-conditions-noconstantcondition)
* [no-control-regex](#disallow-controls-characters-in-regular-expressions-nocontrolregex)
* [no-dupe-args](#no-duplicate-arguments-nodupeargs)
* [no-dupe-keys](#disallow-duplicate-keys-nodupekeys)
* [no-duplicate-case](#rule-to-disallow-a-duplicate-case-label-noduplicatecase)
* [no-empty](#disallow-empty-block-statements-noempty)
* [no-empty-character-class](#disallow-empty-character-classes-noemptycharacterclass)
* [no-ex-assign](#disallow-assignment-of-the-exception-parameter-noexassign)
* [no-extra-boolean-cast](#disallow-extra-boolean-casts-noextrabooleancast)
* [no-extra-parens](#disallow-extra-parens-noextraparens)
* [no-extra-semi](#disallow-extra-semicolons-noextrasemi)
* [no-func-assign](#disallow-function-assignment-nofuncassign)
* [no-inner-declarations](#declarations-in-program-or-function-body-noinnerdeclarations)
* [no-invalid-regexp](#disallow-invalid-regular-expressions-noinvalidregexp)
* [no-irregular-whitespace](#no-irregular-whitespace-noirregularwhitespace)
* [no-negated-in-lhs](#disallow-negated-left-operand-of-in-operator-nonegatedinlhs)
* [no-new-require](#disallow-new-require-nonewrequire)
* [no-obj-calls](#disallow-global-object-function-calls-noobjcalls)
* [no-path-concat](#disallow-string-concatenation-when-using-__dirname-and-__filename-nopathconcat)
* [no-regex-spaces](#disallow-spaces-in-regular-expressions-noregexspaces)
* [no-sparse-arrays](#disallow-sparse-arrays-nosparsearrays)
* [no-unreachable](#disallow-unreachable-code-nounreachable)
* [use-isnan](#require-isnan-useisnan)
* [valid-jsdoc](#validates-jsdoc-comments-are-syntactically-correct-validjsdoc)
* [valid-typeof](#ensures-that-the-results-of-typeof-are-compared-against-a-valid-string-validtypeof)
* [no-unexpected-multiline](#avoid-unexpected-multiline-expressions-nounexpectedmultiline)
* [max-depth](#limit-maximum-depth-maxdepth)
* [max-len](#limit-maximum-length-of-line-maxlen)
* [max-params](#limit-maximum-number-of-parameters-maxparams)
* [max-statements](#limit-maximum-number-of-statements-maxstatements)
* [no-bitwise](#disallow-bitwise-operators-nobitwise)
* [no-plusplus](#disallow--and--noplusplus)
* [callback-return](#enforce-return-after-callback-callbackreturn)
* [no-mixed-requires](#disallow-mixed-requires-nomixedrequires)
* [no-restricted-modules](#disallow-nodejs-modules-norestrictedmodules)
* [no-sync](#disallow-synchronous-methods-nosync)
* [strict](#strict-mode-directives-strict)
* [array-bracket-spacing](#disallow-or-enforce-spaces-inside-of-brackets-arraybracketspacing)
* [indent](#validate-indentation-indent)
* [brace-style](#require-brace-style-bracestyle)
* [camelcase](#require-camelcase-camelcase)
* [comma-spacing](#enforces-spacing-around-commas-commaspacing)
* [comma-style](#comma-style-commastyle)
* [computed-property-spacing](#disallow-or-enforce-spaces-inside-of-computed-properties-computedpropertyspacing)
* [consistent-this](#require-consistent-this-consistentthis)
* [eol-last](#require-file-to-end-with-single-newline-eollast)
* [func-names](#require-function-expressions-to-have-a-name-funcnames)
* [func-style](#enforce-function-style-funcstyle)
* [id-length](#limit-minimum-and-maximum-length-for-identifiers-idlength)
* [key-spacing](#enforce-property-spacing-keyspacing)
* [lines-around-comment](#enforce-empty-lines-around-comments-linesaroundcomment)
* [linebreak-style](#enforce-linebreak-style-linebreakstyle)
* [max-nested-callbacks](#set-maximum-depth-of-nested-callbacks-maxnestedcallbacks)
* [new-cap](#require-constructors-to-use-initial-caps-newcap)
* [new-parens](#require-parens-for-constructors-newparens)
* [newline-after-var](#require-or-disallow-an-empty-newline-after-variable-declarations-newlineaftervar)
* [no-array-constructor](#disallow-creation-of-dense-arrays-using-the-array-constructor-noarrayconstructor)
* [no-continue](#disallow-continue-nocontinue)
* [no-inline-comments](#disallows-comments-after-code-comments-must-come-on-their-own-lines-noinlinecomments)
* [no-lonely-if](#disallow-if-as-the-only-statement-in-an-else-block-nolonelyif)
* [no-mixed-spaces-and-tabs](#disallow-mixed-spaces-and-tabs-for-indentation-nomixedspacesandtabs)
* [no-multiple-empty-lines](#disallows-multiple-blank-lines-nomultipleemptylines)
* [no-nested-ternary](#disallow-nested-ternaries-nonestedternary)
* [no-new-object](#disallow-the-use-of-the-object-constructor-nonewobject)
* [no-spaced-func](#disallow-spaces-in-function-calls-nospacedfunc)
* [no-ternary](#disallow-ternary-operators-noternary)
* [no-trailing-spaces](#disallow-trailing-spaces-at-the-end-of-lines-notrailingspaces)
* [no-underscore-dangle](#disallow-dangling-underscores-in-identifiers-nounderscoredangle)
* [no-unneeded-ternary](#disallow-conditional-expressions-that-can-be-expressed-with-simpler-constructs-nounneededternary)
* [object-curly-spacing](#disallow-or-enforce-spaces-inside-of-curly-braces-in-objects-objectcurlyspacing)
* [one-var](#require-or-disallow-one-variable-declaration-per-scope-onevar)
* [operator-assignment](#operator-assignment-shorthand-operatorassignment)
* [operator-linebreak](#operator-linebreak-operatorlinebreak)
* [quote-props](#quoting-style-for-property-names-quoteprops)
* [quotes](#enforce-quote-style-quotes)
* [id-match](#require-ids-to-match-a-pattern-idmatch)
* [padded-blocks](#enforce-padding-within-blocks-paddedblocks)
* [semi](#enforce-or-disallow-semicolons-semi)
* [semi-spacing](#enforce-spacing-before-and-after-semicolons-semispacing)
* [sort-vars](#variable-sorting-sortvars)
* [keyword-spacing](#enforce-spacing-before-and-after-keywords-keywordspacing)
* [space-before-blocks](#require-or-disallow-space-before-blocks-spacebeforeblocks)
* [space-before-function-paren](#require-or-disallow-a-space-before-function-parenthesis-spacebeforefunctionparen)
* [space-in-parens](#disallow-or-enforce-spaces-inside-of-parentheses-spaceinparens)
* [space-infix-ops](#require-spaces-around-infix-operators-spaceinfixops)
* [space-unary-ops](#require-or-disallow-spaces-beforeafter-unary-operators-spaceunaryops)
* [spaced-comment](#requires-or-disallows-a-whitespace-space-or-tab-beginning-a-comment-spacedcomment)
* [wrap-regex](#require-regex-literals-to-be-wrapped-wrapregex)
* [init-declarations](#enforcedisallow-variable-initializations-initdeclarations)
* [no-catch-shadow](#disallow-shadowing-of-variables-inside-of-catch-nocatchshadow)
* [no-delete-var](#disallow-variables-deletion-nodeletevar)
* [no-label-var](#disallow-labels-that-are-variables-names-nolabelvar)
* [no-shadow](#disallow-shadowing-noshadow)
* [no-shadow-restricted-names](#disallow-shadowing-of-restricted-names-noshadowrestrictednames)
* [no-unused-vars](#disallow-unused-variables-nounusedvars)
* [no-use-before-define](#disallow-early-use-nousebeforedefine)
* [arrow-parens](#require-parens-in-arrow-function-arguments-arrowparens)
* [arrow-spacing](#require-space-beforeafter-arrow-functions-arrow-arrowspacing)
* [constructor-super](#verify-calls-of-super-in-constructors-constructorsuper)
* [generator-star-spacing](#enforce-spacing-around-the--in-generator-functions-generatorstarspacing)
* [no-class-assign](#disallow-modifying-variables-of-class-declarations-noclassassign)
* [no-const-assign](#disallow-modifying-variables-that-are-declared-using-const-noconstassign)
* [no-this-before-super](#disallow-use-of-thissuper-before-calling-super-in-constructors-nothisbeforesuper)
* [no-var](#require-let-or-const-instead-of-var-novar)
* [object-shorthand](#require-object-literal-shorthand-syntax-objectshorthand)
* [prefer-const](#suggest-using-const-preferconst)
* [prefer-spread](#suggest-using-the-spread-operator-instead-of-apply-preferspread)
* [prefer-reflect](#suggest-using-reflect-methods-where-applicable-preferreflect)
* [require-yield](#disallow-generator-functions-that-do-not-have-yield-requireyield)

---

### Enforces getter/setter pairs in objects (accessor-pairs)

**Key:** accessor-pairs ([docs](http://eslint.org/docs/rules/accessor-pairs))

**Value:** ``0``

### Treat var as Block Scoped (block-scoped-var)

**Key:** block-scoped-var ([docs](http://eslint.org/docs/rules/block-scoped-var))

**Value:** ``2``

### Limit Cyclomatic Complexity (complexity)

**Key:** complexity ([docs](http://eslint.org/docs/rules/complexity))

**Value:** 
```javascript
[
  0,
  11
]
```

### Require Consistent Returns (consistent-return)

**Key:** consistent-return ([docs](http://eslint.org/docs/rules/consistent-return))

**Value:** ``2``

### Require Following Curly Brace Conventions (curly)

**Key:** curly ([docs](http://eslint.org/docs/rules/curly))

**Value:** 
```javascript
[
  2,
  "multi-line"
]
```

### Require Default Case in Switch Statements (default-case)

**Key:** default-case ([docs](http://eslint.org/docs/rules/default-case))

**Value:** ``2``

### Require Dot Notation (dot-notation)

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

### Enforce newline before and after dot (dot-location)

**Key:** dot-location ([docs](http://eslint.org/docs/rules/dot-location))

**Value:** ``0``

### Require === and !== (eqeqeq)

**Key:** eqeqeq ([docs](http://eslint.org/docs/rules/eqeqeq))

**Value:** ``2``

### Require Guarding for-in (guard-for-in)

**Key:** guard-for-in ([docs](http://eslint.org/docs/rules/guard-for-in))

**Value:** ``2``

### Disallow Use of caller/callee (no-caller)

**Key:** no-caller ([docs](http://eslint.org/docs/rules/no-caller))

**Value:** ``2``

### Disallow Regexs That Look Like Division (no-div-regex)

**Key:** no-div-regex ([docs](http://eslint.org/docs/rules/no-div-regex))

**Value:** ``2``

### Disallow return before else (no-else-return)

**Key:** no-else-return ([docs](http://eslint.org/docs/rules/no-else-return))

**Value:** ``2``

### Disallow Null Comparisons (no-eq-null)

**Key:** no-eq-null ([docs](http://eslint.org/docs/rules/no-eq-null))

**Value:** ``2``

### Disallow eval() (no-eval)

**Key:** no-eval ([docs](http://eslint.org/docs/rules/no-eval))

**Value:** ``2``

### Disallow Extending of Native Objects (no-extend-native)

**Key:** no-extend-native ([docs](http://eslint.org/docs/rules/no-extend-native))

**Value:** ``2``

### Disallow unnecessary function binding (no-extra-bind)

**Key:** no-extra-bind ([docs](http://eslint.org/docs/rules/no-extra-bind))

**Value:** ``2``

### Disallow Case Statement Fallthrough (no-fallthrough)

**Key:** no-fallthrough ([docs](http://eslint.org/docs/rules/no-fallthrough))

**Value:** ``2``

### Disallow Floating Decimals (no-floating-decimal)

**Key:** no-floating-decimal ([docs](http://eslint.org/docs/rules/no-floating-decimal))

**Value:** ``2``

### Disallow the type conversion with shorter notations. (no-implicit-coercion)

**Key:** no-implicit-coercion ([docs](http://eslint.org/docs/rules/no-implicit-coercion))

**Value:** ``0``

### Disallow Implied eval() (no-implied-eval)

**Key:** no-implied-eval ([docs](http://eslint.org/docs/rules/no-implied-eval))

**Value:** ``2``

### Disallow `this` keywords outside of classes or class-like objects. (no-invalid-this)

**Key:** no-invalid-this ([docs](http://eslint.org/docs/rules/no-invalid-this))

**Value:** ``0``

### Disallow Iterator (no-iterator)

**Key:** no-iterator ([docs](http://eslint.org/docs/rules/no-iterator))

**Value:** ``2``

### Disallow Labeled Statements (no-labels)

**Key:** no-labels ([docs](http://eslint.org/docs/rules/no-labels))

**Value:** ``2``

### Disallow Unnecessary Nested Blocks (no-lone-blocks)

**Key:** no-lone-blocks ([docs](http://eslint.org/docs/rules/no-lone-blocks))

**Value:** ``2``

### Disallow Functions in Loops (no-loop-func)

**Key:** no-loop-func ([docs](http://eslint.org/docs/rules/no-loop-func))

**Value:** ``2``

### Disallow multiple spaces (no-multi-spaces)

**Key:** no-multi-spaces ([docs](http://eslint.org/docs/rules/no-multi-spaces))

**Value:** ``2``

### Disallow Multiline Strings (no-multi-str)

**Key:** no-multi-str ([docs](http://eslint.org/docs/rules/no-multi-str))

**Value:** ``2``

### Disallow Reassignment of Native Objects (no-native-reassign)

**Key:** no-native-reassign ([docs](http://eslint.org/docs/rules/no-native-reassign))

**Value:** ``2``

### Disallow new For Side Effects (no-new)

**Key:** no-new ([docs](http://eslint.org/docs/rules/no-new))

**Value:** ``2``

### Disallow Function Constructor (no-new-func)

**Key:** no-new-func ([docs](http://eslint.org/docs/rules/no-new-func))

**Value:** ``2``

### Disallow Primitive Wrapper Instances (no-new-wrappers)

**Key:** no-new-wrappers ([docs](http://eslint.org/docs/rules/no-new-wrappers))

**Value:** ``2``

### Disallow Octal Literals (no-octal)

**Key:** no-octal ([docs](http://eslint.org/docs/rules/no-octal))

**Value:** ``2``

### Disallow Octal Escapes (no-octal-escape)

**Key:** no-octal-escape ([docs](http://eslint.org/docs/rules/no-octal-escape))

**Value:** ``2``

### Disallow Reassignment of Function Parameters (no-param-reassign)

**Key:** no-param-reassign ([docs](http://eslint.org/docs/rules/no-param-reassign))

**Value:** ``2``

### Disallow process.exit() (no-process-exit)

**Key:** no-process-exit ([docs](http://eslint.org/docs/rules/no-process-exit))

**Value:** ``0``

### Disallow Use of `__proto__` (no-proto)

**Key:** no-proto ([docs](http://eslint.org/docs/rules/no-proto))

**Value:** ``2``

### Disallow Redeclaring Variables (no-redeclare)

**Key:** no-redeclare ([docs](http://eslint.org/docs/rules/no-redeclare))

**Value:** ``2``

### Disallow Assignment in return Statement (no-return-assign)

**Key:** no-return-assign ([docs](http://eslint.org/docs/rules/no-return-assign))

**Value:** ``2``

### Disallow Script URLs (no-script-url)

**Key:** no-script-url ([docs](http://eslint.org/docs/rules/no-script-url))

**Value:** ``2``

### Disallow Self Compare (no-self-compare)

**Key:** no-self-compare ([docs](http://eslint.org/docs/rules/no-self-compare))

**Value:** ``2``

### Disallow Use of the Comma Operator (no-sequences)

**Key:** no-sequences ([docs](http://eslint.org/docs/rules/no-sequences))

**Value:** ``2``

### Restrict what can be thrown as an exception (no-throw-literal)

**Key:** no-throw-literal ([docs](http://eslint.org/docs/rules/no-throw-literal))

**Value:** ``2``

### Disallow Unused Expressions (no-unused-expressions)

**Key:** no-unused-expressions ([docs](http://eslint.org/docs/rules/no-unused-expressions))

**Value:** ``2``

### Disallow unnecessary `.call()` and `.apply()`. (no-useless-call)

**Key:** no-useless-call ([docs](http://eslint.org/docs/rules/no-useless-call))

**Value:** ``2``

### Disallow use of the void operator. (no-void)

**Key:** no-void ([docs](http://eslint.org/docs/rules/no-void))

**Value:** ``2``

### Disallow Warning Comments (no-warning-comments)

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

### Disallow Undeclared Variables (no-undef)

**Key:** no-undef ([docs](http://eslint.org/docs/rules/no-undef))

**Value:** ``2``

### Disallow Initializing to undefined (no-undef-init)

**Key:** no-undef-init ([docs](http://eslint.org/docs/rules/no-undef-init))

**Value:** ``0``

### Disallow Use of `undefined` Variable (no-undefined)

**Key:** no-undefined ([docs](http://eslint.org/docs/rules/no-undefined))

**Value:** ``0``

### No with Statements (no-with)

**Key:** no-with ([docs](http://eslint.org/docs/rules/no-with))

**Value:** ``2``

### Enforce Callback Error Handling (handle-callback-err)

**Key:** handle-callback-err ([docs](http://eslint.org/docs/rules/handle-callback-err))

**Value:** ``0``

### Require Radix Parameter (radix)

**Key:** radix ([docs](http://eslint.org/docs/rules/radix))

**Value:** ``2``

### Require Variable Declarations to be at the top of their scope (vars-on-top)

**Key:** vars-on-top ([docs](http://eslint.org/docs/rules/vars-on-top))

**Value:** ``2``

### Require IIFEs to be Wrapped (wrap-iife)

**Key:** wrap-iife ([docs](http://eslint.org/docs/rules/wrap-iife))

**Value:** 
```javascript
[
  2,
  "any"
]
```

### Require or disallow Yoda Conditions (yoda)

**Key:** yoda ([docs](http://eslint.org/docs/rules/yoda))

**Value:** ``2``

### Disallow or Enforce Dangling Commas (comma-dangle)

**Key:** comma-dangle ([docs](http://eslint.org/docs/rules/comma-dangle))

**Value:** 
```javascript
[
  2,
  "never"
]
```

### Disallow Assignment in Conditional Statements (no-cond-assign)

**Key:** no-cond-assign ([docs](http://eslint.org/docs/rules/no-cond-assign))

**Value:** 
```javascript
[
  2,
  "always"
]
```

### Disallow Use of console (no-console)

**Key:** no-console ([docs](http://eslint.org/docs/rules/no-console))

**Value:** ``0``

### Disallow debugger (no-debugger)

**Key:** no-debugger ([docs](http://eslint.org/docs/rules/no-debugger))

**Value:** ``1``

### Disallow Use of Alert (no-alert)

**Key:** no-alert ([docs](http://eslint.org/docs/rules/no-alert))

**Value:** ``1``

### Disallow use of constant expressions in conditions (no-constant-condition)

**Key:** no-constant-condition ([docs](http://eslint.org/docs/rules/no-constant-condition))

**Value:** ``1``

### Disallow Controls Characters in Regular Expressions (no-control-regex)

**Key:** no-control-regex ([docs](http://eslint.org/docs/rules/no-control-regex))

**Value:** ``2``

### No duplicate arguments (no-dupe-args)

**Key:** no-dupe-args ([docs](http://eslint.org/docs/rules/no-dupe-args))

**Value:** ``2``

### Disallow Duplicate Keys (no-dupe-keys)

**Key:** no-dupe-keys ([docs](http://eslint.org/docs/rules/no-dupe-keys))

**Value:** ``2``

### Rule to disallow a duplicate case label (no-duplicate-case)

**Key:** no-duplicate-case ([docs](http://eslint.org/docs/rules/no-duplicate-case))

**Value:** ``2``

### Disallow Empty Block Statements (no-empty)

**Key:** no-empty ([docs](http://eslint.org/docs/rules/no-empty))

**Value:** ``2``

### Disallow Empty Character Classes (no-empty-character-class)

**Key:** no-empty-character-class ([docs](http://eslint.org/docs/rules/no-empty-character-class))

**Value:** ``2``

### Disallow Assignment of the Exception Parameter (no-ex-assign)

**Key:** no-ex-assign ([docs](http://eslint.org/docs/rules/no-ex-assign))

**Value:** ``2``

### Disallow Extra Boolean Casts (no-extra-boolean-cast)

**Key:** no-extra-boolean-cast ([docs](http://eslint.org/docs/rules/no-extra-boolean-cast))

**Value:** ``0``

### Disallow Extra Parens (no-extra-parens)

**Key:** no-extra-parens ([docs](http://eslint.org/docs/rules/no-extra-parens))

**Value:** 
```javascript
[
  2,
  "functions"
]
```

### Disallow Extra Semicolons (no-extra-semi)

**Key:** no-extra-semi ([docs](http://eslint.org/docs/rules/no-extra-semi))

**Value:** ``2``

### Disallow Function Assignment (no-func-assign)

**Key:** no-func-assign ([docs](http://eslint.org/docs/rules/no-func-assign))

**Value:** ``2``

### Declarations in Program or Function Body (no-inner-declarations)

**Key:** no-inner-declarations ([docs](http://eslint.org/docs/rules/no-inner-declarations))

**Value:** ``2``

### Disallow Invalid Regular Expressions (no-invalid-regexp)

**Key:** no-invalid-regexp ([docs](http://eslint.org/docs/rules/no-invalid-regexp))

**Value:** ``2``

### No irregular whitespace (no-irregular-whitespace)

**Key:** no-irregular-whitespace ([docs](http://eslint.org/docs/rules/no-irregular-whitespace))

**Value:** ``2``

### Disallow negated left operand of `in` operator (no-negated-in-lhs)

**Key:** no-negated-in-lhs ([docs](http://eslint.org/docs/rules/no-negated-in-lhs))

**Value:** ``2``

### Disallow new require (no-new-require)

**Key:** no-new-require ([docs](http://eslint.org/docs/rules/no-new-require))

**Value:** ``0``

### Disallow Global Object Function Calls (no-obj-calls)

**Key:** no-obj-calls ([docs](http://eslint.org/docs/rules/no-obj-calls))

**Value:** ``2``

### Disallow string concatenation when using `__dirname` and `__filename` (no-path-concat)

**Key:** no-path-concat ([docs](http://eslint.org/docs/rules/no-path-concat))

**Value:** ``0``

### Disallow Spaces in Regular Expressions (no-regex-spaces)

**Key:** no-regex-spaces ([docs](http://eslint.org/docs/rules/no-regex-spaces))

**Value:** ``2``

### Disallow Sparse Arrays (no-sparse-arrays)

**Key:** no-sparse-arrays ([docs](http://eslint.org/docs/rules/no-sparse-arrays))

**Value:** ``2``

### Disallow Unreachable Code (no-unreachable)

**Key:** no-unreachable ([docs](http://eslint.org/docs/rules/no-unreachable))

**Value:** ``2``

### Require isNaN() (use-isnan)

**Key:** use-isnan ([docs](http://eslint.org/docs/rules/use-isnan))

**Value:** ``2``

### Validates JSDoc comments are syntactically correct (valid-jsdoc)

**Key:** valid-jsdoc ([docs](http://eslint.org/docs/rules/valid-jsdoc))

**Value:** ``2``

### Ensures that the results of typeof are compared against a valid string (valid-typeof)

**Key:** valid-typeof ([docs](http://eslint.org/docs/rules/valid-typeof))

**Value:** ``2``

### Avoid unexpected multiline expressions (no-unexpected-multiline)

**Key:** no-unexpected-multiline ([docs](http://eslint.org/docs/rules/no-unexpected-multiline))

**Value:** ``2``

### Limit Maximum Depth (max-depth)

**Key:** max-depth ([docs](http://eslint.org/docs/rules/max-depth))

**Value:** 
```javascript
[
  0,
  4
]
```

### Limit Maximum Length of Line (max-len)

**Key:** max-len ([docs](http://eslint.org/docs/rules/max-len))

**Value:** 
```javascript
[
  0,
  80,
  4
]
```

### Limit Maximum Number of Parameters (max-params)

**Key:** max-params ([docs](http://eslint.org/docs/rules/max-params))

**Value:** 
```javascript
[
  0,
  3
]
```

### Limit Maximum Number of Statements (max-statements)

**Key:** max-statements ([docs](http://eslint.org/docs/rules/max-statements))

**Value:** 
```javascript
[
  0,
  10
]
```

### Disallow Bitwise Operators (no-bitwise)

**Key:** no-bitwise ([docs](http://eslint.org/docs/rules/no-bitwise))

**Value:** ``0``

### Disallow ++ and -- (no-plusplus)

**Key:** no-plusplus ([docs](http://eslint.org/docs/rules/no-plusplus))

**Value:** ``0``

### Enforce Return After Callback (callback-return)

**Key:** callback-return ([docs](http://eslint.org/docs/rules/callback-return))

**Value:** ``0``

### Disallow Mixed Requires (no-mixed-requires)

**Key:** no-mixed-requires ([docs](http://eslint.org/docs/rules/no-mixed-requires))

**Value:** 
```javascript
[
  0,
  false
]
```

### Disallow Node.js modules (no-restricted-modules)

**Key:** no-restricted-modules ([docs](http://eslint.org/docs/rules/no-restricted-modules))

**Value:** ``0``

### Disallow Synchronous Methods (no-sync)

**Key:** no-sync ([docs](http://eslint.org/docs/rules/no-sync))

**Value:** ``0``

### Strict Mode Directives (strict)

**Key:** strict ([docs](http://eslint.org/docs/rules/strict))

**Value:** ``0``

### Disallow or enforce spaces inside of brackets (array-bracket-spacing)

**Key:** array-bracket-spacing ([docs](http://eslint.org/docs/rules/array-bracket-spacing))

**Value:** 
```javascript
[
  2,
  "never"
]
```

### Validate Indentation (indent)

**Key:** indent ([docs](http://eslint.org/docs/rules/indent))

**Value:** 
```javascript
[
  2,
  4
]
```

### Require Brace Style (brace-style)

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

### Require Camelcase (camelcase)

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

### Enforces spacing around commas (comma-spacing)

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

### Comma style (comma-style)

**Key:** comma-style ([docs](http://eslint.org/docs/rules/comma-style))

**Value:** 
```javascript
[
  2,
  "last"
]
```

### Disallow or enforce spaces inside of computed properties (computed-property-spacing)

**Key:** computed-property-spacing ([docs](http://eslint.org/docs/rules/computed-property-spacing))

**Value:** ``0``

### Require Consistent This (consistent-this)

**Key:** consistent-this ([docs](http://eslint.org/docs/rules/consistent-this))

**Value:** ``0``

### Require file to end with single newline (eol-last)

**Key:** eol-last ([docs](http://eslint.org/docs/rules/eol-last))

**Value:** ``2``

### Require Function Expressions to have a Name (func-names)

**Key:** func-names ([docs](http://eslint.org/docs/rules/func-names))

**Value:** ``0``

### Enforce Function Style (func-style)

**Key:** func-style ([docs](http://eslint.org/docs/rules/func-style))

**Value:** ``0``

### Limit minimum and maximum length for identifiers (id-length)

**Key:** id-length ([docs](http://eslint.org/docs/rules/id-length))

**Value:** ``0``

### Enforce Property Spacing (key-spacing)

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

### Enforce empty lines around comments (lines-around-comment)

**Key:** lines-around-comment ([docs](http://eslint.org/docs/rules/lines-around-comment))

**Value:** ``0``

### Enforce linebreak style (linebreak-style)

**Key:** linebreak-style ([docs](http://eslint.org/docs/rules/linebreak-style))

**Value:** ``0``

### Set Maximum Depth of Nested Callbacks (max-nested-callbacks)

**Key:** max-nested-callbacks ([docs](http://eslint.org/docs/rules/max-nested-callbacks))

**Value:** ``0``

### Require Constructors to Use Initial Caps (new-cap)

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

### Require Parens for Constructors (new-parens)

**Key:** new-parens ([docs](http://eslint.org/docs/rules/new-parens))

**Value:** ``2``

### Require or disallow an empty newline after variable declarations (newline-after-var)

**Key:** newline-after-var ([docs](http://eslint.org/docs/rules/newline-after-var))

**Value:** ``2``

### Disallow creation of dense arrays using the `Array` constructor (no-array-constructor)

**Key:** no-array-constructor ([docs](http://eslint.org/docs/rules/no-array-constructor))

**Value:** ``2``

### Disallow continue (no-continue)

**Key:** no-continue ([docs](http://eslint.org/docs/rules/no-continue))

**Value:** ``0``

### Disallows comments after code. Comments must come on their own lines (no-inline-comments)

**Key:** no-inline-comments ([docs](http://eslint.org/docs/rules/no-inline-comments))

**Value:** ``0``

### Disallow `if` as the Only Statement in an `else` Block (no-lonely-if)

**Key:** no-lonely-if ([docs](http://eslint.org/docs/rules/no-lonely-if))

**Value:** ``1``

### Disallow mixed spaces and tabs for indentation (no-mixed-spaces-and-tabs)

**Key:** no-mixed-spaces-and-tabs ([docs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs))

**Value:** ``2``

### Disallows multiple blank lines (no-multiple-empty-lines)

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

### Disallow Nested Ternaries (no-nested-ternary)

**Key:** no-nested-ternary ([docs](http://eslint.org/docs/rules/no-nested-ternary))

**Value:** ``2``

### Disallow the use of the Object constructor (no-new-object)

**Key:** no-new-object ([docs](http://eslint.org/docs/rules/no-new-object))

**Value:** ``2``

### Disallow Spaces in Function Calls (no-spaced-func)

**Key:** no-spaced-func ([docs](http://eslint.org/docs/rules/no-spaced-func))

**Value:** ``2``

### Disallow Ternary Operators (no-ternary)

**Key:** no-ternary ([docs](http://eslint.org/docs/rules/no-ternary))

**Value:** ``0``

### Disallow trailing spaces at the end of lines (no-trailing-spaces)

**Key:** no-trailing-spaces ([docs](http://eslint.org/docs/rules/no-trailing-spaces))

**Value:** ``2``

### Disallow Dangling Underscores in Identifiers (no-underscore-dangle)

**Key:** no-underscore-dangle ([docs](http://eslint.org/docs/rules/no-underscore-dangle))

**Value:** ``0``

### Disallow conditional expressions that can be expressed with simpler constructs (no-unneeded-ternary)

**Key:** no-unneeded-ternary ([docs](http://eslint.org/docs/rules/no-unneeded-ternary))

**Value:** ``0``

### Disallow or enforce spaces inside of curly braces in objects. (object-curly-spacing)

**Key:** object-curly-spacing ([docs](http://eslint.org/docs/rules/object-curly-spacing))

**Value:** ``0``

### Require or Disallow One Variable Declaration per Scope (one-var)

**Key:** one-var ([docs](http://eslint.org/docs/rules/one-var))

**Value:** 
```javascript
[
  2,
  "never"
]
```

### Operator Assignment Shorthand (operator-assignment)

**Key:** operator-assignment ([docs](http://eslint.org/docs/rules/operator-assignment))

**Value:** ``0``

### Operator Linebreak (operator-linebreak)

**Key:** operator-linebreak ([docs](http://eslint.org/docs/rules/operator-linebreak))

**Value:** ``0``

### Quoting Style for Property Names (quote-props)

**Key:** quote-props ([docs](http://eslint.org/docs/rules/quote-props))

**Value:** ``0``

### Enforce Quote Style (quotes)

**Key:** quotes ([docs](http://eslint.org/docs/rules/quotes))

**Value:** 
```javascript
[
  2,
  "single",
  "avoid-escape"
]
```

### Require IDs to match a pattern (id-match)

**Key:** id-match ([docs](http://eslint.org/docs/rules/id-match))

**Value:** ``0``

### Enforce padding within blocks (padded-blocks)

**Key:** padded-blocks ([docs](http://eslint.org/docs/rules/padded-blocks))

**Value:** 
```javascript
[
  2,
  "never"
]
```

### Enforce or Disallow Semicolons (semi)

**Key:** semi ([docs](http://eslint.org/docs/rules/semi))

**Value:** 
```javascript
[
  2,
  "always"
]
```

### Enforce spacing before and after semicolons (semi-spacing)

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

### Variable Sorting (sort-vars)

**Key:** sort-vars ([docs](http://eslint.org/docs/rules/sort-vars))

**Value:** ``0``

### Enforce spacing before and after keywords (keyword-spacing)

**Key:** keyword-spacing ([docs](http://eslint.org/docs/rules/keyword-spacing))

**Value:** ``2``

### Require Or Disallow Space Before Blocks (space-before-blocks)

**Key:** space-before-blocks ([docs](http://eslint.org/docs/rules/space-before-blocks))

**Value:** ``2``

### Require or disallow a space before function parenthesis (space-before-function-paren)

**Key:** space-before-function-paren ([docs](http://eslint.org/docs/rules/space-before-function-paren))

**Value:** 
```javascript
[
  2,
  "never"
]
```

### Disallow or enforce spaces inside of parentheses (space-in-parens)

**Key:** space-in-parens ([docs](http://eslint.org/docs/rules/space-in-parens))

**Value:** ``0``

### Require Spaces Around Infix Operators (space-infix-ops)

**Key:** space-infix-ops ([docs](http://eslint.org/docs/rules/space-infix-ops))

**Value:** ``2``

### Require or disallow spaces before/after unary operators (space-unary-ops)

**Key:** space-unary-ops ([docs](http://eslint.org/docs/rules/space-unary-ops))

**Value:** ``2``

### Requires or disallows a whitespace (space or tab) beginning a comment (spaced-comment)

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

### Require Regex Literals to be Wrapped (wrap-regex)

**Key:** wrap-regex ([docs](http://eslint.org/docs/rules/wrap-regex))

**Value:** ``0``

### Enforce/Disallow Variable Initializations (init-declarations)

**Key:** init-declarations ([docs](http://eslint.org/docs/rules/init-declarations))

**Value:** ``0``

### Disallow Shadowing of Variables Inside of catch (no-catch-shadow)

**Key:** no-catch-shadow ([docs](http://eslint.org/docs/rules/no-catch-shadow))

**Value:** ``0``

### Disallow Variables Deletion (no-delete-var)

**Key:** no-delete-var ([docs](http://eslint.org/docs/rules/no-delete-var))

**Value:** ``2``

### Disallow Labels That Are Variables Names (no-label-var)

**Key:** no-label-var ([docs](http://eslint.org/docs/rules/no-label-var))

**Value:** ``0``

### Disallow Shadowing (no-shadow)

**Key:** no-shadow ([docs](http://eslint.org/docs/rules/no-shadow))

**Value:** ``2``

### Disallow Shadowing of Restricted Names (no-shadow-restricted-names)

**Key:** no-shadow-restricted-names ([docs](http://eslint.org/docs/rules/no-shadow-restricted-names))

**Value:** ``2``

### Disallow Unused Variables (no-unused-vars)

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

### Disallow Early Use (no-use-before-define)

**Key:** no-use-before-define ([docs](http://eslint.org/docs/rules/no-use-before-define))

**Value:** ``2``

### Require parens in arrow function arguments (arrow-parens)

**Key:** arrow-parens ([docs](http://eslint.org/docs/rules/arrow-parens))

**Value:** ``0``

### Require space before/after arrow function's arrow (arrow-spacing)

**Key:** arrow-spacing ([docs](http://eslint.org/docs/rules/arrow-spacing))

**Value:** ``0``

### Verify calls of `super()` in constructors (constructor-super)

**Key:** constructor-super ([docs](http://eslint.org/docs/rules/constructor-super))

**Value:** ``0``

### Enforce spacing around the * in generator functions (generator-star-spacing)

**Key:** generator-star-spacing ([docs](http://eslint.org/docs/rules/generator-star-spacing))

**Value:** ``0``

### Disallow modifying variables of class declarations (no-class-assign)

**Key:** no-class-assign ([docs](http://eslint.org/docs/rules/no-class-assign))

**Value:** ``0``

### Disallow modifying variables that are declared using `const` (no-const-assign)

**Key:** no-const-assign ([docs](http://eslint.org/docs/rules/no-const-assign))

**Value:** ``2``

### Disallow use of `this`/`super` before calling `super()` in constructors. (no-this-before-super)

**Key:** no-this-before-super ([docs](http://eslint.org/docs/rules/no-this-before-super))

**Value:** ``0``

### require `let` or `const` instead of `var` (no-var)

**Key:** no-var ([docs](http://eslint.org/docs/rules/no-var))

**Value:** ``2``

### Require Object Literal Shorthand Syntax (object-shorthand)

**Key:** object-shorthand ([docs](http://eslint.org/docs/rules/object-shorthand))

**Value:** ``0``

### Suggest using `const` (prefer-const)

**Key:** prefer-const ([docs](http://eslint.org/docs/rules/prefer-const))

**Value:** ``2``

### Suggest using the spread operator instead of `.apply()`. (prefer-spread)

**Key:** prefer-spread ([docs](http://eslint.org/docs/rules/prefer-spread))

**Value:** ``0``

### Suggest using Reflect methods where applicable (prefer-reflect)

**Key:** prefer-reflect ([docs](http://eslint.org/docs/rules/prefer-reflect))

**Value:** ``0``

### Disallow generator functions that do not have `yield` (require-yield)

**Key:** require-yield ([docs](http://eslint.org/docs/rules/require-yield))

**Value:** ``0``

## License
MIT © 2016 Gergely Kovács (gg.kovacs@gmail.com)
