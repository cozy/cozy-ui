import classNames from 'classnames'
import React, { Component } from 'react'

import styles from './styles.styl'
import Icon from '../../Icon'
import PlusIcon from '../../Icons/Plus'
import Input from '../../legacy/Input'
import { translate } from '../../providers/I18n'

const normalizeGroupData = name => {
  return {
    name: name,
    metadata: {
      version: 1
    }
  }
}
class GroupCreation extends Component {
  state = {
    isInputDisplayed: false,
    groupName: ''
  }
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }
  handleClick = () => {
    this.setState({ isInputDisplayed: !this.state.isInputDisplayed })
  }
  onFocus = e => {
    e.stopPropagation()
  }

  onClick = e => {
    e.stopPropagation()
  }
  keyPress = async e => {
    if (e.keyCode == 13) {
      this.props.createGroup(normalizeGroupData(e.target.value))
      this.textInput.current.value = ''
    }
    e.stopPropagation()
  }

  onMouseDown = e => {
    e.stopPropagation()
  }

  render() {
    const { isInputDisplayed } = this.state
    const { t } = this.props
    return (
      <div>
        <div className={styles['contact-group-creation-divider']} />
        <div
          className={classNames(
            'u-ml-half',
            'u-mr-half',
            'u-c-pointer',
            styles['container']
          )}
        >
          {!isInputDisplayed && (
            <div
              onClick={this.handleClick}
              className={styles['contact-group-create-div-icon']}
            >
              <Icon icon={PlusIcon} />
              <span className="u-pl-half">
                {t('Contacts.GroupsSelect.create')}
              </span>
            </div>
          )}
          {isInputDisplayed && (
            <Input
              id="createGroupInput"
              ref={this.textInput}
              type="text"
              placeholder={t('Contacts.GroupsSelect.name')}
              onClick={this.onClick}
              onFocus={this.onFocus}
              onKeyDown={this.keyPress}
              size="tiny"
              autoComplete="off"
              autoFocus={true}
              onMouseDown={this.onMouseDown}
            />
          )}
        </div>
      </div>
    )
  }
}

export default translate()(GroupCreation)
