⚠️ You can see in the example below that the paragraph used in the slide needed to be changed to use padding instead of margin. Otherwise react-swipeable-view computes the height of the slide incorrectly.

```jsx
import ViewStack from 'cozy-ui/transpiled/react/deprecated/ViewStack';
import { Slide } from './example';

<ViewStack>
  <Slide number={1} />
</ViewStack>
```
