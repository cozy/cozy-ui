```jsx
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell
} from 'cozy-ui/transpiled/react/Table';

const cellStyles = { flexGrow: 1 };

<Table>
  <TableHead>
    <TableRow>
      <TableHeader style={cellStyles}>Firstname</TableHeader>
      <TableHeader style={cellStyles}>Lastname</TableHeader>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell style={cellStyles}>Claude</TableCell>
      <TableCell style={cellStyles}>Douillet</TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={cellStyles}>Isabelle</TableCell>
      <TableCell style={cellStyles}>Durand</TableCell>
    </TableRow>
  </TableBody>
</Table>
```
