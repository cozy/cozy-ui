⚠️ Please do not use Modal, prefer [CozyDialogs](#/CozyDialogs) variants, ready-made components based on Mui Dialog.

### Simple

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal from 'cozy-ui/transpiled/react/deprecated/Modal'
initialState = { modalOpened: false}

;

<BreakpointsProvider>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened && <Modal title='Ada Lovelace' description={content.ada.short} dismissAction={() => setState({ modalOpened: false })} /> }
</BreakpointsProvider>
```

### Confirmation modal

```jsx
import Modal from 'cozy-ui/transpiled/react/deprecated/Modal';
initialState = { modalOpened: false};

<div>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle confirmation modal
  </button>
  {state.modalOpened && <Modal
    title='Do you want to leave?'
    description='You may lose changes if you leave.'
    dismissAction={() => setState({ modalOpened: false })}
    closable={false}
    mobileFullscreen={false}
    primaryAction={() => setState({ modalOpened: false })}
    primaryType='danger'
    primaryText='Leave without saving'
    secondaryAction={() => setState({ modalOpened: false })}
    secondaryType="secondary"
    secondaryText='Cancel'
  /> }
</div>
```

### Simple with no title

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal from 'cozy-ui/transpiled/react/deprecated/Modal'
initialState = { modalOpened: false}

;

<BreakpointsProvider>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened && <Modal description={content.ada.short} aria-label="Accessible title" dismissAction={() => setState({ modalOpened: false })} /> }
</BreakpointsProvider>
```

### Size

Several sizes avalaible: `xsmall, small`, `medium`, `large`, `xlarge`, `xxlarge`.
`small` being the default one.

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal from 'cozy-ui/transpiled/react/deprecated/Modal'

initialState = { modalOpened: false}
const sizes = [
  'xsmall',
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge'
]

;

<BreakpointsProvider>
  {sizes.map(size => <button onClick={()=>setState({ size, modalOpened: !state.modalOpened, })} key={size}>
    { size }
  </button>)}
  {state.modalOpened && <Modal title={ state.size + ' modal'} size={state.size} description={content.ada.short} dismissAction={() => setState({ modalOpened: false })} /> }
</BreakpointsProvider>
```

### Spacing

Besides the default spacing inside a Modal, you can choose another type from this two available: `small` and `large`

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal from 'cozy-ui/transpiled/react/deprecated/Modal'

initialState = { modalOpened: false}
const spacings = [
  'small',
  'large',
]

;

<BreakpointsProvider>
  {spacings.map(spacing => <button onClick={()=>setState({ spacing, modalOpened: !state.modalOpened, })} key={spacing}>
    { spacing }
  </button>)}
  {state.modalOpened && <Modal title={ state.spacing + ' modal'} spacing={state.spacing} description={content.ada.short} dismissAction={() => setState({ modalOpened: false })} /> }
</BreakpointsProvider>
```

### mobileFullscreen

If you want the modal to fill all the available space, without margin, on mobile screen.

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal from 'cozy-ui/transpiled/react/deprecated/Modal';
initialState = { modalOpened: false};

<BreakpointsProvider>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened && <Modal title='Ada Lovelace' description={content.ada.long} mobileFullscreen dismissAction={() => setState({ modalOpened: false })} /> }
</BreakpointsProvider>
```

### Closable

With `closable` set to `false`, the user will not be able to close the modal, even by clicking outside the modal. You must manage the modal's closing by yourself.

```jsx
import Modal from 'cozy-ui/transpiled/react/deprecated/Modal';
<div>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened && <Modal closable={false}
  title='Ada Lovelace' description={<div>
    <button onClick={()=>setState({modalOpened: false})}>Close the modal</button><br/>
    { content.ada.short }
    </div>}  /> }
</div>
```

### Long content

If you have a long content, the modal's content will scroll. For the scrollbars to be displayed correctly, you must specify `overflowHidden=true`.

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal from 'cozy-ui/transpiled/react/deprecated/Modal';
<BreakpointsProvider>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened && <Modal
    dismissAction={()=>setState({ modalOpened: false})}
    overflowHidden={true}
    title='Ada Lovelace'
    description={ content.ada.long } />}
</BreakpointsProvider>
```

### Actions

You can specify primary and secondary actions. Use `primaryType` and `secondaryType` to choose the types of the buttons

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal from 'cozy-ui/transpiled/react/deprecated/Modal';
const showModal = () => setState({ modalOpened: true })
const hideModal = () => setState({ modalOpened: false });

<BreakpointsProvider>
  <button onClick={showModal}>
    Toggle modal
  </button>
  {state.modalOpened && <Modal
      primaryText='Close modal'
      primaryType='danger'
      primaryAction={hideModal}
      secondaryText='Touch me'
      secondaryAction={hideModal}
      dismissAction={hideModal}
      overflowHidden={true}
      title='Ada Lovelace'
      description={ content.ada.short } /> }
</BreakpointsProvider>
```

### Complex modals

For more complex modals, you can use individual components.

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal, { ModalDescription, ModalHeader, ModalFooter } from 'cozy-ui/transpiled/react/deprecated/Modal';
const headerStyle = {
  background: 'linear-gradient(to right, #005c97, #363795)',
  color: 'white',
  paddingBottom: '1.5rem'
};

<BreakpointsProvider>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened &&
    <Modal
        closeBtnColor='white'
        overflowHidden={true}
        dismissAction={()=>setState({ modalOpened: false})} >
      <ModalHeader style={headerStyle} title="Augusta Ada King-Noel, Countess of Lovelace" />
      <ModalDescription className='u-mt-half'>
        { content.ada.short }
      </ModalDescription>
      <ModalFooter><strong>This a custom footer</strong></ModalFooter>
    </Modal>}
</BreakpointsProvider>
```

### Complex modals with fixed content

If you need a part of your modal content fixed (not scrollable) and the other part scrollable, you need to compose you own complex modal.

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal, { ModalContent, ModalHeader, ModalFooter } from 'cozy-ui/transpiled/react/deprecated/Modal';

<BreakpointsProvider>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened &&
    <Modal
        overflowHidden={true}
        dismissAction={()=>setState({ modalOpened: false})} >
      <ModalHeader title="Augusta Ada King-Noel, Countess of Lovelace" />
      <ModalContent fixed className='u-pv-1'>
        { content.ada.short }
      </ModalContent>
      <ModalContent>
        { content.ada.long }
      </ModalContent>
      <ModalFooter><strong>This a custom footer</strong></ModalFooter>
    </Modal>}
</BreakpointsProvider>
```

### Branded modals

If you need a modal with a branded header when you have a brand related content.

#### with a background color

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal, { ModalDescription, ModalBrandedHeader } from 'cozy-ui/transpiled/react/deprecated/Modal';

<BreakpointsProvider>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened &&
    <Modal
        overflowHidden={true}
        closeBtnColor="#297ef2"
        dismissAction={()=>setState({ modalOpened: false})} >
      <ModalBrandedHeader bg="#f5f6f7" logo="https://cozy.io/fr/images/cozy-logo-name-horizontal-blue.svg" />
      <ModalDescription className='u-mt-half'>
        { content.ada.short }
      </ModalDescription>
    </Modal>}
</BreakpointsProvider>
```

#### with a background gradient

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal, { ModalDescription, ModalBrandedHeader } from 'cozy-ui/transpiled/react/deprecated/Modal';

<BreakpointsProvider>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened &&
    <Modal
        overflowHidden={true}
        closeBtnColor="#297ef2"
        dismissAction={()=>setState({ modalOpened: false})} >
      <ModalBrandedHeader bg="linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(236,233,230,1) 100%);" logo="https://cozy.io/fr/images/cozy-logo-name-horizontal-blue.svg" />
      <ModalDescription className='u-mt-half'>
        { content.ada.short }
      </ModalDescription>
    </Modal>}
</BreakpointsProvider>
```

#### Animated Content Header

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal, { ModalContent, AnimatedContentHeader } from 'cozy-ui/transpiled/react/deprecated/Modal';

// heigth 128px
const animatedHeader = <img src="https://cozy.io/fr/images/cozy-logo-name-horizontal-blue.svg" />;

class ModalCounterWithAnimatedHeader extends React.Component {
 constructor () {
     super()
     this.state = { counter: 0 }
   }

   componentDidMount () {
     this.timeout = setTimeout(() => {
       this.increment()
     }, 1000)
   }

   increment () {
    this.setState({ counter: this.state.counter + 1 })
   }

   componentWillUnmount() {
     clearTimeout(this.timeout)
   }

  render () {
    return (
      <Modal
          dismissAction={()=>setState({ modalOpened: false})} mobileFullscreen >
        <ModalContent className="u-mt-half">
          <AnimatedContentHeader>
            { animatedHeader }
          </AnimatedContentHeader>
          Counter : { this.state.counter + "" } <button onClick={() => this.increment()}>increment</button><br/>
          { content.ada.long }
        </ModalContent>
      </Modal>
    )
  }
}

<BreakpointsProvider>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened &&
  <ModalCounterWithAnimatedHeader />}
</BreakpointsProvider>
```

### Back button

When your modal contains a multi-step process, you may want to add a back button that takes care of going one step back in the inner process, but not close the modal. In that case, you can use the `ModalBackButton` component.

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal, { ModalContent, ModalBackButton } from 'cozy-ui/transpiled/react/deprecated/Modal';
const toggle = () => setState({ modalOpened: !state.modalOpened });
const goToStep1 = () => setState({ step: 1 });
const goToStep2 = () => setState({ step: 2 });

initialState = {
  step: 1
};

<BreakpointsProvider>
  <button onClick={toggle}>
    Toggle modal
  </button>
  {state.modalOpened ? <Modal dismissAction={toggle}>
    <ModalContent>
    {state.step === 1 && (
      <>
        <p>This is step 1</p>
        <button onClick={goToStep2}>Go to step 2</button>
      </>
    )}

    {state.step === 2 && (
      <>
        <p>This is step 2</p>
        <button onClick={goToStep1}>Go to step 1</button>
      </>
    )}
    {state.step === 2 && <ModalBackButton onClick={goToStep1}/>}
    </ModalContent>
  </Modal> : null}
</BreakpointsProvider>
```

### Panes

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal, { ModalBrandedHeader } from 'cozy-ui/transpiled/react/deprecated/Modal';
import Panel from 'cozy-ui/transpiled/react/Panel';
const toggle = () => setState({ modalOpened: !state.modalOpened });

<BreakpointsProvider>
  <button onClick={toggle}>
    Toggle modal
  </button>
  { state.modalOpened ? <Modal
      dismissAction={toggle}
      size='xxlarge' overflowHidden={true}>
      <ModalBrandedHeader bg="linear-gradient(to right, #3c3b3f 0%,#605c3c 100%)" logo="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_80%2Cw_300/MTE4MDAzNDEwODQwOTQ2MTkw/ada-lovelace-20825279-1-402.jpg" style={{ marginBottom: 0 }}/>
      <Panel.Group>
        <Panel.Main>
          { content.ada.long }
        </Panel.Main>
        <Panel.Side>
          { content.ada.facts.map(fact => <section>
            <h3>{ fact.title }</h3>
            <p>{ fact.description }</p>
          </section>) }
        </Panel.Side>
      </Panel.Group>
  </Modal> : null }
</BreakpointsProvider>

```

### Portal modals

You can use the `into` prop to wrap the `Modal` in a `Portal`. This `prop` will be set to `"body"` in future versions so try to put it now to check if your Modal does not break when rendered in a Portal.

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import Modal from 'cozy-ui/transpiled/react/deprecated/Modal';
initialState = { modalOpened: false};

<BreakpointsProvider>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened && <Modal into='body' title='Ada Lovelace' description={content.ada.short} dismissAction={() => setState({ modalOpened: false })} /> }
</BreakpointsProvider>
```

### Focus trap

FocusTrap can be useful used in conjuction with the Modal.

```jsx
import { BreakpointsProvider } from 'cozy-ui/transpiled/react/providers/Breakpoints'
import FocusTrap from 'focus-trap-react'
import Modal, { ModalContent } from 'cozy-ui/transpiled/react/deprecated/Modal';
import Button from 'cozy-ui/transpiled/react/deprecated/Button';

initialState = { modalOpened: false};

const toggleModal = () => setState({ modalOpened: !state.modalOpened })
const hideModal = () => setState({ modalOpened: false })

const MyModal = ({ dismissAction }) => {
  return <Modal dismissAction={dismissAction}>
    <FocusTrap>
      <ModalContent>
        <p>
          Buttons below can be cycled with Tab and focus will not escape
          the modal.
        </p>
        <Button label="OK" onClick={dismissAction} />
        <Button theme="secondary" label="Cancel" onClick={dismissAction} />
      </ModalContent>
    </FocusTrap>
  </Modal>
} ;

<BreakpointsProvider>
  <button onClick={()=>setState({ modalOpened: !state.modalOpened })}>
    Toggle modal
  </button>
  {state.modalOpened && <MyModal dismissAction={hideModal} />}
</BreakpointsProvider>
```
