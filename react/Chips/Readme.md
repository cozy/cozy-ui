Chips represent complex entities in small blocks, such as a contact.

### Default

```jsx
import Grid from 'cozy-ui/transpiled/react/Grid'
import Chip from 'cozy-ui/transpiled/react/Chips'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Icon from 'cozy-ui/transpiled/react/Icon'
import FileOutlineIcon from "cozy-ui/transpiled/react/Icons/FileOutline"
import Avatar from 'cozy-ui/transpiled/react/Avatar'
import RightIcon from "cozy-ui/transpiled/react/Icons/Right"
import OpenwithIcon from "cozy-ui/transpiled/react/Icons/Openwith"
import Divider from "cozy-ui/transpiled/react/Divider"
import Variants from 'cozy-ui/docs/components/Variants'

const columns = [{ title: 'default', disabled: false }, { title: 'disabled', disabled: true }]
const initialVariants = [{ default: true, active: false, ghost: false }]

;

<Variants initialVariants={initialVariants} radio={true} screenshotAllVariants>
  {variant => (
    <Grid container>
      {columns.map(column =>
        <Grid item xs={12} sm={6} className="u-mb-1" key={JSON.stringify(column)}>
          <Stack spacing="s">
            <Typography>{Object.values(column)[0]}</Typography>
            <div>
              <Chip
                label="Simple chip"
                disabled={Object.values(column)[1]}
                variant={Object.keys(variant).find(key => variant[key])}
              />
            </div>
            <div>
              <Chip
                icon={<Icon icon={FileOutlineIcon} className="u-ml-half" />}
                label="Clickable chip"
                clickable
                disabled={Object.values(column)[1]}
                variant={Object.keys(variant).find(key => variant[key])}
              />
            </div>
            <div>
              <Chip
                avatar={<Avatar textId="Ada Lovelace" text="AL" size='xsmall' />}
                label="Avatar chip"
                disabled={Object.values(column)[1]}
                variant={Object.keys(variant).find(key => variant[key])}
              />
            </div>
            <div>
              <Chip
                label="Deletable chip"
                clickable
                onDelete={() => alert('You clicked on delete icon')}
                disabled={Object.values(column)[1]}
                variant={Object.keys(variant).find(key => variant[key])}
              />
            </div>
            <div>
              <Chip
                icon={<Icon icon={FileOutlineIcon} className="u-ml-half" />}
                label="Deletable chip with icon"
                clickable
                onDelete={() => alert('You clicked on delete icon')}
                disabled={Object.values(column)[1]}
                variant={Object.keys(variant).find(key => variant[key])}
              />
            </div>
            <div>
              <Chip
                icon={<Icon icon={FileOutlineIcon} className="u-ml-half" />}
                label="1 invoice"
                onClick={() => alert('You clicked')}
                onDelete={() => alert('You clicked on the icon')}
                deleteIcon={<Icon icon={OpenwithIcon} className="u-h-1" />}
                clickable
                disabled={Object.values(column)[1]}
                variant={Object.keys(variant).find(key => variant[key])}
              />
            </div>
            <div>
              <Chip
                className="u-ml-1"
                icon={<Icon icon={FileOutlineIcon} className="u-ml-half" />}
                label="Deletable chip with icon and class"
                clickable
                onDelete={() => alert('You clicked on delete icon')}
                disabled={Object.values(column)[1]}
                variant={Object.keys(variant).find(key => variant[key])}
              />
            </div>
            <div>
              <Chip
                icon={<Icon icon={RightIcon} />}
                disabled={Object.values(column)[1]}
                variant={Object.keys(variant).find(key => variant[key])}
              />
            </div>
          </Stack>
        </Grid>
      )}
    </Grid>
  )}
</Variants>
```

### Colors

```jsx
import Grid from 'cozy-ui/transpiled/react/Grid'
import Chip from 'cozy-ui/transpiled/react/Chips'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Icon from 'cozy-ui/transpiled/react/Icon'
import FileOutlineIcon from "cozy-ui/transpiled/react/Icons/FileOutline"
import Avatar from 'cozy-ui/transpiled/react/Avatar'
import RightIcon from "cozy-ui/transpiled/react/Icons/Right"
import OpenwithIcon from "cozy-ui/transpiled/react/Icons/Openwith"
import Divider from "cozy-ui/transpiled/react/Divider"
import Variants from 'cozy-ui/docs/components/Variants'

const colors = ['success', 'error', 'warning', 'info']
const initialVariants = [{ default: true, active: false, ghost: false }]

;

<Variants initialVariants={initialVariants} radio={true} screenshotAllVariants>
  {variant => (
    <Grid container>
      {colors.map(color =>
        <Grid item xs={12} sm={6} md={3} className="u-mb-1" key={JSON.stringify(color)}>
          <Stack spacing="s">
            <Typography>{color}</Typography>
            <div>
              <Chip
                icon={<Icon icon={FileOutlineIcon} className="u-ml-half" />}
                label="1 invoice"
                onClick={() => alert('You clicked')}
                onDelete={() => alert('You clicked on delete icon')}
                deleteIcon={<Icon icon={OpenwithIcon} className="u-h-1" />}
                clickable
                color={color}
                variant={Object.keys(variant).find(key => variant[key])}
              />
            </div>
            <div>
              <Chip
                icon={<Icon icon={FileOutlineIcon} className="u-ml-half" />}
                label="1 invoice"
                onClick={() => alert('You clicked')}
                onDelete={() => alert('You clicked on delete icon')}
                deleteIcon={<Icon icon={OpenwithIcon} className="u-h-1" />}
                clickable
                color={color}
                disabled
                variant={Object.keys(variant).find(key => variant[key])}
              />
            </div>
          </Stack>
        </Grid>
      )}
    </Grid>
  )}
</Variants>
```
