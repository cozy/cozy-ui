Empty (or error) view in a listing container

### Default

```
<div style="position: relative; transform: translateZ(0); height: 500px; display: flex;">
  <Empty icon="https://cozy.io/fr/images/cozy-logo_white.png" title="This list is empty" text="Try adding some content to this list"/>
</div>
```

### With some additional content

```
const { Button } = require('../Button');
<div style="position: relative; transform: translateZ(0); height: 500px; display: flex;">
  <Empty icon="https://cozy.io/fr/images/cozy-logo_white.png" title="An error occured">
    <Button label="Try refreshing" />
  </Empty>
</div>
```

