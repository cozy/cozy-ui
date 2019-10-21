The `Viewer` component can be used to display the content of various file types. In order to download and display the files, it will need a `cozy-client` instance in the React context.

Once rendered, the `Viewer` will take up all the available space in it's container (using `position: absolute`). It can be paired with the `Overlay` component to take up the whole screen.

```
import Viewer from 'cozy-ui/transpiled/react/Viewer';
// The DemoProvider inserts a fake cozy-client in the React context.
import DemoProvider from './docs/DemoProvider';
import Overlay from 'cozy-ui/transpiled/react/Overlay';

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
          showNavigation={true}
          showToolbar={true}
        />
      </Overlay>
    }
  </DemoProvider>
</div>
```

### Using a worker for pdfjs

For performance reasons, it is important to use a web worker when showing PDF files in the viewer. If you use webpack, you should add the following alias in your configuration :

```diff
+ resolve: {
+   alias: {
+     'react-pdf$' : 'react-pdf/dist/entry.webpack.js'
+   }
+ }
```

With this alias, a specific JS file for the worker will be created in the build directory. By design, this directory is only accessible (ie. served by the stack) if you are logged in. If you need the viewer on a public page, you must tell webpack to create the worker in a public folder, that will be served by the stack even if the user is not logged in.

One way to do this is to explicitly load the web worker in your application like this:

```js static
import createWorker from 'react-pdf/dist/pdf.worker.entry.js'
import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerPort = createWorker()
```

And then configure the [webpack worker-loader](https://github.com/webpack-contrib/worker-loader) to output the file in a publicly served directory:

```js static
{
  test: /\.worker\.entry\.js$/,
  issuer: { not: [/node_modules\//] }, // only for the worker loaded by the app, leave the workers created by dependencies alone
  use: [{
    loader: 'worker-loader',
    options: {
      name: 'public-folder/[name].[hash].worker.js'
    }
  }]
}
```

### Only works with React

The `Viewer` can be used only in a `React` Application. You can't use it with `Preact`.
