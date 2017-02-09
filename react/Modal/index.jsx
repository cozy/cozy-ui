import React from 'react'
import classNames from 'classnames'

import styles from './index.styl'

const Modal = ({
  title, description,
  cancelType, cancelText, cancelAction,
  validateType, validateText, validateAction
}) => (
  <div className={styles['coz-modal-container']}>
    <div className={styles['coz-overlay']}>
      <div className={styles['coz-modal']}>
        <h2 className={styles['coz-modal-title']}>{title}</h2>
        <button
          className={classNames('coz-btn', 'coz-btn--close', styles['coz-modal-close'])}
          onClick={cancelAction}
          >
          <span className='coz-hidden'>{cancelText}</span>
        </button>
        {description}
        <div className={styles['coz-modal-buttons']}>
          <button className={styles[cancelType]} onClick={cancelAction}>
            {cancelText}
          </button>
          <button className={styles[validateType]} onClick={validateAction}>
            {validateText}
          </button>
        </div>
      </div>
    </div>
  </div>
)

Modal.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  cancelType: React.PropsTypes.string,
  cancelText: React.PropsTypes.string.isRequired,
  cancelAction: React.PropsTypes.func.isRequired,
  validateType: React.PropsTypes.string,
  validateText: React.PropsTypes.string.isRequired,
  validateAction: React.PropsTypes.func.isRequired
}

Modal.defaultProps = {
  cancelType: 'secondary',
  validateType: 'primary'
}

export default Modal
