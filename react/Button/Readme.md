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
const props = [{}, { disabled: true}, { busy: true }];
const themes = ['regular', 'danger', 'highlight', 'secondary', 'danger-outline', 'alpha'];

<div>
  {themes.map(theme =>
    <p key={theme}>{
      props.map(
        props => <Button key={theme + JSON.stringify(props)} label={theme} theme={theme} {...props} />
      )
    }</p>
  )}
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

- `narrow` to ignore Button's `min-width`
- `full` to enable full width

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
If you want a button with only an icon as content, you must set the `iconOnly` prop.

```
const { Button } = require('./index');
<div>
  <Button theme="danger" icon='delete' label='delete' />
  <Button theme="secondary" icon='dots' iconOnly label="See more" extension='narrow' />
</div>
```

You can also pass an Icon directly if you need more flexibility.

```
const { Button } = require('./index');
<div>
  <Button theme="danger" icon={ <Icon icon='delete' color='yellow' /> } label='delete' />
</div>
```

#### Create a round button with an icon

```
const { Button } = require('.');
<div>
  <Button icon='plus' label='Add' iconOnly round />
  <Button theme="secondary" icon='cross' label='Delete' iconOnly round />
</div>
```

### Subtle Buttons

Subtle buttons are buttons without background and borders, wich look "inverted" compared to the basic Buttons.

```
const { Button } = require('./index');
<div>
  <p>
    <Button subtle size='tiny' label='Tiny text' onClick={() => alert('Clicked on Tiny text')} />
    <Button subtle size='small' label='Small text' onClick={() => alert('Clicked on Small text')} />
    <Button subtle label='Regular text' onClick={() => alert('Clicked on Regular text')} />
    <Button subtle size='large' label='Large text' onClick={() => alert('Clicked on Large text')} />
  </p>
  <p>
    <Button subtle theme='secondary' label='Secondary theme' onClick={() => alert('Clicked on Secondary theme')} />
    <Button subtle theme='highlight' label='Highlight theme' onClick={() => alert('Clicked on Highlight theme')} />
    <Button subtle theme='danger' label='DANGER theme' onClick={() => alert('Clicked on DANGER theme')} />
  </p>
  <p>
    <Button subtle disabled label='Disabled'  onClick={() => alert('Clicked on Disabled')} />
  </p>
  <p>
    <Button subtle busy label='Busy'  onClick={() => alert('Clicked on Busy')} />
    <Button subtle busy theme='secondary' label='Busy secondary'  onClick={() => alert('Clicked on Busy secondary')} />
    <Button subtle busy theme='highlight' label='Busy highlight'  onClick={() => alert('Clicked on Busy highlight')} />
    <Button subtle busy theme='danger' label='Busy danger'  onClick={() => alert('Clicked on Busy danger')} />
  </p>
  <p>
    <Button subtle icon='cozy' label='Cozy' />
  </p>
  <p>
    <Button subtle icon='plus' label='Subtle Secondary Cozy' theme='secondary' />
  </p>
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
  <p>
    <ButtonLink subtle icon='cozy' href="https://cozy.io" target="_blank" label='Link to Cozy.io'/>
  </p>
</div>
```

### Changing the tag

Sometimes you want to change the tag or component used to render the Button. For example, when using `NavLinks` to get the `onClick` behavior.

You can pass `tag={NavLink}` and `NavLink` will be used. Any props that you
pass to the `Button` will be passed down to the component.

```
const Button = require('./').default
const NavLink = props => (
  <span onClick={() => alert(`Navigating to ${props.to}`)} {...props}>{
    props.children
  }</span>
);

<div>
  <Button tag={NavLink} to='/destination'>I'm a (false) NavLink</Button>
</div>
```
