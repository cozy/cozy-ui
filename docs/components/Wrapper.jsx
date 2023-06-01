import React, { useState } from 'react'
import CozyTheme from '../../react/CozyTheme'
import Paper from '../../react/Paper'
import Button from '../../react/Buttons'
import isTesting from '../../react/helpers/isTesting'
import themes from '../../theme/themes'
import Typography from '../../react/Typography'
import Divider from '../../react/MuiCozyTheme/Divider'
import Box from '../../react/Box'
import { isUsingDevStyleguidist } from '../../scripts/build-utils'
import { addFlagshipElements, removeFlagshipElements } from './helpers'

const ThemeLabel = ({ theme }) => {
  return (
    <Typography component="div" className="u-db u-mb-1" variant="h5">
      Theme: {theme}
    </Typography>
  )
}

export default ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || themes.normal
  )
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')
  const [flagship, setFlagship] = useState(
    localStorage.getItem('flagship') || 'off'
  )

  const otherThemes = Object.keys(themes).filter(v => v !== theme)

  const handleThemeClick = () => {
    setTheme(theme === themes.normal ? themes.inverted : themes.normal)
  }

  const handleLangClick = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr'
    setLang(newLang)
    localStorage.setItem('lang', newLang)
  }

  const handleFlagshipClick = () => {
    const newFlagship = flagship === 'on' ? 'off' : 'on'
    if (newFlagship === 'on') {
      addFlagshipElements()
    } else {
      removeFlagshipElements()
    }
    setFlagship(newFlagship)
    localStorage.setItem('flagship', newFlagship)
  }

  return (
    <CozyTheme>
      <CozyTheme variant={theme}>
        <Paper className="u-p-1" elevation={0} square>
          <Box display="flex" justifyContent="end" gridGap={10}>
            <Button
              size="small"
              variant="secondary"
              label={flagship === 'on' ? 'Flagship Off' : 'Flagship On'}
              onClick={handleFlagshipClick}
            />
            <Button
              size="small"
              variant="secondary"
              label={lang}
              onClick={handleLangClick}
            />
            {isTesting() || isUsingDevStyleguidist() ? null : (
              <Button
                size="small"
                variant="secondary"
                label={
                  theme === themes.normal ? themes.inverted : themes.normal
                }
                onClick={handleThemeClick}
              />
            )}
          </Box>
          {isUsingDevStyleguidist() && <ThemeLabel theme={theme} />}
          {children}
        </Paper>
      </CozyTheme>
      {isUsingDevStyleguidist() &&
        otherThemes.map((otherTheme, i) => (
          <React.Fragment key={i}>
            <Divider />
            <CozyTheme key={otherTheme} variant={otherTheme}>
              <Paper className="u-p-1" elevation={0} square>
                <ThemeLabel theme={otherTheme} />
                {children}
              </Paper>
            </CozyTheme>
          </React.Fragment>
        ))}
    </CozyTheme>
  )
}
