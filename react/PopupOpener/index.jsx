import React from 'react'
import PropTypes from 'prop-types'

// customized function to center a popup window
// source https://stackoverflow.com/a/16861050
export function openCenteredPopup(url, title, w, h) {
  // eslint-disable-next-line no-redeclare
  /* global screen */
  var width =
    window.innerWidth || document.documentElement.clientWidth || screen.width
  var height =
    window.innerHeight || document.documentElement.clientHeight || screen.height

  var left = width / 2 - w / 2 + window.screenX
  var top = height / 2 - h / 2 + window.screenY
  var newWindow = window.open(
    '',
    title,
    `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`
  )
  newWindow.location.href = url

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus()
  }
  return newWindow
}

const PopupOpener = props => {
  const { url, className, children, frameTitle, height, width } = props
  return (
    <a
      onClick={() => openCenteredPopup(url, frameTitle, width, height)}
      className={className}
    >
      {children}
    </a>
  )
}

PopupOpener.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  frameTitle: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

PopupOpener.defaultProps = {
  height: 500,
  width: 500
}

export default PopupOpener
