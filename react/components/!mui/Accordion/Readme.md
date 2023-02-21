See [Material UI documentation](https://material-ui.com/demos/expansion-panels/) to learn more about Accordion.

```jsx
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

<>
  <Accordion>
    <AccordionSummary>
      Click to expand/collapse the first item
    </AccordionSummary>
    <AccordionDetails>
      <p className='u-mh-1'>Lorem ipsum dolor sit amet consectetur</p>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary>
      Click to expand/collapse the second item
    </AccordionSummary>
    <AccordionDetails>
      <p className='u-mh-1'>Lorem ipsum dolor sit amet consectetur</p>
    </AccordionDetails>
  </Accordion>
  <Accordion>
    <AccordionSummary>
      Click to expand/collapse the third item
    </AccordionSummary>
    <AccordionDetails>
      <p className='u-mh-1'>Lorem ipsum dolor sit amet consectetur</p>
    </AccordionDetails>
  </Accordion>
</>
```
