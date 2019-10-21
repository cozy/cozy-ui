### Radio

```
import Radio from './index';
<form>
  <div>
    <Radio name="radioForm" value="radioValue1" label="This is a radio button" />
    <Radio name="radioForm" value="radioValue2" label="This is also a radio button" />
    <Radio style={{ background: 'cadetblue',  padding: '0.5rem', height: '3rem' }} name="radioForm" value="radioValue2" label="This is a radio button with a custom style" />
  </div>
</form>
```

### Radio when there's an error

```
import Radio from './index';
<div><Radio name="radioForm" value="radioValue1" label="This is a radio button" error /></div>
```

### Radio when disabled

```
import Radio from './index';
<div><Radio name="radioForm"value="radioValue1" label="This is a disabled radio button" disabled /></div>
```
