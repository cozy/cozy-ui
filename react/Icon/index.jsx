import React from 'react'
import styles from './styles.styl'

const normalize = function (k) {
  return k.replace('icon-', '').replace(/\.svg$/, '').replace(/^\.\//, '')
}

const allIcons = (ctx => {
  let keys = ctx.keys()
    .filter(x => x.indexOf('./icon-') === 0)
    .filter(x => x.indexOf('-white') === -1)
  let values = keys.map(ctx)
  return keys.reduce((o, k, i) => {
    o[normalize(k)] = values[i]
    return o
  }, {})
})(require.context('../../assets/icons/ui', true, /.*/))

const Icon = function ({ icon }) {
  const hash = allIcons[icon]

  if (!hash) {
    throw new Error('Icon not found ' + icon)
  }

  return <svg className={ styles['icon'] } width='1em' height='1em'>
    <use href={allIcons[icon]} />
  </svg>
}

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired
}

export default Icon
