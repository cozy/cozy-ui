This component is used to display a customizable input file. It's just a wrapper of input[type=file] and props will be passed to it (so you can use `accept`, `multiple` and others to alter its behavior).

### Default

```jsx
<FileInput className="file-selector" onChange={console.log}>
  <span role="button">Click me to choose file</span>
</FileInput>
```

You render what you want:

```jsx
<FileInput onChange={console.log}>
  <Icon icon="file" role="button" />
</FileInput>
```

### Multiple files

```jsx
<FileInput multiple onChange={console.log}>
  <span role="button">Click me to choose files</span>
</FileInput>
```

### Only accept images

```jsx
<FileInput accept="image/*" multiple onChange={console.log}>
  <span>Click me to choose an image</span>
</FileInput>
```

### Simple input file

If you want a classic input file, just set `hidden` prop to `false`:

```jsx
<FileInput hidden={false} onChange={console.log} />
```
