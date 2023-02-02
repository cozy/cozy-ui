import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../../Icon'
import BottomIcon from '../../Icons/Bottom'
import SelectBox from '../../SelectBox'

import styles from './DropdownFilter.styl'

const SmallArrow = () => (
  <Icon
    className={cx(styles.DropdownFilter__icon, 'u-mr-1')}
    icon={BottomIcon}
    color="var(--coolGrey)"
    width={16}
    height={16}
  />
)

/**
 * Renders a generic dropdown
 */
export class DropdownFilter extends Component {
  render() {
    const { options, defaultValue } = this.props
    return (
      <div className={styles.Dropdown}>
        <SelectBox
          classNamePrefix="sto-sections-select"
          options={options}
          onChange={this.props.onChange}
          defaultValue={defaultValue}
          components={{
            DropdownIndicator: SmallArrow
          }}
          isSearchable={false}
          fullwidth
        />
      </div>
    )
  }
}

DropdownFilter.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.object
}

export default DropdownFilter
