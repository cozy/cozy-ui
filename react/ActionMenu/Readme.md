Use an ActionMenu to show a list of actions. ActionMenus automatically switch their display between desktop and mobile.

### Example

You can pass a reference to a custom DOM element through the `anchorElRef` prop to attach the menu to that element. This is useful is you want to be able to have autoclose true and be able to close the menu by clicking on the same component that opens it.

A header can be used to provide context on the menu actions. Since on desktop, we display a popper and not a BottomDrawer, context for the user is not lost, so the ActionMenuHeader would be redundant. This is why it is not rendered unless we are on mobile.

We use [popper.js](https://popper.js.org/docs/v2/) under the hood. You can use the `popperOptions` prop to pass options to the popper.js instance. This lets you control things like placement relative to the anchor, positioning strategies and more — refer to the popper doc for all the details. The positionning is only relevant on desktop.

```jsx
import ActionMenu, { ActionMenuItem, ActionMenuRadio, ActionMenuHeader } from 'cozy-ui/transpiled/react/ActionMenu'
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton'
import Icon from 'cozy-ui/transpiled/react/Icon'
import Typography from 'cozy-ui/transpiled/react/Typography'
import {
  BreakpointsProvider
} from 'cozy-ui/transpiled/react/hooks/useBreakpoints'
import FileIcon from 'cozy-ui/transpiled/react/Icons/File'
import Filename from 'cozy-ui/transpiled/react/Filename'
import WarningIcon from 'cozy-ui/transpiled/react/Icons/Warning'
import Variants from 'cozy-ui/docs/components/Variants'
import { Dialog } from 'cozy-ui/transpiled/react/CozyDialogs'
import Button from 'cozy-ui/transpiled/react/Button'

initialState = { menuDisplayed: isTesting(), modalOpened: false }

const initialVariants = [
  { withMobileHeader: isTesting(), withDesktopPlacement: false }
]

const anchorRef = React.createRef()
const showMenu = () => setState({ menuDisplayed: true })
const hideMenu = () => setState({ menuDisplayed: false })
const toggleMenu = () => {setState(state => ({ menuDisplayed: !state.menuDisplayed }))}
const onClose = () => setState({ modalOpened: !state.modalOpened })

;

<BreakpointsProvider>
  <Variants initialVariants={initialVariants}>
    {variant => (
      <>
        <DropdownButton onClick={toggleMenu} ref={anchorRef}>Show action menu</DropdownButton>
        {state.menuDisplayed && (
          <ActionMenu
            anchorElRef={anchorRef}
            autoclose={true}
            onClose={hideMenu}
            popperOptions={{ placement: variant.withDesktopPlacement ? 'bottom-end' : 'bottom-start'}}
          >
            {variant.withMobileHeader && (
              <ActionMenuHeader>
                <Filename icon={FileIcon} filename="my_awesome_paper" extension=".pdf" />
              </ActionMenuHeader>
            )}
            <ActionMenuItem
              left={<Icon icon={FileIcon} />}
              right={<Icon icon={WarningIcon} color="var(--errorColor)" />}
              onClick={() => alert('click')}
            >
              Item 1 with onclick action
            </ActionMenuItem>
            <ActionMenuItem
              left={<Icon icon={FileIcon} />}
              onClick={() => setState({ modalOpened: !state.modalOpened })}>
                Item 2 with dialog action
            </ActionMenuItem>
            <ActionMenuItem left={<ActionMenuRadio />}>
              Item 3
            </ActionMenuItem>
            <ActionMenuItem left={<Icon icon={FileIcon} />}>
              <Typography variant="body1" gutterBottom>
                Item 4
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Descriptive text to elaborate on what item 3 does.
              </Typography>
            </ActionMenuItem>
          </ActionMenu>
        )}
      </>
    )}
  </Variants>
  <Dialog
    opened={state.modalOpened}
    onClose={() => onClose()}
    title="Ada Lovelace"
    content="Augusta Ada King-Noel, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine. As a result, she is often regarded as the first to recognise the full potential of a 'computing machine' and the first computer programmer."
    actions={
      <>
        <Button
          theme="secondary"
          onClick={() => onClose()}
          label={'Close Modal'}
        />
        <Button
          theme="primary"
          label={'Touch Me'}
          onClick={() => alert('click')}
        />
      </>
    }
  />
</BreakpointsProvider>
```
