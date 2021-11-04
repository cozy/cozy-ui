import React from 'react'
import PropTypes from 'prop-types'

import { useQuery, models, getReferencedBy } from 'cozy-client'

import List from '../../MuiCozyTheme/List'
import ListItem from '../../MuiCozyTheme/ListItem'
import QualificationListItemText from './QualificationListItemText'
import { withViewerLocales } from '../withViewerLocales'
import { buildContactByIdsQuery } from '../queries'

const {
  contact: { getDisplayName },
  document: {
    locales: { getBoundT }
  }
} = models

const Qualification = ({ file = {}, t, f, lang }) => {
  const scannerT = getBoundT(lang)

  const { name: filename, metadata = {} } = file
  const {
    qualification = {},
    page: pageLabel,
    datetime,
    datetimeLabel
  } = metadata

  const contactIds = getReferencedBy(file, 'io.cozy.contacts').map(
    ref => ref.id
  )

  const contactByIdsQuery = buildContactByIdsQuery(contactIds)
  const { data: contactList } = useQuery(
    contactByIdsQuery.definition,
    contactByIdsQuery.options
  )

  const contactsFullname = Array.isArray(contactList)
    ? contactList.map(contact => `${getDisplayName(contact)}`).join(', ')
    : ''

  return (
    <List>
      {datetime && (
        <ListItem className={'u-ph-0'}>
          <QualificationListItemText
            primary={t(
              `Viewer.panel.qualification.date.title.${
                datetimeLabel === 'datetime' || datetimeLabel === undefined
                  ? 'addedOn'
                  : datetimeLabel
              }`
            )}
            secondary={f(datetime, 'DD/MM/YYYY')}
          />
        </ListItem>
      )}
      {contactsFullname && (
        <ListItem className={'u-ph-0'}>
          <QualificationListItemText
            primary={t('Viewer.panel.qualification.identity')}
            secondary={contactsFullname}
          />
        </ListItem>
      )}
      <ListItem className={'u-ph-0'}>
        <QualificationListItemText
          primary={t('Viewer.panel.qualification.label.title')}
          secondary={
            pageLabel
              ? t(`Viewer.panel.qualification.label.${pageLabel}`)
              : filename
          }
        />
      </ListItem>
      <ListItem className={'u-ph-0'}>
        <QualificationListItemText
          primary={t('Viewer.panel.qualification.qualification')}
          secondary={scannerT(`Scan.items.${qualification.label}`)}
        />
      </ListItem>
    </List>
  )
}

Qualification.propTypes = {
  file: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  f: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired
}

export default withViewerLocales(Qualification)
