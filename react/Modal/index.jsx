import React from 'react'
import classNames from 'classnames'

import styles from './index.styl'

const Modal = ({
  title, description,
  cancelType, cancelText, cancelAction,
  validateType, validateText, validateAction, children
}) => (
  <div className={styles['coz-modal-container']}>
    <div className={styles['coz-overlay']}>
      <div className={styles['coz-modal']}>
        <h2 className={styles['coz-modal-title']}>{title}</h2>
        <button
          className={classNames('coz-btn', 'coz-btn--close', styles['coz-btn-modal-close'])}
          onClick={cancelAction}
          >
          <span className='coz-hidden'>{cancelText}</span>
        </button>
        { description && <div className={classNames(styles['coz-modal-content'], styles['coz-description'])}>
            {description}
          </div>
        }
        { children }
        <div className={styles['coz-modal-buttons']}>
          { (cancelText || cancelAction) && <button className={styles[cancelType]} onClick={cancelAction}>
            {cancelText}
          </button>
          }
          { (validateText || validateAction) && <button className={styles[validateType]} onClick={validateAction}>
            {validateText}
          </button>
          }
        </div>
      </div>
    </div>
  </div>
)

Modal.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.node,
  cancelType: React.PropTypes.string,
  cancelText: React.PropTypes.string,
  cancelAction: React.PropTypes.func,
  validateType: React.PropTypes.string,
  validateText: React.PropTypes.string,
  validateAction: React.PropTypes.func
}

Modal.defaultProps = {
  cancelType: 'secondary',
  validateType: 'primary'
}

export default Modal
