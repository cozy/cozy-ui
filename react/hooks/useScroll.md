React hook that get scrollTop and direction properties when the scroll position of a react ref or a dom node changes.

**A focus on performance**

Scroll events can be issued at a high frequency. To avoid massive re-rendering, the callback is only fire every 250ms by default. You can reduce this delay using the options, as in the example below.

```jsx
import useScroll from 'cozy-ui/transpiled/react/hooks/useScroll'
import Fab from 'cozy-ui/transpiled/react/Fab'
import Icon from 'cozy-ui/transpiled/react/Icon'
import PlusIcon from 'cozy-ui/transpiled/react/Icons/Plus'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import {useRef, useEffect} from 'react'

const Demo = ({ onClick, className }) => {
  const box = useRef(null)
  const { scrollTop, scrollLeft } = useScroll(box, { delay: 50 })

  return (
    <div className="u-ta-center">
      <div className="u-pb-1">Vertically scrolled of {scrollTop}px</div>
      <div className="u-pb-1">Horizontally scrolled of {scrollLeft}px</div>
      <div className="u-h-4 u-ov-scroll" style={{ border: '2px dotted red'}} ref={box}>
        <div className="u-p-1"> Scroll Vertically and Horizontally</div>
        <div className="u-h-8" style={{ width: '150vw'}}></div>
      </div>
    </div>
  )
};

<DemoProvider>
  <Demo />
</DemoProvider>
```
