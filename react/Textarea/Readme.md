#### Textarea for long text

```jsx
import Textarea from 'cozy-ui/transpiled/react/Textarea';
<Textarea placeholder="Once upon a time…"></Textarea>
```

#### Textarea when there's an error

```jsx
import Textarea from 'cozy-ui/transpiled/react/Textarea';
<Textarea error placeholder="Once upon a time, there was an error…"></Textarea>
```

#### Disabled Textarea

```jsx
import Textarea from 'cozy-ui/transpiled/react/Textarea';
<Textarea disabled defaultValue="Don't edit me." />
```

#### Alternative textarea sizes

```jsx
import Textarea from 'cozy-ui/transpiled/react/Textarea';
<div>
  <p>
    <Textarea placeholder="I'm have a tiny size" size="tiny"></Textarea>
  </p>
  <p>
    <Textarea placeholder="I'm have a medium size" size="medium"></Textarea>
  </p>
</div>
```

#### Full width textarea

```jsx
import Textarea from 'cozy-ui/transpiled/react/Textarea';
<div>
  <p>
    <Textarea placeholder="I'm full width" fullwidth></Textarea>
  </p>
</div>
```

### Props forwarding

`Textarea` forwards unknown props to the underlying `<textarea />` element.

```jsx
import Textarea from 'cozy-ui/transpiled/react/Textarea';
<div>
  <Textarea name='my-field' />
</div>
```

It will also forwards the [`ref`](https://reactjs.org/docs/refs-and-the-dom.html) property received by the `<Textarea />` to the underlying `<textarea />`. The calling component will then have access to a reference to the `<textarea />` DOM node.
