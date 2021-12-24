Displays content coming up from the bottom of the screen.

```jsx
import BottomDrawer from 'cozy-ui/transpiled/react/BottomDrawer';
import Card from 'cozy-ui/transpiled/react/Card';
import Button from 'cozy-ui/transpiled/react/Button';
import Typography from "cozy-ui/transpiled/react/Typography";

initialState = { isDrawerDisplayed: isTesting() };

const showDrawer = () => setState({ isDrawerDisplayed: true });
const hideDrawer = () => setState({ isDrawerDisplayed: false });

<div>
  <Button onClick={showDrawer}>Open drawer</Button>
  {state.isDrawerDisplayed &&
    <BottomDrawer onClose={hideDrawer}>
      <Card className="u-bg-white">
        <Typography className="u-mb-1" variant="h5">This is a card in a drawer</Typography>
        <Typography className="u-mb-1" variant="body1">This is some card content. Content can be small or huge.</Typography>
        <Button className="u-ml-0" label="Demo button" />
      </Card>
  </BottomDrawer>}
</div>
```
