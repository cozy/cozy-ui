### InputGroup with an appended text

```jsx
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

```jsx
import InputGroup from 'cozy-ui/transpiled/react/InputGroup';
import Input from 'cozy-ui/transpiled/react/Input';
import Typography from "cozy-ui/transpiled/react/Typography";
<form>
  <div>
    <InputGroup prepend={<Typography className="u-pl-1" variant="h6">text</Typography>}>
      <Input placeholder="Placeholder" />
    </InputGroup>
  </div>
</form>
```

### InputGroup with an appended input

You will need to set a width to the side component, with a utility class for example.

```jsx
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

```jsx
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

```jsx
import InputGroup from 'cozy-ui/transpiled/react/InputGroup';
import Input from 'cozy-ui/transpiled/react/Input';
import Typography from "cozy-ui/transpiled/react/Typography";
<form>
  <div>
    <InputGroup fullwidth append={<Typography className="u-pr-1" variant="h6">text</Typography>}>
      <Input placeholder="Placeholder" />
    </InputGroup>
  </div>
</form>
```

### Errored InputGroup with an appended text

```jsx
import InputGroup from 'cozy-ui/transpiled/react/InputGroup';
import Input from 'cozy-ui/transpiled/react/Input';
import Typography from "cozy-ui/transpiled/react/Typography";
<form>
  <div>
    <InputGroup error append={<Typography className="u-pr-1" variant="h6">text</Typography>}>
      <Input placeholder="Placeholder" />
    </InputGroup>
  </div>
</form>
```

### InputGroup with a prepended text and a custom classname (border-radius)

```jsx
import InputGroup from 'cozy-ui/transpiled/react/InputGroup';
import Input from 'cozy-ui/transpiled/react/Input';
import Typography from "cozy-ui/transpiled/react/Typography";
<form>
  <div>
    <InputGroup prepend={<Typography className="u-pl-1" variant="h6">text</Typography>} className="u-bdrs-3">
      <Input placeholder="Placeholder" />
    </InputGroup>
  </div>
</form>
```
