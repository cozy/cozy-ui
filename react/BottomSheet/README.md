Display content coming up from the bottom of the screen. The pane can be swiped to the top of the screen. Based on cozy
/ mui-bottom-sheet: [API documentation is here](https://github.com/cozy/mui-bottom-sheet#props-options).

### Props

* **toolbarProps** : `<object>` – Toolbar properties
  * **ref** : `<object>` – React reference of the toolbar node
  * **height** : `<number>` – Toolbar height value
* **settings** : `<object>` – Settings that can be modified
  * **mediumHeight** : `<number>` – Height in pixel of the middle snap point
  * **mediumHeightRatio** : `<number>` – Height of the middle snap point, expressed as a percentage of the viewport height
* **backdrop** : `<boolean>` – To add a backdrop
* **skipAnimation** : `<boolean>` – To remove animations
* **onClose** : `<function>` – To totally close the BottomSheet by swaping it down

⚠️ If **`backdrop`** is set to **`true`**, you must pass an **`onClose`** method.

In this documentation, **`closable`** variant must be checked if **`backdrop`** is checked too.

```jsx
import BottomSheet, { BottomSheetItem, BottomSheetHeader } from 'cozy-ui/transpiled/react/BottomSheet'
import Button from 'cozy-ui/transpiled/react/Buttons'

// <-- only useful for the documentation
import Variants from 'cozy-ui/docs/components/Variants'
import TextField from 'cozy-ui/transpiled/react/MuiCozyTheme/TextField'
import List from 'cozy-ui/transpiled/react/MuiCozyTheme/List'
import ListSubheader from 'cozy-ui/transpiled/react/MuiCozyTheme/ListSubheader'
import ListItem from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/MuiCozyTheme/ListItemSecondaryAction'
import Icon from 'cozy-ui/transpiled/react/Icon'
import FileIcon from 'cozy-ui/transpiled/react/Icons/File'
import FileTypeTextIcon from 'cozy-ui/transpiled/react/Icons/FileTypeText'
import RightIcon from 'cozy-ui/transpiled/react/Icons/Right'
import Divider from 'cozy-ui/transpiled/react/MuiCozyTheme/Divider'
import Checkbox from 'cozy-ui/transpiled/react/Checkbox'
import Radio from 'cozy-ui/transpiled/react/Radios'

const initialVariants = [{
  backdrop: true,
  closable: true,
  longContent: false,
  withFakeToolbar: false,
  withHeader: true,
  withListContent: false
}]
const initialState = {
  isBottomSheetDisplayed: isTesting(),
  mediumHeight: isTesting() ? 450 : undefined,
  mediumHeightRatio: undefined
}
const showBottomSheet = () => setState({ isBottomSheetDisplayed: true })
const hideBottomSheet = () => setState({ isBottomSheetDisplayed: false })

const handleChangeMediumHeight = el => {
  setState({ mediumHeight: Number(el.target.value) })
}
const handleChangeMediumHeightRatio = el => {
  setState({ mediumHeightRatio: Number(el.target.value) })
}

const settings = state.mediumHeight === undefined && state.mediumHeightRatio === undefined
  ? undefined
  : { mediumHeight: state.mediumHeight, mediumHeightRatio: state.mediumHeightRatio }

// -->

;

<Variants initialVariants={initialVariants}>
  {variant => (
    <>
      <div>
        <TextField
          type="number"
          margin="dense"
          label="mediumHeight"
          variant="outlined"
          helperText="Height of the medium snap point"
          onChange={handleChangeMediumHeight}
        />
        <TextField
          className="u-ml-0-s u-ml-half"
          type="number"
          margin="dense"
          label="mediumHeightRatio"
          variant="outlined"
          helperText="Height ratio of the medium snap point"
          onChange={handleChangeMediumHeightRatio}
        />
        <Button
          className="u-ml-0-s u-ml-half u-mt-1"
          size="small"
          variant="ghost"
          label="Open BottomSheet"
          onClick={showBottomSheet}
        />
      </div>

      {state.isBottomSheetDisplayed && (
        <BottomSheet
          toolbarProps={variant.withFakeToolbar ? { height: 50 } : undefined}
          settings={settings}
          backdrop={variant.backdrop}
          skipAnimation={isTesting()}
          onClose={variant.closable ? hideBottomSheet : undefined}
        >
          {variant.withHeader && (
            <BottomSheetHeader className="u-ph-1 u-pb-1">
              <Button className="u-mr-half" variant="secondary" label="Button 1" fullWidth />
              <Button variant="secondary" label="Button 2" fullWidth />
            </BottomSheetHeader>
          )}
          {!variant.withListContent && (
            <BottomSheetItem disableElevation>
              {variant.longContent ? content.ada.long : content.ada.short}
            </BottomSheetItem>
          )}
          {variant.withListContent && (
            <BottomSheetItem disableGutters>
              <List>
                <ListItem button>
                  <ListItemIcon>
                    <Icon icon={FileTypeTextIcon} size={32} />
                  </ListItemIcon>
                  <ListItemText primary="Title" />
                </ListItem>
                <ListSubheader>Section 1</ListSubheader>
                <ListItem button>
                  <ListItemIcon>
                    <Icon icon={FileIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Item with icon" />
                </ListItem>
                <Divider variant="inset" />
                <ListItem button>
                  <ListItemIcon>
                    <Checkbox />
                  </ListItemIcon>
                  <ListItemText primary="Item with checkbox" />
                </ListItem>
                <Divider variant="inset" />
                <ListItem button>
                  <ListItemIcon>
                    <Radio />
                  </ListItemIcon>
                  <ListItemText primary="Item with radio" />
                </ListItem>
                <Divider variant="inset" />
                <ListItem button>
                  <ListItemIcon>
                    <Icon icon={FileIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Item with secondary" secondary="With secondary text" />
                </ListItem>
                <Divider variant="inset" />
                <ListItem button>
                  <ListItemIcon>
                    <Icon icon={FileIcon} />
                  </ListItemIcon>
                  <ListItemText primary="Item with secondary action" />
                  <ListItemSecondaryAction className="u-mr-1">
                    <Icon icon={RightIcon} color="var(--iconTextColor)" />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" />
              </List>
            </BottomSheetItem>
          )}
        </BottomSheet>
      )}
    </>
  )}
</Variants>
```
