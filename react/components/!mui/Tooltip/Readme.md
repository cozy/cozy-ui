### Usage

This component is imported from MUI and has the same API.
Read the original [Tooltip component](https://v4.mui.com/api/tooltip/)
documentation for more information.

```jsx
import Typography from 'cozy-ui/transpiled/react/Typography';
import Icon from 'cozy-ui/transpiled/react/Icon';
import CarbonCopyIcon from 'cozy-ui/transpiled/react/Icons/CarbonCopy';
import Tooltip from 'cozy-ui/transpiled/react/Tooltip';

<Tooltip
  {...(isTesting() && { open: true } )}
  title={
    <>
      <div className="u-flex u-flex-items-center u-mb-half">
        <Icon icon={CarbonCopyIcon} className="u-mr-half" />
        <Typography variant="body1" color="inherit">Carbon copy</Typography>
      </div>
      <Typography variant="caption" color="inherit">
        Indicates whether the document is defined as "authentic and original" by Cozy Cloud, the host of your Cozy, as it can claim that it comes directly from a third-party service, without having undergone any modification.
      </Typography>
    </>
  }>
  <u>hover over me</u>
</Tooltip>
```
