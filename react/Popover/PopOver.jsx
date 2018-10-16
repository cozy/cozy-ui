import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
export default class Popover extends Component {
  constructor(props) {
    super(props)
    this.element = ''
    this.state = {
      style: { display: 'block', visibility: 'hidden', position: 'fixed' }
    }
  }

  //When the component is ready, than let's do some Maths
  componentDidMount() {
    requestAnimationFrame(this.computeCoordinates.bind(this))
  }
  computeCoordinates() {
    const { refParent, style } = this.props
    // eslint-disable-next-line
    const menuElement = ReactDOM.findDOMNode(refParent)
    const scrollTop = this.getScrollParent(menuElement)
    const coordinates = menuElement.getBoundingClientRect()

    //Find me & give me my coordinates
    // eslint-disable-next-line
    const domItem = ReactDOM.findDOMNode(this.element)
    const domItemCoordinates = domItem.getBoundingClientRect()
    //If we have don't have enough space => maths
    const hasNotEnoughSpace =
      domItemCoordinates.bottom - scrollTop > window.innerHeight
    this.setState({
      style: {
        ...style,
        top: hasNotEnoughSpace
          ? coordinates.top - domItemCoordinates.height
          : coordinates.top + coordinates.height,
        left: coordinates.left + coordinates.width - domItemCoordinates.width,
        position: 'fixed',
        display: 'block',
        visibility: 'visible'
      }
    })
  }
  getScrollParent(element) {
    let el = element
    let scrollTop = 0

    while (el && el.parentNode !== document) {
      scrollTop += el.scrollTop
      el = el.parentNode
    }
    return scrollTop
  }

  render() {
    return (
      <div
        style={{ ...this.props.style, ...this.state.style }}
        ref={ref => (this.element = ref)}
        className={this.props.className}
      >
        {this.props.children}
      </div>
    )
  }
}

Popover.defaultProps = {
  style: {},
  className: {},
  refParent: ''
}

Popover.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  refParent: PropTypes.object
}
