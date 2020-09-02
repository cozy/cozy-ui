Content needs to be separated into sections and accessed via a single content area using a flat navigation structure that does not refresh the page when selected. 



```
import MuiCozyTheme from 'cozy-ui/transpiled/react/MuiCozyTheme';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'cozy-ui/transpiled/react/Tabs';
import Icon from 'cozy-ui/transpiled/react/Icon';
import ListSubHeader from '../MuiCozyTheme/ListSubheader'
import ListNavigation from '../../docs/organisms/ListNavigation'

const description = `
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, soluta. Voluptas ipsa ullam a totam veniam itaque, iusto ducimus, sequi eveniet debitis recusandae incidunt, fugiat architecto et distinctio, optio! Deserunt.</div>
      <div>Velit neque, repellendus explicabo voluptates veritatis itaque saepe nemo et! Impedit veniam, voluptates. Aliquid laborum voluptate, non commodi magnam, soluta perferendis sapiente nemo harum, eligendi saepe beatae cum quam fugiat.</div>
      <div>Quam tempora, similique pariatur, vitae atque ducimus. Quidem tempore, nulla est. Dolor quisquam quia placeat molestiae, nulla beatae voluptatem labore sit mollitia repudiandae animi iure maxime maiores quidem delectus ad.</div>
      <div>Iste reiciendis reprehenderit et similique, rem. Architecto quasi debitis hic, voluptatum in possimus soluta sit, praesentium nisi provident pariatur culpa mollitia repellendus earum reiciendis animi. Sunt voluptates, assumenda esse perspiciatis.</div>
      <div>Alias quae sequi aliquid sed, nobis veniam magnam rerum amet velit dignissimos dicta a dolorem! Dolorem soluta perferendis error, voluptate dolorum quas, fuga ad repellendus tenetur amet sit assumenda dignissimos.
`;

<MuiCozyTheme>
  <Tabs initialActiveTab='navlist'>
    <TabList>
      <Tab name='navlist'>Navigation list</Tab>
      <Tab name='details'>Details</Tab>
    </TabList>
    <TabPanels>
      <TabPanel name='navlist'>
        <ListNavigation />
      </TabPanel>
      <TabPanel name='details'>
        { description }
      </TabPanel>
    </TabPanels>
  </Tabs>
  <div className='u-m-2'></div>

  <Tabs initialActiveTab='navlist'>
    <TabList inverted>
      <Tab name='navlist'>General</Tab>
      <Tab name='details'>Details</Tab>
    </TabList>
    <TabPanels>
      <TabPanel name='navlist'>
        General tab
      </TabPanel>
      <TabPanel name='details'>
        Details tab
      </TabPanel>
    </TabPanels>
  </Tabs>

  <div style={{ width: 300, marginTop: 32 }}>
    <Tabs initialActiveTab='navlist'>
      <TabList inverted>
        <Tab name='navlist'>General</Tab>
        <Tab name='details'>Details</Tab>
        <Tab name='similar'>Very long title</Tab>
        <Tab name='others'>Others</Tab>
      </TabList>
      <TabPanels>
        <TabPanel name='navlist'>
          <ListNavigation />
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

</MuiCozyTheme>
```
