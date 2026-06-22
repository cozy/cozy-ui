```jsx
import Alert from 'cozy-ui/transpiled/react/Alert'
import AlertTitle from 'cozy-ui/transpiled/react/AlertTitle'
import Button from 'cozy-ui/transpiled/react/Buttons'
import { DeviceLaptop, Dots, Download, Icon } from '@linagora/twake-icons'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import ListItemIcon from 'cozy-ui/transpiled/react/ListItemIcon'
import Variants from 'cozy-ui/docs/components/Variants'

const initialVariants = [{
  longText: false,
  title: false,
  block: false,
  color: false,
  largeIcon: false,
  noIcon: false,
  square: false,
  actionOne: false,
  actionTwo: false,
  actionThree: false,
  filled: false,
  close: false
}]

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <Alert
      color={variant.color ? "#EFA82D" : undefined}
      variant={variant.filled ? 'filled' : undefined}
      block={variant.block}
      square={variant.square}
      icon={variant.noIcon ? false : variant.largeIcon ? <Icon icon={DeviceLaptop} color="var(--errorColor)" size={32} /> : undefined}
      action={(variant.actionOne || variant.actionTwo || variant.actionThree) ?
        <>
          {variant.actionOne &&
            <Button variant="text" size="small" label="Download" startIcon={<Icon icon={Download} />} />
          }
          {variant.actionTwo &&
            <Button variant="text" size="small" label="No, thanks!" />
          }
          {variant.actionThree &&
            <ListItemIcon>
              <IconButton>
                <Icon icon={Dots} />
              </IconButton>
            </ListItemIcon>
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
    </Alert>
  )}
</Variants>
```

### Colors

```jsx
import Alert from 'cozy-ui/transpiled/react/Alert'
import AlertTitle from 'cozy-ui/transpiled/react/AlertTitle'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Variants from 'cozy-ui/docs/components/Variants'

const colors = ['primary', 'secondary','success', 'error', 'warning', 'info']
const initialVariants = [{ title: true, block: false, close: false }]

const makeButtonColor = color => ['primary', 'secondary'].includes(color) ? undefined : color

;

<Variants initialVariants={initialVariants} screenshotAllVariants>
  {variant => (
    <>
      {colors.map(color =>
        <div className="u-mb-1" key={color}>
          <Alert
            severity={color}
            block={variant.block}
            action={variant.close ? undefined : (
              <Button variant="text" size="small" color={makeButtonColor(color)} label="ACTION" />
            )}
            onClose={variant.close ? () => {} : undefined}
          >
            {variant.title && <AlertTitle>{color}</AlertTitle>}
            This is a {color} alert
          </Alert>
        </div>
      )}

      <hr />
      <Typography variant="h4" paragraph>Filled variant</Typography>

      {colors.map(color =>
        <div className="u-mb-1" key={color}>
          <Alert
            variant="filled"
            severity={color}
            block={variant.block}
            action={variant.close ? undefined : (
              <Button
                variant='text'
                style={{ color: `var(--${color}ContrastTextColor)` }}
                size="small"
                label="ACTION"
              />
            )}
            onClose={variant.close ? () => {} : undefined}
          >
            {variant.title && <AlertTitle>{color}</AlertTitle>}
            This is a {color} alert
          </Alert>
        </div>
      )}

      <hr />
      <Typography variant="h4" paragraph>Outlined variant</Typography>

      {colors.map(color =>
        <div className="u-mb-1" key={color}>
          <Alert
            variant="outlined"
            severity={color}
            block={variant.block}
            action={variant.close ? undefined : (
              <Button variant="text" size="small" color={makeButtonColor(color)} label="ACTION" />
            )}
            onClose={variant.close ? () => {} : undefined}
          >
            {variant.title && <AlertTitle>{color}</AlertTitle>}
            This is a {color} alert
          </Alert>
        </div>
      )}
    </>
  )}
</Variants>
```
