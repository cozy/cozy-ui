Show a spinner when loading something.

### Default

```jsx
import Spinner from 'cozy-ui/transpiled/react/Spinner';
<Spinner />
```

### Color

```jsx
import Spinner from 'cozy-ui/transpiled/react/Spinner';
<div>
  blue (default): <Spinner /> or <Spinner color='blue' />
  grey: <Spinner color='grey' />
  white: <Spinner color='white' />
  red: <Spinner color='red' />
</div>
```

### Placement

```jsx
import Spinner from 'cozy-ui/transpiled/react/Spinner';
<div>
  <Spinner noMargin={ true }/>
</div>
```

### Sizes

```jsx
import Spinner from 'cozy-ui/transpiled/react/Spinner';
<div>
  tiny: <Spinner size='tiny' /><br/>
  small: <Spinner size='small' /><br/>
  medium (default): <Spinner /> or <Spinner size='medium' /><br/>
  large: <Spinner size='large' /><br/>
  xlarge: <Spinner size='xlarge' /><br/>
  xxlarge: <Spinner size='xxlarge' />
</div>
```

### Message

When you use `loadingType`, `<Spinner />` needs to be in an `<I18n />` wrapper as it uses `t` function.

```jsx static
<Spinner loadingType="salut" />
```

```jsx
import Spinner from 'cozy-ui/transpiled/react/Spinner'
import I18n from 'cozy-ui/transpiled/react/providers/I18n'

;

<div>
  <I18n lang='en' dictRequire={() => ({
      loading: {
        helloWorld: 'Hello world !'
      }
    })}>
    <Spinner size='xxlarge' loadingType='helloWorld' />
  </I18n>
</div>
```
