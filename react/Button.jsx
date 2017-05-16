import cx from 'classnames'

export default function (props) {
  const { theme, className, children, onClick } = props
  return <button
    role='button'
    className={cx('coz-btn', theme ? `coz-btn--${theme}` : null, className)}
    onClick={onClick}>
    { children }
  </button>
}
