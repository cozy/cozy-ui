Displays content coming up from the bottom of the screen.

```jsx
import BottomDrawer from 'cozy-ui/transpiled/react/deprecated/BottomDrawer'
import Paper from 'cozy-ui/transpiled/react/Paper'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Typography from "cozy-ui/transpiled/react/Typography"
import Variants from 'cozy-ui/docs/components/Variants'

const initialState = { isDrawerDisplayed: isTesting() }
const initialVariants = [{ longText: false }]

const showDrawer = () => setState({ isDrawerDisplayed: true });
const hideDrawer = () => setState({ isDrawerDisplayed: false })

;

<Variants initialVariants={initialVariants}>
  {variant => (
    <>
      <Button variant="ghost" size="small" onClick={showDrawer} label="Open drawer" />

      {state.isDrawerDisplayed &&
        <BottomDrawer onClose={hideDrawer}>
          <Paper className="u-p-1" style={{ borderRadius: '1rem 1rem 0 0' }}>
            <Typography variant="h5" paragraph>This is a paper in a drawer</Typography>
            <Typography paragraph>{variant.longText ? content.ada.long : content.ada.short}</Typography>
            <Button label="Demo button" onClick={() => console.info('huhu')} />
          </Paper>
      </BottomDrawer>}
    </>
  )}
</Variants>
```
