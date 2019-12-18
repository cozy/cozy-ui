import React from 'react'
import MUITextField from '@material-ui/core/TextField'
import cx from 'classnames'
import styles from './styles.styl'

const InvertedTextField = props => (
  <div
    className={cx('CozyMuiInvertedTextField', styles['TextField--fullWidth'])}
  >
    <MUITextField {...props} />
  </div>
)

const TextField = props => {
  const { inverted, ...rest } = props

  if (inverted) {
    return <InvertedTextField {...rest} />
  }

  return <MUITextField {...rest} />
}

export default TextField
