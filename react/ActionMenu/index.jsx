import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Hammer from 'hammerjs'
import Menu from '../Menu'
import styles from './styles.styl'
import Overlay from '../Overlay'

/**
 * Use an ActionMenu to show the user possible actions to the user
 * at the bottom of the screen in a modal way.
 *
 * - Animates in/out
 * - Possible to use Escape to close (thanks to `<Overlay />`)
 * - Possible to click outside to close (thanks to `<Overlay />`)
 * - Reacts to gestures with HammerJS
 */
class ActionMenu extends Component {
  componentDidMount () {
    this.initialAppear()
    this.attachEvents()
  }

  componentWillUnmount () {
    this.gesturesHandler.destroy()
  }

  initialAppear () {
    this.turnTransitionsOff()
    this.applyTransformation(1)
    requestAnimationFrame(() => {
      this.turnTransitionsOn()
      this.applyTransformation(0)
    })
  }

  turnTransitionsOn () {
    this.menuNode.classList.add(styles['with-transition'])
  }

  turnTransitionsOff (cb) {
    this.menuNode.classList.add(styles['with-transition'])
  }

  attachEvents () {
    this.gesturesHandler = new Hammer.Manager(this.menuNode, {
      recognizers: [[Hammer.Pan, { direction: Hammer.DIRECTION_VERTICAL }]]
    })

    // to be completely accurate, `maximumGestureDelta` should be the difference between the top of the menu and the
    // bottom of the page; but using the height is much easier to compute and accurate enough.
    const maximumGestureDistance = this.menuNode.getBoundingClientRect().height
    // between 0 and 1, how far down the gesture must be to be considered complete upon release
    const minimumCloseDistance = 0.6
    // a gesture faster than this will dismiss the menu, regardless of distance traveled
    const minimumCloseVelocity = 0.6

    let currentGestureProgress = null

    this.gesturesHandler.on('panstart', e => {
      this.turnTransitionsOff()
      currentGestureProgress = 0
    })

    this.gesturesHandler.on('pan', e => {
      currentGestureProgress = e.deltaY / maximumGestureDistance
      this.applyTransformation(currentGestureProgress)
    })

    this.gesturesHandler.on('panend', e => {
      this.turnTransitionsOn()
      // Dismiss the menu if the swipe pan was bigger than the treshold,
      // or if it was a fast, downward gesture
      let shouldDismiss = e.deltaY / maximumGestureDistance >= minimumCloseDistance ||
                          (e.deltaY > 0 && e.velocity >= minimumCloseVelocity)

      if (shouldDismiss) {
        if (currentGestureProgress >= 1) {
          // Menu is already hidden, close it right away
          this.close()
        } else {
          this.animateClose()
        }
      } else {
        this.applyTransformation(0)
      }
    })
  }

  /**
   * Applies a css trasnform to the element, based on the progress of the gesture
   * @param  {Float} progress - Amount of progress between 0 and 1
   */
  applyTransformation (progress) {
    // constrain between 0 and 1
    progress = Math.min(1, Math.max(0, progress))
    this.menuNode.style.transform = 'translateY(' + (progress * 100) + '%)'
  }

  animateClose = () => {
    // we need to transition the menu to the bottom before dismissing it
    this.menuNode.addEventListener('transitionend', this.close, false)
    this.applyTransformation(1)
  }

  close = () => {
    // Remove the event handler so subsequent transitions don't trigger dismissals
    this.menuNode.removeEventListener('transitionend', this.close)
    this.applyTransformation(0)
    this.props.onClose()
  }

  handleMenuRef = menu => {
    this.menuNode = ReactDOM.findDOMNode(menu)
  }

  render () {
    const props = this.props
    return (
      <div className={styles.ActionMenu}>
        <Overlay onClick={this.animateClose} onEscape={this.animateClose}>
          <Menu className={styles['c-actionmenu']} {...props} ref={this.handleMenuRef} />
        </Overlay>
      </div>
    )
  }
}

export default ActionMenu
