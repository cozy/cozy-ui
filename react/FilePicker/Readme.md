FilePicker allows you to select a file or folder in Drive

```jsx
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy'
import Button from 'cozy-ui/transpiled/react/Button'
import FilePicker from 'cozy-ui/transpiled/react/FilePicker'
import Variants from 'cozy-ui/docs/components/Variants'
import DemoProvider from './docs/DemoProvider';

initialState = {
  filePickerOpened: isTesting()
};

const initialVariants = [
  { acceptFile: true, acceptFolder: false, multiple: false }
];

const toggleFilePicker = () => setState({ filePickerOpened: !state.filePickerOpened });
const onChange = (fileId) => alert(`ID of file selected : [${fileId}]`);
<DemoProvider>
  <Variants initialVariants={initialVariants} screenshotAllVariants>
    {variant => {
      let acceptRule = ''
      if (variant.acceptFile) {
        acceptRule = 'file'
        if (variant.acceptFolder) {
          acceptRule = 'file,folder'
        }
      }
      if (variant.acceptFolder) {
        acceptRule = 'folder'
        if (variant.acceptFile) {
          acceptRule = 'folder,file'
        }
      }

      return (
        <>
          <button onClick={toggleFilePicker}>Open FilePicker</button>
          {state.filePickerOpened && (
            <FilePicker
              onClose={toggleFilePicker}
              onChange={onChange}
              accept={acceptRule}
              multiple={variant.multiple}
            />
          )}
        </>
      )
    }}
  </Variants>
</DemoProvider>
```
