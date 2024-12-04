import PropTypes from 'prop-types'
import React from 'react'

import { getIconByLabel } from 'cozy-client/dist/models/document/qualification'

import Icon from '../Icon'
import IconStack from '../IconStack'
import BankIcon from '../Icons/Bank'
import BankCheckIcon from '../Icons/BankCheck'
import BenefitIcon from '../Icons/Benefit'
import BillIcon from '../Icons/Bill'
import CarIcon from '../Icons/Car'
import ChildIcon from '../Icons/Child'
import EmailIcon from '../Icons/Email'
import EuroIcon from '../Icons/Euro'
import ExchangeIcon from '../Icons/Exchange'
import FileDuotoneIcon from '../Icons/FileDuotone'
import FileTypeNoteIcon from '../Icons/FileTypeNote'
import FitnessIcon from '../Icons/Fitness'
import GlobeIcon from '../Icons/Globe'
import GouvIcon from '../Icons/Gouv'
import HeartIcon from '../Icons/Heart'
import HomeIcon from '../Icons/Home'
import ImageIcon from '../Icons/Image'
import JusticeIcon from '../Icons/Justice'
import LaudryIcon from '../Icons/Laudry'
import LightningIcon from '../Icons/Lightning'
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

// this is a copy of FileDuotone without the flap and with a white background
function FileDuotoneWhite(props) {
  return (
    <svg viewBox="0 0 26 32" {...props}>
      <g fillRule="evenodd">
        <path
          d="M0 2.002C0 .896.89 0 1.997 0H19l7 7v22.996A2 2 0 0124.003 32H1.997A1.995 1.995 0 010 29.998C.048 16 0 16 0 2.002z"
          fill="#ffffff"
        />
      </g>
    </svg>
  )
}

const qualificationIcon = {
  'bank-check': BankCheckIcon,
  bank: BankIcon,
  benefit: BenefitIcon,
  bill: BillIcon,
  car: CarIcon,
  child: ChildIcon,
  email: EmailIcon,
  euro: EuroIcon,
  exchange: ExchangeIcon,
  'file-type-note': FileTypeNoteIcon,
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

const QualificationIconStack = ({ qualification, ...props }) => {
  const QualificationIcon = qualificationIcon[getIconByLabel(qualification)]

  return (
    <IconStack
      {...props}
      backgroundIcon={
        <>
          <Icon className="u-pos-absolute" icon={FileDuotoneWhite} size={32} />
          <Icon icon={FileDuotoneIcon} color="#E049BF" size={32} />
        </>
      }
      foregroundIcon={
        <Icon icon={QualificationIcon} color="#E049BF" size={16} />
      }
    />
  )
}

QualificationIconStack.propTypes = {
  /** The name of the qualification (isp\_invoice, family\_record\_book, etc.) */
  qualification: PropTypes.string.isRequired
}

export default QualificationIconStack
