Breadcrumbs show navigation contexts and help the user know the hierarchy
of the application.

Below is an example where the breadcrumbs are used in a file application
context.

```
import { Component } from 'react'
import Breadcrumbs from '.';
import Icon from '../Icon'
import ThemeChooser from '../../docs/ThemeChooser'

const items = [
  { 
    name: 'Joe Hisaishi',
    items: [
      {
        name: 'Porco Rosso',
        items: [
          { name: 'Madness' },
          { name: 'Bygone days' }
          ]
      }
    ]
  },
  { name: 'Rodrigo y Gabriella', 
    items: [
      { name: 'Hanuman' },
      { name: 'Tamacun' }
    ]
  }
]

const Items = ({ items, onClickItem }) => {
  return items.map(item => (
    <div style={{ color: 'var(--primaryTextColor)', height: '2rem', display: 'flex', alignItems: 'center'}} className={item.items ? 'u-c-pointer' : null } onClick={() => onClickItem(item)}>
      <Icon
        icon={!item.items ? 'file' : 'folder'}
        className='u-mr-half' color='var(--primaryTextColor)' />
      { item.name }
    </div>
  ))
}

class Example extends Component {
  constructor (props, context) {
    super(props, context)
    this.handleGoDown = this.handleGoDown.bind(this)
    this.handleGoUp = this.handleGoUp.bind(this)
    this.state = {
      breadcrumbs: [{ name: 'Music', items: items, onClick: this.handleGoUp }]
    }
  }

  handleGoDown(item) {
    if (!item.items) {
      return null
    }
    const breadcrumbs = this.state.breadcrumbs
    const newBreadcrumb = { name: item.name, onClick: this.handleGoUp, items: item.items }
    this.setState({
      breadcrumbs:  [...breadcrumbs, newBreadcrumb]
    })
  }

  handleGoUp() {
    this.setState({
      breadcrumbs: ([...this.state.breadcrumbs.slice(0, -1)])
    })
  }

  render() {
    const { breadcrumbs } = this.state
    const last = breadcrumbs[breadcrumbs.length - 1]
    return <div className='u-p-1'>
      <Breadcrumbs items={breadcrumbs} />
      <Items items={last.items} onClickItem={this.handleGoDown} />
    </div>
  }
}

<>
  <ThemeChooser>
    <Example />
  </ThemeChooser>
</>
```
