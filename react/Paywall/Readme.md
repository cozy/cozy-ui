A paywall is a modal designed to restrict access to a feature to encourage upgrading.
There is different variant for each features so the wording can be different to adapt to the context of use.

When we are in our mobile application called Flagship, we only display the premium action when IAP (In-App Payment) is activated.
Otherwise our web subscription process does not comply with the app store policies.
To check if IAP is enabled, the following points are verified:

1. The functionality is available with `cozy-intent`.
2. The flag `flagship.iap.enabled` is set to true.

### Usage

To use the Paywall component, it should be wrapped into a `WebviewContext` component.

### Variants

```jsx
import {
  OnlyOfficePaywall,
  PasswordSharingPaywall,
  MaxAccountsByKonnectorPaywall,
  MaxAccountsPaywall,
  MaxPapersPaywall,
  QuotaPaywall,
  MaxDaysToCapturePaywall
} from 'cozy-ui/transpiled/react/Paywall'
import Variants from 'cozy-ui/docs/components/Variants'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Button from 'cozy-ui/transpiled/react/Buttons'
import { createFakeClient } from 'cozy-client'

const initialVariants = [
  {
    isPublic: false,
    premiumLink: false
  }
]

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
  },
  {
    name: 'MaxAccountsPaywall',
    component: MaxAccountsPaywall
  },
  {
    name: 'MaxPapersPaywall',
    component: MaxPapersPaywall
  },
  {
    name: 'QuotaPaywall',
    component: QuotaPaywall
  },
  {
    name: 'MaxDaysToCapturePaywall',
    component: MaxDaysToCapturePaywall
  }
]

const togglePaywall = paywall => {
  setState({
    modalOpened: !state.modalOpened,
    modal: paywall
  })
}

const makeClient = premiumLink =>
  createFakeClient({
    queries: {
      'io.cozy.settings/io.cozy.settings.instance': {
        doctype: 'io.cozy.settings',
        definition: {
          doctype: 'io.cozy.settings',
          id: 'io.cozy.settings/io.cozy.settings.instance'
        },
        data: [
          {
            id: 'io.cozy.settings/io.cozy.settings.instance',
            attributes: {
              uuid: '1223'
            }
          }
        ]
      },
      'io.cozy.settings/context': {
        doctype: 'io.cozy.settings',
        definition: {
          doctype: 'io.cozy.settings',
          id: 'io.cozy.settings/context'
        },
        data: [
          {
            id: 'io.cozy.settings/context',
            attributes: {
              enable_premium_links: premiumLink,
              manager_url: 'http://mycozy.cloud',
              reply_to: 'support@cozy.io'
            }
          }
        ]
      }
    }
  })

;<Variants initialVariants={initialVariants}>
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
            days={30}
            konnectorName="EDF"
            onClose={() => setState({ modalOpened: false })}
          />
        )}
      </div>
    </DemoProvider>
  )}
</Variants>
```
