⚠️ You can see in the example below that the paragraph used in the slide needed to be changed to use padding instead of margin. Otherwise react-swipeable-view computes the height of the slide incorrectly.

```
import Button from 'cozy-ui/transpiled/react/Button'
import ViewStack, { useViewStack } from 'cozy-ui/transpiled/react/ViewStack'

const PaddedParagraph = ({ children }) => (
  <p className='u-m-0 u-pv-half'>{ children }</p>
)

const Slide = ({ number }) => {
  const { stackPush, stackPop } = useViewStack()

  const handleClickStack = () => {
    stackPush(<Slide number={number + 1} />)
  }

  const handleClickPop = async () => {
    await stackPop()

    if (number === 2) {
      alert('You went back to the first slide')
    }
  }

  return (
    <div>
      <PaddedParagraph>Level: { number }</PaddedParagraph>
      { number === 3 ? 'Going deep are you ?' : null}
      { number === 4 ? 'Will you stop ?' : null}
      <PaddedParagraph>
        <Button theme='secondary' onClick={handleClickStack}>stack</Button>
        <Button theme='secondary' onClick={handleClickPop}>pop</Button>
      </PaddedParagraph>
    </div>
  )
};

<ViewStack>
  <Slide number={1} />
</ViewStack>
```
