`HistoryRow` is used to display the different versions of a file

```jsx
import HistoryRow from "cozy-ui/transpiled/react/HistoryRow";

<>
  <HistoryRow
    tag="Current Version"
    primaryText="12/12/12 12:12"
    secondaryText="10ko"
    downloadLink={() => {
      alert("download");
    }}
  />
  <HistoryRow
    primaryText="12/12/12 12:10"
    secondaryText="9ko"
    downloadLink={() => {
      alert("download");
    }}
  />
  <HistoryRow
    primaryText="12/12/12 12:09"
    secondaryText="9ko"
    tag="V2"
    downloadLink={() => {
      alert("download");
    }}
  />
  <HistoryRow
    primaryText="12/12/12 12:07"
    secondaryText="9ko"
    downloadLink={() => {
      alert("download");
    }}
  />
  <HistoryRow
    primaryText="12/12/12 12:05"
    secondaryText="9ko"
    downloadLink={() => {
      alert("download");
    }}
  />
  <HistoryRow
    primaryText="12/12/12 12:04"
    secondaryText="9ko"
    downloadLink={() => {
      alert("download");
    }}
  />
  <HistoryRow
    primaryText="12/12/12 12:03"
    secondaryText="9ko"
    tag="V1"
    downloadLink={() => {
      alert("download");
    }}
  />
</>;
```
