The `Viewer` component can be used to display the content of various file types.

Once rendered, the `Viewer` will take up all the available space in it's container (using `position: absolute`). It can be paired with the `Overlay` component to take up the whole screen.

The `Viewer` can display an **information panel** to show additional information about the current file (e.g. whether a file is certified).

### ⚠️ Important

* In order to download and display the files, it will need a `cozy-client` instance in the React context.
* To have the panels, the app need to have [cozy-harvest-lib](https://github.com/cozy/cozy-libs/tree/master/packages/cozy-harvest-lib) installed
* To have a working footer, the app need to have a [CozySharing Provider](https://github.com/cozy/cozy-libs/tree/master/packages/cozy-sharing).
* If the footer will be used on MobileApp, the app should have this Cordova plugin [4db7f8f#diff-8c7901258747b81ed60cc2d9cbb254344fae11f8a602e56c1ae42d9eef11d318R50](https://github.com/cozy/cozy-ui/commit/4db7f8fba866bffe04d81d42c716a8dea5c50157#diff-8c7901258747b81ed60cc2d9cbb254344fae11f8a602e56c1ae42d9eef11d318R50)

### Props

* **files** : `<array>` – One or more `io.cozy.files` to display
* **currentIndex** : `<number>` – Index of the file to show
* **currentURL** : `<string>` – Optionnal URL of the file
* **className** : `<string>` – CSS classes
* **toolbarProps** : `<object>` – Toolbar properties
  * **toolbarRef** : `<object>` – React reference of the toolbar node
  * **showToolbar** : `<boolean>` – Whether to show the toolbar or not. Note that the built-in close button is in the toolbar
  * **showClose** : `<boolean>` – Whether to show close button in toolbar
* **showNavigation** : `<boolean>` – Whether to show left and right arrows to navigate between files
* **renderFallbackExtraContent** : `<function>` – A render prop that is called when a file can't be displayed
* **onlyOfficeProps** : `<object>` – Used to open an Only Office file (deprecated)
* **disablePanel** : `<boolean>` – Show/Hide the panel containing more information about the file only on Desktop
* **disableFooter** : `<boolean>` – Show/Hide the panel containing more information about the file only on Phone & Tablet devices
* **editPathByModelProps** : `<object>` – Edit path by model properties
  * **information** : `<string>` – URL used to edit the file when editing a `information` type metadata (text, date)
  * **page** : `<string>` – URL used to edit the file when editing a `page` type metadata (side of the document)
* **onChangeRequest** : `<function>` - Called with (nextFile, nextIndex) when the user requests to navigate to another file
* **onCloseRequest** : `<function>` - Called when the user wants to leave the Viewer
* **componentsProps** : `<object>` – Props passed to components with the same name
  * **OnlyOfficeViewer** : `<object>` – Used to open an Only Office file
    * **isEnabled** : `<boolean>` – Whether Only Office is enabled on the server
    * **opener** : `<function>` – To open the Only Office file

### Demo

```jsx
import cx from 'classnames'
import { makeStyles } from 'cozy-ui/transpiled/react/styles'
import Variants from 'cozy-ui/docs/components/Variants'
import Card from 'cozy-ui/transpiled/react/Card'
import Checkbox from 'cozy-ui/transpiled/react/Checkbox'
import Viewer from 'cozy-ui/transpiled/react/Viewer'
import Stack from 'cozy-ui/transpiled/react/Stack'
import Paper from 'cozy-ui/transpiled/react/Paper'
import Typography from 'cozy-ui/transpiled/react/Typography'
import { Media, Img, Bd } from 'cozy-ui/transpiled/react/Media'
import Icon from 'cozy-ui/transpiled/react/Icon'
import CarbonCopyIcon from 'cozy-ui/transpiled/react/Icons/CarbonCopy'
// The DemoProvider inserts a fake cozy-client in the React context.
import DemoProvider from './docs/DemoProvider'
import Overlay from 'cozy-ui/transpiled/react/Overlay'
import Button from 'cozy-ui/transpiled/react/Buttons'
import DownloadIcon from 'cozy-ui/transpiled/react/Icons/Download'
import ShareIcon from 'cozy-ui/transpiled/react/Icons/Share'
import { isValidForPanel } from 'cozy-ui/transpiled/react/Viewer/helpers'
import getPanelBlocks, { panelBlocksSpecs } from 'cozy-ui/transpiled/react/Viewer/Panel/getPanelBlocks'
import FooterActionButtons from 'cozy-ui/transpiled/react/Viewer/Footer/FooterActionButtons'
import ForwardOrDownloadButton from 'cozy-ui/transpiled/react/Viewer/Footer/ForwardOrDownloadButton'

// We provide a collection of (fake) io.cozy.files to be rendered
const files = [
  {
    _id: 'audio',
    class: 'audio',
    name: 'Sample.mp3',
    mime: 'audio/mp3'
  },
  {
    _id: 'slide',
    class: 'slide',
    name: 'Slide.pptx',
    mime: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  },
  {
    _id: 'pdf',
    class: 'pdf',
    name: 'My vehicle registration.pdf',
    mime: 'application/pdf',
    metadata: {
      carbonCopy: true,
      AObtentionDate: null,
      BObtentionDate: "2022-02-09T09:05:38.000Z",
      CObtentionDate: null,
      DObtentionDate: null,
      datetime: "2022-09-23T07:50:22.000Z",
      datetimeLabel: "BObtentionDate",
      number: "",
      page: "front",
      qualification: {
        label: "driver_license",
        purpose: "attestation",
        sourceCategory: "gov",
        sourceSubCategory: "transport",
        subjects: ["permit", "driving"]
      }
    }
  },
  {
    _id: 'text',
    class: 'text',
    name: 'LoremipsumdolorsitametconsecteturadipiscingelitSednonrisusSuspendisselectustortordignissimsitametadipiscingnecultriciesseddolorCraselementumultricesdiamMaecenasligulamassavariusasempercongueeuismodnonmiProinporttitororcinecnonummymolestieenimesteleifendminonfermentumdiamnislsitameteratDuissemperDuisarcumassascelerisquevitaeconsequatinpretiumaenimPellentesquecongueUtinrisusvolutpatliberopharetratemporCrasvestibulumbibendumauguePraesentegestasleoinpedePraesentblanditodioeuenimPellentesquesedduiutaugueblanditsodalesVestibulumanteipsumprimisinfaucibusorciluctusetultricesposuerecubiliaCuraeAliquamnibhMaurisacmaurissedpedepellentesquefermentumMaecenasadipiscingantenondiamsodaleshendrerit.txt',
    mime: 'text/plain',
    metadata: {
      datetime: "2022-01-01T12:00:00.000Z",
      datetimeLabel: "datetime",
      qualification: {
        label: 'tax_notice'
      }
    }
  },
    {
    _id: 'text',
    class: 'text',
    name: 'encrypted-example.txt',
    mime: 'text/plain',
    encrypted: true
  },

  {
    _id: 'image',
    class: 'image',
    name: 'Demo.jpg',
    mime: 'image/jpg',
    metadata: {
      carbonCopy: true,
      electronicSafe: true,
      referencedDate: new Date(Date.now() - 357 * 24 * 60 * 60 * 1000).toISOString(),
      datetimeLabel: "referencedDate",
      qualification: {
        label: 'personal_sporting_licence'
      }
    }
  },
  {
    _id: 'none',
    class: 'unknown',
    name: 'Unsupported file type',
    mime: '???/???'
  }
]

const ShareButtonFake = () => {
  return (
    <Button
      label="Share"
      className="u-w-100 u-ml-0 u-mr-0"
      variant="secondary"
      startIcon={<Icon icon={ShareIcon} />}
      onClick={() => {
        return alert("This is a demo, there's no actual Cozy to share the file from ¯\\_(ツ)_/¯")
      }}
    />
  )
}

// The host app will usually need a small wrapper to display the Viewer. This is a very small example of such a wrapper that handles opening, closing, and navigating between files.
initialState = {
  viewerOpened: isTesting(),
  currentIndex: 0,
  showToolbarCloseButton: true
}

const initialVariants = [
  { navigation: true, toolbar: true, onlyOfficeEnabled: true }
]

const getURL = (file) => {
  if (file.encrypted && file.class === 'text') {
    const text = 'Well, hello there. This file is served through an URL'
    const textBlob = new Blob([text], {
      type: 'text/plain'
    })
    return URL.createObjectURL(textBlob)
  }
  return null
}

const toggleViewer = () => setState({ viewerOpened: !state.viewerOpened })
const handleToggleToolbarClose = () => setState({ showToolbarCloseButton: !state.showToolbarCloseButton })
const onFileChange = (file, nextIndex) => setState({ currentIndex: nextIndex, currentURL: getURL(file) })
const editPathByModelProps = {
  information: `#!/Viewer?metadata=__NAME__`,
  page: `#!/Viewer`
}

;

<DemoProvider>
  <Variants initialVariants={initialVariants}>{
      variant => (
        <>
          {variant.toolbar && (
            <Card className="u-mb-1">
              <div className="u-dib u-mr-1">Toolbar props :</div>
              <Checkbox
                className="u-dib"
                label="Close"
                checked={state.showToolbarCloseButton}
                onChange={handleToggleToolbarClose}
              />
            </Card>
          )}
          <Button label="Open viewer" variant="ghost" size="small" onClick={toggleViewer} />
          {state.viewerOpened && (
            <Overlay>
              <Viewer
                files={files}
                currentIndex={state.currentIndex}
                currentURL={state.currentURL}
                showNavigation={variant.navigation}
                editPathByModelProps={editPathByModelProps}
                toolbarProps={{
                  showToolbar: variant.toolbar,
                  showClose: state.showToolbarCloseButton
                }}
                onCloseRequest={toggleViewer}
                onChangeRequest={onFileChange}
                componentsProps={{
                  OnlyOfficeViewer: {
                    isEnabled: variant.onlyOfficeEnabled,
                    opener: () => alert('This is a demo, no Only Office opener here')
                  }
                }}
              >
                <FooterActionButtons>
                  <ShareButtonFake />
                  <ForwardOrDownloadButton />
                </FooterActionButtons>
              </Viewer>
            </Overlay>
          )}
        </>
      )
    }
  </Variants>
</DemoProvider>
```

### Using a worker for pdfjs

For performance reasons, it is important to use a web worker when showing PDF files in the viewer. If you use webpack, you should add the following alias in your configuration :

```diff
+ resolve: {
+   alias: {
+     'react-pdf$' : 'react-pdf/dist/esm/entry.webpack'
+   }
+ }
```

With this alias, a specific JS file for the worker will be created in the build directory. By design, this directory is only accessible (ie. served by the stack) if you are logged in. If you need the viewer on a public page, you must tell webpack to create the worker in a public folder, that will be served by the stack even if the user is not logged in.

One way to do this is to explicitly load the web worker in your application like this:

```js static
import createWorker from 'react-pdf/dist/esm/pdf.worker.entry';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerPort = createWorker();
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

### Special case: client-side encrypted files

When a file is client-side encrypted, it is not possible to get the download link from the server anymore.
Hence, an additional `currentURL` prop must be eventually given to the `<Viewer>`. This URL is the decrypted
file, asynchronously provided by the app.
