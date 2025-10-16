import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'

import EditMenu from './EditMenu'
import StatusWrapper from './StatusWrapper'
import Badge from '../Badge'
import Button from '../Buttons'
import Icon from '../Icon'
import PenIcon from '../Icons/Pen'

const EditBadge = ({ src, onUpload, onDelete, children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [status, setStatus] = useState('PRESENT') // PRESENT || ABSENT || LOADING
  const [timestamp, setTimestamp] = useState(Date.now())

  const menuAnchorRef = useRef(null)

  return (
    <Badge
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      badgeContent={
        <>
          <Button
            ref={menuAnchorRef}
            component="div"
            className="u-miw-auto u-w-2-half u-h-2-half u-bdrs-circle"
            classes={{ label: 'u-flex u-w-auto' }}
            style={{
              outline: '4px solid var(--paperBackgroundColor)'
            }}
            label={<Icon icon={PenIcon} />}
            size="small"
            onClick={() => setShowMenu(v => !v)}
          />
          <EditMenu
            anchorRef={menuAnchorRef.current}
            status={status}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            setStatus={setStatus}
            setTimestamp={setTimestamp}
            onUpload={onUpload}
            onDelete={onDelete}
          />
        </>
      }
    >
      <StatusWrapper
        src={src(timestamp)}
        status={status}
        setStatus={setStatus}
        timestamp={timestamp}
      >
        {children}
      </StatusWrapper>
    </Badge>
  )
}

EditBadge.propTypes = {
  src: PropTypes.func.isRequired,
  onUpload: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default EditBadge
