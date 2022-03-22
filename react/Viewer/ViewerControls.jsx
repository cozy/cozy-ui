import React, { Component } from 'react'
import PropTypes from 'prop-types'
import flow from 'lodash/flow'
import cx from 'classnames'
import Hammer from 'hammerjs'
import { withStyles } from '@material-ui/core/styles'

import withBreakpoints from '../helpers/withBreakpoints'

import { toolbarPropsPropType } from './index'
import { infoWidth } from './InformationPanel'
import Toolbar from './Toolbar'
import Navigation from './Navigation'

import styles from './styles.styl'

const ACTIONS_HIDE_DELAY = 3000

const customStyles = () => ({
  viewerControlsWithInfo: {
    width: `calc(100% - ${infoWidth}) !important`
  }
})

class ViewerControls extends Component {
  state = {
    hidden: false,
    gestures: null
  }

  _mounted = false

  showControls = () => {
    if (this._mounted) {
      this.setState({ hidden: false })
      this.hideAfterDelay()
      document.removeEventListener('mousemove', this.showControls)
      document.addEventListener('mousemove', this.hideAfterDelay)
    }
  }

  hideControls = () => {
    if (this._mounted) {
      this.setState({ hidden: true })
      document.removeEventListener('mousemove', this.hideAfterDelay)
      document.addEventListener('mousemove', this.showControls)
    }
  }

  onTap = () => {
    if (this.state.hidden) this.showControls()
    else this.hideAfterDelay()
  }

  hideAfterDelay = () => {
    clearTimeout(this.hideTimeout)
    this.hideTimeout = setTimeout(() => {
      this.hideControls()
    }, ACTIONS_HIDE_DELAY)
  }

  onSwipe = e => {
    if (e.direction === Hammer.DIRECTION_LEFT) this.props.onNext()
    else if (e.direction === Hammer.DIRECTION_RIGHT) this.props.onPrevious()
  }

  initGestures = () => {
    const gestures = new Hammer(this.wrapped)
    gestures.on('swipe', this.onSwipe)
    gestures.on('tap', this.onTap)
    const tap = gestures.get('tap')
    const doubleTap = gestures.get('doubletap')
    doubleTap.recognizeWith(tap)
    tap.requireFailure(doubleTap)
    return gestures
  }

  componentDidMount() {
    this._mounted = true
    clearTimeout(this.hideTimeout)
    this.hideAfterDelay()
    const gestures = this.initGestures()
    this.setState({ gestures })
  }

  componentWillUnmount() {
    this._mounted = false
    clearTimeout(this.hideTimeout)
    if (this.state.gestures) this.state.gestures.destroy()
  }

  renderChildren(children) {
    if (!children) return null
    return React.cloneElement(children, {
      gestures: this.state.gestures,
      gesturesRef: this.wrapped,
      onSwipe: this.onSwipe
    })
  }

  render() {
    const {
      file,
      onClose,
      hasPrevious,
      hasNext,
      onPrevious,
      onNext,
      expanded,
      toolbarProps,
      showNavigation,
      showInfoPanel,
      children,
      classes,
      breakpoints: { isDesktop }
    } = this.props
    const { showToolbar, showClose, toolbarRef } = toolbarProps
    const { hidden } = this.state

    return (
      <div
        className={cx(styles['viewer-controls'], {
          [styles['viewer-controls--expanded']]: expanded,
          [classes.viewerControlsWithInfo]: showInfoPanel
        })}
        ref={wrapped => {
          this.wrapped = wrapped
        }}
      >
        {showToolbar && (
          <Toolbar
            toolbarRef={toolbarRef}
            file={file}
            onClose={showClose && onClose}
            onMouseEnter={this.showControls}
            onMouseLeave={this.hideControls}
          />
        )}
        {showNavigation && isDesktop && hasPrevious && (
          <Navigation
            className={styles['viewer-nav--previous']}
            hidden={hidden}
            onMouseEnter={this.showControls}
            onMouseLeave={this.hideControls}
            onClick={onPrevious}
          />
        )}
        {this.renderChildren(children)}
        {showNavigation && isDesktop && hasNext && (
          <Navigation
            className={styles['viewer-nav--next']}
            hidden={hidden}
            onMouseEnter={this.showControls}
            onMouseLeave={this.hideControls}
            onClick={onNext}
          />
        )}
      </div>
    )
  }
}

ViewerControls.propTypes = {
  file: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  toolbarProps: PropTypes.shape(toolbarPropsPropType),
  showNavigation: PropTypes.bool.isRequired,
  showInfoPanel: PropTypes.bool
}

export default flow(
  withBreakpoints(),
  withStyles(customStyles)
)(ViewerControls)
