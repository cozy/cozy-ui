A paywall is a modal designed to restrict access to a feature to encourage upgrading. There is different variant for each features so the wording can be different to adapt to the context of use.

### Variants

```jsx
import {
  OnlyOfficePaywall,
  PasswordSharingPaywall,
  MaxAccountsByKonnectorPaywall
} from "cozy-ui/transpiled/react/Paywall"
import { CozyProvider } from "cozy-client"
import { BreakpointsProvider } from "cozy-ui/transpiled/react/hooks/useBreakpoints"
import Variants from 'cozy-ui/docs/components/Variants'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Button from  'cozy-ui/transpiled/react/Buttons'

const initialVariants = [{
  isPublic: false,
  premiumLink: false
}]

const makeClient = (premiumLink) => ({
  getStackClient: () => ({
    fetchJSON: (_, url) => {
      let attributes = {}
      if(url === '/settings/context') {
        attributes = {
          attributes: {
            enable_premium_links: premiumLink,
            manager_url: "http://mycozy.cloud",
            reply_to: "support@cozy.io"
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
})

const PaywallComponent = state.modal

const paywalls = [
  {
    name: 'OnlyOfficePaywall',
    component: OnlyOfficePaywall
  },
  {
    name: 'PasswordSharingPaywall',
    component: PasswordSharingPaywall
  },
  {
    name: 'MaxAccountsByKonnectorPaywall',
    component: MaxAccountsByKonnectorPaywall
  }
]

const togglePaywall = paywall => {
  setState({
    modalOpened: !state.modalOpened,
    modal: paywall
  })
};

<Variants initialVariants={initialVariants}>
  {variant => (
    <DemoProvider client={makeClient(variant.premiumLink)}>
      <div>
      <div className="u-mt-1">
          {paywalls.map(paywall => (
            <Button
              key={`open-btn-${paywall.name}`}
              data-testid={`open-btn-${paywall.name}`}
              className="u-m-half"
              label={`Open ${paywall.name.replace(/([A-Z])/g, ' $1').trim()}`}
              variant="ghost"
              size="small"
              onClick={() => togglePaywall(paywall.component)}
            />
          ))}
        </div>
        {state.modalOpened && (
          <PaywallComponent
            isPublic={variant.isPublic}
            max={4}
            konnectorName="EDF"
            onClose={() => setState({ modalOpened: false })} />
        )}
      </div>
    </DemoProvider>
  )}
</Variants>
```
