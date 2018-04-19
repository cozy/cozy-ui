import React from 'react'
import BaseIcon from '../Icon'
import styles from './styles.styl'
import { mkComponent } from '../utils'

// Cannot use mkComponent since it is not picked up by styleguidist
export const Hero = ({ children, ...props }) => (
  <div {...props} className={styles.Hero}>
    {children}
  </div>
)

export default Hero
export const Title = mkComponent('h2', { className: styles['Hero-title'] })
export const Subtitle = mkComponent('h3', {
  className: styles['Hero-subtitle']
})
export const Section = mkComponent('div', { className: styles['Hero-section'] })
export const Sections = mkComponent('div', {
  className: styles['Hero-sections']
})
export const Paragraph = mkComponent('p', {})
export const CTA = mkComponent('p', { className: styles['Hero-cta'] })
export const Icon = ({ color, icon }) => (
  <BaseIcon width={80} height={80} style={{ color }} icon={icon} />
)

Hero.Title = Title
Hero.Icon = Icon
Hero.Subtitle = Subtitle
Hero.Section = Section
Hero.Sections = Sections
Hero.Paragraph = Paragraph
Hero.CTA = CTA
