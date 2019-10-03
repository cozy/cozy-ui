import React, { Component } from 'react'
import cx from 'classnames'
import styles from './styles.styl'
import AnimatedContentHeader from './AnimatedContentHeader'

function _getChildrenToRender(children) {
  return React.Children.map(children, child =>
    child && child.nodeName !== AnimatedContentHeader ? child : null
  )
}

function _getAnimatedHeader(children) {
  return React.Children.toArray(children).find(
    child => child && child.nodeName === AnimatedContentHeader
  )
}

class ModalContent extends Component {
  constructor(props) {
    super(props)
    const { children } = this.props
    this.refreshComputedParts(children)
    this.state = {
      displayGhostHeader: false
    }
  }

  // for preact
  // eslint-disable-next-line react/no-deprecated
  componentWillUpdate(nextProps, nextState) {
    this.UNSAFE_componentWillUpdate(nextProps, nextState)
  }

  UNSAFE_componentWillUpdate = nextProps => {
    const { children } = nextProps
    this.refreshComputedParts(children)
  }

  refreshComputedParts(children) {
    const animatedHeader = _getAnimatedHeader(children)
    this.animatedHeader = animatedHeader
    this.childrenToRender = animatedHeader
      ? _getChildrenToRender(children)
      : children
  }

  componentDidMount() {
    this.scrollingContent.addEventListener('scroll', this.handleScroll, {
      passive: true
    })
  }

  componentWillUnmount() {
    this.scrollingContent.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (!this.contentHeader) return
    const { headerHeight } = this
    if (!headerHeight && this.contentHeader.clientHeight) {
      this.headerHeight = this.contentHeader.clientHeight
      return
    }
    if (
      !this.state.displayGhostHeader &&
      this.scrollingContent.scrollTop > headerHeight - 20
    ) {
      this.setState(() => ({ displayGhostHeader: true }))
    } else if (
      this.state.displayGhostHeader &&
      this.scrollingContent.scrollTop < headerHeight - 20
    ) {
      this.setState(() => ({ displayGhostHeader: false }))
    }
  }

  render() {
    const { className, fixed } = this.props

    const { displayGhostHeader } = this.state
    const { animatedHeader, childrenToRender } = this
    return (
      <div
        className={cx(
          styles[`c-modal-content${fixed ? '-fixed' : ''}`],
          className
        )}
        ref={div => {
          this.scrollingContent = div
        }}
      >
        {animatedHeader && (
          <div
            className={animatedHeader.attributes.className}
            ref={div => {
              this.contentHeader = div
            }}
          >
            <h2 className={styles['c-modal-illu-header']}>
              {animatedHeader.children}
            </h2>
            <div
              className={cx(
                styles['c-modal-illu-header--ghost'],
                animatedHeader.attributes.activeClassName,
                {
                  [styles['is-active']]: displayGhostHeader
                }
              )}
            >
              {animatedHeader.children}
            </div>
          </div>
        )}
        {childrenToRender}
      </div>
    )
  }
}

export default ModalContent
