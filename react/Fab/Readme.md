See [Material UI documentation](https://material-ui.com/components/floating-action-button/) to learn more about Floating Action Button (Fab).

### Default

```jsx
import Fab from 'cozy-ui/transpiled/react/Fab'
import Icon from 'cozy-ui/transpiled/react/Icon'
import PlusIcon from 'cozy-ui/transpiled/react/Icons/Plus'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Variants from 'cozy-ui/docs/components/Variants'

const props = [{ color: 'primary' }, { color: 'inherit', default: true }]
const initialVariants = [{ small: false, medium: false, large: true }]

;
<Variants initialVariants={initialVariants} radio screenshotAllVariants>
  {variant => (
    <Grid container>
      {props.map(prop =>
        <Grid item xs={12} sm={6} className="u-mb-1" key={Object.values(prop)[0]}>
          <Stack spacing="s">
            <div className="u-mb-half u-mt-1">{prop.color} {prop.default && '(default)'}</div>
            <Fab aria-label="add" {...prop} size={Object.keys(variant).find(key => variant[key])}>
              <Icon icon={PlusIcon} />
            </Fab>
          </Stack>
        </Grid>
      )}
      {props.map(prop =>
        <Grid item xs={12} sm={6} className="u-mb-1" key={Object.values(prop)[0]}>
          <Stack spacing="s">
            <Fab aria-label="add" {...prop} variant="extended" size={Object.keys(variant).find(key => variant[key])}>
              <Icon icon={PlusIcon} className='u-mr-half' />
              Extended
            </Fab>
          </Stack>
        </Grid>
      )}
    </Grid>
  )}
</Variants>
```

### Disabled colors

```jsx
import Fab from 'cozy-ui/transpiled/react/Fab'
import Icon from 'cozy-ui/transpiled/react/Icon'
import PlusIcon from 'cozy-ui/transpiled/react/Icons/Plus'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Stack from 'cozy-ui/transpiled/react/Stack'

const props = [{ color: 'primary' }, { color: 'inherit', default: true }]

;

<Grid container>
  {props.map(prop =>
    <Grid item xs={12} sm={6} className="u-mb-1" key={Object.values(prop)[0]}>
      <Stack spacing="s">
        <div className="u-mb-half u-mt-1">{prop.color} {prop.default && '(default)'}</div>
        <Fab aria-label="add" {...prop} disabled>
          <Icon icon={PlusIcon} />
        </Fab>
      </Stack>
    </Grid>
  )}
  {props.map(prop =>
    <Grid item xs={12} sm={6} className="u-mb-1" key={Object.values(prop)[0]}>
      <Stack spacing="s">
        <Fab aria-label="add" {...prop} disabled variant="extended">
          <Icon icon={PlusIcon} className='u-mr-half' />
          Extended
        </Fab>
      </Stack>
  </Grid>
  )}
</Grid>
```

### ExtendableFab

To increase discoverability, the FAB can be extended at first and then changed to standard when scrolling. The ExtendableFab will only revert to extended when the user has returned on to the top of the page.

```jsx
import { ExtendableFab } from 'cozy-ui/transpiled/react/Fab'
import PlusIcon from 'cozy-ui/transpiled/react/Icons/Plus'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import {useRef} from 'react'

const Demo = ({ onClick, className }) => {
  const box = useRef(null)

  return (
    <div className="u-h-4 u-ov-scroll" style={{border: '2px dotted red'}} ref={box}>
      <ExtendableFab
        label="Add"
        follow={box}
        color="primary"
        className="u-mb-1"
        icon={PlusIcon}
        style={{position: 'sticky', top: 16, left: 16}}
      />
      <div className="u-p-1">Scroll Horizontally</div>
      <div className="u-h-8"></div>
    </div>
  )
};

<DemoProvider>
  <Demo />
</DemoProvider>
```

**Note:**

The element to follow for scrolling changes according to the screen size in general in Cozy applications. On mobile, the window should be targeted otherwhise it depends on the dom element that has a scroll overflow.
