```
const MuiCozyTheme = require('..').default
const Menu = require('@material-ui/core/Menu').default
const MenuItem = require('@material-ui/core/MenuItem').default
const MenuList = require('@material-ui/core/MenuList').default
const Button = require('@material-ui/core/Button').default;

class SimpleMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = { anchorEl: null }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleClick (event) {
    console.log(event)
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose () {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

<MuiCozyTheme>
  <SimpleMenu />
</MuiCozyTheme>
```
