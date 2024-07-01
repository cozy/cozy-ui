import React from 'react'
import cx from 'classnames'

import { makeStyles } from '../styles'
import CozyTheme from '../providers/CozyTheme'
import ConfirmDialog from './ConfirmDialog'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import Paper from '../Paper'

const useStyles = makeStyles({
  floatingIcon: {
    top: '-2.25rem',
    width: '4.5rem',
    height: '4.5rem'
  }
})

/**
 * Dialog for confirmation actions linked to the Cozy system (permissions, authentication, etc.)
 */
const PermissionDialog = ({
  open,
  icon,
  title,
  content,
  actions,
  actionsLayout,
  onClose
}) => {
  const styles = useStyles()

  return (
    <CozyTheme variant="inverted">
      <ConfirmDialog
        open={open}
        size="small"
        disableTitleAutoPadding
        classes={{
          // remove overflow in makeOverride and replace it by u-ov-visible when https://github.com/cozy/cozy-ui/issues/2284 is solved
          paper: 'overflow'
        }}
        componentsProps={{
          dialogTitle: {
            className: 'u-ta-center u-pt-2 u-pb-half'
          }
        }}
        title={
          <>
            <CozyTheme
              variant="normal"
              className="u-flex u-flex-justify-center"
            >
              <Paper
                square
                elevation={2}
                className={cx(
                  styles.floatingIcon,
                  'u-pos-absolute u-bdrs-circle u-flex u-bg-white'
                )}
              >
                <Icon className="u-m-auto" icon={icon} size={48} />
              </Paper>
            </CozyTheme>
            {title}
          </>
        }
        content={content}
        actions={actions}
        actionsLayout={actionsLayout}
        onClose={onClose}
      />
    </CozyTheme>
  )
}

PermissionDialog.propTypes = {
  /** To open/close the modal */
  open: PropTypes.bool.isRequired,
  /** Icon to describe the action to be taken */
  icon: PropTypes.func.isRequired,
  /** Title of the modal */
  title: PropTypes.string.isRequired,
  /** Content of the modal */
  content: PropTypes.node,
  /** Actions of the modal */
  actions: PropTypes.node,
  /** Actions can be displayed as "rows" or "columns" */
  actionsLayout: PropTypes.oneOf(['row', 'column']),
  /** Triggered function on modal close action */
  onClose: PropTypes.func
}

export default PermissionDialog
