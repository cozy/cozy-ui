import React from 'react'
import styles from './styles.styl'
import cx from 'classnames'

const ModalHeader = ({
  title,
  children,
  className,
  appIcon,
  appName,
  appEditor,
  style,
  id
}) => {
  const isTitle = typeof children === 'string'
  return (
    <div
      className={cx(styles['c-modal-header'], className)}
      style={style}
      id={id}
    >
      {title && <h2>{title}</h2>}
      {isTitle ? <h2>{children}</h2> : children}
      {appName && (
        <h2 className={styles['c-modal-app']}>
          {appIcon && (
            <img className={styles['c-modal-app-icon']} src={appIcon} />
          )}
          {appEditor && (
            <span className={styles['c-app-editor']}>
              {appEditor}
              &nbsp;
            </span>
          )}
          {appName}
        </h2>
      )}
    </div>
  )
}

const ModalBrandedHeader = ({ logo, bg, className, style = {} }) => (
  <h2
    className={cx(styles['c-modal-header--branded'], className)}
    style={{ background: bg, ...style }}
  >
    <img src={logo} alt="" />
  </h2>
)

export default ModalHeader
export { ModalHeader, ModalBrandedHeader }
