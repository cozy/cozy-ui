The Layout component brings a strong context for apps with any screen resolution. It should be the base of your app

* `<Main />` is considered the wrapper of your app content. `<Content />` should be a direct children of it but you can add other components as well, like a toolbar and such.
* `<Content />` is the main content or your app.
* ⚠️ Secondary `<NavItem />` are not visible on mobile and tablets
* `<NavDesktopLimiter />` is a component that allows you to limit the number of visible items in a list and toggle between showing a limited view and displaying all items.
* `<NavDesktopDropdown />` is a component that allows you to show / hide the items in a list when the number of items exceeds a defined limit

### NavDesktopLimiter

The **NavDesktopLimiter** component is designed to manage the display of list items efficiently, allowing users to limit the number of visible items and toggle between showing a limited view and displaying all items. This component is offering an intuitive way to handle lists with many items, improving the UI/UX by not overwhelming users with too much information at once.

It can be used to wrap any list of React elements, automatically providing functionality to limit the number of displayed elements based on the max prop (defaulting to **5**). Users can toggle the view to show more or fewer items as needed.

**Props**:

* **children**: React.ReactNode (required) - The list items or elements that **NavDesktopLimiter** will manage.
* **max**: number (optional) - The maximum number of items to display initially. Default is **5**.

### NavDesktopDropdown

The **NavDesktopDropdown** component is designed to manage the display of nav items efficiently, allowing users to toggle between showing a collapsed view and displaying all items. This component enhances the UI/UX by providing a clean and intuitive way to handle dropdowns with many items.

It can be used to wrap any list of React elements, automatically providing functionality to limit the number of displayed elements based on the `limit` prop (defaulting to **5**). Users can toggle the dropdown to show or hide the items as needed.

**Props**:

* **label**: string (required) - The label for the dropdown.
* **children**: React.ReactNode (required) - The list items or elements that **NavDesktopDropdown** will manage.
* **defaultOpen**: boolean (optional) - Determines whether the dropdown is open by default. Default is **true**.
* **limit**: number (optional) - The maximum number of items to display before enabling collapsing. Default is **5**.

```jsx
import { useState } from 'react'
import { Layout, Main, Content } from 'cozy-ui/transpiled/react/Layout'
import Sidebar from 'cozy-ui/transpiled/react/Sidebar'
import Nav, { NavItem, NavIcon, NavText, genNavLink, NavDesktopLimiter, NavDesktopDropdown } from 'cozy-ui/transpiled/react/Nav'
import cx from 'classnames'
import isEqual from 'lodash/isEqual'
import Icon from 'cozy-ui/transpiled/react/Icon'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import WarnIcon from 'cozy-ui/transpiled/react/Icons/Warn'
import CheckIcon from 'cozy-ui/transpiled/react/Icons/Check'
import CrossMediumIcon from 'cozy-ui/transpiled/react/Icons/CrossMedium'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Dialog from 'cozy-ui/transpiled/react/Dialog'
import DownloadIcon from 'cozy-ui/transpiled/react/Icons/Download'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import { makeStyles } from 'cozy-ui/transpiled/react/styles'
import Variants from 'cozy-ui/docs/components/Variants'

/**
 * In a normal app, ExampleRouterNavLink is from react-router
 *
 * import { NavLink } from 'react-router'
 * const NavLink = genNavLink(NavLink)
 */
const ExampleRouterNavLink = ({ children, className, active, activeClassName, onClick }) => (
  <a onClick={onClick} className={cx(className, active ? activeClassName : null)}>
    { children }
  </a>
)

const NavLink = genNavLink(ExampleRouterNavLink)

// Not necessary in a normal app
const useStyles = makeStyles(theme => ({
  topBar: { // same style than the cozy-bar
    display: 'flex',
    alignItems: 'center',
    padding: '0 1rem',
    minHeight: '3rem',
    width: '100%',
    boxSizing: 'border-box',
    zIndex: 'var(--zIndex-bar)',
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid ${theme.palette.divider}`,
    position: 'fixed',
    top: 0,
    right: 0,
    [theme.breakpoints.up('lg')]: {
      position: 'relative',
    }
  },
  closeButton: {
    position: 'absolute',
    top: '1.15rem',
    right: '1.15rem',
    zIndex: 'var(--zIndex-modal-toolbar)',
    backgroundColor: theme.palette.background.paper
  }
}))

const initialVariants = [{ monoColumn: false, withTopBar: true, longContent: true, moreThanMax: true }]
const [active, setActive] = useState(['Section 1', 'Subsection 1'])
const [showDialog, setShowDialog] = useState(isTesting() ? true : false)
const styles = useStyles()

;

const SideBar = ({ variant }) => {
  // makeProps is not necessary in a normal app since react-router sets active
  // and onClick by itself
  const makeProps = route => {
    const routeIsMatching = isEqual(active.slice(0, route.length), route)
    return { onClick: () => setActive(route), active: routeIsMatching }
  }

  return (
    <Sidebar>
      <Nav>
        <NavItem>
          <NavLink {...makeProps(['Section 1'])}>
            <NavIcon icon={WarnIcon} />
            <NavText>Section 1</NavText>
          </NavLink>
        </NavItem>
        <NavDesktopLimiter showMoreString="Show More" showLessString="Show Less">
          {
            Array.from(Array(10).keys()).map(i => (
              <NavItem secondary key={i}>
                <NavLink {...makeProps(['Section 1', `Subsection ${i}`])}>
                  <NavText>Subsection {i}</NavText>
                </NavLink>
              </NavItem>
            ))
          }
        </NavDesktopLimiter>
        <NavItem>
          <NavLink {...makeProps(['Section 2'])}>
            <NavIcon icon={CheckIcon} />
            <NavText>Section 2</NavText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink {...makeProps(['Section 3'])}>
            <NavIcon icon={DownloadIcon} />
            <NavText>Section 3</NavText>
          </NavLink>
        </NavItem>
        <NavDesktopDropdown label="Section 4" max={5}>
        {
          Array.from(Array(variant.moreThanMax ? 6 : 3).keys()).map(i => (
            <NavItem secondary key={i}>
              <NavLink>
                <NavText>Subsection {i}</NavText>
              </NavLink>
            </NavItem>
          ))
        }
        </NavDesktopDropdown>
      </Nav>
    </Sidebar>
  )
}

<Variants initialVariants={initialVariants}>
  {variant => (
    <DemoProvider>
      <Button className="u-mb-1" label="Open layout in modal" onClick={() => setShowDialog(true)} />
      {showDialog && (
        <Dialog
          className="cozy-ui-body"
          open
          fullScreen
          fullWidth
        >
          <IconButton
            className={styles.closeButton}
            onClick={() => setShowDialog(false)}
          >
            <Icon icon={CrossMediumIcon} />
          </IconButton>
          {variant.withTopBar &&
            <div
              id="coz-bar"
              role="banner"
              className={styles.topBar}
            >
              Fake TopBar
            </div>
          }
          <div role="application">
            <Layout
              withTopBar={variant.withTopBar}
              monoColumn={variant.monoColumn}
            >
              {!variant.monoColumn && <SideBar variant={variant} />}
              <Main>
                <Content className='u-p-1'>
                  <h2 className='u-mt-0'>{ active.join(' / ') }</h2>
                  <p>---Start---</p>
                  {variant.longContent ? content.ada.long : content.ada.short}
                  <p>---END---</p>
                </Content>
              </Main>
            </Layout>
          </div>
        </Dialog>
      )}
    </DemoProvider>
  )}
</Variants>
```
