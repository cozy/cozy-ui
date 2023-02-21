```jsx
import { useState } from 'react'
import Button from '../Button'
import Circle from '../Circle'
import NestedSelectModal from './Modal'
import ListItem from '../MuiCozyTheme/ListItem'
import ListItemText from '../ListItemText'
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
    letterOption(`E. A very long option, that should be ellipsed. ${content.ada.short}`, `Its description is also very long and will be ellipsed. ${content.ada.short}`),
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
  const [searchOptions, setSearchOptions] = useState(null)
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

  const handleClickWithSearch = e => {
    if (e.target.checked) {
      const searchOpts = {
        placeholderSearch: 'Placeholder Search',
        noDataLabel: 'No Data Found',
        onSearch: (value) => {
          return options.children.filter(o => o.description && o.description.toLowerCase().includes(value.toLowerCase()))
        },
        displaySearchResultItem: item =>
        <ListItem key={item.id} dense button divider>
          <ListItemText
            primary={item.description}
            ellipsis
          />
        </ListItem>
      }
      setSearchOptions(searchOpts)
    } else {
      setSearchOptions(null)
    }
  }

  const handleSelect = item => {
    setSelected(item)
    setTimeout(() => {
      hideModal()
    }, RADIO_BUTTON_ANIM_DURATION)
  }

  return (
    <>
      <Checkbox
        label='radio to the left'
        readOnly
        name='leftRadio'
        value={leftRadio}
        checked={leftRadio}
        onClick={handleClickLeftRadio}
      />
      <Checkbox
        label='with search'
        readOnly
        name='withSearch'
        value={!!searchOptions}
        checked={!!searchOptions}
        onClick={handleClickWithSearch}
      />
      { selectedItem && (
        <>Selected: { selectedItem.title }<br/></>
      )}
      <Button className='u-ml-0' label='Select' onClick={showModal} />
      { showingModal && (
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
        />
      )}
    </>
  )
}

;

<>
  <BreakpointsProvider>
    {isTesting()
      ? <StaticExample />
      : <InteractiveExample />
    }
  </BreakpointsProvider>
</>
```
