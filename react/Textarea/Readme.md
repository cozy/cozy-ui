#### Textarea for long text

```
import Textarea from './index';
<Textarea placeholder="Once upon a time…"></Textarea>
```

#### Textarea when there's an error

```
import Textarea from './index';
<Textarea error placeholder="Once upon a time, there was an error…"></Textarea>
```

#### Disabled Textarea

```
import Textarea from './index';
<Textarea disabled defaultValue="Don't edit me." />
```

#### Alternative textarea sizes

```
import Textarea from './index';
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

```
import Textarea from './index';
<div>
  <p>
    <Textarea placeholder="I'm full width" fullwidth></Textarea>
  </p>
</div>
```

### Props forwarding

`Textarea` forwards unknown props to the underlying `<textarea />` element.

```
import Textarea from './index';
<div>
  <Textarea name='my-field' />
</div>
```
