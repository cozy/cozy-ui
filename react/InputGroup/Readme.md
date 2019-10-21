### InputGroup with an appended text

```
import InputGroup from './index';
import { Bold } from '../Text';
import Input from '../Input';
<form>
  <div>
    <InputGroup append={<InputGroup.Unit>€</InputGroup.Unit>}>
      <Input placeholder="Placeholder" />
    </InputGroup>
  </div>
</form>
```

### InputGroup with a prepended text

```
import InputGroup from './index';
import { Bold } from '../Text';
import Input from '../Input';
<form>
  <div>
    <InputGroup prepend={<Bold className="u-pl-1">text</Bold>}>
      <Input placeholder="Placeholder" />
    </InputGroup>
  </div>
</form>
```

### InputGroup with an appended input

You will need to set a width to the side component, with a utility class for example.

```
import InputGroup from './index';
import Input from '../Input';
<form>
  <div>
    <InputGroup append={<Input placeholder="@domain.tld" className="u-w-4"/>}>
      <Input placeholder="Email" />
    </InputGroup>
  </div>
</form>
```

### InputGroup with an appended select

You will need to set a width to the side component, with a utility class for example.

```
import InputGroup from './index';
import Input from '../Input';
import SelectBox from '../SelectBox';
const options = [
  { value: 'cozy.io', label: '.cozy.io' },
  { value: 'cozycloud.cc', label: '.cozycloud.cc' }
];
<form>
  <div>
    <InputGroup append={<SelectBox inset options={options} className="u-w-4" />}>
      <Input placeholder="URL" />
    </InputGroup>
  </div>
</form>
```

### Full width InputGroup with an appended text

```
import InputGroup from './index';
import { Bold } from '../Text';
import Input from '../Input';
<form>
  <div>
    <InputGroup fullwidth append={<Bold className="u-pr-1">text</Bold>}>
      <Input placeholder="Placeholder" />
    </InputGroup>
  </div>
</form>
```

### Errored InputGroup with an appended text

```
import InputGroup from './index';
import { Bold } from '../Text';
import Input from '../Input';
<form>
  <div>
    <InputGroup error append={<Bold className="u-pr-1">text</Bold>}>
      <Input placeholder="Placeholder" />
    </InputGroup>
  </div>
</form>
```

### InputGroup with a prepended text and a custom classname (border-radius)

```
const { Bold } = require('../Text');
const Input = require('../Input').default;
<form>
  <div>
    <InputGroup prepend={<Bold className="u-pl-1">text</Bold>} className="u-bdrs-3">
      <Input placeholder="Placeholder" />
    </InputGroup>
  </div>
</form>
```
