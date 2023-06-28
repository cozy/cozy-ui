import PropTypes from 'prop-types'

import { useI18n } from '../../I18n'

import withListItemLocales from '../hoc/withListItemLocales'

const PrimaryText = ({ primary, file }) => {
  const { t } = useI18n()

  if (primary) return primary

  const pageQualification = file?.metadata?.qualification?.page

  return pageQualification === 'front' || pageQualification === 'back'
    ? t(`ListItem.file.page.${pageQualification}`)
    : file.name
}

PrimaryText.propTypes = {
  primary: PropTypes.node,
  file: PropTypes.object
}

export default withListItemLocales(PrimaryText)
