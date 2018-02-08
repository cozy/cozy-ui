There's two kinds of Button at your disposal : `<Button />` & `<ButtonLink />`.
The First is a basic `<button>` for a click event, the second is a `<a>` a link.  
Both look exactly the same, they share the same `theme`, `className` & `onClick` parameters but `<Button>` has also: 

- `busy` that adds a spinner (default `false`)
- `disabled` that disable the click event (default `false`)

when `<ButtonLink>` has:
- `href` to add an URL (default `''`)
- `target` to pass the link's `target` value (default `''`)

#### Different themes:

```
const { Button } = require('./index');

<div>
  <p><Button>normal action</Button></p>
  <p><Button theme='danger'>erase or destroy</Button></p>
  <p><Button theme='highlight'>events communication</Button></p>
  <p><Button theme='secondary'>cancel or second option</Button></p>
  <p><Button theme='danger-outline'>erase but not in danger</Button></p>
</div>
```

#### Different sizes from the default one (tiny, small, large):

```
const { Button } = require('./index');

<div>
  <p><Button size='tiny'>Tiny</Button></p>
  <p><Button size='small'>Small</Button></p>
  <p><Button>Normal</Button></p>
  <p><Button size='large'>Large</Button></p>
</div>
```

### Different width, `narrow` to ignore Button's `min-width`  & `full` to enable full width:

```
const { Button } = require('./index');

<div>
  <p><Button>Normal</Button></p>
  <p><Button extension="narrow">N…</Button></p>
  <p><Button extension="full">Full width</Button></p>
</div>
```

#### Add a action on click

```
const { Button } = require('./index');
<Button theme='danger-outline' onClick={ () => alert('yay !') }>Show alert</Button>
```

#### When loading, put a spinner

```
const { Button } = require('./index');
<Button busy>Loading</Button>
```

```
const { Button } = require('./index');
initialState = { busy:false };
<Button onClick={() => {setState(state => ({busy: !state.busy}))}} busy={state.busy}>Toggle busy</Button>
```

#### To disable a button

```
const { Button } = require('./index');
<Button disabled>Loading</Button>
```

#### Create a button with an icon

The color of the icon is taken care of by the button style, there's no need to specify it.

```
const { Button } = require('./index');
const icons = require('../../src/icons');
<div>
  <Button theme="danger"><Icon icon={ icons['delete'] } />delete</Button>
</div>
```

#### Using Links

```
const { ButtonLink } = require('./index');
<div>
  <p>
    <ButtonLink size="tiny" href="https://cozy.io" target="_blank">Link to Cozy.io</ButtonLink>
  </p>
  <p>
    <ButtonLink size="small" href="https://cozy.io" target="_blank">Link to Cozy.io</ButtonLink>
  </p>
  <p>
    <ButtonLink href="https://cozy.io" target="_blank">Link to Cozy.io</ButtonLink>
  </p>
  <p>
    <ButtonLink size="large" href="https://cozy.io" target="_blank">Link to Cozy.io</ButtonLink>
  </p>
</div>
```
