import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

import Grid from '../Grid'
import QualificationItem from '../QualificationItem'
import { useI18n } from '../providers/I18n'
import PeopleIcon from '../Icons/People'
import TeamIcon from '../Icons/Team'
import WorkIcon from '../Icons/Work'
import ChessIcon from '../Icons/Chess'
import HeartIcon from '../Icons/Heart'
import HomeIcon from '../Icons/Home'
import CarIcon from '../Icons/Car'
import BankIcon from '../Icons/Bank'
import BillIcon from '../Icons/Bill'
import DotsIcon from '../Icons/Dots'

import withLocales from './locales/withLocales'
import { getThemesList } from './helpers'

const IconByName = {
  people: PeopleIcon,
  team: TeamIcon,
  work: WorkIcon,
  heart: HeartIcon,
  home: HomeIcon,
  car: CarIcon,
  chess: ChessIcon,
  bank: BankIcon,
  bill: BillIcon,
  dots: DotsIcon
}

const QualificationGrid = ({ noUndefined, noOthers, onClick }) => {
  const themesList = getThemesList()
  const { t } = useI18n()
  const [selectedQualification, setSelectedQualification] = useState()

  const handleClick = theme => {
    onClick(theme?.label)
    setSelectedQualification(theme?.label)
  }

  return (
    <Grid container spacing={1}>
      {!noUndefined && (
        <Grid item xs={3} sm={2}>
          <QualificationItem
            label={t('themes.undefined')}
            isSelected={selectedQualification === undefined}
            onClick={() => handleClick()}
          />
        </Grid>
      )}
      {themesList.map((theme, index) => (
        <Fragment key={index}>
          {(!noOthers || theme.label !== 'others') && (
            <Grid item xs={3} sm={2}>
              <QualificationItem
                label={t(`themes.${theme.label}`)}
                icon={IconByName[theme.icon]}
                isSelected={theme.label === selectedQualification}
                onClick={() => handleClick(theme)}
              />
            </Grid>
          )}
        </Fragment>
      ))}
    </Grid>
  )
}

QualificationGrid.defaultProps = {
  noUndefined: false,
  noOthers: false,
  onClick: () => {}
}

QualificationGrid.propTypes = {
  /** Remove `undefined` theme */
  noUndefined: PropTypes.bool,
  /** Remove `others` theme */
  noOthers: PropTypes.bool,
  /** Triggered when an item is clicked */
  onClick: PropTypes.func
}

export default withLocales(QualificationGrid)
