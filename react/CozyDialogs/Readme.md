Pre-built modals ready to be directly used in applications, based on MUI Dialog.

Will automatically:

* Be aria-labelled via the title
* Switch to fullscreen on mobile unless the size is small

### Usage

* **Dialog**: default Cozy modal
* **ConfirmDialog**: used for confirmation popups
* **IllustrationDialog**: used for illustration as title
* **FixedDialog**: default one but with both title/actions fixed
* **FixedActionsDialog**: default one but with title fluid and actions fixed
* **PermissionDialog**: used to request permission

```bash
import { Dialog } from  'cozy-ui/transpiled/react/CozyDialogs'
import Button from  'cozy-ui/transpiled/react/Buttons'

<Dialog
  open
  title="the title"
  content="the content"
  actions={
    <Button label="the button action" />
  }
  onClose={someFunction}
/>
```

### Props

* **componentsProps** : `<object>` – overriden properties of specific components
  * **dialogTitle** : `<object>` – DialogTitle component properties
* **size** : `<string>` – Can be "s", "m" (default) or "l"
* **open** : `<boolean>` (required) – To open/close the modal
* **disableTitleAutoPadding** : `<boolean>` (optional) – Disable title padding calculation that would prevent overlapping with close and back buttons
  * if set to `true` then you should handle those CSS properties by yourself or title will take 100% of width
  * if set to `false` then title will take only available space between close and back buttons regarding which of `onClose` or `onBack` props are defined or not
* **disableGutters** : `<boolean>` – To disable the margins and paddings of the inner content
* **background** : `<string>` – Background css prop
* **title** : `<node>` – Title of the modal
* **content** : `<node>` – Content of the modal
* **actions** : `<node>` – Actions of the modal
* **actionsLayout** : `<string>` – Can be "row" or "column"
* **onClose** : `<function>` (required) – Triggered function on modal close action
* **onBack** : `<function>` (optional) – Triggered function on modal back action
  * if defined and in desktop mode then a back button is shown in addition to the close button and it will trigger onBack() on click
  * if defined and in mobile mode then the back button will trigger onBack() instead of onClose()
  * if not defined and in mobile mode then the back button will trigger onClose()

Additionally, all the CozyDialogs support [MUI Dialog's props](https://v4.mui.com/api/dialog/).

### Exemples

```jsx
import {
  Dialog,
  ConfirmDialog,
  IllustrationDialog,
  FixedDialog,
  FixedActionsDialog,
  PermissionDialog
} from  'cozy-ui/transpiled/react/CozyDialogs'

import DemoProvider from 'cozy-ui/docs/components/DemoProvider'

import Button from 'cozy-ui/transpiled/react/Buttons'
import Alerter from 'cozy-ui/transpiled/react/deprecated/Alerter'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Variants from 'cozy-ui/docs/components/Variants'
import FormControlLabel from 'cozy-ui/transpiled/react/FormControlLabel'
import RadioGroup from 'cozy-ui/transpiled/react/RadioGroup'
import Radio from 'cozy-ui/transpiled/react/Radios'
import FormControl from 'cozy-ui/transpiled/react/FormControl'
import FormLabel from 'cozy-ui/transpiled/react/FormLabel'
import BottomSheet, { BottomSheetItem } from 'cozy-ui/transpiled/react/BottomSheet'
import Stack from 'cozy-ui/transpiled/react/Stack'

import ToTheCloudIcon from 'cozy-ui/transpiled/react/Icons/ToTheCloud'
import CloudIcon from "cozy-ui/transpiled/react/Icons/Cloud"
import BackgroundImg from './background.png'

const handleClose = () => setState({ modalOpened: !state.modalOpened })
const handleBack = () => {
  Alerter.success('Back button has been pressed', { duration: 5000 })
  setState({ modalOpened: !state.modalOpened })
}
const hideBottomSheet = () => setState({ bottomSheetOpened: false })
const showBottomSheet = () => setState({ bottomSheetOpened: true })
const hideSecondConfirmDialog = () => setState({ secondConfirmDialogOpened: false })
const showSecondConfirmDialog = () => setState({ secondConfirmDialogOpened: true })
const hideBSConfirmDialog = () => setState({ BSConfirmDialogOpened: false })
const showBSConfirmDialog = () => setState({ BSConfirmDialogOpened: true })

const DialogComponent = state.modal

const ExampleDialogActions = () => {
  return (
    <>
      <Button
        variant="secondary"
        label={'Close Modal'}
        onClick={handleClose}
      />
      <Button
        variant="primary"
        label='Do something'
        onClick={() => alert('click')}
      />
    </>
  )
}

const ConfirmDialogActions = () => {
  return (
    <>
      <Button
        variant="secondary"
        label={'Close Modal'}
        onClick={handleClose}
      />
      <Button
        color="error"
        label='Do something destructive'
        onClick={() => alert('click')}
      />
    </>
  )
}

const dialogTitles = {
  ConfirmDialog: "Are you sure ?",
  IllustrationDialog: <Icon icon={CloudIcon} size="140" />,
  FixedDialog: 'Fixed Dialog',
  FixedActionsDialog: 'Fixed Actions Dialog',
  Dialog: 'Dialog',
  PermissionDialog: 'Are you sure ?'
}

const dialogContents = {
  ConfirmDialog: "Content of a confirm dialog, precising what the actions will do, and asking the user if she is sure.",
  IllustrationDialog: "An IllustrationDialog contains short content." + content.ada.short,
  FixedDialog: "A FixedDialog can contain very long content. Actions are at the bottom of the content are not visible to the user if she has not scrolled to the bottom. " + content.ada.long,
  FixedActionsDialog: "A FixedActionsDialog can contain very long content. Actions are visible even without scrolling. " + content.ada.long,
  Dialog: "A normal Dialog should contain short content. " + content.ada.short,
  PermissionDialog: "Content of a confirm dialog, precising what the actions will do, and asking the user if she is sure.",
}

const dialogActions = {
  ConfirmDialog: <ConfirmDialogActions />,
  IllustrationDialog: <ExampleDialogActions />,
  FixedDialog: <ExampleDialogActions />,
  FixedActionsDialog: <ExampleDialogActions />,
  Dialog: <ExampleDialogActions />,
  PermissionDialog: <ExampleDialogActions />,
}

const dialogs = [
  Dialog,
  ConfirmDialog,
  IllustrationDialog,
  FixedDialog,
  FixedActionsDialog,
  PermissionDialog
]

const StateRadio = ({ name, ...props }) => {
  return <input
    type='radio'
    name={name}
    checked={state[name] == props.value}
    onChange={() => setState({ [name]: props.value })}
    {...props}
  />
}

const toggleDialog = dialog => {
  setState({
    modalOpened: !state.modalOpened,
    modal: dialog
  })
}

initialState = {
  modalOpened: isTesting(),
  bottomSheetOpened: false,
  secondConfirmDialogOpened: false,
  BSConfirmDialogOpened: false,
  modal: Dialog,
  size: 'medium',
  content: 'default',
  theme: 'normal',
}

const initialVariants = [{
  actionsLayoutColumn: false,
  titleLong: false,
  disableTitleAutoPadding: false,
  withCloseButton: true,
  withBackButton: false,
  alignTop: false,
  showActions: true,
  disableGutters: false,
  hideTitle: false,
  withBackground: false
}]

;

<DemoProvider>
  <Variants initialVariants={initialVariants}>
    {variant => (
      <>
        <FormControl component="fieldset" fullWidth>
          <FormLabel component="legend">Content</FormLabel>
          <RadioGroup
            aria-label="radio"
            name="content"
            row
            value={state.content}
            onChange={event => { setState({ content: event.target.value }) }}
          >
            <FormControlLabel
              value="default"
              label="Default"
              control={<Radio />}
            />
            <FormControlLabel
              value="short"
              label="Short"
              control={<Radio />}
            />
            <FormControlLabel
              value="long"
              label="Long"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset" >
          <FormLabel component="legend">Size</FormLabel>
          <RadioGroup
            aria-label="radio"
            name="size"
            row
            value={state.size}
            onChange={event => { setState({ size: event.target.value }) }}
          >
            <FormControlLabel
              value="small"
              label="Small"
              control={<Radio />}
            />
            <FormControlLabel
              value="medium"
              label="Medium"
              control={<Radio />}
            />
            <FormControlLabel
              value="large"
              label="Large"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <div className="u-mt-1">
          {dialogs.map(dialog => (
            <Button
              key={`open-btn-${dialog.name}`}
              data-testid={`open-btn-${dialog.name}`}
              className="u-m-half"
              label={`Open ${dialog.name}`}
              variant="ghost"
              size="small"
              onClick={() => toggleDialog(dialog)}
            />
          ))}
        </div>

        {state.modalOpened && (
          <DialogComponent
            open
            size={DialogComponent !== ConfirmDialog ? state.size : undefined}
            onClose={variant.withCloseButton ? handleClose : undefined}
            onBack={variant.withBackButton ? handleBack : undefined}
            disableTitleAutoPadding={variant.disableTitleAutoPadding}
            align={variant.alignTop ? 'top': 'middle'}
            title={variant.hideTitle
              ? undefined
              : DialogComponent !== IllustrationDialog && variant.titleLong
                ? `${dialogTitles[DialogComponent.name]} - ${content.ada.short}`
                : dialogTitles[DialogComponent.name]
            }
            disableGutters={variant.disableGutters}
            background={variant.withBackground ? `var(--paperBackgroundColor) repeat-x url(${BackgroundImg})` : undefined}
            icon={DialogComponent === PermissionDialog ? CloudIcon : undefined}
            content={
              <>
                <Typography component="div" variant="body1">
                  { state.content == 'default'
                    ? dialogContents[DialogComponent.name]
                    : state.content == 'long'
                      ? content.ada.long
                      : content.ada.short
                  }
                  <Stack className="u-mt-1" spacing="s">
                    <div>
                      <Button label="Show an alert" onClick={() => Alerter.success('Hello', { duration: 100000 })}/>
                    </div>
                    <div>
                      <Button label="Show inner bottom sheet" onClick={showBottomSheet}/>
                    </div>
                    <div>
                      <Button label="Show inner confirm dialog" onClick={showSecondConfirmDialog}/>
                    </div>
                  </Stack>
                </Typography>

                {state.secondConfirmDialogOpened && (
                  <ConfirmDialog open onClose={hideSecondConfirmDialog}
                    title="This is a simple title"
                    content="This is a simple content"
                  />
                )}

                {state.bottomSheetOpened && (
                  <BottomSheet backdrop onClose={hideBottomSheet}>
                    <BottomSheetItem>
                      <div className="u-mb-1">
                        <Button label="Show inner confirm dialog" onClick={showBSConfirmDialog}/>
                      </div>
                      {content.ada.long}
                      {state.BSConfirmDialogOpened && (
                        <ConfirmDialog open onClose={hideBSConfirmDialog}
                          title="This is a simple title"
                          content="This is a simple content"
                        />
                      )}
                    </BottomSheetItem>
                  </BottomSheet>
                )}
              </>
            }
            actions={variant.showActions && dialogActions[DialogComponent.name]}
            actionsLayout={variant.actionsLayoutColumn ? 'column' : 'row'}
          />
        )}
      </>
    )}
  </Variants>
</DemoProvider>
```

### Dialogs with title button

```jsx
import cx from 'classnames'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'

import { Dialog } from  'cozy-ui/transpiled/react/CozyDialogs'
import Button from  'cozy-ui/transpiled/react/Buttons'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import Icon from 'cozy-ui/transpiled/react/Icon'
import DotsIcon from 'cozy-ui/transpiled/react/Icons/Dots'

initialState = { showModal: false }

const Modal = () => {
  const { isMobile } = useBreakpoints()

  return (
    <Dialog
      open
      title={
        <>
          This is the title
          <IconButton>
            <Icon icon={DotsIcon} />
          </IconButton>
        </>
      }
      content="Here's the content"
      actions={
        <Button label="Close" onClick={() => setState({ showModal: false })} />
      }
      componentsProps={{
        dialogTitle: {
          className: "u-flex u-flex-items-center u-flex-justify-between u-pv-0-s u-pv-1 u-pr-0-s"
        }
      }}
      onClose={() => setState({ showModal: false })}
    />
  )
}

;

<DemoProvider>
  <Button label="Open modal" onClick={() => setState({ showModal: true })}/>

  {state.showModal && (
    <Modal />
  )}
</DemoProvider>
```
