import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import filesize from 'filesize'
import { makeStyles } from '@material-ui/core/styles'

import { models } from 'cozy-client'

import ListItem from '../MuiCozyTheme/ListItem'
import ListItemIcon from '../MuiCozyTheme/ListItemIcon'
import ListItemText from '../ListItemText'
import Divider from '../MuiCozyTheme/Divider'
import Icon from '../Icon'
import FileTypeText from '../Icons/FileTypeText'
import FileTypeFolder from '../Icons/FileTypeFolder'
import Checkbox from '../Checkbox'
import Radio from '../Radio'
import { useI18n } from '../I18n'

import styles from './styles.styl'

const {
  file: { isDirectory, isFile }
} = models

const useStyles = makeStyles(() => ({
  verticalDivider: {
    height: '2rem',
    display: 'flex',
    alignSelf: 'auto',
    alignItems: 'center',
    marginLeft: '0.5rem'
  },
  listItemIcon: {
    marginLeft: '1rem'
  }
}))

const FilePickerBodyItem = ({
  file,
  fileTypesAccepted,
  multiple,
  handleChoiceClick,
  handleListItemClick,
  filesIdsSelected,
  hasDivider
}) => {
  const classes = useStyles()
  const { f } = useI18n()
  const hasChoice =
    (fileTypesAccepted.file && isFile(file)) ||
    (fileTypesAccepted.folder && isDirectory(file))

  const Input = multiple ? Checkbox : Radio

  const listItemSecondaryContent = isFile(file)
    ? `${f(file.updated_at, 'DD MMM YYYY')} - ${filesize(file.size, {
        base: 10
      })}`
    : null

  return (
    <>
      <ListItem button className="u-p-0">
        <div
          data-testid="listitem-onclick"
          className={styles['filePickerBreadcrumb-wrapper']}
          onClick={handleListItemClick(file)}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <Icon
              icon={isDirectory(file) ? FileTypeFolder : FileTypeText}
              width="32"
              height="32"
            />
          </ListItemIcon>
          <ListItemText
            primary={file.name}
            secondary={listItemSecondaryContent}
          />
        </div>
        {isDirectory(file) && hasChoice && (
          <Divider
            orientation="vertical"
            flexItem
            className={classes.verticalDivider}
          />
        )}
        <div
          data-testid="choice-onclick"
          className="u-ph-1 u-pv-half u-h-2 u-flex u-flex-items-center"
          onClick={hasChoice ? handleChoiceClick(file) : undefined}
        >
          <Input
            data-testid={multiple ? 'checkbox-btn' : 'radio-btn'}
            gutter={false}
            onChange={() => {
              // handled by onClick on the container
            }}
            checked={filesIdsSelected.includes(file._id)}
            value={file._id}
            className={cx('u-p-0', {
              'u-o-100': hasChoice,
              'u-o-0': !hasChoice
            })}
            disabled={!hasChoice}
          />
        </div>
      </ListItem>
      {hasDivider && <Divider component="li" />}
    </>
  )
}

FilePickerBodyItem.propTypes = {
  file: PropTypes.object.isRequired,
  fileTypesAccepted: PropTypes.exact({
    file: PropTypes.bool,
    folder: PropTypes.bool
  }),
  multiple: PropTypes.bool,
  handleChoiceClick: PropTypes.func.isRequired,
  handleListItemClick: PropTypes.func.isRequired,
  filesIdsSelected: PropTypes.arrayOf(PropTypes.string).isRequired,
  hasDivider: PropTypes.bool.isRequired
}

export default memo(FilePickerBodyItem)
