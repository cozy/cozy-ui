import React, { Component } from 'react'
import throttle from 'lodash/throttle'
import PropTypes from 'prop-types'

import breakpoints, { getBreakpointsStatus } from './breakpoints'

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
const withBreakpoints = (bp = breakpoints) => Wrapped => {
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

  Aware.displayName = `withBreakpoints(${Wrapped.displayName || Wrapped.name})`
  return Aware
}

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
