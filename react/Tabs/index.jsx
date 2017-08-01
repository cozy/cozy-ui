import React from 'react'
import styles from './styles.styl'
import classnames from 'classnames'

export const Tab = ({ key, children, className }) => (
  <div
    role='tabpanel'
    aria-labelledby={key}
    className={classnames(styles['coz-tab-panel'], className)}>
    {children}
  </div>
)

export class Tabs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: this.props.initialActiveTab
    }
  }

  changeTab (tab) {
    this.setState(state => Object.assign({}, state, {active: tab.props.name}))
  }

  isActiveTab (tabName) {
    return this.state.active === tabName
  }

  render () {
    return (
      <div className={classnames(styles['coz-tabs'], this.props.className)}>
        <div role='tablist' className={classnames(styles['coz-tab-list'])}>
          {React.Children.map(this.props.children, tab => (
            <div
              className={classnames(styles['coz-tab'], { [styles['coz-tab--active']]: this.isActiveTab(tab.props.name) })}
              onClick={e => this.changeTab(tab)}
              key={tab.props.name}
              aria-selected={this.isActiveTab(tab.props.name)}
              aria-controls={tab.props.name}
              role='tab'>
              {tab.props.title}
            </div>
          ))}
        </div>
        <div className={classnames(styles['coz-tab-panels'])}>
          {React.Children.map(this.props.children, tab => this.isActiveTab(tab.props.name) && tab)}
        </div>
      </div>
    )
  }
}
