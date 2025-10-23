Displays a customizable input file. It's a wrapper of `input[type=file]` and
props will be passed to it (so you can use `accept`, `multiple` an
others to alter its behavior).

### Default

```jsx
import FileInput from 'cozy-ui/transpiled/react/FileInput';
<FileInput className="file-selector" onChange={console.log}>
  <span role="button">Click me to choose file</span>
</FileInput>
```

You render what you want:

```jsx
import FileInput from 'cozy-ui/transpiled/react/FileInput';
import Icon from 'cozy-ui/transpiled/react/Icon';
import FileIcon from "cozy-ui/transpiled/react/Icons/File";
<FileInput onChange={console.log}>
  <Icon icon={FileIcon} role="button" />
</FileInput>
```

### Multiple files

```jsx
import FileInput from 'cozy-ui/transpiled/react/FileInput';
<FileInput multiple onChange={console.log}>
  <span role="button">Click me to choose files</span>
</FileInput>
```

### Only accept images

```jsx
import FileInput from 'cozy-ui/transpiled/react/FileInput';
<FileInput accept="image/*" multiple onChange={console.log}>
  <span>Click me to choose an image</span>
</FileInput>
```

### Simple input file

If you want a classic input file, just set `hidden` prop to `false`:

```jsx
import FileInput from 'cozy-ui/transpiled/react/FileInput';
<FileInput hidden={false} onChange={console.log} />
```
