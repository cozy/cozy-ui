Component used to show an app status, can be used in a list of apps and connectors in the Home
application.

```
import SquareAppIcon from '.';

<div className='u-flex u-bg-primaryColor' style={{padding: "1em", gap: "1em"}}>
  <SquareAppIcon app="testapp" name="Normal"  />
  <SquareAppIcon app="testapp" name="NoAccount" variant="ghost"  />
  <SquareAppIcon app="testapp" name="Maintenance" variant="maintenance" />
  <SquareAppIcon app="testapp" name="Error" variant="error" />
  <SquareAppIcon name="Add" variant="add" />
</div>
```
