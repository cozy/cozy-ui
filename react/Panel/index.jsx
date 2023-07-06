import { mkComponent } from '../utils'
import styles from './styles.styl'

export const Group = mkComponent('div', { className: styles['Panel-group'] })
export const Main = mkComponent('div', { className: styles['Panel-main'] })
export const Side = mkComponent('aside', { className: styles['Panel-side'] })

export default {
  Group,
  Main,
  Side
}
