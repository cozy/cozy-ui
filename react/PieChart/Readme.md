#### PieChart

```jsx
import Grid from 'cozy-ui/transpiled/react/Grid'
import PieChart from 'cozy-ui/transpiled/react/PieChart'

;

<Grid container>
  <Grid item xs={12} sm={6}>
    <PieChart
      single={true}
      primaryText="60 %"
      secondaryText="of the total"
      data={{
        labels: ['Health'],
        datasets: [{ data: [60, 40] }]
      }}
      options={{
        plugins: {
          tooltip: {
            callbacks: {
              label: tooltipItems => `${tooltipItems.label}: ${tooltipItems.raw}%`
            }
          }
        }
      }}
    />
  </Grid>
  <Grid item xs={12} sm={6}>
    <PieChart
      primaryText="105 €"
      secondaryText="on the period"
      data={{
        labels: ['Earnings', 'Children', 'Sports', 'Housing', 'Health'],
        datasets: [{
          data: [40, 30, 20, 10, 5],
          backgroundColor: ['#8978FF', '#FF7B5E', '#F85AA8', '#F1B61E', '#15CACD']
        }]
      }}
      options={{
        plugins: {
          tooltip: {
            callbacks: {
              label: tooltipItems => `${tooltipItems.label}: ${tooltipItems.raw}€`
            }
          }
        }
      }}
    />
  </Grid>
</Grid>
```
