Displays content coming up from the bottom of the screen.

```
import BottomDrawer from 'cozy-ui/transpiled/react/BottomDrawer';
import Card from 'cozy-ui/transpiled/react/Card';
import { Text, SubTitle } from 'cozy-ui/transpiled/react/Text';
import Button from 'cozy-ui/transpiled/react/Button';

initialState = { isDrawerDisplayed: isTesting() };

const showDrawer = () => setState({ isDrawerDisplayed: true });
const hideDrawer = () => setState({ isDrawerDisplayed: false });

<div>
  <Button onClick={showDrawer}>Open drawer</Button>
  {state.isDrawerDisplayed &&
    <BottomDrawer onClose={hideDrawer}>
      <Card className="u-bg-white">
        <SubTitle className="u-mb-1">This is a card in a drawer</SubTitle>
        <Text className="u-mb-1">This is some card content. Content can be small or huge.</Text>
        <Button className="u-ml-0" label="Demo button" />
      </Card>
  </BottomDrawer>}
</div>
```
