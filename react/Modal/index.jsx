import React from 'react'
import classNames from 'classnames'

import styles from './index.styl'

export default (props) => {
  const {
    title, description,
    cancelType, cancelText, cancelAction,
    validateType, validateText, validateAction
  } = props

  const cancelTypeDefault = cancelType || 'secondary'
  const validateTypeDefault = validateType || 'primary'

  return (<div className={styles['coz-modal-container']}>
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
          <button className={styles[cancelTypeDefault]} onClick={cancelAction}>
            {cancelText}
          </button>
          <button className={styles[validateTypeDefault]} onClick={validateAction}>
            {validateText}
          </button>
        </div>
      </div>
    </div>
  </div>)
}
