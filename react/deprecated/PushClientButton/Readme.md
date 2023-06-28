## Push Client Button

Call To Action for downloading Cozy desktop client.

```jsx
import ButtonClient from "cozy-ui/transpiled/react/deprecated/PushClientButton";
import BrowserBraveIcon from "cozy-ui/transpiled/react/Icons/BrowserBrave";
import Variants from "cozy-ui/docs/components/Variants";

const initialVariants = [{ onClick: true, className: false, icon: false }];

<>
  <Variants initialVariants={initialVariants}>
    {variant => (
      <ButtonClient
        label="Download our desktop client"
        href="https://cozy.io"
        onClick={variant.onClick ? () => alert("Clicked!") : undefined}
        className={variant.className ? "u-m-1" : undefined}
        icon={variant.icon ? BrowserBraveIcon : undefined}
      />
    )}
  </Variants>

  {isTesting() ? (
    <>
      <ButtonClient
        label="Button with custom className"
        href="https://cozy.io"
        className="u-m-1"
      />
      <ButtonClient
        label="Button with custom icon"
        href="https://cozy.io"
        icon={BrowserBraveIcon}
      />
    </>
  ) : null}
</>;
```
