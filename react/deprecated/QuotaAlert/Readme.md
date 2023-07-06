# Display a CozyDialog with a link to the manager to buy space

The link to the manager is only displayed if there is a managerUrl
in the stack response

```jsx noeditor
import QuotaAlert from "cozy-ui/transpiled/react/deprecated/QuotaAlert";
import { CozyProvider } from "cozy-client";
import { BreakpointsProvider } from "cozy-ui/transpiled/react/hooks/useBreakpoints";

<BreakpointsProvider>
  <div>
    <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
      Toggle modal
    </button>

    {state.modalOpened && (
      <CozyProvider
        client={{
          getStackClient: () => ({
            fetchJSON: () =>
              Promise.resolve({
                data: {
                  attributes: { uuid: "1223", manager_url: "http://mycozy.cloud" }
                }
              })
          })
        }}
      >
        <QuotaAlert onClose={() => setState({ modalOpened: false })} />
      </CozyProvider>
    )}
  </div>
</BreakpointsProvider>;
```

```jsx static
import QuotaAlert from "cozy-ui/transpiled/react/deprecated/QuotaAlert";

<div>
  <button onClick={() => setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>

  {state.modalOpened && (
    <QuotaAlert onClose={() => setState({ modalOpened: false })} />
  )}
</div>;
```
