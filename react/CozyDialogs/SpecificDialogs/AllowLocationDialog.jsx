import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { IllustrationDialog } from '..'
import { useI18n } from '../../providers/I18n'
import Icon from '../../Icon'
import Typography from '../../Typography'
import Button from '../../Buttons'
import CozyLocation from './icons/CozyLocation'

import withSpecificDialogsLocales from './withSpecificDialogsLocales'

const createStyles = () => ({
  typography: {
    whiteSpace: 'pre-line'
  }
})

const AllowLocationDialog = forwardRef(
  ({ onClose, onAllow, description }, ref) => {
    const { t } = useI18n()

    const styles = createStyles()

    return (
      <IllustrationDialog
        open
        ref={ref}
        size="small"
        onClose={onClose}
        title={
          <div className="u-flex u-flex-column u-flex-items-center">
            <Icon icon={CozyLocation} width={128} height={128} />
            <Typography variant="h3" className="u-ta-center">
              {t('allow-location-dialog.title')}
            </Typography>
          </div>
        }
        content={
          <div className="u-ta-center">
            <Typography
              gutterBottom
              variant="body1"
              color="textPrimary"
              style={styles.typography}
            >
              {description || t('allow-location-dialog.description')}
            </Typography>
          </div>
        }
        actions={
          <>
            <Button variant="secondary" label={t('cancel')} onClick={onClose} />
            <Button variant="primary" label={t('allow')} onClick={onAllow} />
          </>
        }
      />
    )
  }
)

AllowLocationDialog.propTypes = {
  /** A function called when clicking the close button */
  onClose: PropTypes.func,
  /** A function called when clicking the allow button */
  onAllow: PropTypes.func,
  /** A custom description */
  description: PropTypes.string
}

AllowLocationDialog.displayName = 'AllowLocationDialog'

export default withSpecificDialogsLocales(AllowLocationDialog)
