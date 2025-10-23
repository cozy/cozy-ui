/**
 * PropTypes to use into the component Proptypes definition
 */
export const breakpointsPropTypes: PropTypes.Requireable<PropTypes.InferProps<{}>>;
export default withBreakpoints;
import PropTypes from "prop-types";
/**
 * HOC providing the `breakpoints` property to its children to help
 * with responsive web design.
 *
 * `breakpoints` values will reflect if the window.innerWidth is under
 * those breakpoints.
 *
 * @param {number[]} bp
 * @returns {(Wrapped: any) => JSX.Element}
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
declare function withBreakpoints(bp?: number[]): (Wrapped: any) => JSX.Element;
