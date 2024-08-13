import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { IllustrationDialog } from '..'
import { useI18n } from '../../providers/I18n'
import Link from '../../Link'
import Typography from '../../Typography'

import DefaultQRCode from './icons/QRCodeInstallFlagshipAppDialog.png'
import appStoreIcon from './icons/appstore.png'
import playStoreIcon from './icons/playstore.png'
import withSpecificDialogsLocales from './withSpecificDialogsLocales'

const InstallFlagshipAppDialog = forwardRef(
  ({ onClose, playStoreUrl, appStoreUrl, QRCode }, ref) => {
    const { t } = useI18n()

    return (
      <IllustrationDialog
        open
        ref={ref}
        size="small"
        onClose={onClose}
        componentsProps={{ dialogTitle: { className: 'u-pt-2-half' } }}
        title={
          <Link
            href={`https://cozy.io/download`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={QRCode} width="100%" alt="" aria-hidden />
            <span className="u-visuallyhidden">
              {t('install-flagship-app-dialog.a11n')}
            </span>
          </Link>
        }
        content={
          <div className="u-ta-center">
            <Typography gutterBottom variant="h3" color="textPrimary">
              {t('install-flagship-app-dialog.title')}
            </Typography>
            <Typography
              color="textSecondary"
              className="u-ta-center"
              dangerouslySetInnerHTML={{
                __html: t('install-flagship-app-dialog.text', {
                  androidUrl: playStoreUrl,
                  androidIconSrc: playStoreIcon,
                  iosUrl: appStoreUrl,
                  iosIconSrc: appStoreIcon
                })
              }}
            />
          </div>
        }
      />
    )
  }
)

InstallFlagshipAppDialog.propTypes = {
  onClose: PropTypes.func,
  /** Url to the Play Store link in the dialog description */
  playStoreUrl: PropTypes.string,
  /** Url to the App Store link in the dialog description */
  appStoreUrl: PropTypes.string,
  /** An image representing a QR code to a link where you can download the flagship app */
  QRCode: PropTypes.any
}

InstallFlagshipAppDialog.defaultProps = {
  playStoreUrl:
    'https://play.google.com/store/apps/details?id=io.cozy.flagship.mobile',
  appStoreUrl: 'https://apps.apple.com/app/my-cozy/id1600636174',
  QRCode: DefaultQRCode
}

InstallFlagshipAppDialog.displayName = 'InstallFlagshipAppDialog'

export default withSpecificDialogsLocales(InstallFlagshipAppDialog)
