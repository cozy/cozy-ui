Dumb component to display a list of files being uploaded.

On mobile, the list of files being displayed is not shown, only
a small banner is shown.

The popover attribute should be used to automatically layout
the upload queue:

* in a fixed bottom-right position on desktop
* underneath the top-bar on mobile

```jsx
import isTesting from '../helpers/isTesting'
import FileIcon from 'cozy-ui/transpiled/react/Icons/File'
import UploadQueue from 'cozy-ui/transpiled/react/UploadQueue';

const initialState = {
  popover: false
}

const data = {
  queue: [{
    file: { name: 'Photo.jpg', type: 'file' },
    status: 'created'
  }, {
    file: { name: 'Photo - conflict error.jpg', type: 'file' },
    status: 'conflict'
  }, {
    file: { name: 'Photo - quota error.jpg', type: 'file' },
    status: 'quota'
  }, {
    file: { name: 'Photo - network error.jpg', type: 'file' },
    status: 'network'
  }, {
    file: { name: 'Photo - generic failure error.jpg', type: 'file' },
    status: 'failed'
  }, {
    file: { name: 'File with a very long name - really long - 2020/04/16.txt', type: 'file' },
    progress: {
      loaded: 100,
      total: 400,
      speed: 135000,
      remainingTime: 90
    },
    status: 'loading'
  }, {
    file: { name: 'Directory' },
    status: 'pending'
  }],
  doneCount: 1,
  successCount: 1
};

<>
  popover: <input type="checkbox" value={state.popover} onChange={() => setState({ popover: !state.popover })}/>
  <UploadQueue
    lang='fr'
    app='Cozy Drive'
    getMimeTypeIcon={() => FileIcon}
    queue={data.queue}
    doneCount={data.doneCount}
    successCount={data.successCount}
    popover={state.popover}
  />
  {isTesting() && (
    <>
      <UploadQueue
        lang='fr'
        app='Cozy Drive'
        getMimeTypeIcon={() => FileIcon}
        queue={data.queue}
        doneCount={data.queue.length}
        successCount={data.queue.length}
        popover={false}
      />
      <UploadQueue
        lang='fr'
        app='Cozy Drive'
        getMimeTypeIcon={() => FileIcon}
        queue={data.queue}
        doneCount={data.doneCount}
        successCount={data.successCount}
        popover={true}
      />
    </>
  )}
</>
```
