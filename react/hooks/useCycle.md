Used when you want a cyclical variable, for example for a carousel.

```jsx
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { Icon, Left, Right } from '@linagora/twake-icons'
import useCycle from 'cozy-ui/transpiled/react/hooks/useCycle'

const arr = Array(5).fill(null)
const Component = () => {
  const [index, setPrev, setNext] = useCycle(2, 0, arr.length - 1)

  return <div className='u-flex u-flex-items-center'>
    <IconButton onClick={setPrev} size="medium"><Icon icon={Left} /></IconButton>
    <Typography variant='body1'>
      {arr.map((item, i) => {
        return index === i ? '●' : '○'
      })}
    </Typography>
    <IconButton onClick={setNext} size="medium"><Icon icon={Right} /></IconButton>
  </div>
};

<Component />
```
