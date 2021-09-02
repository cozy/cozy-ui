Empty (or error) view in a listing container

### Default

```
import Empty from 'cozy-ui/transpiled/react/Empty';
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy';

const styles = {
  empty: {
    position: 'relative',
    transform: 'translateZ(0)',
    height: '500px',
    display: 'flex'
  }
};

<div style={styles.empty}>
  <Empty icon={CozyIcon} title="This list is empty" text="Try adding some content to this list"/>
</div>
```

### Without layout

```
import Empty from 'cozy-ui/transpiled/react/Empty';
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy';

<>
  <Empty icon={CozyIcon} layout={false} title="This list is empty" text="Try adding some content to this list"/>
</>
```

### With some additional content

```
import Empty from 'cozy-ui/transpiled/react/Empty';
import Button from 'cozy-ui/transpiled/react/Button';
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy';

const styles = {
  empty: {
    position: 'relative',
    transform: 'translateZ(0)',
    height: '500px',
    display: 'flex'
  }
};

<div style={styles.empty}>
  <Empty id='empty' icon={CozyIcon} title="An error occured" text="It's maybe nothing, just refresh to be sure">
    <Button className='u-mt-1' label="Try refreshing" />
  </Empty>
</div>
```

### With different sizes

```
import Empty from 'cozy-ui/transpiled/react/Empty';
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy';

<>
  <Empty icon={CozyIcon} layout={false} title="This list is empty" text="Try adding some content to this list"/>
  <Empty icon={CozyIcon} layout={false} iconSize="medium" title="This list is empty" text="Try adding some content to this list" />
  <Empty icon={CozyIcon} layout={false} iconSize="large" title="This list is empty" text="Try adding some content to this list" />
</>
```
