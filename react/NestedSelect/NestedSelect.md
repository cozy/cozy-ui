You can use `react/NestedSelect/NestedSelectResponsive` wich provides automaticaly a modal on desktop and bottomsheet on mobile, or directly `react/NestedSelect/Modal` and `react/NestedSelect/BottomSheet`.

You can open the NestedSelect where a specific item is located, for this your items must have a **_id_** attribute and add the **_focusedId_** attribute to the root of the options.
See below for example

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
  id: `${letter}${key ? `_${key}` : ''}`,
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

const makeOptions = ({ withHeaders, focusedId } = {}) => ({
  focusedId,
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
        {
          ...letterOption('B1'),
          children: [
            letterOption('B1a'),
            letterOption('B1b')
          ]
        },
        {
          ...letterOption('B2'),
          header: withHeaders
            ? <Alert className="u-mt-1 u-mh-1" icon={false} severity="success">This is overriden specific option!</Alert>
            : undefined,
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
    letterOption('H', 'for hero', 'hero'),
    letterOption('H', 'for helicopter', 'helicopter'),
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

const InteractiveExample = () => {
  const [showingModal, setShowingModal] = useState(false)
  const [selectedItem, setSelected] = useState(letterOption('A'))

  const showModal = () => setShowingModal(true)
  const hideModal = () => setShowingModal(false)

  const isSelected = item => {
    if (!selectedItem) {
      return false
    }
    return item.id === selectedItem.id
  }

  const searchOptions = withHeaders => ({
    placeholderSearch: 'Placeholder Search',
    noDataLabel: 'No Data Found',
    onSearch: (value) => {
      const options = makeOptions({ withHeaders })
      return options.children.filter(o => o.description && o.description.toLowerCase().includes(value.toLowerCase()))
    },
    displaySearchResultItem: item =>
    <ListItem key={item.id} dense button divider>
      <ListItemText
        primary={item.description}
        ellipsis
      />
    </ListItem>
  })

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
    withHeaders: false,
    canSelectParent: true,
    withFocus: false
  }]

  return (
    <Variants initialVariants={initialVariants} screenshotAllVariants>
      {variant => {
        const options = makeOptions({withHeaders: variant.withHeaders, focusedId: variant.withFocus ? selectedItem.id : undefined})
        return (
          <>
            {selectedItem && (
              <Typography paragraph>Selected item: { selectedItem.title } { selectedItem.description ? selectedItem.description : null }</Typography>
            )}
            <Button className='u-ml-0' label='Select' onClick={showModal} />
            {showingModal && (
              <NestedSelectResponsive
                canSelectParent={variant.canSelectParent}
                onSelect={handleSelect}
                onClose={hideModal}
                isSelected={isSelected}
                options={options}
                radioPosition={variant.leftRadio ? 'left' : 'right'}
                title={variant.noTitle ? undefined : "Please select letter"}
                transformParentItem={transformParentItem}
                searchOptions={variant.withSearch ? searchOptions(variant.withHeaders) : undefined}
                ellipsis={variant.withEllipsis}
                componentsProps={{ bottomsheet: { skipAnimation: isTesting() } }}
                noDivider={variant.noDivider}
              />
            )}
          </>
        )
      }}
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
