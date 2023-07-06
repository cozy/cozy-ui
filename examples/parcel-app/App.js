import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'

import {
  Nav,
  Sidebar,
  Layout,
  Main,
  Icon,
  Avatar,
  Content,
  Button,
  Chip,
  Hero,
  Sprite,
  NavItem,
  NavText,
  NavIcon,
  genNavLink
} from '../../transpiled/react'
import '../../transpiled/react/stylesheet.css'

const RRNavLink = props => <div {...props} />

const NavLink = genNavLink(RRNavLink)

const ContactChip = ({ contact }) => (
  <Chip style={{ paddingLeft: '0.25rem' }}>
    <Avatar
      textId={contact.name}
      text={contact.initials}
      size="small"
      style={{ marginRight: '0.5rem' }}
    />{' '}
    {contact.name}
  </Chip>
)

const icons = [
  'arrow',
  'check',
  'dash',
  'album-add',
  'album-remove',
  'album',
  'back',
  'bottom-select',
  'bottom',
  'calendar',
  'check-circleless',
  'check',
  'clock',
  'connector',
  'cozy-negative',
  'cozy',
  'cross-white',
  'cross',
  'cube',
  'delete-grey08',
  'delete',
  'destroy',
  'device-laptop',
  'dots-white',
  'dots',
  'download',
  'exchange',
  'file-none',
  'file',
  'folder',
  'forward',
  'gear',
  'help',
  'hourglass',
  'image',
  'moveto',
  'openwith',
  'paperplane',
  'people',
  'phone-download',
  'plus',
  'rename',
  'restore',
  'share-grey08',
  'share',
  'small-arrow',
  'spinner',
  'top-select',
  'top',
  'trash',
  'upload-grey08',
  'upload',
  'warn',
  'warning',
  'spinner-blue',
  'spinner-grey',
  'spinner-red',
  'spinner-white'
]

const colors = ['crimson', 'royalblue', 'green', 'orange', 'crimson']

const IconSection = () => {
  let colorIndex = 0
  return (
    <Fragment>
      <h2>Icon</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(max-content, 200px))'
        }}
      >
        {icons.map(iconId => (
          <div key={iconId}>
            <span style={{ color: colors[colorIndex++ % colors.length] }}>
              <Icon icon={`#${iconId}`} style={{ marginRight: '0.5rem' }} />
            </span>
            {iconId}
          </div>
        ))}
      </div>
    </Fragment>
  )
}

const ChipSection = () => {
  return (
    <Fragment>
      <h2>Chip</h2>
      <p>
        {[
          'Charles Babbage',
          'Grace Hopper',
          'John McCarthy',
          'Donald Knuth',
          'Barbara Liskov'
        ].map(name => (
          <ContactChip
            key={name}
            contact={{
              initials: name
                .split(' ')
                .map(x => x[0])
                .join(''),
              name
            }}
          />
        ))}
      </p>
    </Fragment>
  )
}

class App extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }
  render() {
    return (
      <Layout>
        <Sidebar>
          <Nav>
            <NavItem>
              <NavLink>
                <NavIcon icon="#icon-warning" />
                <NavText>Section 1</NavText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <NavIcon icon="#icon-file" />
                <NavText>Section 2</NavText>
              </NavLink>
            </NavItem>
          </Nav>
        </Sidebar>
        <Main>
          <Content>
            <p>
              <Button label="A button" />
            </p>
            <IconSection />
            <ChipSection />
          </Content>
          <Sprite />
        </Main>
      </Layout>
    )
  }
}

export default hot(module)(App)
