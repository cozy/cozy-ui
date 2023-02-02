import { Typography } from '@mui/material'
import React from 'react'

import Icon from '../../Icon'
import PeopleIcon from '../../Icons/People'
import { Media, Img, Bd } from '../../Media'
import TextField from '../../MuiCozyTheme/TextField'
import { withContactsListLocales } from '../withContactsListLocales'

import styles from './styles.styl'

const AddContactContent = ({ t, setContactValues }) => {
  const handleChange = ev => {
    const { name, value } = ev.target
    setContactValues(v => ({ ...v, [name]: value }))
  }

  return (
    <>
      <Typography variant="h5">{t('coordinates')}</Typography>
      <Media>
        <Img className={styles.icon}>
          <Icon icon={PeopleIcon} />
        </Img>
        <Bd className="u-mr-1">
          <TextField
            className="u-mt-1"
            variant="outlined"
            fullWidth={true}
            name="givenName"
            label={t('givenName')}
            onChange={handleChange}
          />
        </Bd>
      </Media>
      <Media>
        <Bd className="u-ml-3 u-mr-1">
          <TextField
            className="u-mt-1"
            variant="outlined"
            fullWidth={true}
            name="familyName"
            label={t('familyName')}
            onChange={handleChange}
          />
        </Bd>
      </Media>
    </>
  )
}

export default withContactsListLocales(AddContactContent)
