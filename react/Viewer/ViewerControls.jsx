import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import Hammer from 'hammerjs'
import { withStyles } from '@material-ui/core/styles'

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

  componentDidMount() {
    this._mounted = true
    clearTimeout(this.hideTimeout)
    this.hideAfterDelay()
    //eslint-disable-next-line react/no-find-dom-node
    const gestures = new Hammer(ReactDOM.findDOMNode(this.wrapped))
    gestures.on('swipe', this.onSwipe)
    gestures.on('tap', this.onTap)
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
      currentFile,
      onClose,
      hasPrevious,
      hasNext,
      onPrevious,
      onNext,
      isMobile,
      expanded,
      toolbarProps,
      showNavigation,
      showInfoPanel,
      children,
      isMobileApp,
      classes
    } = this.props
    const { showToolbar, showClose } = toolbarProps
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
            currentFile={currentFile}
            onClose={showClose && onClose}
            isMobileApp={isMobileApp}
            onMouseEnter={this.showControls}
            onMouseLeave={this.hideControls}
            isMobile={isMobile}
          />
        )}
        {showNavigation && !isMobile && hasPrevious && (
          <Navigation
            className={styles['viewer-nav--previous']}
            hidden={hidden}
            onMouseEnter={this.showControls}
            onMouseLeave={this.hideControls}
            onClick={onPrevious}
          />
        )}
        {this.renderChildren(children)}
        {showNavigation && !isMobile && hasNext && (
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
  currentFile: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  expanded: PropTypes.bool.isRequired,
  toolbarProps: PropTypes.shape(toolbarPropsPropType),
  showNavigation: PropTypes.bool.isRequired,
  isMobileApp: PropTypes.bool.isRequired,
  showInfoPanel: PropTypes.bool
}

export default withStyles(customStyles)(ViewerControls)
