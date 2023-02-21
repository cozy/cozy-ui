# CSS Guidelines

## Syntax & Formatting

A few basic rules for syntax and formatting. A _linter_ and a _.editorconfig_ file are keeping a eye on the produced CSS to make sure it respects most of those rules but you should know them nevertheless.

* **Indentation must be done with 4 spaces**  
  _As defined in .editorconfig file_
* **2 blank lines between root levels**
* **1 blank line between nested ruleset**
* **Nesting must not exceed 3 levels** _(except pseudo-classes styles)_
* **Don’t use {}, : and ;** _as they are optionnal in Stylus_
* **80 character wide columns**  
  _Defined in the .editorconfig file but only supported by a few editors (Emacs, Vim, Atom, ReSharper and Rider)_
* **Multi-line CSS** _(exception for one-declaration ruleset)_
* **Declaration’s anatomy**
  * _additional selectors on new lines_
  * _properties and values on the same line_
  * _each declaration on its own new line_
  * _first declaration on a new line after selector_
  * _each declaration indented by one indent (so 4 spaces)_
  * _values must be aligned_
* **Declaration order should go from positioning to typography,** _such as :_

```
div
    // Positionning
    z-index  5
    position absolute
    top      0
    left     0

    // Box-model
    display    block
    box-sizing border-box
    width      60vw
    margin     0 auto

    // Borders and padding
    border        1px solid
    border-radius 50%
    padding       1rem

    // Colors
    background-color black
    color            white

    // Typo
    font-family MavenPro
    font-size   1rem
    line-height 1.5em
```

## Commenting

There's several type of comment available to you.

### Block Comments for sectioning

```css
/*------------------------------------*\
  #SECTION-TITLE
\*------------------------------------*/
```

To be used on top a file and/or to section a long file.

### Note Comment

When you have several comments to do on a chunk of tricky code it may be better to Note Comments

```
$sprite-width:  920px;
$sprite-height: 212px;

/**
 * 1. Default icon size is 16px.
 * 2. Squash down the retina sprite to display at the correct size.
 */
.sprite {
  width:  16px; /* [1] */
  height: 16px; /* [1] */
  background-image: url(/img/sprites/main.png);
  background-size: ($sprite-width / 2 ) ($sprite-height / 2); /* [2] */
}
```

### Basic comments

As we use Stylus as preprocessor, I recommend the use of `//` for inline but CSS syntax is tolerated.

```
// Basic button
.btn
  display    inline-block
  background black
  color      white
```

You should always comment what you code, especially when what you coded isn't obvious, and nothing is obvious.

### KSS Comments

In order to populate the styleguide you need to use specific comments, KSS comments.
It basically, very basically, looks like that.

```
// Title
//
// Description
//
// Markup:
// <button class="button {{modifier_class}}">Button</button>
//
// modifier_class - class description
//
// Reference
```

Please follow the [KSS specs](https://github.com/kss-node/kss/blob/spec/SPEC.md) for more details.

## Naming Conventions

* **Classes should always written in lowercase**
* **All strings in classes are delimited with a hyphen (-)**

We use [SuitCSS naming convention](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) which in kinda like BEM but with a slightly different syntax.

## Selectors

* **Don’t target HTML element,** _especially if it’s a component of the UI_
* **Don’t use qualified selectors `input.btn` or `ul.list`** _so the style can be reused_
* **Don’t use key selector `*`, ever.**  
  _Only possible exception is to use it in order to normalise elements, and even so, it may not be the right approach._

Basically:

* _Select what you want explicitly, rather than relying on circumstance or coincidence. Good Selector Intent will rein in the reach and leak of your styles._
* _Write selectors for reusability, so that you can work more efficiently and reduce waste and repetition._
* _Do not nest selectors unnecessarily, because this will increase specificity and affect where else you can use your styles._
* _Do not qualify selectors unnecessarily, as this will impact the number of different elements you can apply styles to._
* _Keep selectors as short as possible, in order to keep specificity down and performance up._

## Specificity

* **Never, ever, use #IDs**
* **Don't nest selectors unnecessarily**  
  _As a rule, if a selector will work without it being nested then do not nest it._
* **Prefer a good naming convention for scoping than nesting selectors**  
  _If not possible, only use nested selectors for scoping then._
* **Do not use `!important`, ever.**
  _In many cases, the only possible use for `!important` is in utility classes but that’s pretty much it. If you feel you need it somewhere then you probably did something wrong elsewhere and you probably need a better scoping._
* **Avoid double classes `.foo.bar`** _as much as possible as it increases the specificity, most if the time for nothing._

## Principles

### The Open/Closed Principle

**The open/closed principle states that classes should be open for extension, but closed for modification.**

The idea here is to get an easily evolutive CSS while keeping a certain level of backward compatibility.  
Further reading:  <http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/>

### The DRY method

**Don't Repeat Yourself!**
Use `@extend` as much as possible to keep your code clean but do it well and smartly.
