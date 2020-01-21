import { createMuiTheme } from '@material-ui/core/styles'

/**
 * Create an MUI theme from a Cozy UI theme
 * @TODO
 *
 * @param {object} inner - local overrides to the current theme
 * @param {object} outer - theme in the parent element
 * @param {objet} merge - theme resulting from the merge of inner and outer
 * @returns {object} MUI theme object
 */
function muiThemeFromCozyTheme(inner, outer, merge) {
  createMuiTheme( theme => theme )
}


export default muiThemeFromCozyTheme
