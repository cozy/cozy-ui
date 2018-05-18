Empty (or error) view in a listing container

### Default

```
<div style="position: relative; transform: translateZ(0); height: 500px; display: flex;">
  <Empty icon="cozy" title="This list is empty" text="Try adding some content to this list"/>
</div>
```

### With some additional content

```
const { Button } = require('../Button');
<div style="position: relative; transform: translateZ(0); height: 500px; display: flex;">
  <Empty icon="cozy" title="An error occured" text="It's maybe nothing, just refresh to be sure">
    <Button label="Try refreshing" />
  </Empty>
</div>
```

