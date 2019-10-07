Show a spinner when loading something.

### Default

```
import Spinner from './index';
<Spinner />
```

### Color

```
import Spinner from './index';
<div>
  blue (default): <Spinner /> or <Spinner color='blue' />
  grey: <Spinner color='grey' />
  white: <Spinner color='white' />
  red: <Spinner color='red' />
</div>
```

### Placement

```
import Spinner from './index';
<div>
  <Spinner noMargin={ true }/>
</div>
```

### Sizes

```
import Spinner from './index';
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

```
import Spinner from './index';
import I18n from '../I18n';

<div>
  <I18n lang='en' dictRequire={() => {}}>
    <Spinner size='xxlarge' loadingType='hi' />
  </I18n>
</div>
```
