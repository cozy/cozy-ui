There's two kinds of Button at your disposal : `<Button />` & `<ButtonLink />`.
The first is a basic `<button>` for a click event, the second is a `<a>`, a link.
Both look exactly the same, they share the same `className`, `disabled`, `onClick` & `theme` parameters but `<Button>` has also:

- `busy` that adds a spinner (default `false`)
- `type`, eg. `submit` or `reset` (default `submit`)

when `<ButtonLink>` has:
- `href` to add an URL (default `''`)
- `target` to pass the link's `target` value (default `''`)

#### Themes

```
const { Button } = require('./index');

<div>
  <p><Button label='normal action' /></p>
  <p><Button theme='danger' label='erase or destroy' /></p>
  <p><Button theme='highlight' label='events communication' /></p>
  <p><Button theme='secondary' label='cancel or second option' /></p>
</div>
```

#### Sizes

```
const { Button } = require('./index');

<div>
  <p><Button size='tiny' label='Tiny' /></p>
  <p><Button size='small' label='Small' /></p>
  <p><Button label='Normal' /></p>
  <p><Button size='large' label='Large' /></p>
</div>
```

#### Width

* `narrow` to ignore Button's `min-width`
* `full` to enable full width

```
const { Button } = require('./index');

<div>
  <p><Button label='Normal'/></p>
  <p><Button extension="narrow" label='N…'/></p>
  <p><Button extension="full" label='Full width'/></p>
</div>
```

#### Add a action on click

```
const { Button } = require('./index');
<Button theme='danger-outline' onClick={ () => alert('yay !') } label='Show alert' />
```

#### When loading, put a spinner

```
const { Button } = require('./index');
<Button busy label='Loading'/>
```

```
const { Button } = require('./index');
initialState = { busy:false };
<Button onClick={() => {setState(state => ({busy: !state.busy}))}} busy={state.busy} label='Toggle busy'/>
```

#### Disable a button

```
const { Button, ButtonLink } = require('./index');
<div>
  <Button disabled label='Loading' />
  <ButtonLink disabled href='http://cozy.io' label='Go to Cozy website' />
</div>
```

#### Create a button with an icon

The color of the icon is taken care of by the button style, there's no need to specify it.

```
const { Button } = require('./index');
<div>
  <Button theme="danger" icon='delete' label='delete' />
  <Button theme="secondary" icon='dots' extension='narrow' />
</div>
```

You can also pass an Icon directly if you need more flexibility.

```
const { Button } = require('./index');
<div>
  <Button theme="danger" icon={ <Icon icon='delete' color='yellow' /> } label='delete' />
</div>
```

#### Using Links

```
const { ButtonLink } = require('./index');
<div>
  <p>
    <ButtonLink size="tiny" href="https://cozy.io" target="_blank" label='Link to Cozy.io'/>
  </p>
  <p>
    <ButtonLink size="small" href="https://cozy.io" target="_blank" label='Link to Cozy.io'/>
  </p>
  <p>
    <ButtonLink href="https://cozy.io" target="_blank" label='Link to Cozy.io'/>
  </p>
  <p>
    <ButtonLink size="large" href="https://cozy.io" target="_blank" label='Link to Cozy.io'/>
  </p>
</div>
```
