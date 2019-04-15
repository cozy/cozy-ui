import React, { Component } from 'react'
import pick from 'lodash/pick'
import compose from 'lodash/flowRight'
import mapValues from 'lodash/mapValues'
import throttle from 'lodash/throttle'
import PropTypes from 'prop-types'

const large = 1200
const medium = 1023
const small = 768
const tiny = 543

const breakpoints = {
  isExtraLarge: [large + 1],
  isLarge: [medium + 1, large],
  isMedium: [small + 1, medium],
  isSmall: [tiny + 1, small],
  isTiny: [0, tiny],
  isDesktop: [medium + 1],
  isTablet: [small + 1, medium],
  isMobile: [0, small]
}

const getBreakpointsStatus = breakpoints => {
  const width = window.innerWidth
  return mapValues(
    breakpoints,
    ([min, max]) => width >= min && (max === undefined || width <= max)
  )
}

/**
 * HOC providing the `breakpoints` property to its children to help
 * with responsive web design.
 *
 * `breakpoints` values will reflect if the window.innerWidth is under
 * those breakpoints.
 *
 * @Example
 * ````
 * // here we define `mobile` as a screen under 1000px
 * const B = withBreakpoints({ mobile: 1000 })(A)
 * ````
 *
 * `A` will receive `{ breakpoints: { mobile: true }}` if the screen
 * width is under 1000px.
 *
 * `A` will receive `{ breakpoints: { mobile: false }}` if the screen
 * width is over 1000px;
 *
 *
 */
const withBreakpoints = (bp = breakpoints) => Wrapped =>
  class Aware extends Component {
    constructor(props) {
      super(props)
      this.state = {
        breakpoints: getBreakpointsStatus(bp)
      }
      this.checkBreakpoints = throttle(
        () => {
          this.setState({ breakpoints: getBreakpointsStatus(bp) })
        },
        100,
        { trailing: true }
      )
    }

    componentDidMount() {
      window.addEventListener('resize', this.checkBreakpoints)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.checkBreakpoints)
    }

    render() {
      const props = this.props
      const { breakpoints } = this.state
      return <Wrapped {...props} breakpoints={breakpoints} />
    }
  }

/**
 * HOC that tries a predicate on props + state and
 * renders a component only if the predicate returns true
 */
export const renderOnlyIf = predicate => Wrapped =>
  class extends Component {
    render() {
      const props = this.props
      const state = this.state
      if (predicate(props, state)) {
        return <Wrapped {...props} />
      }
    }
  }

/**
 * Use this HOC if you only want your component to be
 * rendered on mobile
 */
export const onlyMobile = compose(
  withBreakpoints(pick(breakpoints, 'isMobile')),
  renderOnlyIf(props => props.breakpoints.isMobile)
)

/**
 * Use this HOC if you only want your component to be
 * rendered on tablet
 */
export const onlyTablet = compose(
  withBreakpoints(pick(breakpoints, 'isTablet')),
  renderOnlyIf(props => props.breakpoints.isTablet)
)

/**
 * Use this HOC if you only want your component to be
 * rendered on desktop
 */
export const onlyDesktop = compose(
  withBreakpoints(pick(breakpoints, 'isDesktop')),
  renderOnlyIf(props => props.breakpoints.isDesktop)
)

/**
 * PropTypes to use into the component Proptypes definition
 */
export const breakpointsPropTypes = PropTypes.shape(
  Object.keys(breakpoints).reduce((all, breakpoint) => {
    all[breakpoint] = PropTypes.bool.isRequired
    return all
  }, {})
)

export default withBreakpoints
