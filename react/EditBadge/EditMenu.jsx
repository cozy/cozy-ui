import React, { useRef } from 'react'

import { handleDeleteAvatar, handleUploadAvatar } from './helpers'
import { locales } from './locales'
import Icon from '../Icon'
import CameraIcon from '../Icons/Camera'
import TrashIcon from '../Icons/Trash'
import ListItemIcon from '../ListItemIcon'
import ListItemText from '../ListItemText'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import { useAlert } from '../providers/Alert'
import { useI18n, useExtendI18n } from '../providers/I18n'

const EditMenu = ({
  anchorRef,
  avatarStatus,
  showMenu,
  setShowMenu,
  setAvatarStatus,
  setAvatarTimestamp,
  onUpload,
  onDelete
}) => {
  useExtendI18n(locales)
  const { t } = useI18n()
  const { showAlert } = useAlert()

  const fileInputRef = useRef(null)

  return (
    <>
      <input
        className="u-dn"
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={event =>
          handleUploadAvatar({
            event,
            t,
            fileInputRef,
            avatarStatus,
            onUpload,
            setAvatarStatus,
            setAvatarTimestamp,
            setShowMenu,
            showAlert
          })
        }
      />
      {showMenu && (
        <Menu
          open
          anchorEl={anchorRef}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          onClose={() => setShowMenu(false)}
        >
          <MenuItem
            onClick={() => {
              setShowMenu(false)
              fileInputRef.current.click() // triggers onChange of the input
            }}
          >
            <ListItemIcon>
              <Icon icon={CameraIcon} />
            </ListItemIcon>
            <ListItemText primary={t('EditBadge.menu.update')} />
          </MenuItem>
          <MenuItem
            onClick={() =>
              handleDeleteAvatar({
                t,
                avatarStatus,
                onDelete,
                setShowMenu,
                setAvatarStatus,
                setAvatarTimestamp,
                showAlert
              })
            }
          >
            <ListItemIcon>
              <Icon icon={TrashIcon} />
            </ListItemIcon>
            <ListItemText primary={t('EditBadge.menu.delete')} />
          </MenuItem>
        </Menu>
      )}
    </>
  )
}

export default EditMenu
