import React, { Fragment, useCallback, memo } from 'react'
import PropTypes from 'prop-types'

import Typography from '../Typography'
import Icon from '../Icon'
import RightIcon from '../Icons/Right'
import useBreakpoints from '../providers/Breakpoints'

import styles from './styles.styl'

const FilePickerBreadcrumb = ({ path, onBreadcrumbClick }) => {
  const { isMobile } = useBreakpoints()
  const hasPath = path && path.length > 0

  const navigateTo = useCallback(folder => () => onBreadcrumbClick(folder), [
    onBreadcrumbClick
  ])

  return (
    <Typography variant="h4" className="u-flex u-flex-items-center">
      {hasPath
        ? isMobile
          ? path[path.length - 1].name
          : path.map((folder, idx) => {
              if (idx < path.length - 1) {
                return (
                  <Fragment key={idx}>
                    <span
                      className={styles['filePickerBreadcrumb-previousPath']}
                      onClick={navigateTo(folder)}
                    >
                      {folder.name}
                    </span>
                    <Icon
                      icon={RightIcon}
                      className={styles['filePickerBreadcrumb-icon']}
                    />
                  </Fragment>
                )
              } else {
                return <span key={idx}>{folder.name}</span>
              }
            })
        : null}
    </Typography>
  )
}

FilePickerBreadcrumb.propTypes = {
  path: PropTypes.array,
  onBreadcrumbClick: PropTypes.func
}

export default memo(FilePickerBreadcrumb)
