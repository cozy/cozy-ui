```jsx
import { Figure } from 'cozy-ui/transpiled/react/Figure';
import I18n from 'cozy-ui/transpiled/react/I18n';
import Button from 'cozy-ui/transpiled/react/Button';

initialState = { locale: 'fr' };

<I18n lang={state.locale} dictRequire={() => {}}>
  <Button label='en locale' onClick={() => setState({ locale: 'en' })} />
  <Button label='fr locale' onClick={() => setState({ locale: 'fr' })} />
  locale: { state.locale }<br/>
  <p>
    <Figure
      total={100000}
      symbol='€'
      signed
      coloredPositive coloredNegative signed />
    <Figure
      total={-100000}
      symbol='€'
      signed
      coloredPositive coloredNegative signed />

    <Figure
      total={-100000}
      symbol='€'
      signed />
  </p>
</I18n>
```
