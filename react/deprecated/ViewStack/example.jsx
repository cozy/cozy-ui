import React from 'react'
import { useViewStack } from '.'
import Button from '../Button'

const PaddedParagraph = ({ children }) => (
  <p className="u-m-0 u-pv-half">{children}</p>
)

const Slide = ({ number }) => {
  const { stackPush, stackPop } = useViewStack()

  const handleClickStack = () => {
    stackPush(<Slide number={number + 1} />)
  }

  const handleClickPop = async () => {
    await stackPop()

    // No alerts during enzyme tests
    if (number === 2 && !global.mount) {
      alert('You went back to the first slide')
    }
  }

  return (
    <div>
      <PaddedParagraph>Level: {number}</PaddedParagraph>
      {number === 3 ? 'Going deep are you ?' : null}
      {number === 4 ? 'Will you stop ?' : null}
      {number === 5 ? 'How dare you...' : null}
      {number === 6 ? 'I am out' : null}
      <PaddedParagraph>
        <Button label="stack" theme="secondary" onClick={handleClickStack} />
        <Button label="pop" theme="secondary" onClick={handleClickPop} />
      </PaddedParagraph>
    </div>
  )
}

export { Slide }
