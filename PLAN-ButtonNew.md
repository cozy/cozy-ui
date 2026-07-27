# Plan : composant `ButtonNew` (API MUI v9 sur MUI v4) + Readme

## Objectif

Construire `react/ButtonNew` en wrapper de `@material-ui/core/Button` (v4) exposant l'API du `Button` MUI v9.
Permet de vérifier visuellement la parité avec `Buttons` (styleguidist). À terme `ButtonNew` remplacera `Buttons`.

## Décisions

* API MUI v9 : `color` ∈ `inherit|primary|secondary|success|error|info|warning`, `variant` ∈ `contained|outlined|text|ghost` (ghost = extension cozy-ui), `size` défaut `medium`, `loading`/`loadingPosition`/`loadingIndicator` (remplace `busy`), `disableElevation` défaut `false`, children (pas de `label`).
* Couleurs étendues (success/error/info/warning) → classe `customColor-{color}` + `color="primary"` passé à MUI v4.
* `ghost` → `variant="outlined"` + classe `ghost`.
* `loading` : API v9. Indicateur défaut `<CircularProgress color="inherit" size={16} />`. `loading` → `disabled`. Center préserve largeur (children `visibility:hidden`, indicateur centré absolu).
* Auto-height : pas de prop `height` ; hauteur naturelle par défaut. Section "Long label" remplace "Auto height".
* `label` : supprimé, children uniquement.
* Aucun `let` (const + ternaires).

## Fichiers

1. Créer `react/ButtonNew/index.jsx` (wrapper)
2. Créer `react/ButtonNew/Readme.md` (8 sections)
3. Éditer `docs/styleguide.config.js` — ajouter `'../react/ButtonNew'` dans Core (après `Buttons`)
4. Éditer `react/MuiCozyTheme/overrides/makeLightOverrides.js` — classes loading sous `MuiButton.root`

## Fichier 1 : `react/ButtonNew/index.jsx`

```jsx
import CircularProgress from '@material-ui/core/CircularProgress'
import MuiButton from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import cx from 'classnames'

const EXTENDED_COLORS = ['success', 'error', 'info', 'warning']
const GHOST_VARIANT = 'ghost'

const ButtonNew = forwardRef(function ButtonNew(props, ref) {
  const {
    color = 'primary',
    variant = 'text',
    size = 'medium',
    loading = null,
    loadingPosition = 'center',
    loadingIndicator,
    disabled = false,
    className,
    startIcon: startIconProp,
    endIcon: endIconProp,
    children,
    ...other
  } = props

  const isExtendedColor = EXTENDED_COLORS.includes(color)
  const isGhost = variant === GHOST_VARIANT
  const isLoading = loading === true
  const isControlledLoading = typeof loading === 'boolean'
  const isCenterLoading = isControlledLoading && loadingPosition === 'center'

  const indicator = loadingIndicator ?? <CircularProgress color="inherit" size={16} />
  const startIcon = isLoading && loadingPosition === 'start' ? indicator : startIconProp
  const endIcon = isLoading && loadingPosition === 'end' ? indicator : endIconProp
  const body = isCenterLoading ? (
    <>
      <span className="loadingChildren">{children}</span>
      {isLoading && <span className="loadingIndicator">{indicator}</span>}
    </>
  ) : children

  return (
    <MuiButton
      ref={ref}
      color={isExtendedColor ? 'primary' : color}
      variant={isGhost ? 'outlined' : variant}
      size={size}
      disabled={disabled || isLoading}
      className={cx(
        className,
        isExtendedColor && `customColor-${color}`,
        isGhost && GHOST_VARIANT,
        isLoading && 'loading',
        isControlledLoading && `loadingPosition-${loadingPosition}`
      )}
      startIcon={startIcon}
      endIcon={endIcon}
      {...other}
    >
      {body}
    </MuiButton>
  )
})

ButtonNew.displayName = 'ButtonNew'

ButtonNew.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),
    PropTypes.string
  ]),
  component: PropTypes.elementType,
  disabled: PropTypes.bool,
  disableElevation: PropTypes.bool,
  disableFocusRipple: PropTypes.bool,
  disableRipple: PropTypes.bool,
  endIcon: PropTypes.node,
  focusVisibleClassName: PropTypes.string,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  loading: PropTypes.bool,
  loadingIndicator: PropTypes.node,
  loadingPosition: PropTypes.oneOf(['center', 'end', 'start']),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'medium', 'large']),
    PropTypes.string
  ]),
  startIcon: PropTypes.node,
  type: PropTypes.string,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['contained', 'outlined', 'text', 'ghost']),
    PropTypes.string
  ])
}

ButtonNew.defaultProps = {
  color: 'primary',
  variant: 'text',
  size: 'medium',
  loadingPosition: 'center',
  loading: null,
  disabled: false
}

export default ButtonNew
```

## Fichier 2 : `react/ButtonNew/Readme.md`

Intro + 8 sections miroir de `Buttons/Readme.md` :

* Imports : `ButtonNew` from `cozy-ui/transpiled/react/ButtonNew`, `Stack`, `Grid`, `Paper`, `Variants`, `Icon` from twake-icons.
* `variants = [contained, outlined, ghost, text]` (parité Buttons : primary→contained, secondary→outlined)
* `colors = [inherit, primary, secondary, success, error, info, warning]` (API v9, plus de `default`)
* `states = [{}, {disabled:true}, {loading:true}]`
* `sizes = [small, medium, large]`
* `iconPositions = [startIcon, endIcon]`
* Sections : Default, Sizes, Icons, Icons with sizes, Colors, Disabled colors, Loading colors, Long label (remplace Auto height)

## Fichier 3 : `docs/styleguide.config.js`

Ajouter `'../react/ButtonNew'` après `'../react/Buttons',` dans la section "Core".

## Fichier 4 : `react/MuiCozyTheme/overrides/makeLightOverrides.js`

Ajouter sous `MuiButton.root` (avant la fermeture `},`) :

```js
'&.loading': {
  position: 'relative',
  '&.loadingPosition-center': {
    '& .loadingChildren': { visibility: 'hidden' }
  }
},
'& .loadingChildren': { display: 'contents' },
'& .loadingIndicator': {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'none'
},
'&.loading .loadingIndicator': { display: 'flex' }
```

## Vérification

* `yarn lint:js`
* `yarn build:types`
* Comparaison visuelle : `yarn start:doc` → styleguidist port 6161, pages `Buttons` vs `ButtonNew`

## Ceiling (ponytail)

* `loading` center : pas de fondu d'icône (v9 en a). `// ponytail: no icon fade, add if needed`
* Pas de `sx` (v4) ; arrivera avec v9.
* `color="default"` : non documenté (v9 l'a retiré) ; v4 le gère sans crash.
