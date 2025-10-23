import PropTypes from 'prop-types'
import React from 'react'

import { getIconByLabel } from 'cozy-client/dist/models/document/qualification'

import Icon from '../Icon'
import BankIcon from '../Icons/Bank'
import BankCheckIcon from '../Icons/BankCheck'
import BenefitIcon from '../Icons/Benefit'
import BillIcon from '../Icons/Bill'
import CarIcon from '../Icons/Car'
import ChessIcon from '../Icons/Chess'
import ChildIcon from '../Icons/Child'
import DotsIcon from '../Icons/Dots'
import EmailIcon from '../Icons/Email'
import EuroIcon from '../Icons/Euro'
import ExchangeIcon from '../Icons/Exchange'
import FitnessIcon from '../Icons/Fitness'
import GlobeIcon from '../Icons/Globe'
import GouvIcon from '../Icons/Gouv'
import HeartIcon from '../Icons/Heart'
import HomeIcon from '../Icons/Home'
import ImageIcon from '../Icons/Image'
import JusticeIcon from '../Icons/Justice'
import LaudryIcon from '../Icons/Laudry'
import LightningIcon from '../Icons/Lightning'
import NoteIcon from '../Icons/Note'
import PeopleIcon from '../Icons/People'
import PlaneIcon from '../Icons/Plane'
import RemboursementIcon from '../Icons/Remboursement'
import RestaurantIcon from '../Icons/Restaurant'
import SchoolIcon from '../Icons/School'
import ShopIcon from '../Icons/Shop'
import TeamIcon from '../Icons/Team'
import TelecomIcon from '../Icons/Telecom'
import TelephoneIcon from '../Icons/Telephone'
import WaterIcon from '../Icons/Water'
import WorkIcon from '../Icons/Work'

const IconByLabel = {
  'bank-check': BankCheckIcon,
  bank: BankIcon,
  benefit: BenefitIcon,
  bill: BillIcon,
  car: CarIcon,
  chess: ChessIcon,
  child: ChildIcon,
  dots: DotsIcon,
  email: EmailIcon,
  euro: EuroIcon,
  exchange: ExchangeIcon,
  'file-type-note': NoteIcon,
  fitness: FitnessIcon,
  globe: GlobeIcon,
  gouv: GouvIcon,
  heart: HeartIcon,
  home: HomeIcon,
  image: ImageIcon,
  justice: JusticeIcon,
  laudry: LaudryIcon,
  lightning: LightningIcon,
  people: PeopleIcon,
  plane: PlaneIcon,
  remboursement: RemboursementIcon,
  restaurant: RestaurantIcon,
  school: SchoolIcon,
  shop: ShopIcon,
  team: TeamIcon,
  telecom: TelecomIcon,
  telephone: TelephoneIcon,
  water: WaterIcon,
  work: WorkIcon
}

const themeIconByLabel = {
  identity: 'people',
  family: 'team',
  work_study: 'work',
  health: 'heart',
  home: 'home',
  transport: 'car',
  activity: 'chess',
  finance: 'bank',
  invoice: 'bill',
  others: 'dots'
}

const QualificationIcon = ({ theme, qualification, ...props }) => {
  const _Icon = qualification
    ? IconByLabel[getIconByLabel(qualification)]
    : theme
    ? IconByLabel[themeIconByLabel[theme]]
    : null

  return <Icon icon={_Icon} color="#E049BF" size={16} {...props} />
}

QualificationIcon.propTypes = {
  /** The name of the qualification (isp\_invoice, family\_record\_book, etc.) */
  qualification: PropTypes.string,
  /** The name of the qualification theme (indentity, family, etc.) */
  theme: PropTypes.string
}

export default QualificationIcon
