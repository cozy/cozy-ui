### Infos Carrousel

Displays several Infos component in a Carrousel. [react-swipeable-views](https://react-swipeable-views.com/) is used under the hood and can be configured.

```jsx
import InfosCarrousel from 'cozy-ui/transpiled/react/deprecated/InfosCarrousel'
import Infos from 'cozy-ui/transpiled/react/deprecated/Infos'
import Button from 'cozy-ui/transpiled/react/deprecated/Button'
import Typography from "cozy-ui/transpiled/react/Typography";

// This is necessary for tests to be predictable
const swipeableProps = { disableLazyLoading: true };

const handleDismissAction = () => {
  alert('Dismiss action from Infos')
};

<div className='u-stack-m'>
  <br/>
  <InfosCarrousel theme="danger" swipeableProps={swipeableProps} >
    <Infos
      dismissAction={handleDismissAction}
      description={<>
        <Typography variant="h6">News 1</Typography>
        <Typography variant="body1">Breaking news 1</Typography>
      </>}
      action={<Button theme="secondary" label="A CTA button" />}
    />
    <Infos
      dismissAction={handleDismissAction}
      description={<>
        <Typography variant="h6">News 2</Typography>
        <Typography variant="body1">Breaking news 2</Typography>
      </>}
      theme="primary"
      action={<Button theme="secondary" label="A CTA button" />}
    />
  </InfosCarrousel>
</div>
```

Arrows are not displayed if there is only 1 info.

```jsx
import InfosCarrousel from 'cozy-ui/transpiled/react/deprecated/InfosCarrousel'
import Infos from 'cozy-ui/transpiled/react/deprecated/Infos'
import Button from 'cozy-ui/transpiled/react/deprecated/Button'
import Typography from "cozy-ui/transpiled/react/Typography";

// This is necessary for tests to be predictable
const swipeableProps = { disableLazyLoading: true };

<div className='u-stack-m'>
  <InfosCarrousel theme="danger" swipeableProps={swipeableProps}>
    <Infos
      description={<>
        <Typography variant="h6">News 1</Typography>
        <Typography variant="body1">Breaking news 1</Typography>
      </>}
      action={<Button theme="secondary" label="A CTA button" />}
    />
  </InfosCarrousel>
</div>
```
