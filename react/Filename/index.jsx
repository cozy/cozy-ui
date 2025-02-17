import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import styles from './styles.styl'
import { iconPropType } from '../Icon'
import MidEllipsis from '../MidEllipsis'
import Typography from '../Typography'

const NameAndExtension = ({ filename, extension, variant, midEllipsis }) => {
  return (
    <>
      {filename && (
        <Typography variant={variant} component="span" noWrap>
          {midEllipsis ? <MidEllipsis text={filename} /> : filename}
        </Typography>
      )}
      {extension && (
        <Typography variant={variant} component="span" color="textSecondary">
          {extension}
        </Typography>
      )}
    </>
  )
}

const Filename = ({
  icon,
  filename,
  extension,
  midEllipsis,
  variant,
  path
}) => {
  const [Wrapper, wrapperProps] = path
    ? [Fragment, {}]
    : ['div', { className: cx('u-flex u-flex-items-center') }]

  return (
    <Wrapper {...wrapperProps}>
      {icon && (
        <div
          className={cx('u-flex u-pos-relative u-mr-1', {
            [styles['icon-withPath']]: !!path
          })}
        >
          {icon}
        </div>
      )}
      {path ? (
        <>
          <div className="u-flex">
            <NameAndExtension
              filename={filename}
              extension={extension}
              variant={variant}
              midEllipsis={midEllipsis}
            />
          </div>
          <Typography variant="body2" component="div" noWrap>
            {path}
          </Typography>
        </>
      ) : (
        <NameAndExtension
          filename={filename}
          extension={extension}
          variant={variant}
          midEllipsis={midEllipsis}
        />
      )}
    </Wrapper>
  )
}

Filename.propTypes = {
  /** Filename icon */
  icon: iconPropType,
  /** folder or file name */
  filename: PropTypes.string,
  /** If a file name, you can specify the extension */
  extension: PropTypes.string,
  /** To replace the end ellipsis by a middle on in the filename */
  midEllipsis: PropTypes.bool,
  variant: PropTypes.string
}

Filename.defaultProps = {
  variant: 'h6',
  midEllipsis: false
}

export default Filename
