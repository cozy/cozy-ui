### InputGroup with an appended text

```
import InputGroup from 'cozy-ui/transpiled/react/InputGroup';
import Input from 'cozy-ui/transpiled/react/Input';
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
import InputGroup from 'cozy-ui/transpiled/react/InputGroup';
import { Bold } from 'cozy-ui/transpiled/react/Text';
import Input from 'cozy-ui/transpiled/react/Input';
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
import InputGroup from 'cozy-ui/transpiled/react/InputGroup';
import Input from 'cozy-ui/transpiled/react/Input';
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
import InputGroup from 'cozy-ui/transpiled/react/InputGroup';
import Input from 'cozy-ui/transpiled/react/Input';
import SelectBox from 'cozy-ui/transpiled/react/SelectBox';
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
import InputGroup from 'cozy-ui/transpiled/react/InputGroup';
import { Bold } from 'cozy-ui/transpiled/react/Text';
import Input from 'cozy-ui/transpiled/react/Input';
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
import InputGroup from 'cozy-ui/transpiled/react/InputGroup';
import { Bold } from 'cozy-ui/transpiled/react/Text';
import Input from 'cozy-ui/transpiled/react/Input';
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
import InputGroup from 'cozy-ui/transpiled/react/InputGroup';
import { Bold } from 'cozy-ui/transpiled/react/Text';
import Input from 'cozy-ui/transpiled/react/Input';
<form>
  <div>
    <InputGroup prepend={<Bold className="u-pl-1">text</Bold>} className="u-bdrs-3">
      <Input placeholder="Placeholder" />
    </InputGroup>
  </div>
</form>
```
