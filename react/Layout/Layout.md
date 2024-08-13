The Layout component brings a strong context for apps with any screen resolution. It should be the base of your app

* `<Main />` is considered the wrapper of your app content. `<Content />` should be a direct children of it but you can add other components as well, like a toolbar and such.
* `<Content />` is the main content or your app.
* ⚠️ Secondary `<NavItem />` are not visible on mobile and tablets
* `<NavDesktopLimiter />` is a component that allows you to limit the number of visible items in a list and toggle between showing a limited view and displaying all items.

### NavDesktopLimiter

The **NavDesktopLimiter** component is designed to manage the display of list items efficiently, allowing users to limit the number of visible items and toggle between showing a limited view and displaying all items. This component is offering an intuitive way to handle lists with many items, improving the UI/UX by not overwhelming users with too much information at once.

It can be used to wrap any list of React elements, automatically providing functionality to limit the number of displayed elements based on the max prop (defaulting to **5**). Users can toggle the view to show more or fewer items as needed.

**Props**:

* **children**: React.ReactNode (required) - The list items or elements that **NavDesktopLimiter** will manage.
* **max**: number (optional) - The maximum number of items to display initially. Default is **5**.

**Features**:

* **Toggle Visibility**: Allows users to toggle between seeing the limited view and the full list of items.
* **Customizable Limit**: Users can specify how many items should be shown in the limited view.
* **Ease of Use**: Seamlessly integrates with existing list components from cozy-ui or standard JSX elements.

```jsx
import { useState } from 'react'
import { Layout, Main, Content } from 'cozy-ui/transpiled/react/Layout'
import Sidebar from 'cozy-ui/transpiled/react/Sidebar'
import Nav, { NavItem, NavIcon, NavText, genNavLink, NavDesktopLimiter } from 'cozy-ui/transpiled/react/Nav'
import cx from 'classnames'
import isEqual from 'lodash/isEqual'
import WarnIcon from 'cozy-ui/transpiled/react/Icons/Warn'
import CheckIcon from 'cozy-ui/transpiled/react/Icons/Check'
import DownloadIcon from 'cozy-ui/transpiled/react/Icons/Download'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import { makeStyles } from 'cozy-ui/transpiled/react/styles'

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
const styles = {
  layout: {
    position: 'relative',
    transform: 'translateZ(0)'
  }
}

const useStyles = makeStyles({
  layout: {
    position: 'relative',
    transform: 'translateZ(0)',
    '& > main': {
      minHeight: 'unset'
    }
  }
})

;

const Example = () => {
  const [active, setActive] = useState(['Section 1', 'Subsection 1'])
  const styles = useStyles()

  // makeProps is not necessary in a normal app since react-router sets active
  // and onClick by itself
  const makeProps = route => {
    const routeIsMatching = isEqual(active.slice(0, route.length), route)
    return { onClick: () => setActive(route), active: routeIsMatching }
  }

  return <Layout className={styles.layout}>
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
      </Nav>
    </Sidebar>
    <Main>
      <Content className='u-p-1'>
        <h2 className='u-mt-0'>{ active.join(' / ') }</h2>
        { content.ada.short }
      </Content>
    </Main>
  </Layout>
}

<DemoProvider>
  <Example />
</DemoProvider>
```

`monoColumn` option (without sidebar)

```jsx
import { Layout, Main, Content } from 'cozy-ui/transpiled/react/Layout'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import { makeStyles } from 'cozy-ui/transpiled/react/styles'

// Not necessary in a normal app
const useStyles = makeStyles({
  layout: {
    '& > main': {
      minHeight: 'unset'
    }
  }
})

const Example = () => {
  const styles = useStyles()

  return (
    <Layout className={styles.layout} monoColumn>
        <Main>
          <Content className='u-p-1'>
            { content.ada.short }
          </Content>
        </Main>
    </Layout>
  )
}

;

<DemoProvider>
  <Example />
</DemoProvider>
```
