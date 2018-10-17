import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { getScrollParent } from '../utils/dom'
export default class Popover extends Component {
  constructor(props) {
    super(props)
    this.defaultStyle = {
      display: 'block',
      visibility: 'hidden',
      position: 'fixed',
      zIndex: 100
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
    let left = ''
    switch (this.props.align) {
      case 'center':
        left =
          coordinates.left +
          coordinates.width / 2 -
          domItemCoordinates.width / 2
        break
      case 'right':
      default:
        left = coordinates.left + coordinates.width - domItemCoordinates.width
        break
    }
    this.setState({
      style: {
        top: hasNotEnoughSpace
          ? coordinates.top - domItemCoordinates.height
          : coordinates.top + coordinates.height,
        left: left,
        visibility: 'visible'
      }
    })
  }

  render() {
    return (
      <div
        style={{
          ...this.props.style,
          ...this.defaultStyle,
          ...this.state.style
        }}
        className={this.props.className}
      >
        {this.props.children(!this.state.hasNotEnoughSpace)}
      </div>
    )
  }
}

Popover.defaultProps = {
  style: {},
  className: {},
  align: ''
}

Popover.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  align: PropTypes.oneOf(['center', 'right'])
}
