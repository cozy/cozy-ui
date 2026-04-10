# Cozy UI CSS Classes Reference

Complete reference for CSS utility classes and component-specific classes in cozy-ui.

## Import

### In HTML

```html
<link rel="stylesheet" href="cozy-ui/dist/cozy-ui.min.css">
```

### In Stylus

```stylus
@import 'cozy-ui/stylus/settings'
@import 'cozy-ui/stylus/mixins'
```

---

## Utility Classes

### Spacing Utilities

**Padding (all sizes: 0, 025, 05, 1, 125, 15, 2, 25, 3, 4, 5, 6, 7, 8)**

```css
.u-p-{size}      /* padding all sides */
.u-pt-{size}     /* padding top */
.u-pb-{size}     /* padding bottom */
.u-pl-{size}     /* padding left */
.u-pr-{size}     /* padding right */
.u-px-{size}     /* padding left + right */
.u-py-{size}     /* padding top + bottom */
.u-pv-{size}     /* padding vertical (same as py) */
.u-ph-{size}     /* padding horizontal (same as px) */
```

**Margin (all sizes: 0, 025, 05, 1, 125, 15, 2, 25, 3, 4, 5, 6, 7, 8)**

```css
.u-m-{size}      /* margin all sides */
.u-mt-{size}     /* margin top */
.u-mb-{size}     /* margin bottom */
.u-ml-{size}     /* margin left */
.u-mr-{size}     /* margin right */
.u-mx-{size}     /* margin left + right */
.u-my-{size}     /* margin top + bottom */
.u-mv-{size}     /* margin vertical */
.u-mh-{size}     /* margin horizontal */
```

**Responsive (breakpoint suffixes: -md, -lg, -xl)**

```css
.u-p-{size}-{breakpoint}    /* responsive padding */
.u-m-{size}-{breakpoint}    /* responsive margin */
```

---

### Typography Utilities

**Font Size**

```css
.u-fz-tiny      /* 12px */
.u-fz-xsmall    /* 13px */
.u-fz-small     /* 14px */
.u-fz-medium    /* 16px */
.u-fz-large     /* 18px */
```

**Line Height**

```css
.u-lh-tiny      /* line-height: 1 */
.u-lh-xsmall    /* line-height: 1.1 */
.u-lh-small     /* line-height: 1.2 */
.u-lh-medium    /* line-height: 1.3 */
.u-lh-large     /* line-height: 1.4 */
.u-lh-xlarge    /* line-height: 1.5 */
```

**Text Alignment**

```css
.u-ta-left      /* text-align: left */
.u-ta-right     /* text-align: right */
.u-ta-center    /* text-align: center */
.u-ta-justify   /* text-align: justify */
```

**Font Style**

```css
.u-fs-normal    /* font-style: normal */
.u-fs-italic     /* font-style: italic */
```

**Font Weight**

```css
.u-fw-normal    /* font-weight: 400 */
.u-fw-bold      /* font-weight: 700 */
```

**Text Overflow**

```css
.u-ellipsis           /* text-overflow: ellipsis (single line) */
.u-midellipsis        /* mid ellipsis for long strings */
.u-breakword          /* word-break: break-word */
```

**Links**

```css
.u-link         /* link color and hover state */
```

---

### Color Utilities

**Text Colors**

```css
.u-primary      /* primary text color */
.u-secondary    /* secondary text color */
.u-error         /* error text color */
.u-success      /* success text color */
.u-warning      /* warning text color */
.u-info         /* info text color */
.u-white         /* white text */
.u-black         /* black text */
```

**Background Colors**

```css
.u-bg-transparent    /* background: transparent */
.u-bg-primary        /* primary background */
.u-bg-secondary      /* secondary background */
.u-bg-error          /* error background */
.u-bg-success        /* success background */
.u-bg-warning        /* warning background */
.u-bg-info           /* info background */
```

---

### Opacity Utilities

```css
.u-o-0      /* opacity: 0% */
.u-o-025    /* opacity: 2.5% */
.u-o-05     /* opacity: 5% */
.u-o-10     /* opacity: 10% */
.u-o-20     /* opacity: 20% */
.u-o-30     /* opacity: 30% */
.u-o-40     /* opacity: 40% */
.u-o-50     /* opacity: 50% */
.u-o-60     /* opacity: 60% */
.u-o-70     /* opacity: 70% */
.u-o-80     /* opacity: 80% */
.u-o-90     /* opacity: 90% */
.u-o-100    /* opacity: 100% */
```

---

### Elevation (Shadows)

```css
.u-elevation-0    /* no shadow */
.u-elevation-1    /* elevation level 1 */
.u-elevation-2    /* elevation level 2 */
.u-elevation-3    /* elevation level 3 */
```

---

### Visual Effects

```css
.u-shake               /* shake animation */
.u-filter-gray-100     /* grayscale filter 100% */
.u-visuallyhidden      /* visually hidden but accessible */
```

---

## Component Classes

### Field Components

```css
.o-field               /* field container */
.o-field-inline        /* inline field layout */
```

### Double Field

```css
.c-double-field                    /* double field container */
.c-double-field--with-button       /* double field with button variant */
.c-double-field-label               /* label element */
.c-double-field-button              /* button element */
.c-double-field-wrapper             /* wrapper element */
.c-double-field-input               /* input element */
```

### Buttons

```css
.c-btn-alert                /* alert button base */
.c-btn-alert--error         /* error alert button */
.c-btn-alert--info          /* info alert button */
.c-btn-alert--success       /* success alert button */
.c-btn-client               /* client button */
.c-btn-client-mobile        /* mobile client button variant */
```

### Select

```css
.c-select               /* select component */
.c-select--tiny         /* tiny variant */
.c-select--medium       /* medium variant */
.c-select--fullwidth    /* full width variant */
```

### Table

```css
.c-table-head            /* table head */
.c-table-body            /* table body */
.c-table-row             /* table row */
.c-table-row-head        /* header row */
.c-table-cell            /* table cell */
.c-table-cell--primary   /* primary cell variant */
.c-table-header          /* table header */
.c-table-divider         /* divider line */
.c-table-ellipsis        /* ellipsis in cell */
```

---

## Theme Classes

```css
.TwakeTheme--light    /* light theme */
.TwakeTheme--dark     /* dark theme */
```

---

## Animation Keyframes

```css
@keyframes fade-in
@keyframes fade-out
@keyframes slide-up
@keyframes slide-down
@keyframes shake
```

---

## CSS Variables

```css
--primary-color           /* primary brand color */
--secondary-color         /* secondary brand color */
--error-color             /* error color */
--success-color           /* success color */
--warning-color           /* warning color */
--info-color              /* info color */
--text-primary            /* primary text color */
--text-secondary          /* secondary text color */
--bg-primary              /* primary background */
--bg-secondary            /* secondary background */
```
