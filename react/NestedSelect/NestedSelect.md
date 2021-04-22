```
import Button from '../Button'
import Circle from '../Circle'
import NestedSelectModal from './Modal';
import { useState } from 'react'
import Checkbox from '../Checkbox'
import useBreakpoints, { BreakpointsProvider } from '../hooks/useBreakpoints'
import palette from 'cozy-ui/transpiled/react/palette'

const Image = ({ letter }) => (
  <Circle backgroundColor={palette.melon}>
    { letter }
  </Circle>
)

const letterOption = (letter, description, key) => ({
  id: letter,
  title: letter,
  description,
  key,
  icon: <Image letter={letter[0]} />
})

const options = {
  children: [
    letterOption('A', 'is for Apple'),
    {
      ...letterOption('B', 'is for Balloon'), 
      children: [
        letterOption('B1'),
        letterOption('B2')
      ]
    },
    letterOption('C', 'is for crayon'),
    letterOption('D', 'is for Drums !'),
    letterOption('E. A very long option, that should be ellipsed. And it goes on, and on...', 'Its description is also very long and will be ellipsed. E is the 5th letter from the roman alphabet...'),
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
  const { isMobile } = useBreakpoints()
  return (
    <NestedSelectModal
      radioPosition={isMobile ? 'left' : 'right'}
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
  const [leftRadio, setLeftRadio] = useState(false)
  const [withSearch, setWithSearch] = useState(false)
  const [showingModal, setShowingModal] = useState(false)
  const [selectedItem, setSelected] = useState({ title: 'A' })
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

  const handleClickLeftRadio = () => {
    setLeftRadio(!leftRadio)
  }

  const handleSelect = item => {
    setSelected(item)
    setTimeout(() => {
      hideModal()
    }, RADIO_BUTTON_ANIM_DURATION)
  }
  
  const searchOptions = withSearch && {
  }

  return (
    <>
      <Checkbox label='radio to the left' readOnly name='leftRadio' value={leftRadio} checked={leftRadio} onClick={handleClickLeftRadio} />
      { selectedItem ? <>Selected: { selectedItem.title }<br/></> : null }
      <Checkbox label='with search' readOnly name='withSearch' value={withSearch} checked={withSearch} onClick={handleClickLeftRadio} />
 
      <Button className='u-ml-0' label='Select' onClick={showModal} ></Button>
      { showingModal ?
        <NestedSelectModal
          canSelectParent={true}
          onSelect={handleSelect}
          onClose={hideModal}
          isSelected={isSelected}
          options={options}
          radioPosition={leftRadio ? 'left' : 'right'}
          title="Please select letter"
          transformParentItem={transformParentItem}
          searchOptions={searchOptions}
        /> : null }
    </>
  )
};

<>
  <BreakpointsProvider>{
    isTesting()
      ? <StaticExample />
      : <InteractiveExample />
  }</BreakpointsProvider>
</>
```
