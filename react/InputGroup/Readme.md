### InputGroup with an appended text

```
const { Bold } = require('../Text');
const Input = require('../Input').default;
<form>
  <div>
    <InputGroup append={<Bold className="u-pr-1">text</Bold>}>
      <Input placeholder="Placeholder" />
    </InputGroup>
  </div>
</form>
```

### InputGroup with a prepended text

```
const { Bold } = require('../Text');
const Input = require('../Input').default;
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
const Input = require('../Input').default;
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
const SelectBox = require('../SelectBox').default;
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
const { Bold } = require('../Text');
const Input = require('../Input').default;
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
const { Bold } = require('../Text');
const Input = require('../Input').default;
<form>
  <div>
    <InputGroup error append={<Bold className="u-pr-1">text</Bold>}>
      <Input placeholder="Placeholder" />
    </InputGroup>
  </div>
</form>
```
