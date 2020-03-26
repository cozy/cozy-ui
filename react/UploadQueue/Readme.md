Dumb component to display a list of files being uploaded.

On mobile, the list of files being displayed is not shown, only
a small banner is shown.

The popover attribute should be used to automatically layout
the upload queue:

- in a fixed bottom-right position on desktop
- underneath the top-bar on mobile  

```
const initialState = {
  popover: false
}

const data = {
  queue: [{
    file: { name: 'Photo.jpg' },
    status: 'created'
  }, {
    file: { name: 'Readme.txt' },
    progress: {
      loaded: 100,
      total: 400
      },
      status: 'loading'
  }, {
    file: { name: 'File.jpg' },
    status: 'pending'
  }],
  doneCount: 1,
  successCount: 1
};

<>
  popover: <input type="checkbox" value={state.popover} onChange={() => setState({ popover: !state.popover })} />
  <UploadQueue
    lang='fr'
    app='Cozy Drive'
    getMimeTypeIcon={() => 'file'}
    queue={data.queue}
    doneCount={data.doneCount}
    successCount={data.successCount}
    popover={state.popover}
  />
</>
```
