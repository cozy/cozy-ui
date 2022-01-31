Display content coming up from the bottom of the screen. The pane can be swiped to the top of the screen. [API documentation is here](https://github.com/cozy/mui-bottom-sheet#props-options)

```jsx
import BottomSheet, { BottomSheetItem, BottomSheetHeader } from 'cozy-ui/transpiled/react/BottomSheet'
import Button from 'cozy-ui/transpiled/react/Buttons'

// <-- only useful for the documentation
initialState = { isBottomSheetDisplayed: isTesting() }
const showBottomSheet = () => setState({ isBottomSheetDisplayed: true })

const settings = isTesting() ? { mediumHeight: 450 } : undefined
// -->

;

<>
  <Button label="Open BottomSheet" onClick={showBottomSheet} />
  {state.isBottomSheetDisplayed && (
    <BottomSheet settings={settings}>
      <BottomSheetHeader className="u-ph-1 u-pb-1">
        <Button className="u-mr-half" variant="secondary" label="Button 1" fullWidth />
        <Button variant="secondary" label="Button 2" fullWidth />
      </BottomSheetHeader>
      <BottomSheetItem>
        {content.ada.short}
      </BottomSheetItem>
      <BottomSheetItem disableElevation>
        {content.ada.long}
      </BottomSheetItem>
    </BottomSheet>
  )}
</>
```
