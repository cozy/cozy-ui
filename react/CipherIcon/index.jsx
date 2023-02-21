import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AppIcon from '../AppIcon'
import Icon from '../Icon'
import { withClient } from 'cozy-client'
import { AppDoctype } from '../proptypes'

import KeychainIcon from '../Icons/Keychain'

class CipherIcon extends React.PureComponent {
  constructor(props) {
    super(props)
    this.fetchIcon = this.fetchIcon.bind(this)
  }

  fetchIcon() {
    const { client, konnector } = this.props

    return client.getStackClient().getIconURL({
      type: 'konnector',
      slug: konnector.slug || konnector,
      appData: konnector
    })
  }

  render() {
    const { className, ...rest } = this.props

    return (
      <div className={cx('u-dib u-pos-relative', className)} {...rest}>
        <Icon icon={KeychainIcon} size={32} />
        <div className="u-pos-absolute u-right-0 u-bottom-0">
          <AppIcon fetchIcon={this.fetchIcon} className="u-w-1 u-h-1" />
        </div>
      </div>
    )
  }
}

CipherIcon.propTypes = {
  konnector: PropTypes.oneOfType([AppDoctype, PropTypes.string]).isRequired
}

export default withClient(CipherIcon)
