import classNames from 'classnames'

import React, { Component } from 'react'

class Tabs extends Component {
  constructor (props) {
    super(props)
    let defaultTabIndex = props.default ? parseInt(props.default) : 0
    this.state = {
      activeTabIndex: defaultTabIndex
    }
  }
  goToTab (tabIndex) {
    if (tabIndex !== this.state.activeTabIndex) this.setState({activeTabIndex: tabIndex})
  }
  render () {
    const { tabs } = this.props
    const { activeTabIndex } = this.state

    const styles = (this.props.styles) ? this.props.styles : require('./styles')

    const tabNames = Object.keys(tabs)
    const tabContents = Object.values(tabs)

    return (
      <div className={styles['coz-tabs']}>
        <ul className={styles['coz-tabs-links']}>
          { tabNames.map((tabName, index) => (
            <li>
              <a onClick={() => this.goToTab(index)} className={classNames(styles['coz-tabs-link'], {[styles['active']]: index === activeTabIndex})}>
                { tabName }
              </a>
            </li>
          )) }
        </ul>
        <div className={styles['coz-tabs-tab']}>
          { tabContents[activeTabIndex] }
        </div>
      </div>
    )
  }
}

export default Tabs
