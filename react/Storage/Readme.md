```jsx
import Storage from 'cozy-ui/transpiled/react/Storage'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'

const client = {
  store: {
    getState: () => {},
    subscribe: () => {},
    unsubscribe: () => {}
  },
  getInstanceOptions: () => {},
  query: () => {},
  getQueryFromState: queryName => {
    if (queryName === 'io.cozy.settings/io.cozy.settings.instance') {
      return {
        data: {
          uuid: "uid123"
        }
      }
    } else if (queryName === 'io.cozy.settings/io.cozy.settings.context') {
      return {
        data: {
          manager_url: "http://manager-url/",
          enable_premium_links: true
        }
      }
    } else if (queryName === 'io.cozy.settings/io.cozy.settings.disk-usage') {
      return {
        data: {
          used: "500000000",
          quota: "1000000000"
        }
      }
    }
  }
}

;

<DemoProvider client={client}>
  <div className="u-p-1-half u-maw-5">
    <Storage onlyDesktop={false} />
  </div>
</DemoProvider>

```