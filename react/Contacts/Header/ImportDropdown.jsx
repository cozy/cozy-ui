import React, { useState, useRef } from 'react'

import { useClient, generateWebLink } from 'cozy-client'
import { CONTACTS_DOCTYPE } from 'cozy-client/dist/models/contact'

import { locales } from './locales'
import AppIcon from '../../AppIcon'
import AppLinker from '../../AppLinker'
import Button from '../../Buttons'
import Icon from '../../Icon'
import BottomIcon from '../../Icons/Bottom'
import TeamIcon from '../../Icons/Team'
import Link from '../../Link'
import ActionMenu, { ActionMenuItem } from '../../deprecated/ActionMenu'
import { useI18n, useExtendI18n } from '../../providers/I18n'

const ImportDropdown = ({ onContactImport }) => {
  useExtendI18n(locales)
  const { t } = useI18n()
  const client = useClient()
  const anchorRef = useRef()
  const [showMenu, setShowMenu] = useState(false)

  const storeURL = generateWebLink({
    cozyUrl: client.getStackClient().uri,
    hash: `discover/?type=konnector&doctype=${CONTACTS_DOCTYPE}`,
    pathname: '/',
    slug: 'store',
    subDomainType: client.getInstanceOptions().subdomain
  })

  return (
    <>
      <Button
        ref={anchorRef}
        variant="secondary"
        label={t('Contacts.Header.import.title')}
        endIcon={<Icon icon={BottomIcon} />}
        fullWidth
        onClick={() => setShowMenu(v => !v)}
      />

      {showMenu && (
        <ActionMenu
          anchorElRef={anchorRef}
          popperOptions={{ placement: 'bottom-end' }}
          onClose={() => setShowMenu(false)}
        >
          <ActionMenuItem
            left={<Icon icon={TeamIcon} />}
            onClick={onContactImport}
          >
            {t('Contacts.Header.import.vcard')}
          </ActionMenuItem>

          <AppLinker app={{ slug: 'store' }} href={storeURL}>
            {({ onClick, href }) => (
              <ActionMenuItem
                left={<AppIcon app="store" className="u-h-1 u-w-1" />}
                onClick={onClick}
              >
                <Link
                  className="u-p-0"
                  href={href}
                  style={{ color: 'var(--primaryTextColor)' }}
                >
                  {t('Contacts.Header.import.store')}
                </Link>
              </ActionMenuItem>
            )}
          </AppLinker>
        </ActionMenu>
      )}
    </>
  )
}

export default ImportDropdown
