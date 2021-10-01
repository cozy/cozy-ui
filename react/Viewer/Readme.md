The `Viewer` component can be used to display the content of various file types. In order to download and display the files, it will need a `cozy-client` instance in the React context.

Once rendered, the `Viewer` will take up all the available space in it's container (using `position: absolute`). It can be paired with the `Overlay` component to take up the whole screen.

The `Viewer` can display an **information panel** to show additional information about the current file (e.g. whether a file is certified).

:warning: Important :
- To have the panels, the app need to have [cozy-harvest-lib](https://github.com/cozy/cozy-libs/tree/master/packages/cozy-harvest-lib) installed

- To have a working footer, the app need to have a [CozySharing Provider](https://github.com/cozy/cozy-libs/tree/master/packages/cozy-sharing).

- If the footer will be used on MobileApp, the app should have this Cordova plugin [4db7f8f#diff-8c7901258747b81ed60cc2d9cbb254344fae11f8a602e56c1ae42d9eef11d318R50](https://github.com/cozy/cozy-ui/commit/4db7f8fba866bffe04d81d42c716a8dea5c50157#diff-8c7901258747b81ed60cc2d9cbb254344fae11f8a602e56c1ae42d9eef11d318R50)

```jsx
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';
import Variants from 'cozy-ui/docs/components/Variants';
import Card from 'cozy-ui/transpiled/react/Card';
import Checkbox from 'cozy-ui/transpiled/react/Checkbox';
import { ViewerWithCustomPanelAndFooter as Viewer } from 'cozy-ui/transpiled/react/Viewer';
import Stack from 'cozy-ui/transpiled/react/Stack';
import Paper from 'cozy-ui/transpiled/react/Paper';
import Typography from 'cozy-ui/transpiled/react/Typography';
import { Media, Img, Bd } from 'cozy-ui/transpiled/react/Media';
import Icon from 'cozy-ui/transpiled/react/Icon';
import CarbonCopyIcon from 'cozy-ui/transpiled/react/Icons/CarbonCopy';
// The DemoProvider inserts a fake cozy-client in the React context.
import DemoProvider from './docs/DemoProvider';
import Overlay from 'cozy-ui/transpiled/react/Overlay';
import Button from 'cozy-ui/transpiled/react/Button';
import DownloadIcon from 'cozy-ui/transpiled/react/Icons/Download';
import ShareIcon from 'cozy-ui/transpiled/react/Icons/Share';
import BottomSheetWrapper from 'cozy-ui/transpiled/react/Viewer/Footer/BottomSheetWrapper';
import { isValidForPanel } from 'cozy-ui/transpiled/react/Viewer/helpers';
import getPanelBlocks, { panelBlocksSpecs } from 'cozy-ui/transpiled/react/Viewer/Panel/getPanelBlocks';

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
    name: 'Demo.pdf',
    mime: 'application/pdf',
    links: {
      preview: 'https://viewerdemo.cozycloud.cc/IMG_0062.PNG'
    },
    metadata: {
      carbonCopy: true
    }
  },
  {
    _id: 'pdf',
    class: 'pdf',
    name: 'Demo.pdf',
    mime: 'application/pdf'
  },
  {
    _id: 'text',
    class: 'text',
    name: 'Demo.txt',
    mime: 'text/plain'
  },
  {
    _id: 'image',
    class: 'image',
    name: 'Demo.jpg',
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
  viewerOpened: isTesting(),
  currentIndex: 0,
  showToolbarCloseButton: true
};

const initialVariants = [
  { navigation: true, toolbar: true, onlyOfficeEnabled: true }
];

const toggleViewer = () => setState({ viewerOpened: !state.viewerOpened });
const handleToggleToolbarClose = () => setState({ showToolbarCloseButton: !state.showToolbarCloseButton });
const onFileChange = (file, nextIndex) => setState({ currentIndex: nextIndex });

const PanelContent = ({ file }) => {
  return (
    <Stack
      spacing="s"
      className="u-flex u-flex-column u-h-100"
    >
      <Paper className={'u-ph-2 u-flex u-flex-items-center u-h-3'} elevation={2} square>
        <Typography variant="h4">Informations utiles</Typography>
      </Paper>
      <Paper className={'u-ph-2 u-pv-1-half'} elevation={2} square>
        <Typography variant="body1">Titre du fichier : {file.name}</Typography>
      </Paper>
      <Paper className={'u-ph-2 u-pv-1-half u-flex-grow-1'} elevation={2} square>
        <Typography variant="h4">
          <Media className="u-mb-half">
            <Img>
              <Icon icon={CarbonCopyIcon} className="u-mr-half" />
            </Img>
            <Bd>
              <Typography variant="body1">Copie conforme</Typography>
            </Bd>
          </Media>
          <Typography variant="caption">Ce document a été fourni par Grand Lyon. Il est défini “authentique et original” par Cozy Cloud, hébergeur de votre Cozy, car il peut affirmer qu'il provient directement du service du Grand Lyon, sans qu’il n’ait subit aucune modification.</Typography>
        </Typography>
      </Paper>
    </Stack>
  )
};

const useStyles = makeStyles({
  footer: {
    display: 'flex',
    alignItems: 'center',
    width: 'calc(100% - 2rem)',
    height: '100%',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTop: '1px solid var(--dividerColor)'
  }
});

const FooterContent = ({ file, toolbarRef }) => {
  const styles = useStyles()
  const actionButtonsRef = React.useRef()
  const panelBlocks = getPanelBlocks({ panelBlocksSpecs, file })

  if (isValidForPanel({ file })) {
    return (
      <BottomSheetWrapper
        file={file}
        actionButtonsRef={actionButtonsRef}
        toolbarRef={toolbarRef}
      >
        <Stack
          spacing="s"
          className={cx('u-flex u-flex-column u-ov-hidden', styles.stack)}
        >
          <Paper className={'u-flex u-ph-1 u-pb-1'} elevation={2} square ref={actionButtonsRef}>
            <Button
              className="u-mr-half"
              extension="full"
              theme="secondary"
              icon={ShareIcon}
              label="Share"
            />
            <Button
              extension="full"
              theme="secondary"
              icon={DownloadIcon}
              label="Download"
            />
          </Paper>
          {panelBlocks.map((PanelBlock, index) => (
            <Paper
              key={index}
              elevation={index === panelBlocks.length - 1 ? 0 : 2}
              square
            >
              <Typography variant="h4">
                <PanelBlock file={file} />
              </Typography>
            </Paper>
          ))}
        </Stack>
      </BottomSheetWrapper>
    )
  }

  return (
    <div className={styles.footer}>
      <Button
        className="u-mr-half"
        extension="full"
        theme="secondary"
        icon={ShareIcon}
        label="Share"
      />
      <Button
        extension="full"
        theme="secondary"
        icon={DownloadIcon}
        label="Download"
      />
    </div>
  )
}

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
          <button onClick={toggleViewer}>Open viewer</button>
          {state.viewerOpened && (
            <Overlay>
              <Viewer
                files={files}
                currentIndex={state.currentIndex}
                onCloseRequest={toggleViewer}
                onChangeRequest={onFileChange}
                showNavigation={variant.navigation}
                onlyOfficeProps={{
                  isEnabled: variant.onlyOfficeEnabled,
                  opener: () => alert('This is a demo, no Only Office opener here')
                }}
                toolbarProps={{
                  showToolbar: variant.toolbar,
                  showClose: state.showToolbarCloseButton
                }}
                panelInfoProps={{
                  showPanel: isValidForPanel,
                  PanelContent
                }}
                footerProps={{
                  FooterContent
                }}
              />
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
+     'react-pdf$' : 'react-pdf/dist/entry.webpack.js'
+   }
+ }
```

With this alias, a specific JS file for the worker will be created in the build directory. By design, this directory is only accessible (ie. served by the stack) if you are logged in. If you need the viewer on a public page, you must tell webpack to create the worker in a public folder, that will be served by the stack even if the user is not logged in.

One way to do this is to explicitly load the web worker in your application like this:

```js static
import createWorker from 'react-pdf/dist/pdf.worker.entry.js';
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
