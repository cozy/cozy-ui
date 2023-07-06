FilePicker allows you to select a file or folder in Drive

```jsx
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy'
import Button from 'cozy-ui/transpiled/react/deprecated/Button'
import FilePicker from 'cozy-ui/transpiled/react/FilePicker'
import Variants from 'cozy-ui/docs/components/Variants'
import DemoProvider from './docs/DemoProvider';

initialState = {
  filePickerOpened: isTesting()
};

const initialVariants = [
  { acceptFileTXT: false, acceptFileMD: false, acceptFolder: false, multiple: false }
];

const toggleFilePicker = () => setState({ filePickerOpened: !state.filePickerOpened });
const onChange = (fileId) => alert(`ID of file selected : [${fileId}]`);
<DemoProvider>
  <Variants initialVariants={initialVariants} screenshotAllVariants>
    {variant => {
      const acceptRule = []
      if (variant.acceptFileMD) {
        acceptRule.push('.md')
      }
      if (variant.acceptFileTXT) {
        acceptRule.push('.txt')
      }
      if (variant.acceptFolder) {
        acceptRule.push('folder')
      }

      return (
        <>
          <button onClick={toggleFilePicker}>Open FilePicker</button>
          {state.filePickerOpened && (
            <FilePicker
              onClose={toggleFilePicker}
              onChange={onChange}
              accept={acceptRule.toString()}
              multiple={variant.multiple}
            />
          )}
        </>
      )
    }}
  </Variants>
</DemoProvider>
```
