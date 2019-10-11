import React, { Component } from 'react'
import styles from './styles.styl'
import cx from 'classnames'

export class Tab extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  render() {
    const { children, className, active, activeClass } = this.props
    const activeStyle = {
      [styles['coz-tab--active']]: active
    }
    if (activeClass) {
      activeStyle[activeClass] = active
    }
    return (
      <div
        className={cx(styles['coz-tab'], activeStyle, className)}
        onClick={this.onClick}
      >
        {children}
      </div>
    )
  }

  onClick() {
    const { changeTab, name, onClick } = this.props
    changeTab(name)
    if (onClick) {
      onClick()
    }
  }
}

export const TabList = function({
  children,
  activeTab,
  changeTab,
  className,
  inverted
}) {
  return (
    <div
      className={cx(styles['coz-tab-list'], className, {
        [styles['coz-tab-list--inverted']]: inverted
      })}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          active: child.props.name === activeTab,
          changeTab
        })
      )}
    </div>
  )
}

export const TabPanel = function({ children, active, className }) {
  return active ? (
    <div className={cx(styles['coz-tab-panel'], className)}>{children}</div>
  ) : null
}

export const TabPanels = function({
  children,
  activeTab,
  changeTab,
  className
}) {
  return (
    <div className={cx(styles['coz-tab-panels'], className)}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          active: child.props.active || activeTab === child.props.name,
          changeTab
        })
      )}
    </div>
  )
}

export class Tabs extends Component {
  constructor(props) {
    super(props)
    this.changeTab = this.changeTab.bind(this)
    this.state = { activeTab: props.initialActiveTab }
  }

  changeTab(tabName) {
    this.setState({ activeTab: tabName })
  }

  render() {
    const { children, className } = this.props
    const { activeTab } = this.state
    const changeTab = this.changeTab
    return (
      <div className={cx(styles['coz-tabs'], className)}>
        {React.Children.map(children, child =>
          React.cloneElement(child, { activeTab, changeTab })
        )}
      </div>
    )
  }
}
