```
import Button from '../Button'
import Circle from '../Circle'
import NestedSelectModal from './Modal';
import { useState } from 'react'


const Image = ({ letter }) => (
  <Circle backgroundColor='var(--melon)'>
    { letter }
  </Circle>
)

const options = {
  children: [
    {
      title: 'A',
      icon: <Image letter='A' />
    },
    {
      title: 'B',
      icon: <Image letter='B' />, 
      children: [
        {
          title: 'B1',
          icon: <Image letter='B1' />
        }, {
          title: 'B2',
          icon: <Image letter='B2' />
        }] },
    {
      title: 'C',
      icon: <Image letter='C' />
    },
  ]
}

const transformParentItem = item => ({
  ...item,
  title: 'All of ' + item.title
})

const StaticExample = () => {
  return (
    <NestedSelectModal
      canSelectParent={true}
      onSelect={x => x}
      dismissAction={x => x}
      isSelected={x => x.title === 'C'}
      options={options}
      title="Please select letter"
      transformParentItem={transformParentItem}
    />
  )
}

const RADIO_BUTTON_ANIM_DURATION = 500

const InteractiveExample = () => {
  const [showingModal, setShowingModal] = useState(false)
  const [selectedItem, setSelected] = useState(null)
  const showModal = () => setShowingModal(true)
  const hideModal = () => setShowingModal(false)
  const isSelected = item => selectedItem && selectedItem.title === item.title
  const handleSelect = item => {
    setSelected(item)

    setTimeout(() => {
      hideModal()
    }, RADIO_BUTTON_ANIM_DURATION)
  }

  return (
    <>
      { selectedItem ? <>Selected: { selectedItem.title }<br/></> : null }
      <Button label='Select' onClick={showModal} ></Button>
      { showingModal ?
        <NestedSelectModal
          canSelectParent={true}
          onSelect={handleSelect}
          dismissAction={hideModal}
          isSelected={isSelected}
          options={options}
          title="Please select letter"
          transformParentItem={transformParentItem}
        /> : null }
    </>
  )
};

<>
  { isTesting()
    ? <StaticExample />
    : <InteractiveExample /> }
</>
```
