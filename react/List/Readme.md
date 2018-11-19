Useful for mobile content. Provides building blocks :

- `Header`
- `Row`
- `Content`


```
const List = require('.');
const { Media, Bd, Img } = require('../Media');
const { default: Icon, Sprite } = require('../Icon');

<React.Fragment>
  <Sprite />
  <List.List>
    <List.Header>Security</List.Header>
    <List.Row>
      <Media>
        <Img>
          <Icon width='2rem' className='u-mr-1' icon='forward' />
        </Img>
        <Bd>
          <List.Content primaryText='Alice' secondaryText='Good girl' />
        </Bd>
      </Media>
    </List.Row>
    <List.Row>
      <List.Content primaryText='Bob' secondaryText='Good boy' />
    </List.Row>
    <List.Row>
      <List.Content primaryText='Eve' secondaryText="Listening to other's people conversations" />
    </List.Row>
    <List.Header>Authors</List.Header>
    <List.Row>
      <List.Content primaryText='Frank Herbert' secondaryText='Dune, Children of Dune' />
    </List.Row>
    <List.Row>
      <List.Content primaryText='JRR Tolkien' secondaryText='Lord of the Rings, The Hobbit' />
    </List.Row>
    <List.Row>
      <List.Content primaryText='GRR Martin' secondaryText='Game of Thrones' />
    </List.Row>
  </List.List>
</React.Fragment>
```

#### Custom List item

```
const List = require('.');

const { Text, Caption } = require('../Text');
const MidEllipsis = require('../MidEllipsis').default;

<List.Content>
  <Text>I'm a primary text</Text>
  <Caption tag="a" href="http://cozy.io">
    <MidEllipsis text={content.ada.short} />
  </Caption>
</List.Content>
```
