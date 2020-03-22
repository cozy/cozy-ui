```
const state = {
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

<UploadQueue
  lang='fr'
  app='Cozy Drive'
  getMimeTypeIcon={() => 'file'}
  queue={state.queue}
  doneCount={state.doneCount}
  successCount={state.successCount}
  popover={false}
/>
```
