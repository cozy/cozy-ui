### React-Virtuoso

```jsx
import VirtualizedTable from 'cozy-ui/transpiled/react/Table/Virtualized'
import { rows, columns } from 'cozy-ui/transpiled/react/Table/Virtualized/helpers'

;

<div style={{ border: "1px solid var(--borderMainColor)", height: 400, width: "100%" }}>
  <VirtualizedTable
    rows={rows}
    columns={columns}
    defaultOrder={columns[0].id}
  />
</div>
```
