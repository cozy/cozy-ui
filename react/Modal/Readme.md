### Simple

```
initialState = { modalDisplayed: false};

<div>
  <button onClick={()=>setState({ modalDisplayed: !state.modalDisplayed })}>
    Toggle modal
  </button>
  {state.modalDisplayed && <Modal title='Ada Lovelace' description={content.ada.short} dismissAction={() => setState({ modalDisplayed: false })} /> }
</div>
```

### Simple with no title

```
initialState = { modalDisplayed: false};

<div>
  <button onClick={()=>setState({ modalDisplayed: !state.modalDisplayed })}>
    Toggle modal
  </button>
  {state.modalDisplayed && <Modal  description={content.ada.short} dismissAction={() => setState({ modalDisplayed: false })} /> }
</div>
```

### Size

Several sizes avalaible: `small`, `medium`, `large`, `xlarge`, `xxlarge`.
`small` being the default one.

```
initialState = { modalDisplayed: false};
const sizes = [
  'small',
  'medium',
  'large',
  'xlarge',
  'xxlarge'
];

<div>
  {sizes.map(size => <button onClick={()=>setState({ size, modalDisplayed: !state.modalDisplayed, })}>
    { size }
  </button>)}
  {state.modalDisplayed && <Modal title={ state.size + ' modal'} size={state.size} description={content.ada.short} dismissAction={() => setState({ modalDisplayed: false })} /> }
</div>
```

### Spacing

Besides the default spacing inside a Modal, you can choose another type from this two available: `small` and `large`

```
initialState = { modalDisplayed: false};
const spacings = [
  'small',
  'large',
];

<div>
  {spacings.map(spacing => <button onClick={()=>setState({ spacing, modalDisplayed: !state.modalDisplayed, })}>
    { spacing }
  </button>)}
  {state.modalDisplayed && <Modal title={ state.spacing + ' modal'} spacing={state.spacing} description={content.ada.short} dismissAction={() => setState({ modalDisplayed: false })} /> }
</div>
```

### mobileFullscreen

If you want the modal to fill all the available space, without margin, on mobile screen.

```
initialState = { modalDisplayed: false};

<div>
  <button onClick={()=>setState({ modalDisplayed: !state.modalDisplayed })}>
    Toggle modal
  </button>
  {state.modalDisplayed && <Modal title='Ada Lovelace' description={content.ada.long} mobileFullscreen dismissAction={() => setState({ modalDisplayed: false })} /> }
</div>
```

### Closable

With `closable` set to `false`, the user will not be able to close the modal, even by clicking outside the modal. You must manage the modal's closing by yourself.

```
<div>
  <button onClick={()=>setState({ modalDisplayed: !state.modalDisplayed })}>
    Toggle modal
  </button>
  {state.modalDisplayed && <Modal closable={false}
  title='Ada Lovelace' description={<div>
    <button onClick={()=>setState({modalDisplayed: false})}>Close the modal</button><br/>
    { content.ada.short }
    </div>}  /> }
</div>
```

### Long content

If you have a long content, the modal's content will scroll. For the scrollbars to be displayed correctly, you must specify `overflowHidden=true`.

```
<div>
  <button onClick={()=>setState({ modalDisplayed: !state.modalDisplayed })}>
    Toggle modal
  </button>
  {state.modalDisplayed && <Modal
    dismissAction={()=>setState({ modalDisplayed: false})}
    overflowHidden={true}
    title='Ada Lovelace'
    description={ content.ada.long } />}
</div>
```

### Actions

You can specify primary and secondary actions. Use `primaryType` and `secondaryType` to choose the types of the buttons

```
const showModal = () => setState({ modalDisplayed: true })
const hideModal = () => setState({ modalDisplayed: false });

<div>
  <button onClick={showModal}>
    Toggle modal
  </button>
  {state.modalDisplayed && <Modal
      primaryText='Close modal'
      primaryType='danger'
      primaryAction={hideModal}
      secondaryText='Touch me'
      secondaryAction={hideModal}
      dismissAction={hideModal}
      overflowHidden={true}
      title='Ada Lovelace'
      description={ content.ada.short } /> }
</div>
```

### Complex modals

For more complex modals, you can use individual components.

```
const { ModalDescription, ModalHeader, ModalFooter } = Modal;
const headerStyle = {
  background: 'linear-gradient(to right, #005c97, #363795)',
  color: 'white',
  paddingBottom: '1.5rem'
};

<div>
  <button onClick={()=>setState({ modalDisplayed: !state.modalDisplayed })}>
    Toggle modal
  </button>
  {state.modalDisplayed &&
    <Modal
        crossColor='white'
        overflowHidden={true}
        dismissAction={()=>setState({ modalDisplayed: false})} >
      <ModalHeader style={headerStyle} title="Augusta Ada King-Noel, Countess of Lovelace" />
      <ModalDescription className='u-mt-half'>
        { content.ada.short }
      </ModalDescription>
      <ModalFooter><strong>This a custom footer</strong></ModalFooter>
    </Modal>}
</div>
```

### Branded modals

If you need a modal with a branded header when you have a brand related content.

#### with a background color

```
const { ModalDescription, ModalBrandedHeader } = Modal;

<div>
  <button onClick={()=>setState({ modalDisplayed: !state.modalDisplayed })}>
    Toggle modal
  </button>
  {state.modalDisplayed &&
    <Modal
        overflowHidden={true}
        crossColor="#297ef2"
        dismissAction={()=>setState({ modalDisplayed: false})} >
      <ModalBrandedHeader bg="#f5f6f7" logo="https://cozy.io/fr/images/cozy-logo-name-horizontal-blue.svg" />
      <ModalDescription className='u-mt-half'>
        { content.ada.short }
      </ModalDescription>
    </Modal>}
</div>
```

#### with a background gradient

```
const { ModalDescription, ModalBrandedHeader } = Modal;

<div>
  <button onClick={()=>setState({ modalDisplayed: !state.modalDisplayed })}>
    Toggle modal
  </button>
  {state.modalDisplayed &&
    <Modal
        overflowHidden={true}
        crossColor="#297ef2"
        dismissAction={()=>setState({ modalDisplayed: false})} >
      <ModalBrandedHeader bg="linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(236,233,230,1) 100%);" logo="https://cozy.io/fr/images/cozy-logo-name-horizontal-blue.svg" />
      <ModalDescription className='u-mt-half'>
        { content.ada.short }
      </ModalDescription>
    </Modal>}
</div>
```

### Panes

```
const { ModalDescription, ModalBrandedHeader } = Modal;
const Panel = require('../Panel');
const toggle = () => setState({ modalDisplayed: !state.modalDisplayed });

<div>
  <button onClick={toggle}>
    Toggle modal
  </button>
  { state.modalDisplayed ? <Modal
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
</div>

```




### Portal modals

You can use the `into` prop to wrap the `Modal` in a `Portal`. This `prop` will be set to `"body"` in future versions so try to put it now to check if your Modal does not break when rendered in a Portal.

```jsx
initialState = { modalDisplayed: false};

<div>
  <button onClick={()=>setState({ modalDisplayed: !state.modalDisplayed })}>
    Toggle modal
  </button>
  {state.modalDisplayed && <Modal into='body' title='Ada Lovelace' description={content.ada.short} dismissAction={() => setState({ modalDisplayed: false })} /> }
</div>
```
