import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["theme", "qualification"];
import PropTypes from 'prop-types';
import React from 'react';
import { getIconByLabel } from 'cozy-client/dist/models/document/qualification';
import Icon from "cozy-ui/transpiled/react/Icon";
import BankIcon from "cozy-ui/transpiled/react/Icons/Bank";
import BankCheckIcon from "cozy-ui/transpiled/react/Icons/BankCheck";
import BenefitIcon from "cozy-ui/transpiled/react/Icons/Benefit";
import BillIcon from "cozy-ui/transpiled/react/Icons/Bill";
import CarIcon from "cozy-ui/transpiled/react/Icons/Car";
import ChessIcon from "cozy-ui/transpiled/react/Icons/Chess";
import ChildIcon from "cozy-ui/transpiled/react/Icons/Child";
import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots";
import EmailIcon from "cozy-ui/transpiled/react/Icons/Email";
import EuroIcon from "cozy-ui/transpiled/react/Icons/Euro";
import ExchangeIcon from "cozy-ui/transpiled/react/Icons/Exchange";
import FitnessIcon from "cozy-ui/transpiled/react/Icons/Fitness";
import GlobeIcon from "cozy-ui/transpiled/react/Icons/Globe";
import GouvIcon from "cozy-ui/transpiled/react/Icons/Gouv";
import HeartIcon from "cozy-ui/transpiled/react/Icons/Heart";
import HomeIcon from "cozy-ui/transpiled/react/Icons/Home";
import ImageIcon from "cozy-ui/transpiled/react/Icons/Image";
import JusticeIcon from "cozy-ui/transpiled/react/Icons/Justice";
import LaudryIcon from "cozy-ui/transpiled/react/Icons/Laudry";
import LightningIcon from "cozy-ui/transpiled/react/Icons/Lightning";
import NoteIcon from "cozy-ui/transpiled/react/Icons/Note";
import PeopleIcon from "cozy-ui/transpiled/react/Icons/People";
import PlaneIcon from "cozy-ui/transpiled/react/Icons/Plane";
import RemboursementIcon from "cozy-ui/transpiled/react/Icons/Remboursement";
import RestaurantIcon from "cozy-ui/transpiled/react/Icons/Restaurant";
import SchoolIcon from "cozy-ui/transpiled/react/Icons/School";
import ShopIcon from "cozy-ui/transpiled/react/Icons/Shop";
import TeamIcon from "cozy-ui/transpiled/react/Icons/Team";
import TelecomIcon from "cozy-ui/transpiled/react/Icons/Telecom";
import TelephoneIcon from "cozy-ui/transpiled/react/Icons/Telephone";
import WaterIcon from "cozy-ui/transpiled/react/Icons/Water";
import WorkIcon from "cozy-ui/transpiled/react/Icons/Work";
var IconByLabel = {
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
};
var themeIconByLabel = {
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
};

var QualificationIcon = function QualificationIcon(_ref) {
  var theme = _ref.theme,
      qualification = _ref.qualification,
      props = _objectWithoutProperties(_ref, _excluded);

  var _Icon = qualification ? IconByLabel[getIconByLabel(qualification)] : theme ? IconByLabel[themeIconByLabel[theme]] : null;

  return /*#__PURE__*/React.createElement(Icon, _extends({
    icon: _Icon,
    color: "#E049BF",
    size: 16
  }, props));
};

QualificationIcon.propTypes = {
  /** The name of the qualification (isp\_invoice, family\_record\_book, etc.) */
  qualification: PropTypes.string,

  /** The name of the qualification theme (indentity, family, etc.) */
  theme: PropTypes.string
};
export default QualificationIcon;