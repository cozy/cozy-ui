import React from 'react'
import PropTypes from 'prop-types'

import ButtonBase from '../ButtonBase'
import Icon, { iconPropType } from '../Icon'
import FileDuotoneIcon from '../Icons/FileDuotone'
import IconStack from '../IconStack'
import Typography from '../Typography'
import { makeStyles } from '../styles'

const useStyles = makeStyles({
  item: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 84,
    marginBottom: 8,
    borderRadius: 4,
    borderColor: ({ isSelected }) =>
      isSelected ? 'var(--primaryColor)' : 'var(--borderMainColor)',
    border: '1px solid'
  }
})

const QualificationItem = ({ icon, label, isSelected, onClick, ...props }) => {
  const styles = useStyles({ isSelected })

  return (
    <ButtonBase {...props} className={styles.item} onClick={onClick}>
      <IconStack
        className="u-mb-half"
        foreground={
          icon && (
            <Icon
              icon={icon}
              color={
                isSelected ? 'var(--primaryColor)' : 'var(--secondaryTextColor)'
              }
            />
          )
        }
        background={
          <Icon
            icon={FileDuotoneIcon}
            size="32"
            color={
              isSelected ? 'var(--primaryColor)' : 'var(--secondaryTextColor)'
            }
          />
        }
      />
      <Typography variant="caption">{label}</Typography>
    </ButtonBase>
  )
}

QualificationItem.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.node, iconPropType]),
  label: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}

export default QualificationItem
