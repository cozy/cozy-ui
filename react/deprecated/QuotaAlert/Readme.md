# Display a CozyDialog with a link to the manager to buy space

The link to the manager is only displayed if there is a managerUrl
in the stack response

```jsx
import QuotaAlert from "cozy-ui/transpiled/react/deprecated/QuotaAlert";
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'

const mockClient = {
  getStackClient: () => ({
    fetchJSON: (_, url) => {
      let attributes = {}
      if(url === '/settings/context') {
        attributes = {
          attributes: {
            enable_premium_links: true,
            manager_url: "http://mycozy.cloud",
          }
        }
      } else if(url === '/settings/instance') {
        attributes = {
          attributes: { uuid: "1223" }
        }
      }

      return Promise.resolve({ data: attributes  })
    }
  })
};

<DemoProvider client={mockClient}>
    <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
      Toggle modal
    </button>
    {state.modalOpened && (
      <QuotaAlert onClose={() => setState({ modalOpened: false })} />
    )}
</DemoProvider>
```
