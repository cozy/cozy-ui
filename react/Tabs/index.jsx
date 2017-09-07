import React, { Component } from 'react'
import styles from './styles.styl'
import classnames from 'classnames'

export class Tab extends Component {
  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  render ({ name, children, className, active, activeClass, changeTab, onClick }) {
    const activeStyle = {
      [styles['coz-tab--active']]: active
    }
    if (activeClass) {
      activeStyle[activeClass] = active
    }
    return <div
      className={classnames(
        styles['coz-tab'],
        className,
        activeStyle)}
      onClick={this.onClick}>{
      children
    }</div>
  }

  onClick () {
    const { changeTab, name, onClick } = this.props
    changeTab(name)
    if (onClick) {
      onClick()
    }
  }
}

export const TabList = function ({ children, activeTab, changeTab, className }) {
  return <div className={classnames(styles['coz-tab-list'], className)}>{
    React.Children.map(children, child =>
      React.cloneElement(child, {
        active: child.props.name === activeTab,
        changeTab
      }))
  }</div>
}

export const TabPanel = function ({ children, active, changeTab, className }) {
  return active ? <div className={classnames(styles['coz-tab-panel'], className)}>{
    children
  }</div> : null
}

export const TabPanels = function ({ children, activeTab, name, changeTab, className }) {
  return <div className={classnames(styles['coz-tab-panels'], className)}>{
    React.Children.map(children, child => React.cloneElement(child, {
      active: child.props.active || activeTab == child.props.name,
      changeTab
    }))
  }</div>
}

export class Tabs extends Component {
  constructor (props) {
    super(props)
    this.changeTab = this.changeTab.bind(this)
  }
  getInitialState () {
    return { activeTab: this.props.initialActiveTab }
  }

  changeTab (tabName) {
    this.setState({ activeTab: tabName })
  }

  render ({ children, className }, { activeTab }) {
    const changeTab = this.changeTab
    return <div className={classnames(styles['coz-tabs'], className)}>{
      React.Children.map(children, child =>
        React.cloneElement(child, { activeTab, changeTab })
      )
    }</div>
  }
}
