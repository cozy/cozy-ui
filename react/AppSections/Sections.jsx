import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { translate } from '../I18n'
import withBreakpoints from '../helpers/withBreakpoints'

import AppsSection from './components/AppsSection'
import DropdownFilter from './components/DropdownFilter'

import { APP_TYPE } from './constants'
import * as searchUtils from './search'
import * as catUtils from './categories'

import styles from './Sections.styl'

import withLocales from '../I18n/withLocales'
import en from './locales/en.json'
import fr from './locales/fr.json'

const locales = {
  en,
  fr
}

const SectionTitle = ({ children }) => (
  <h1 className={cx(styles.Sections__title, 'u-title-h1')}>{children}</h1>
)

const SectionSubtitle = ({ children }) => (
  <h2 className={cx(styles.Sections__subtitle, 'u-title-h2')}>{children}</h2>
)

const SectionSubSubtitle = ({ children }) => (
  <h3 className={styles.Sections__subsubtitle}>{children}</h3>
)

const Section = ({ children }) => (
  <div className={styles.Sections__section}>{children}</div>
)

/**
 * Shows a list of apps grouped by categories.
 *
 * Can be
 *
 * - uncontrolled: it controls an internal search object to filter the list.
 * - controlled: it is controlled by the `search` prop
 */
export class Sections extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      search: props.initialSearch || {}
    }
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }

  // Sets state.search from the option received from the DropdownFilter
  handleCategoryChange(categoryOption) {
    const search = searchUtils.makeSearchFromOption(categoryOption)
    if (!this.props.search) {
      // the component is uncontrolled
      this.setState({
        search
      })
    }
    if (typeof this.props.onSearchChange === 'function') {
      this.props.onSearchChange(search)
    }
  }

  render() {
    const {
      t,
      apps,
      error,
      onAppClick,
      breakpoints = {},
      hasNav,
      IconComponent
    } = this.props
    const { isMobile, isTablet } = breakpoints

    if (error) return <p className="u-error">{error.message}</p>

    // Depending on whether the component is controlled or uncontrolled,
    // search is taken from props or state
    const search = this.props.search || this.state.search
    const searchMatcher = searchUtils.makeMatcherFromSearch(search)
    const filteredApps = apps.filter(searchMatcher)

    const konnectorGroups = catUtils.groupApps(
      filteredApps.filter(a => a.type === APP_TYPE.KONNECTOR)
    )
    const webAppGroups = catUtils.groupApps(
      filteredApps.filter(a => a.type === APP_TYPE.WEBAPP)
    )
    const webAppsCategories = Object.keys(webAppGroups)
      .map(cat => catUtils.addLabel({ value: cat }, t))
      .sort(catUtils.sorter)
    const konnectorsCategories = Object.keys(konnectorGroups)
      .map(cat => catUtils.addLabel({ value: cat }, t))
      .sort(catUtils.sorter)

    const dropdownDisplayed = hasNav && (isMobile || isTablet)
    const rawSelectOptions = catUtils.generateOptionsFromApps(apps, {
      includeAll: true
    })
    const selectOptions = rawSelectOptions.map(option =>
      catUtils.addLabel(option, t)
    )
    const optionMatcher = searchUtils.makeOptionMatcherFromSearch(search)
    const defaultFilterValue = selectOptions.find(optionMatcher)

    return (
      <div className={cx(styles.Sections, dropdownDisplayed && 'u-mt-half')}>
        {dropdownDisplayed && (
          <DropdownFilter
            defaultValue={defaultFilterValue}
            options={selectOptions}
            onChange={this.handleCategoryChange}
          />
        )}
        {!isMobile && !!webAppsCategories.length && (
          <SectionTitle>{t('sections.applications')}</SectionTitle>
        )}
        <Section>
          {!!webAppsCategories.length && (
            <div>
              {webAppsCategories.map(cat => {
                return (
                  <AppsSection
                    key={cat.value}
                    appsList={webAppGroups[cat.value]}
                    subtitle={<SectionSubtitle>{cat.label}</SectionSubtitle>}
                    onAppClick={onAppClick}
                    IconComponent={IconComponent}
                  />
                )
              })}
            </div>
          )}
          {!!konnectorsCategories.length && (
            <div>
              <SectionSubtitle>{t('sections.konnectors')}</SectionSubtitle>
              {konnectorsCategories.map(cat => {
                return (
                  <AppsSection
                    key={cat.value}
                    appsList={konnectorGroups[cat.value]}
                    subtitle={
                      <SectionSubSubtitle>{cat.label}</SectionSubSubtitle>
                    }
                    IconComponent={IconComponent}
                    onAppClick={onAppClick}
                  />
                )
              })}
            </div>
          )}
        </Section>
      </div>
    )
  }
}

Sections.propTypes = {
  t: PropTypes.func.isRequired,

  /** List of apps that will be displayed into categories */
  apps: PropTypes.array.isRequired,
  error: PropTypes.object,

  onAppClick: PropTypes.func.isRequired,

  /** Whether to display the category selector */
  hasNav: PropTypes.bool,

  /** An initial search object. Changing it after mounting will do nothing. */
  initialSearch: PropTypes.object
}

Sections.defaultProps = {
  hasNav: true
}

export const Untranslated = withBreakpoints()(Sections)

export default withLocales(locales)(translate()(Untranslated))
