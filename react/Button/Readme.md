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
  <p><Button label='normal action' /></p>
  <p><Button theme='danger' label='erase or destroy' /></p>
  <p><Button theme='highlight' label='events communication' /></p>
  <p><Button theme='secondary' label='cancel or second option' /></p>
</div>
```

#### Different sizes from the default one (tiny, small, large):

```
const { Button } = require('./index');

<div>
  <p><Button size='tiny' label='Tiny' /></p>
  <p><Button size='small' label='Small' /></p>
  <p><Button label='Normal' /></p>
  <p><Button size='large' label='Large' /></p>
</div>
```

### Different width, `narrow` to ignore Button's `min-width`  & `full` to enable full width:

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

#### To disable a button

```
const { Button } = require('./index');
<Button disabled label='Loading' />
```

#### Create a button with an icon

The color of the icon is taken care of by the button style, there's no need to specify it.

```
const { Button } = require('./index');
const icons = require('../../src/icons');
<div>
  <Button theme="danger" icon={ icons['delete'] } label='delete' />
  <Button theme="secondary" icon={ icons['dots'] } extension='narrow' />
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
