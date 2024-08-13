import React from 'react'
import PropTypes from 'prop-types'

export const infoWidth = '22rem'

const styles = {
  panel: {
    width: infoWidth,
    backgroundColor: 'var(--defaultBackgroundColor)'
  }
}

const InformationPanel = ({ children }) => {
  return (
    <div style={styles.panel} className="u-h-100 u-ov-auto">
      {children}
    </div>
  )
}

InformationPanel.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.element
}

export default InformationPanel
