import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CompositeRow from '../CompositeRow'
import Icon from '../Icon'
import styles from './styles.styl'
import UIRadio from '../Radio'
import cx from 'classnames'
import omit from 'lodash/omit'
import palette from '../palette'

/**
 * Select like component to choose an option among a list of options.
 * Options can have children; selecting an option that has children
 * will show the children of the chosen option instead of selecting
 * the option.
 */
class NestedSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [props.options]
    }
  }

  componentWillUnmount() {
    this.unmounted = true
  }

  resetHistory() {
    if (this.unmounted) {
      return
    }
    this.setState({ history: [this.props.options] })
  }

  handleBack = () => {
    const [item, ...newHistory] = this.state.history
    this.setState({
      history: newHistory
    })
    return item
  }

  handleNavToChildren = item => {
    const newHistory = [item, ...this.state.history]
    this.setState({
      history: newHistory
    })
  }

  handleSelect = item => {
    this.props.onSelect(item)
    // It is important to reset history if the NestedSelected is used
    // multiple times in a row without being dismounted. For example
    // if it displayed in Carousel that slides in the NestedSelect
    // and slides it out on selection.
    // But, we want in this case that the resetting does not happen
    // while the animation is running.
    // There is probably a better way to do this.
    setTimeout(() => {
      this.resetHistory()
    }, 500)
  }

  handleClickItem = item => {
    if (item.children && item.children.length > 0) {
      this.handleNavToChildren(item)
    } else {
      this.handleSelect(item)
    }
  }

  render() {
    const {
      ContentComponent,
      HeaderComponent,
      canSelectParent,
      isSelected,
      title,
      transformParentItem,
      radioPosition
    } = this.props
    const { history } = this.state
    const current = history[0]
    const children = current.children || []
    const level = history.length - 1
    const isSelectedWithLevel = item => isSelected(item, level)
    const parentItem = transformParentItem(omit(current, 'children'))

    return (
      <>
        {HeaderComponent ? (
          <HeaderComponent
            title={current.title || title}
            showBack={history.length > 1}
            onClickBack={this.handleBack}
          />
        ) : null}
        <ContentComponent>
          {canSelectParent && level > 0 ? (
            <>
              <ItemRow
                radioPosition={radioPosition}
                item={parentItem}
                onClick={this.handleClickItem}
                isSelected={isSelectedWithLevel(parentItem)}
              />
              <Divider />
            </>
          ) : null}
          {children.map(item => (
            <ItemRow
              radioPosition={radioPosition}
              key={item.key || item.title}
              item={item}
              onClick={this.handleClickItem}
              isSelected={isSelectedWithLevel(item)}
            />
          ))}
        </ContentComponent>
      </>
    )
  }
}

NestedSelect.defaultProps = {
  ContentComponent: 'div',
  HeaderComponent: null,
  transformParentItem: x => x,
  radioPosition: 'right'
}

const ItemPropType = PropTypes.shape({
  icon: PropTypes.element,
  /** Key used for the item, if not passed, title is used */
  key: PropTypes.string,
  /** Label used for the item */
  title: PropTypes.string.isRequired,
  /** Description of the item */
  description: PropTypes.string,
  /** Options below the current one */
  children: PropTypes.array
})

NestedSelect.propTypes = {
  /**
   * Can be set to "right" or "left". Defaults to "right"
   */
  radioPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * The whole option item is passed to this function when selected
   */
  onSelect: PropTypes.func.isRequired,

  /**
   * Determines if the row looks selected. The `option` is
   * passed as an argument.
   */
  isSelected: PropTypes.func.isRequired,

  /**
   * Options that will be rendered as nested lists of choices
   */
  options: PropTypes.shape({
    children: PropTypes.arrayOf(ItemPropType)
  }),

  /** If true, parent option will be shown at the top of its children */
  canSelectParent: PropTypes.bool,

  /**
   * `parentItem` is passed into this function before being used to render
   * the parent item row (canSelectParent must be true).
   * Use this if you want the parent to have a different text on the "outer"
   * row than inside the "inner" row.
   *
   * @example
   * ```
   * const transformParentItem = item => ({ ...item, title: "Everything"})
   * ````
   */
  transformParentItem: PropTypes.func
}

export default NestedSelect

export const Radio = ({ className, ...props }) => (
  <UIRadio label="" className={cx(styles.Radio, className)} {...props} />
)

const Divider = () => <div className={styles.Divider} />

export const ItemRow = ({ item, onClick, isSelected, radioPosition }) => {
  return (
    <div className={cx(styles.Row, isSelected ? styles.Row__selected : null)}>
      <CompositeRow
        dense
        image={
          <div className="u-flex">
            {radioPosition === 'left' ? (
              <Radio
                className="u-mr-1"
                readOnly
                name={item.title}
                value={item.title}
                checked={!!isSelected}
              />
            ) : null}
            {item.icon}
          </div>
        }
        primaryText={item.title}
        primaryTextClassName="u-ellipsis"
        secondaryText={item.description}
        secondaryTextClassName={styles.Row__caption}
        onClick={() => onClick(item)}
        right={
          item.children && item.children.length > 0 ? (
            <Icon icon="right" color={palette.coolGrey} />
          ) : radioPosition !== 'right' ? null : (
            <Radio
              readOnly
              name={item.title}
              value={item.title}
              checked={!!isSelected}
            />
          )
        }
      />
    </div>
  )
}
