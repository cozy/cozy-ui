## Push Client Banner

Banner to advertise for Cozy desktop client.

### Basic usage

```
import BannerClient from 'cozy-ui/transpiled/react/PushClientBanner';
<BannerClient
  text="Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times."
  hrefMobile="https://cozy.io"
  hrefDesktop="https://cozy.io"
  labelMobile="Get Cozy Drive on your mobile!"
  labelDesktop="Download"
/>
```

### Options

#### action

You can add a function to `onClick` prop on top of the hyperlink

```
import BannerClient from 'cozy-ui/transpiled/react/PushClientBanner';
<BannerClient
  text="Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times."
  hrefMobile="https://cozy.io"
  hrefDesktop="https://cozy.io"
  labelMobile="Get Cozy Drive on your mobile!"
  labelDesktop="Download"
  onClick={() => alert("Clicked!")}
/>
```
