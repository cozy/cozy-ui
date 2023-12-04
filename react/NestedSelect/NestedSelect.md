You can use `react/NestedSelect/NestedSelectResponsive` wich provides automaticaly a modal on desktop and bottomsheet on mobile, or directly `react/NestedSelect/Modal` and `react/NestedSelect/BottomSheet`.

```jsx
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import Variants from 'cozy-ui/docs/components/Variants'
import { useState } from 'react'
import Button from 'cozy-ui/transpiled/react/Buttons'
import Circle from 'cozy-ui/transpiled/react/Circle'
import Icon from 'cozy-ui/transpiled/react/Icon'
import SettingIcon from 'cozy-ui/transpiled/react/Icons/Setting'
import NestedSelectResponsive from 'cozy-ui/transpiled/react/NestedSelect/NestedSelectResponsive'
import ListItem from 'cozy-ui/transpiled/react/ListItem'
import IconButton from 'cozy-ui/transpiled/react/IconButton'
import ListItemText from 'cozy-ui/transpiled/react/ListItemText'
import ListItemSecondaryAction from 'cozy-ui/transpiled/react/ListItemSecondaryAction'
import Checkbox from 'cozy-ui/transpiled/react/Checkbox'
import useBreakpoints from 'cozy-ui/transpiled/react/providers/Breakpoints'
import palette from 'cozy-ui/transpiled/react/palette'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Alert from 'cozy-ui/transpiled/react/Alert'

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

const SettingAction = ({ item, onClick }) => {
  return (
    <ListItemSecondaryAction>
      <IconButton onClick={() => onClick({ item })}>
        <Icon icon={SettingIcon} />
      </IconButton>
    </ListItemSecondaryAction>
  )
}

const makeOptions = withHeaders => ({
  header: withHeaders ?
    <Alert className="u-mt-1 u-mh-1" icon={false}>This is a header for options</Alert>
    : undefined,
  childrenHeader: withHeaders
    ? level => level === 1
      ? <Alert className="u-mt-1 u-mh-1">This is specific option header for first children</Alert>
      : <Alert className="u-mt-1 u-mh-1" icon={false} severity="secondary">This is specific option header for other children</Alert>
    : undefined,
  children: [
    {
      ...letterOption('A', 'is for Apple'),
      info: 'info'
    },
    {
      ...letterOption('B', 'is for Balloon'),
      children: [
        letterOption('B1'),
        {
          ...letterOption('B2'),
          children: [
            letterOption('B2a'),
            letterOption('B2b')
          ]
        },
        letterOption('B3'),
      ]
    },
    {
      ...letterOption('C', 'is for crayon'),
      action: {
        Component: SettingAction,
        props: {
          onClick: ({ item }) => alert('click action of ' + item.title)
        }
      }

    },
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
})

const transformParentItem = item => ({
  ...item,
  title: 'All of ' + item.title
})

const StaticExample = () => {
  const { isMobile } = useBreakpoints()

  return (
    <NestedSelectResponsive
      radioPosition={isMobile ? 'left' : 'right'}
      canSelectParent={true}
      onSelect={x => x}
      dismissAction={x => x}
      isSelected={x => x.title === 'C'}
      options={makeOptions()}
      title="Please select letter"
      transformParentItem={transformParentItem}
      componentsProps={{ bottomsheet: { skipAnimation: isTesting() } }}
      onClose={() => {}}
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

  const searchOptions = {
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

  const handleSelect = item => {
    setSelected(item)
    setTimeout(() => {
      hideModal()
    }, RADIO_BUTTON_ANIM_DURATION)
  }

  const initialVariants = [{
    noTitle: false,
    noDivider: false,
    leftRadio: false,
    withSearch: false,
    withEllipsis: true,
    withHeaders: false
  }]

  return (
    <Variants initialVariants={initialVariants} screenshotAllVariants>
      {variant => (
        <>
          {selectedItem && (
            <Typography paragraph>Selected item: { selectedItem.title }</Typography>
          )}
          <Button className='u-ml-0' label='Select' onClick={showModal} />
          {showingModal && (
            <NestedSelectResponsive
              canSelectParent={true}
              onSelect={handleSelect}
              onClose={hideModal}
              isSelected={isSelected}
              options={makeOptions(variant.withHeaders)}
              radioPosition={variant.leftRadio ? 'left' : 'right'}
              title={variant.noTitle ? undefined : "Please select letter"}
              transformParentItem={transformParentItem}
              searchOptions={variant.withSearch ? searchOptions : undefined}
              ellipsis={variant.withEllipsis}
              componentsProps={{ bottomsheet: { skipAnimation: isTesting() } }}
              noDivider={variant.noDivider}
            />
          )}
        </>
      )}
    </Variants>
  )
}

;

<DemoProvider>
  {isTesting()
    ? <StaticExample />
    : <InteractiveExample />
  }
</DemoProvider>
```
