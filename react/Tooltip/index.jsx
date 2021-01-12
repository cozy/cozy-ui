import React, { useState } from 'react'
import Proptypes from 'prop-types'
import MUITooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles'

const arrowGenerator = color => {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${color} transparent transparent transparent`
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${color}`
      }
    }
  }
}

const customStyles = theme => ({
  arrowPopper: arrowGenerator(theme.palette.grey[800]), // TODO should be grey[700] when grey[700] will be supported
  arrow: {
    position: 'absolute',
    fontSize: 6,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid'
    }
  }
})

const Tooltip = ({ classes, title, arrow, ...rest }) => {
  // Using useState here instead of useRef is necessary
  // because we need a re-render to replace the null value by the node
  const [arrowRef, setArrowRef] = useState(null)

  const handleArrowRef = node => {
    setArrowRef(node)
  }

  return (
    <MUITooltip
      classes={{ popper: classes.arrowPopper }}
      PopperProps={{
        popperOptions: {
          modifiers: {
            arrow: {
              enabled: Boolean(arrowRef),
              element: arrowRef
            }
          }
        }
      }}
      title={
        <>
          {title}
          {arrow && <span className={classes.arrow} ref={handleArrowRef} />}
        </>
      }
      {...rest}
    />
  )
}

Tooltip.propTypes = {
  title: Proptypes.element.isRequired,
  arrow: Proptypes.bool
}

Tooltip.defaultProps = {
  arrow: true
}

export default withStyles(customStyles, { name: 'CozyTooltip' })(Tooltip)
