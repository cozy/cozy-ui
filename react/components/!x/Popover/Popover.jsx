import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { getScrollParent } from '../../utils/dom'
export default class Popover extends Component {
  state = {
    style: {}
  }

  constructor(props) {
    super(props)
    this.defaultStyle = {
      display: 'block',
      visibility: 'hidden',
      position: 'fixed'
    }
  }

  componentDidMount() {
    // When the component is ready, then let's do some maths
    requestAnimationFrame(this.computeCoordinates.bind(this))
  }

  computeCoordinates() {
    // Find me & give me my coordinates
    // eslint-disable-next-line react/no-find-dom-node
    const domItem = ReactDOM.findDOMNode(this)
    const domItemCoordinates = domItem.getBoundingClientRect()
    const menuElement = domItem.parentNode
    const scrollTop = getScrollParent(menuElement)
    const coordinates = menuElement.getBoundingClientRect()

    // If we have don't have enough space => maths
    const hasNotEnoughSpace =
      domItemCoordinates.bottom - scrollTop > window.innerHeight
    this.setState({
      style: {
        top: hasNotEnoughSpace
          ? coordinates.top - domItemCoordinates.height
          : coordinates.top + coordinates.height,
        left: coordinates.left + coordinates.width - domItemCoordinates.width,
        visibility: 'visible'
      }
    })
  }

  render() {
    const { style, className, children } = this.props
    return (
      <div
        style={{
          ...style,
          ...this.defaultStyle,
          ...this.state.style
        }}
        className={className}
      >
        {children}
      </div>
    )
  }
}

Popover.defaultProps = {
  style: {},
  className: {}
}

Popover.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
}
