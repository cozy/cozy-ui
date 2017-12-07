### Simple

```jsx
initialState = { modalDisplayed: false};

<div>
  <button onClick={()=>setState({ modalDisplayed: !state.modalDisplayed })}>
    Toggle modal
  </button>
  {state.modalDisplayed && <Modal title='Ada Lovelace' description={content.ada.short} dismissAction={() => setState({ modalDisplayed: false })} /> }
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

For more complex modals, you can use individual components

```
const { ModalDescription, ModalTitle } = Modal;

<div>
  <button onClick={()=>setState({ modalDisplayed: !state.modalDisplayed })}>
    Toggle modal
  </button>
  {state.modalDisplayed &&
    <Modal
        overflowHidden={true}
        dismissAction={()=>setState({ modalDisplayed: false})} >
      <div style={{background: 'red', color: 'white'}}>
        <ModalTitle>Yo ho ho !</ModalTitle>
      </div>
      <ModalDescription className='u-mt-half'>
        { content.ada.short }
      </ModalDescription>
    </Modal>}
</div>
```
