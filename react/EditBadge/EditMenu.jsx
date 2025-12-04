import React, { useRef } from 'react'
import { useI18n, useExtendI18n } from 'twake-i18n'

import { handleDelete, handleUpload } from './helpers'
import { locales } from './locales'
import Icon from '../Icon'
import CameraIcon from '../Icons/Camera'
import TrashIcon from '../Icons/Trash'
import ListItemIcon from '../ListItemIcon'
import ListItemText from '../ListItemText'
import Menu from '../Menu'
import MenuItem from '../MenuItem'
import { useAlert } from '../providers/Alert'

const EditMenu = ({
  anchorRef,
  status,
  showMenu,
  setShowMenu,
  setStatus,
  setTimestamp,
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
          handleUpload({
            event,
            t,
            fileInputRef,
            status,
            onUpload,
            setStatus,
            setTimestamp,
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
              handleDelete({
                t,
                status,
                onDelete,
                setShowMenu,
                setStatus,
                setTimestamp,
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
