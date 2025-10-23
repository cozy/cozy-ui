### Basic usage

```bash
import CircularChart from 'cozy-ui/transpiled/react/CircularChart'

<CircularChart primaryProps={{ value: 70 }} secondaryProps={{ value: 30 }}>
  {children}
</CircularChart>
```

### Demo

```jsx
import CircularChart from 'cozy-ui/transpiled/react/CircularChart'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Box from 'cozy-ui/transpiled/react/Box'
import Grid from 'cozy-ui/transpiled/react/Grid'
import Icon from 'cozy-ui/transpiled/react/Icon'
import BikeIcon from 'cozy-ui/transpiled/react/Icons/Bike'

;

<Grid container>

  <Grid item xs={12} sm={6} className="u-mb-1">
    <div>
      <CircularChart
        primaryProps={{ value: 70 }}
      >
        {isTesting()
          ? <Icon icon={BikeIcon} size={72} />
          : <Box fontSize="4.5rem">🚴</Box>
        }
      </CircularChart>
    </div>
    <div>
      <CircularChart
        size="medium"
        primaryProps={{ value: 70 }}
      >
        {isTesting()
          ? <Icon icon={BikeIcon} size={48} />
          : <Box fontSize="3rem">🚴</Box>
        }
      </CircularChart>
    </div>
    <div>
      <CircularChart
        size="small"
        primaryProps={{ value: 70 }}
      >
        {isTesting()
          ? <Icon icon={BikeIcon} size={40} />
          : <Box fontSize="2.5rem">🚴</Box>
        }
      </CircularChart>
    </div>
  </Grid>

  <Grid item xs={12} sm={6} className="u-mb-1">
    <div>
      <CircularChart
        primaryProps={{ value: 70 }}
        secondaryProps={{ value: 30 }}
      >
        {isTesting()
          ? <Icon icon={BikeIcon} size={72} />
          : <Box fontSize="4.5rem">🚴</Box>
        }
      </CircularChart>
    </div>
    <div>
      <CircularChart
        size="medium"
        primaryProps={{ value: 70 }}
        secondaryProps={{ value: 30 }}
      >
        {isTesting()
          ? <Icon icon={BikeIcon} size={48} />
          : <Box fontSize="3rem">🚴</Box>
        }
      </CircularChart>
    </div>
    <div>
      <CircularChart
        size="small"
        primaryProps={{ value: 70 }}
        secondaryProps={{ value: 30 }}
      >
        {isTesting()
          ? <Icon icon={BikeIcon} size={40} />
          : <Box fontSize="2.5rem">🚴</Box>
        }
      </CircularChart>
    </div>
  </Grid>

</Grid>
```

### Fully customised

```jsx
import CircularChart from 'cozy-ui/transpiled/react/CircularChart'
import Typography from 'cozy-ui/transpiled/react/Typography'

;

<>
  <CircularChart
    primaryProps={{
      value: 70,
      color: '#BA5AE8',
      backgroundColor: '#BA5AE83D',
      size: 200,
      thickness: 3
    }}
    secondaryProps={{
      value: 30,
      color: '#F1B61E',
      backgroundColor: '#F1B61E3D',
      size: 165,
      thickness: 0.75
    }}
  >
    <Typography variant="h3">Main title</Typography>
    <Typography>secondary text</Typography>
  </CircularChart>
</>
```
