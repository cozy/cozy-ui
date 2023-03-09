This modal is designed to restrict access to a feature to encourage upgrading

### Paywall for OnlyOffice

```jsx
import { OnlyOfficePaywall } from "cozy-ui/transpiled/react/Paywall";
import { CozyProvider } from "cozy-client";
import { BreakpointsProvider } from "cozy-ui/transpiled/react/hooks/useBreakpoints";
import Variants from 'cozy-ui/docs/components/Variants';
import DemoProvider from 'cozy-ui/docs/components/DemoProvider';
import Button from  'cozy-ui/transpiled/react/Buttons';

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
});

<Variants initialVariants={initialVariants}>
  {variant => (
    <DemoProvider mockClient={makeClient(variant.premiumLink)}>
      <div>
        <Button onClick={() => setState({ modalOpened: !state.modalOpened })} label="Toggle modal"/>
        {state.modalOpened && (
          <OnlyOfficePaywall 
            isPublic={variant.isPublic}
            onClose={() => setState({ modalOpened: false })} />
        )}
      </div>
    </DemoProvider>
  )}
</Variants>

```
