⚠️  This `<Button />` is going to be deprecated, please use [Buttons](#/Buttons) instead.

There's two kinds of Button at your disposal : `<Button />` and `<ButtonLink />`.

The first is a basic `<button>` for a click event, the second is a `<a>`, a link.
Both look exactly the same, they share the same `className`, `disabled`, `onClick` and `theme` parameters but `<Button>` has also:

* `busy` that adds a spinner (default `false`)
* `type`, eg. `submit` or `reset` (default `submit`)

when `<ButtonLink>` has:

* `href` to add an URL (default `''`)
* `target` to pass the link's `target` value (default `''`)

#### Themes

```jsx
import Button from 'cozy-ui/transpiled/react/deprecated/Button';
const props = [{}, { disabled: true}, { busy: true }];
const themes = ['regular', 'ghost', 'danger', 'highlight', 'secondary', 'danger-outline', 'alpha', 'text'];

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

```jsx
import Button from 'cozy-ui/transpiled/react/deprecated/Button';

<div>
  <p><Button size='tiny' label='Tiny' /></p>
  <p><Button size='small' label='Small' /></p>
  <p><Button size='normal' label='Normal' /></p>
  <p><Button label='Normal' /></p>
  <p><Button size='large' label='Large' /></p>
</div>
```

#### Extension

* `narrow` to ignore Button's `min-width`
* `full` to enable full width

```jsx
import Button from 'cozy-ui/transpiled/react/deprecated/Button';
import Stack from 'cozy-ui/transpiled/react/Stack';

<Stack>
  <Button className='u-db' label='Normal'/>
  <Button className='u-db' extension="narrow" label='N…'/>
  <Button className='u-db' extension="full" label='Full width'/>
</Stack>
```

#### Text alignment

* `left` to align the label to the left
* `right` to align the label to the right
* `center` to center the label (default)

```jsx
import Button from 'cozy-ui/transpiled/react/deprecated/Button';

<div>
  <p><Button extension="full" label='Default (center)'/></p>
  <p><Button extension="full" align="left" label='Left'/></p>
  <p><Button extension="full" align="right" label='Right'/></p>
  <p><Button extension="full" align="center" label='Center'/></p>
</div>
```

#### Extra right content

```jsx
import Button from 'cozy-ui/transpiled/react/deprecated/Button';
import Chip from 'cozy-ui/transpiled/react/deprecated/Chip';

<div>
  <p><Button extension="full" size="large" label='Label' extraRight={<Chip size="small" theme="primary" className="u-m-0">1/2</Chip>} /></p>
</div>
```

#### Add a action on click

```jsx
import Button from 'cozy-ui/transpiled/react/deprecated/Button';
<Button theme='danger-outline' onClick={ () => alert('yay !') } label='Show alert' />
```

#### When loading, put a spinner

```jsx
import Button from 'cozy-ui/transpiled/react/deprecated/Button';
<Button busy label='Loading'/>
```

```jsx
import Button from 'cozy-ui/transpiled/react/deprecated/Button';
initialState = { busy:false };
<Button onClick={() => {setState(state => ({busy: !state.busy}))}} busy={state.busy} label='Toggle busy'/>
```

#### Disable a button

```jsx
import Button, { ButtonLink } from 'cozy-ui/transpiled/react/deprecated/Button';
<div>
  <Button disabled label='Loading' />
  <ButtonLink disabled href='http://cozy.io' label='Go to Cozy website' />
</div>
```

#### Create a button with an icon

The color of the icon is taken care of by the button style, there's no need to specify it.
If you want a button with only an icon as content, you must set the `iconOnly` prop.

```jsx
import Button from 'cozy-ui/transpiled/react/deprecated/Button';
import { Dots, Trash } from '@linagora/twake-icons'
<div>
  <Button theme="danger" icon={Trash} label='delete' />
  <Button theme="secondary" icon={Dots} iconOnly label="See more" extension='narrow' />
</div>
```

You can also pass an Icon directly if you need more flexibility.

```jsx
import Button from 'cozy-ui/transpiled/react/deprecated/Button';
import { Icon, Trash } from '@linagora/twake-icons'
<div>
  <Button theme="danger" icon={ <Icon icon={Trash} color='yellow' /> } label='delete' />
</div>
```

#### Create a round button with an icon

```jsx
import Button from 'cozy-ui/transpiled/react/deprecated/Button';
import { Cross, Plus } from '@linagora/twake-icons'
<div>
  <Button icon={Plus} label='Add' iconOnly round />
  <Button theme="secondary" icon={Cross} label='Delete' iconOnly round />
</div>
```

### Subtle Buttons

Subtle buttons are buttons without background and borders, wich look "inverted" compared to the basic Buttons.

```jsx
import Button from 'cozy-ui/transpiled/react/deprecated/Button';
import { Cozy, Plus } from '@linagora/twake-icons'
<div>
  <p>
    <Button subtle icon={Plus} size='tiny' label='Tiny text' onClick={() => alert('Clicked on Tiny text')} />
    <Button subtle icon={Plus} size='small' label='Small text' onClick={() => alert('Clicked on Small text')} />
    <Button subtle icon={Plus} label='Regular text' onClick={() => alert('Clicked on Regular text')} />
    <Button subtle icon={Plus} size='large' label='Large text' onClick={() => alert('Clicked on Large text')} />
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
    <Button subtle icon={Cozy} label='Cozy' />
  </p>
  <p>
    <Button subtle icon={Plus} label='Subtle Secondary Cozy' theme='secondary' />
  </p>
</div>
```

#### Using Links

```jsx
import { ButtonLink } from 'cozy-ui/transpiled/react/deprecated/Button';
import { Cozy } from '@linagora/twake-icons'
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
    <ButtonLink subtle icon={Cozy} href="https://cozy.io" target="_blank" label='Link to Cozy.io'/>
  </p>
</div>
```

### Changing the tag

Sometimes you want to change the tag or component used to render the Button. For example, when using `NavLinks` to get the `onClick` behavior.

You can pass `tag={NavLink}` and `NavLink` will be used. Any props that you
pass to the `Button` will be passed down to the component.

```jsx
import Button from 'cozy-ui/transpiled/react/deprecated/Button';
const NavLink = props => (
  <span onClick={() => alert(`Navigating to ${props.to}`)} {...props}>{
    props.children
  }</span>
);

<div>
  <Button tag={NavLink} to='/destination'>I'm a (false) NavLink</Button>
</div>
```
