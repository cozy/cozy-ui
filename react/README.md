# Components available

### Alerter

```jsx
import { Alerter } from 'cozy-ui/react'
```

### Button

```jsx
import { Button } from 'cozy-ui/react'

<Button theme='regular'></Button>
<Button theme='primary'></Button>
<Button theme='secondary'></Button>
```

### I18n

```jsx
import { I18n } from 'cozy-ui/react'
```

### Icon

```jsx
import { Icon } from 'cozy-ui/react'
<Icon icon='check' />
```

* album-add
* album-remove
* check
* cozy
* cross
* delete-grey08
* delete
* device-laptop
* dots
* download
* moveto
* openwith
* paperplane
* rename
* share-grey08
* share
* upload-grey08
* upload
* warn
* warning

![](https://i.imgur.com/Cst1Kfs.png)

### SelectionBar

```jsx
import { SelectionBar } from 'cozy-ui/react'
```

### Spinner

```jsx
import { Spinner } from 'cozy-ui/react'
<Spinner />
```

### Tabs

```jsx
import { TabPanels, Tabs, TabPanel, TabList } from 'cozy-ui/react'

const myTabs = ({account}) => {
  <Tabs initialActiveTab='details'>
  <TabList>
    <Tab name='details'>{t('Détails')}</Tab>
    <Tab name='sharing'>{t('Partage')}</Tab>
  </TabList>
  <TabPanels>
    <TabPanel name='details'>
      <AccountDetails account={account} />
    </TabPanel>
    <TabPanel name='sharing'>
      <AccountSharingDetails account={account} />
    </TabPanel>
  </TabPanels>
</Tabs>
}

```

### Toggle

```jsx
import { Toggle } from 'cozy-ui/react'
<Toggle checked={ true } onToggle={checked => alert(checked) } />
```

### ModalContent

```jsx
import { Modal, ModalContent } from 'cozy-ui/react'

const example = () =>
  <Modal withCross>
    <ModalContent>
      <div>
        Hello, I'm a Modal with a close button.
      </div>
    </ModalContent>
  </Modal>
```

### `I18n`, `translate`

* `I18n`: Context provider for children to have access to `t` in their context
* `translate`: HOC to pass `t` as a prop, from the context

```jsx
 <I18n lang='en' dictRequire={(lang) => require(`../src/locales/${lang}`)}>
  <App />
 </I18n>
```

```jsx
class HelloWorld extends Component {
  render () {
    const {t} = this.props
    return <div>{t('hello-world')}</div>
  }
}

export default translate()(HelloWorld)
```
