### Infos Carrousel

Displays several Infos component in a Carrousel. [react-swipeable-views](https://react-swipeable-views.com/) is used under the hood and can be configured.

```
import InfosCarrousel from 'cozy-ui/transpiled/react/InfosCarrousel'
import Infos from 'cozy-ui/transpiled/react/Infos'
import Button from 'cozy-ui/transpiled/react/Button'
import Text, { SubTitle } from 'cozy-ui/transpiled/react/Text'

// This is necessary for tests to be predictable
const swipeableProps = { disableLazyLoading: true };

<div className='u-stack-m'>
  <InfosCarrousel theme="danger" swipeableProps={swipeableProps}>
    <Infos
      description={<>
        <SubTitle>News 1</SubTitle>
        <Text>Breaking news 1</Text>
      </>}
      action={<Button theme="secondary" label="A CTA button" />}
    />
    <Infos
      description={<>
        <SubTitle>News 2</SubTitle>
        <Text>Breaking news 2</Text>
      </>}
      theme="primary"
      action={<Button theme="secondary" label="A CTA button" />}
    />
  </InfosCarrousel>
</div>
```

Arrows are not displayed if there is only 1 info.

```
import InfosCarrousel from 'cozy-ui/transpiled/react/InfosCarrousel'
import Infos from 'cozy-ui/transpiled/react/Infos'
import Button from 'cozy-ui/transpiled/react/Button'
import Text, { SubTitle } from 'cozy-ui/transpiled/react/Text'

// This is necessary for tests to be predictable
const swipeableProps = { disableLazyLoading: true };

<div className='u-stack-m'>
  <InfosCarrousel theme="danger" swipeableProps={swipeableProps}>
    <Infos
      description={<>
        <SubTitle>News 1</SubTitle>
        <Text>Breaking news 1</Text>
      </>}
      action={<Button theme="secondary" label="A CTA button" />}
    />
  </InfosCarrousel>
</div>
```
