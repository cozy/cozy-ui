Display content coming up from the bottom of the screen. The pane can be swiped to the top of the screen. Based on cozy
/ mui-bottom-sheet: [API documentation is here](https://github.com/cozy/mui-bottom-sheet#props-options). It uses `Portal` to have the same behavior as `Dialogs` / `Modals` (can be disabled with the `disablePortal` prop).

### Usages

* BottomSheet with header, text title and text content

```bash
import BottomSheet, { BottomSheetHeader, BottomSheetItem, BottomSheetTitle } from  'cozy-ui/transpiled/react/BottomSheet'

<BottomSheet {...props}>
  <BottomSheetHeader>
    {...}
  </BottomSheetHeader>
  <BottomSheetTitle label="Title" />
  <BottomSheetItem>
    {...}
  </BottomSheetItem>
</BottomSheet>
```

* BottomSheet with list title and list content

```bash
import BottomSheet, { BottomSheetItem, BottomSheetTitle } from  'cozy-ui/transpiled/react/BottomSheet'

<BottomSheet {...props}>
  <BottomSheetItem disableGutters>
    <BottomSheetTitle icon={...} label="Title" />
    <Divider />
    <List>
      {...}
    </List>
  </BottomSheetItem>
</BottomSheet>
```

### Props

* **portalProps** : `<object>` – Portal properties
  * **container** : `<HTMLElement> | <function> | <React.Component>` – Portal container
  * **disablePortal** : `<boolean>` – Disable the portal behavior
* **toolbarProps** : `<object>` – Toolbar properties
  * **ref** : `<object>` – React reference of the toolbar node
  * **height** : `<number>` – Toolbar height value
* **settings** : `<object>` – Settings that can be modified
  * **mediumHeight** : `<number>` – Height in pixel of the middle snap point
  * **mediumHeightRatio** : `<number>` – Height of the middle snap point, expressed as a percentage of the viewport height
* **backdrop** : `<boolean>` – To add a backdrop
* **skipAnimation** : `<boolean>` – To remove animations
* **offset** : `<number>` – Add an offset at the bottom
* **onClose** : `<function>` – To totally close the BottomSheet by swaping it down

⚠️ If **`backdrop`** is set to **`true`**, you must pass an **`onClose`** method.

In this documentation, **`closable`** variant must be checked if **`backdrop`** is checked too.

```jsx
import BottomSheet, { BottomSheetItem, BottomSheetHeader, BottomSheetTitle } from 'cozy-ui/transpiled/react/BottomSheet'
import Button from 'cozy-ui/transpiled/react/Buttons'

// <-- only useful for the documentation
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Variants from 'cozy-ui/docs/components/Variants'
import TextField from 'cozy-ui/transpiled/react/TextField'
import List from 'cozy-ui/transpiled/react/List'
import ListSubheader from 'cozy-ui/transpiled/react/ListSubheader'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/ListItemSecondaryAction'
import Icon from 'cozy-ui/transpiled/react/Icon'
import FileIcon from 'cozy-ui/transpiled/react/Icons/File'
import FileTypeTextIcon from 'cozy-ui/transpiled/react/Icons/FileTypeText'
import FileTypeSheetIcon from 'cozy-ui/transpiled/react/Icons/FileTypeSheet'
import FileTypeSlideIcon from 'cozy-ui/transpiled/react/Icons/FileTypeSlide'
import FileTypeVideoIcon from 'cozy-ui/transpiled/react/Icons/FileTypeVideo'
import FileTypePdfIcon from 'cozy-ui/transpiled/react/Icons/FileTypePdf'
import RightIcon from 'cozy-ui/transpiled/react/Icons/Right'
import Divider from 'cozy-ui/transpiled/react/Divider'
import Checkbox from 'cozy-ui/transpiled/react/Checkbox'
import Radio from 'cozy-ui/transpiled/react/Radios'

const initialVariants = [{
  backdrop: true,
  closable: true,
  longContent: false,
  withFakeToolbar: false,
  withHeader: true,
  withListContent: false,
  withTitle: false,
  isOpenMin: false
}]
const initialState = {
  isBottomSheetDisplayed: isTesting(),
  isSecondBottomSheetDisplayed: false,
  mediumHeight: isTesting() ? 450 : undefined,
  mediumHeightRatio: undefined,
  offset: undefined
}
const showBottomSheet = () => setState({ isBottomSheetDisplayed: true })
const hideBottomSheet = () => setState({ isBottomSheetDisplayed: false })
const showSecondBottomSheet = () => setState({ isSecondBottomSheetDisplayed: true })
const hideSecondBottomSheet = () => setState({ isSecondBottomSheetDisplayed: false })

const handleChangeMediumHeight = el => {
  setState({ mediumHeight: Number(el.target.value) })
}
const handleChangeMediumHeightRatio = el => {
  setState({ mediumHeightRatio: Number(el.target.value) })
}
const handleChangeOffset = el => {
  setState({ offset: Number(el.target.value) })
}

const makeSettings = variant => {
const settings = state.mediumHeight === undefined && state.mediumHeightRatio === undefined
  ? undefined
  : { mediumHeight: state.mediumHeight, mediumHeightRatio: state.mediumHeightRatio }

  return { ...settings, isOpenMin: variant.isOpenMin }
}

// -->

;

<DemoProvider>
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
          <TextField
            className="u-ml-0-s u-ml-half"
            type="number"
            margin="dense"
            label="offset"
            variant="outlined"
            helperText="Bottom offset"
            onChange={handleChangeOffset}
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
            settings={makeSettings(variant)}
            backdrop={variant.backdrop}
            skipAnimation={isTesting()}
            offset={state.offset}
            onClose={variant.closable ? hideBottomSheet : undefined}
          >
            {variant.withHeader && (
              <BottomSheetHeader className="u-ph-1 u-pb-1">
                <Button
                  className="u-mr-half"
                  variant="secondary"
                  label="Open BottomSheet"
                  fullWidth
                  onClick={showSecondBottomSheet}
                />
                <Button variant="secondary" label="Button 2" fullWidth />

                {state.isSecondBottomSheetDisplayed && (
                  <BottomSheet backdrop onClose={hideSecondBottomSheet}>
                    <BottomSheetItem>
                      {content.ada.short}
                    </BottomSheetItem>
                  </BottomSheet>
                )}
              </BottomSheetHeader>
            )}
            {!variant.withListContent && (
              <>
                {variant.withTitle && (
                  <BottomSheetTitle label="Title"/>
                )}
                <BottomSheetItem>
                  {variant.longContent ? content.ada.long : content.ada.short}
                </BottomSheetItem>
              </>
            )}
            {variant.withListContent && (
              <BottomSheetItem disableGutters>
                {variant.withTitle && (
                  <>
                    <BottomSheetTitle icon={FileTypeTextIcon} label="Title" />
                    <Divider />
                  </>
                )}
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <Icon icon={FileIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Item with icon" secondary=" and with secondary text" />
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
                    <ListItemText primary="Item with secondary action" />
                    <Icon icon={RightIcon} />
                  </ListItem>
                </List>

                <Divider />

                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <Icon icon={FileTypeTextIcon} size={32} />
                    </ListItemIcon>
                    <ListItemText primary="Files" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <Icon icon={FileTypeSheetIcon} size={32} />
                    </ListItemIcon>
                    <ListItemText primary="Sheets" />
                  </ListItem>
                </List>

                <Divider variant="inset" />

                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <Icon icon={FileTypeSlideIcon} size={32} />
                    </ListItemIcon>
                    <ListItemText primary="Slides" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <Icon icon={FileTypeVideoIcon} size={32} />
                    </ListItemIcon>
                    <ListItemText primary="Videos" />
                  </ListItem>
                </List>
              </BottomSheetItem>
            )}
          </BottomSheet>
        )}
      </>
    )}
  </Variants>
</DemoProvider>
```
