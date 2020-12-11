Empty (or error) view in a listing container

### Default

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import Empty from 'cozy-ui/transpiled/react/Empty';
const styles = {
  empty: {
    position: 'relative',
    transform: 'translateZ(0)',
    height: '500px',
    display: 'flex'
  }
};

<MuiCozyTheme>
  <div style={styles.empty}>
    <Empty icon="cozy" title="This list is empty" text="Try adding some content to this list"/>
  </div>
</MuiCozyTheme>
```

### With some additional content

```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import Empty from 'cozy-ui/transpiled/react/Empty';
import Button from 'cozy-ui/transpiled/react/Button';
const styles = {
  empty: {
    position: 'relative',
    transform: 'translateZ(0)',
    height: '500px',
    display: 'flex'
  }
};

<MuiCozyTheme>
  <div style={styles.empty}>
    <Empty id='empty' icon="cozy" title="An error occured" text="It's maybe nothing, just refresh to be sure">
      <Button label="Try refreshing" />
    </Empty>
  </div>
</MuiCozyTheme>
```
