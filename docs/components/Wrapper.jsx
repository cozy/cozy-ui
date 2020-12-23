/* global isTesting */

import React, { useState } from 'react'
import CozyTheme from '../../react/CozyTheme'
import Paper from '../../react/Paper'
import Button from '../../react/Button'

const styles = {
  button: {
    position: 'absolute',
    top: '0.75rem',
    right: '0.75rem',
    marginRight: 0
  },
  paper: {
    position: 'relative',
    padding: '0.75rem'
  }
}
export default ({ children }) => {
  const [theme, setTheme] = useState('normal')
  const handleClick = () => {
    setTheme(theme === 'normal' ? 'inverted' : 'normal')
  }
  return (
    <CozyTheme variant={theme}>
      <Paper elevation={0} square style={styles.paper}>
        {isTesting() ? null : (
          <Button
            size="tiny"
            theme="secondary"
            label={theme === 'normal' ? 'inverted' : 'normal'}
            style={styles.button}
            onClick={handleClick}
          />
        )}
        {children}
      </Paper>
    </CozyTheme>
  )
}
