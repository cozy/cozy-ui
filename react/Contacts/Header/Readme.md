Must be used within `SelectedGroupProvider` and `AlertProvider`.

```jsx
import Header from 'cozy-ui/transpiled/react/Contacts/Header'
import SelectedGroupProvider from 'cozy-ui/transpiled/react/Contacts/GroupsSelect/GroupsSelectProvider'
import AlertProvider from 'cozy-ui/transpiled/react/providers/Alert'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'

;

<DemoProvider>
  <AlertProvider>
    <SelectedGroupProvider>
      <Header
        allGroups={[]}
        onContactCreate={() => {
          console.info('onCreateContact')
        }}
        onContactImport={() => {
          console.info('onImportContact')
        }}
        onGroupCreate={() => {
          console.info('onGroupCreate')
        }}
        onGroupUpdate={() => {
          console.info('onGroupUpdate')
        }}
        onGroupDelete={() => {
          console.info('onGroupDelete')
        }}
        onSearch={searchValue => {
          console.info(`onSearch with ${searchValue}`)
        }}
      />
    </SelectedGroupProvider>
  </AlertProvider>
</DemoProvider>
```
