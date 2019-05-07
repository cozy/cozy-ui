The `Viewer` component can be used to display the content of various file types.

In order to download and display the files, it will need a `cozy-client` instance in the React context. It also requires a `t` function in the context to provide translations, as well as the following translated string identifiers:

- `Viewer.error`: When a file can't be loaded.
- `Viewer.retry`: Button label to retry loading a file.
- `Viewer.download`: Download the current file.
- `Viewer.close`: ARIA label for the close button.

Once rendered, the `Viewer` will take up all the available space in it's container (using `position: absolute`). It can be paired with the `Overlay` component to take up the whole screen.


```
// The DemoProvider inserts a fake cozy-client and t function in the React context.
const DemoProvider = require('./docs/DemoProvider').default;
const Overlay = require('../Overlay').default;

// We provide a collection of (fake) io.cozy.files to be rendered
const files = [
  {
    _id: 'audio',
    class: 'audio',
    name: 'sample.mp3',
    mime: 'audio/mp3'
  },
  {
    _id: 'pdf',
    class: 'pdf',
    name: 'demo.pdf',
    mime: 'application/pdf'
  },
  {
    _id: 'text',
    class: 'text',
    name: 'demo.txt',
    mime: 'text/plain'
  },
  {
    _id: 'image',
    class: 'image',
    name: 'demo.jpg',
    mime: 'image/jpg'
  },
  {
    _id: 'none',
    class: 'unknown',
    name: 'Unsupported file type',
    mime: '???/???'
  }
];

// The host app will usually need a small wrapper to display the Viewer. This is a very small example of such a wrapper that handles opening, closing, and navigating between files.
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
        <Viewer
          files={files}
          currentIndex={state.currentFileIndex}
          onCloseRequest={closeViewer}
          onChangeRequest={onFileChange}
          showNavigation={false}
          showToolbar={true}
        />
      </Overlay>
    }
  </DemoProvider>
</div>
```
