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

const letterOption = (letter, description, key) => ({
  title: letter,
  description,
  key,
  icon: <Image letter={letter} />
})

const options = {
  children: [
    letterOption('A'),
    {
      ...letterOption('B'), 
      children: [
        letterOption('B1'),
        letterOption('B2')
      ]
    },
    letterOption('C', 'C for car'),
    letterOption('D'),
    letterOption('E'),
    letterOption('F'),
    letterOption('G'),
    letterOption('H', 'H for hero', 'hero'),
    letterOption('H', 'H for helicopter', 'helicopter'),
    letterOption('I'),
    letterOption('J'),
    letterOption('K'),
    letterOption('L'),
    letterOption('M'),
    letterOption('N'),
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

// Crude parent-children relationship
const isParent = (item, childItem) => {
  return childItem.title.includes(item.title)
}

const InteractiveExample = () => {
  const [showingModal, setShowingModal] = useState(false)
  const [selectedItem, setSelected] = useState(null)
  const showModal = () => setShowingModal(true)
  const hideModal = () => setShowingModal(false)
  const isSelected = (item, level) => {
    if (!selectedItem) { 
      return false
    } else if (level === 0 && isParent(item, selectedItem)) {
      return true
    } else if (item.title === selectedItem.title) {
      return true
    }
    return false
  }

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
