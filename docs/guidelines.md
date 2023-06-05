# Guidelines

These guidelines are mainly dedicated to cozy-ui designers and maintainers. 

# New component

We want to stay as close as possible to MUI components and properties. When we create a new component, we have 4 cases.

1. A MUI component exists and has every properties and values we want.

=> All right, we just reexport the MUI component.

2. A MUI component exists but misses some values we want.

=> We add support for missing values to the MUI component.

e.g. We want a Button component with 3 variants _contained_, _outlined_ and _ghost_. MUIButton has only _contained_ and _outlined_ variants. So we create a Button component using MUIButton where we add support for _ghost_ variant.

3. A MUI component exists but misses some properties we want.

=> We add a new property to the MUI component.

e.g. We want a Fab component with 2 variants _circular_ and _extended_ and we want that these variants can be _filled_ or _outlined_. MUIButton has only _circular_ and _outlined_ variants and no concept of _filled_ or _outlined_. We do not force _filled_ or _outlined_ in variants because they are not the same. We add a new property which can be _filled_ or _outlined_.

4. Nothing exists on MUI

=> We create a new component from scratch.

Generally speaking :

* _color_ prop changes color (and not shape). Possible values : _primary_, _secondary_, _success_, _error_, _warning_, _info_
* _variant_ prop changes shape (and not color). Possible values : _filled_, _outlined_, _ghost_, …
