import React from 'react'
import styles from './styles.styl'
import icons from '../../src/icons'


const Icon = function ({ icon }) {
  const hash = allIcons[icon]

  if (!hash) {
    throw new Error('Icon not found ' + icon)
  }

  return <svg className={ styles['icon'] } width='1em' height='1em'>
    <use xlinkHref={allIcons[icon]} />
  </svg>
}

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired
}

export default Icon
