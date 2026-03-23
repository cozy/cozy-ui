import React, { useState } from 'react'

import Divider from '../../react/Divider'
import Paper from '../../react/Paper'
import Button from '../../react/deprecated/Button' // TODO: should remove deprecated
import CozyTheme from '../../react/providers/CozyTheme'
import { isUsingDevStyleguidist } from '../../scripts/build-utils'

const styles = {
  button: {
    position: 'absolute',
    top: '0.75rem',
    right: '0.75rem',
    marginRight: 0,
    zIndex: 10
  },
  buttonLang: {
    position: 'absolute',
    top: '0.75rem',
    right: '6.75rem',
    marginRight: 0,
    zIndex: 10
  },
  paper: {
    position: 'relative',
    padding: '1rem'
  }
}

export default ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')

  const handleLangClick = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr'
    setLang(newLang)
    localStorage.setItem('lang', newLang)
  }
  return (
    <CozyTheme>
      <CozyTheme>
        <Paper className="u-pos-relative u-p-1" elevation={0} square>
          <Button
            size="tiny"
            theme="secondary"
            label={lang}
            style={styles.buttonLang}
            onClick={handleLangClick}
          />
          {children}
        </Paper>
      </CozyTheme>
      {isUsingDevStyleguidist() && (
        <>
          <Divider />
          <CozyTheme>
            <Paper className="u-pos-relative u-p-1" elevation={0} square>
              {children}
            </Paper>
          </CozyTheme>
        </>
      )}
    </CozyTheme>
  )
}
