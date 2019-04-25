```
const DemoProvider = require('./docs/DemoProvider').default;
const Overlay = require('../Overlay').default;

const files = [
  {
    _id: 'pdf',
    class: 'pdf',
    name: 'simple.pdf',
    mime: 'application/pdf'
  },
  {
    _id: 'text',
    class: 'text',
    name: 'simple.txt',
    mime: 'text/plain'
  },
  {
    _id: 'audio',
    class: 'audio',
    name: 'sample/mp3',
    mime: 'audio/mp3'
  },
  {
    _id: 'image',
    class: 'image',
    name: 'test.jpg',
    mime: 'image/jpg'
  },
];

initialState = {
  viewerOpened: false,
  currentFileIndex: 0
};

const openViewer = () => setState({ viewerOpened: true });
const closeViewer = () => setState({ viewerOpened: false });
const onFileChange = (file, nextIndex) => setState({ currentFileIndex: nextIndex });

<div>
  <DemoProvider>
    <button onClick={openViewer}>
      Open viewer
    </button>
    { state.viewerOpened &&
      <Overlay>
        <Viewer files={files} currentIndex={state.currentFileIndex} onClose={closeViewer} onChange={onFileChange} />
      </Overlay>
    }
  </DemoProvider>
</div>
```
