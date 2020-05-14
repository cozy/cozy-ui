```
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'cozy-ui/transpiled/react/Tabs';
import Icon from 'cozy-ui/transpiled/react/Icon';

const general = `
  Grace Murray Hopper, née le 9 décembre 1906 à New York et morte le 1er janvier 1992 dans le comté d'Arlington, est une informaticienne américaine et Rear admiral (lower half) de la marine américaine. Elle est la conceptrice du premier compilateur en 1951 (A-0 System) et du langage COBOL en 1959.
`
const description = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, soluta. Voluptas ipsa ullam a totam veniam itaque, iusto ducimus, sequi eveniet debitis recusandae incidunt, fugiat architecto et distinctio, optio! Deserunt.</div>
      <div>Velit neque, repellendus explicabo voluptates veritatis itaque saepe nemo et! Impedit veniam, voluptates. Aliquid laborum voluptate, non commodi magnam, soluta perferendis sapiente nemo harum, eligendi saepe beatae cum quam fugiat.</div>
      <div>Quam tempora, similique pariatur, vitae atque ducimus. Quidem tempore, nulla est. Dolor quisquam quia placeat molestiae, nulla beatae voluptatem labore sit mollitia repudiandae animi iure maxime maiores quidem delectus ad.</div>
      <div>Iste reiciendis reprehenderit et similique, rem. Architecto quasi debitis hic, voluptatum in possimus soluta sit, praesentium nisi provident pariatur culpa mollitia repellendus earum reiciendis animi. Sunt voluptates, assumenda esse perspiciatis.</div>
      <div>Alias quae sequi aliquid sed, nobis veniam magnam rerum amet velit dignissimos dicta a dolorem! Dolorem soluta perferendis error, voluptate dolorum quas, fuga ad repellendus tenetur amet sit assumenda dignissimos.
`;

<>
  <Tabs initialActiveTab='general'>
    <TabList>
      <Tab name='general'>General</Tab>
      <Tab name='details'>Details</Tab>
    </TabList>
    <TabPanels>
      <TabPanel name='general'>
        { general }
      </TabPanel>
      <TabPanel name='details'>
        { description }
      </TabPanel>
    </TabPanels>
  </Tabs>
  <div className='u-m-2'></div>

  <Tabs initialActiveTab='general'>
    <TabList inverted>
      <Tab name='general'>General</Tab>
      <Tab name='details'>Details</Tab>
    </TabList>
    <TabPanels>
      <TabPanel name='general'>
        { general }
      </TabPanel>
      <TabPanel name='details'>
        { description }
      </TabPanel>
    </TabPanels>
  </Tabs>

  <div style={{ width: 300, marginTop: 32 }}>
    <Tabs initialActiveTab='general'>
      <TabList inverted>
        <Tab name='general'>General</Tab>
        <Tab name='details'>Details</Tab>
        <Tab name='similar'>Similar</Tab>
        <Tab name='others'>Others</Tab>
      </TabList>
      <TabPanels>
        <TabPanel name='general'>
          { general }
        </TabPanel>
        <TabPanel name='details'>
          { description }
        </TabPanel>
        <TabPanel name='similar'>
          Similar tab
        </TabPanel>
        <TabPanel name='others'>
          Others tab
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>

</>
```
