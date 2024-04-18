Displays a Alert with an Arrow pointing to a direction (top, right, bottom, left). It is essentially based on Alert so it inherits its props and defaultProps.

### Basic usage

```bash
import PointerAlert from 'cozy-ui/transpiled/react/PointerAlert'

<PointerAlert direction="bottom" severity="primary">
  Your PointerAlert content
</PointerAlert>
```

### Demo

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import PointerAlert from 'cozy-ui/transpiled/react/PointerAlert'
import AlertTitle from 'cozy-ui/transpiled/react/AlertTitle'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Icon from 'cozy-ui/transpiled/react/Icon'
import TextField from 'cozy-ui/transpiled/react/TextField'
import Variants from 'cozy-ui/docs/components/Variants'
import DeviceLaptopIcon from 'cozy-ui/transpiled/react/Icons/DeviceLaptop'
import DownloadIcon from 'cozy-ui/transpiled/react/Icons/Download'

const initialVariants = [{
  longText: false,
  title: false,
  block: true,
  color: false,
  largeIcon: false,
  noIcon: false,
  square: false,
  actionOne: true,
  actionTwo: false,
  close: false
}]

const directions = ['top', 'bottom', 'left', 'right']

const initialState = {
  position: '50%'
}
const handleChangePosition = el => {
  setState({ position: el.target.value })
}

;

<DemoProvider>
  <Variants initialVariants={initialVariants} screenshotAllVariants>
    {variant => (
      <>
        <div>
          <TextField
            className="u-mb-1-half"
            type="string"
            margin="dense"
            label="position"
            variant="outlined"
            helperText="Arrow position"
            onChange={handleChangePosition}
            value={state.position}
          />
        </div>
        {directions.map(direction =>
          <div className="u-mb-half" key={direction}>
              <PointerAlert
                direction={direction}
                position={state.position}
                color={variant.color ? "#EFA82D" : undefined}
                block={variant.block}
                square={variant.square}
                icon={variant.noIcon ? false : variant.largeIcon ? <Icon icon={DeviceLaptopIcon} color="var(--errorColor)" size={32} /> : undefined}
                action={(variant.actionOne || variant.actionTwo) ?
                  <>
                    {variant.actionOne &&
                      <Button variant="text" size="small" label="Download" startIcon={<Icon icon={DownloadIcon} />} />
                    }
                    {variant.actionTwo &&
                      <Button variant="text" size="small" label="No, thanks!" />
                    }
                  </>
                  : undefined
                }
                onClose={variant.close ? () => {} : undefined}
              >
                {variant.title && <AlertTitle>This is the title</AlertTitle>}
                {variant.longText
                  ? content.ada.short
                  : "Get Cozy Drive for Desktop and synchronise your files safely to make them accessible at all times."
                }
              </PointerAlert>
          </div>
        )}
      </>
    )}
  </Variants>
</DemoProvider>
```

### Colors

```jsx
import Alert from 'cozy-ui/transpiled/react/Alert'
import AlertTitle from 'cozy-ui/transpiled/react/AlertTitle'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Typography from 'cozy-ui/transpiled/react/Typography'

const colors = ['primary', 'secondary','success', 'error', 'warning', 'info']

const makeButtonColor = color => ['primary', 'secondary'].includes(color) ? undefined : color

;

<>
  {colors.map(color =>
    <div className="u-mb-half" key={color}>
      <PointerAlert
        severity={color}
        action={<Button variant="text" size="small" color={makeButtonColor(color)} label="ACTION" />}
      >
        <AlertTitle>{color}</AlertTitle>
        This is a {color} alert
      </PointerAlert>
    </div>
  )}

  <hr />
  <Typography variant="h4" paragraph>Filled variant</Typography>

  {colors.map(color =>
    <div className="u-mb-half" key={color}>
      <PointerAlert
        variant="filled"
        severity={color}
        action={
          <Button
            variant='text'
            style={{ color: `var(--${color}ContrastTextColor)` }}
            size="small"
            label="ACTION"
          />}
      >
        <AlertTitle>{color}</AlertTitle>
        This is a {color} alert
      </PointerAlert>
    </div>
  )}

  <hr />
  <Typography variant="h4" paragraph>Outlined variant</Typography>

  {colors.map(color =>
    <div className="u-mb-half" key={color}>
      <PointerAlert
        variant="outlined"
        severity={color}
        action={<Button variant="text" size="small" color={makeButtonColor(color)} label="ACTION" />}
      >
        <AlertTitle>{color.toUpperCase()}</AlertTitle>
        This is a {color} alert
      </PointerAlert>
    </div>
  )}
</>
```
