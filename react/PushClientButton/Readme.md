## Push Client Button

Call To Action for downloading Cozy desktop client.

### Basic usage

```
import ButtonClient from 'cozy-ui/transpiled/react/PushClientButton';
<ButtonClient label="Download our desktop client" href="https://cozy.io" />
```

### Options

#### action

You can add a function to `onClick` prop on top of the hyperlink

```
import ButtonClient from 'cozy-ui/transpiled/react/PushClientButton';
<ButtonClient
  label="Download our desktop client"
  href="https://cozy.io"
  onClick={() => alert("Clicked!")}
/>
```

#### className

You can add custom classNames

```
import ButtonClient from 'cozy-ui/transpiled/react/PushClientButton';
<ButtonClient
  label="Download our desktop client"
  href="https://cozy.io"
  className="u-m-1"
/>
```

#### icon

You can add custom icon to `icon` prop

If not defined then `DeviceLaptop` is used as default icon

```
import ButtonClient from 'cozy-ui/transpiled/react/PushClientButton';
import BrowserBraveIcon from 'cozy-ui/transpiled/react/Icons/BrowserBrave';
<ButtonClient
  label="Download our extension"
  href="https://cozy.io"
  className="u-m-1"
  icon={BrowserBraveIcon}
/>
```
