This component can be used as a trigger to open menus, for example an ActionMenu component.

```
import DropdownButton from 'cozy-ui/transpiled/react/DropdownButton';
import Text, { MainTitle, Title, SubTitle } from 'cozy-ui/transpiled/react/Text';

<div>
  <div>
    <DropdownButton>
      <MainTitle>Cozy</MainTitle>
    </DropdownButton>
  </div>
  <div>
    <DropdownButton>
      <Title>Cozy</Title>
    </DropdownButton>
  </div>
  <div>
    <DropdownButton>
      <SubTitle>Cozy</SubTitle>
    </DropdownButton>
  </div>
  <div>
    <DropdownButton>
      <Text>Cozy</Text>
    </DropdownButton>
  </div>
</div>
```
