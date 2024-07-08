Provides an easy way to use SVG icons included in Cozy-UI as well
as your custom icons.

The `icon` attribute can take an arbitrary React component, a SVG, SVGr, Sprite or Icon component. It is expected that
this component print an `<svg>` tag and forwards any props to it. You MUST use svg-sprite-loader
to load your SVG (either explicitly or, better, implicitly in your `webpack.config.js`). Do not put a `fill` property on your icon.

Be aware that Icon forwards unknown props to the underlying `<svg />` element, such as onClick prop.

```jsx
import Icon from 'cozy-ui/transpiled/react/Icon'
import People from 'cozy-ui/transpiled/react/Icons/People'
import Box from 'cozy-ui/transpiled/react/Box'
const MyIcon = (props) => <svg {...props}><circle cx="8" cy="8" r="7" stroke="var(--primaryColor)" strokeWidth="2" /></svg>

;

<>
  <Box display="flex" gridGap={5}>
    <Icon icon="people" />
    <Icon icon={People} />
    <Icon icon={MyIcon} width={16} height={16} color="var(--paperBackgroundColor)"/>
    <Icon icon={<Icon icon={People} />} />
  </Box>
</>

```

### Transform properties

Use `spin` and `rotate` if you want you to turn your icons upside down 🙃.

```jsx
import Icon from 'cozy-ui/transpiled/react/Icon'
import SpinnerIcon from "cozy-ui/transpiled/react/Icons/Spinner"
import RightIcon from "cozy-ui/transpiled/react/Icons/Right"

;

<div>
  <Icon icon={SpinnerIcon} color='#0bda51' spin/>{'\u00A0'}
  <Icon icon={RightIcon} color='#c30017' rotate={45}/>
</div>
```

### SVGr icons

Cozy-ui provides SVGr icons; icons that can be directly imported as a React components.

This works well with tree shaking since icons provided by cozy-ui that you do not use will
not be present in your final bundle.

```jsx static
import Album from 'cozy-ui/transpiled/react/Icons/Album'
<Icon icon={Album} />
```

```jsx
import Icon from 'cozy-ui/transpiled/react/Icon'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Dialog from 'cozy-ui/transpiled/react/CozyDialogs/Dialog'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import cx from 'classnames'

import { makeStyles } from 'cozy-ui/transpiled/react/styles'
import Album from 'cozy-ui/transpiled/react/Icons/Album'
import AlbumAdd from 'cozy-ui/transpiled/react/Icons/AlbumAdd'
import AlbumRemove from 'cozy-ui/transpiled/react/Icons/AlbumRemove'
import Answer from 'cozy-ui/transpiled/react/Icons/Answer'
import Apple from 'cozy-ui/transpiled/react/Icons/Apple'
import Archive from 'cozy-ui/transpiled/react/Icons/Archive'
import ArrowUp from 'cozy-ui/transpiled/react/Icons/ArrowUp'
import Attachment from 'cozy-ui/transpiled/react/Icons/Attachment'
import Attention from 'cozy-ui/transpiled/react/Icons/Attention'
import BankCheck from 'cozy-ui/transpiled/react/Icons/BankCheck'
import Bank from 'cozy-ui/transpiled/react/Icons/Bank'
import Banking from 'cozy-ui/transpiled/react/Icons/Banking'
import BankingAdd from 'cozy-ui/transpiled/react/Icons/BankingAdd'
import Bell from 'cozy-ui/transpiled/react/Icons/Bell'
import Benefit from 'cozy-ui/transpiled/react/Icons/Benefit'
import Bike from 'cozy-ui/transpiled/react/Icons/Bike'
import Bill from 'cozy-ui/transpiled/react/Icons/Bill'
import Bottom from 'cozy-ui/transpiled/react/Icons/Bottom'
import BrowserBrave from 'cozy-ui/transpiled/react/Icons/BrowserBrave'
import BrowserChrome from 'cozy-ui/transpiled/react/Icons/BrowserChrome'
import BrowserDuckduckgo from 'cozy-ui/transpiled/react/Icons/BrowserDuckduckgo'
import BrowserEdge from 'cozy-ui/transpiled/react/Icons/BrowserEdge'
import BrowserEdgeChromium from 'cozy-ui/transpiled/react/Icons/BrowserEdgeChromium'
import BrowserFirefox from 'cozy-ui/transpiled/react/Icons/BrowserFirefox'
import BrowserIe from 'cozy-ui/transpiled/react/Icons/BrowserIe'
import BrowserOpera from 'cozy-ui/transpiled/react/Icons/BrowserOpera'
import BrowserSafari from 'cozy-ui/transpiled/react/Icons/BrowserSafari'
import Burger from 'cozy-ui/transpiled/react/Icons/Burger'
import Bus from 'cozy-ui/transpiled/react/Icons/Bus'
import Calendar from 'cozy-ui/transpiled/react/Icons/Calendar'
import Camera from 'cozy-ui/transpiled/react/Icons/Camera'
import Car from 'cozy-ui/transpiled/react/Icons/Car'
import CarbonCopy from 'cozy-ui/transpiled/react/Icons/CarbonCopy'
import CarPooling from 'cozy-ui/transpiled/react/Icons/Carpooling'
import Categories from 'cozy-ui/transpiled/react/Icons/Categories'
import Certified from 'cozy-ui/transpiled/react/Icons/Certified'
import Check from 'cozy-ui/transpiled/react/Icons/Check'
import Checkbox from 'cozy-ui/transpiled/react/Icons/Checkbox'
import CheckCircle from 'cozy-ui/transpiled/react/Icons/CheckCircle'
import CheckList from 'cozy-ui/transpiled/react/Icons/CheckList'
import CheckSquare from 'cozy-ui/transpiled/react/Icons/CheckSquare'
import Chess from 'cozy-ui/transpiled/react/Icons/Chess'
import Child from 'cozy-ui/transpiled/react/Icons/Child'
import CircleFilled from 'cozy-ui/transpiled/react/Icons/CircleFilled'
import Clock from 'cozy-ui/transpiled/react/Icons/Clock'
import ClockOutline from 'cozy-ui/transpiled/react/Icons/ClockOutline'
import Cloud from 'cozy-ui/transpiled/react/Icons/Cloud'
import CloudHappy from 'cozy-ui/transpiled/react/Icons/CloudHappy'
import Collect from 'cozy-ui/transpiled/react/Icons/Collect'
import Cocktail from 'cozy-ui/transpiled/react/Icons/Cocktail'
import Comment from 'cozy-ui/transpiled/react/Icons/Comment'
import Company from 'cozy-ui/transpiled/react/Icons/Company'
import Compare from 'cozy-ui/transpiled/react/Icons/Compare'
import Compass from 'cozy-ui/transpiled/react/Icons/Compass'
import Connector from 'cozy-ui/transpiled/react/Icons/Connector'
import Contract from 'cozy-ui/transpiled/react/Icons/Contract'
import Contrast from 'cozy-ui/transpiled/react/Icons/Contrast'
import Copy from 'cozy-ui/transpiled/react/Icons/Copy'
import CozyCircle from 'cozy-ui/transpiled/react/Icons/CozyCircle'
import CozyLaugh from 'cozy-ui/transpiled/react/Icons/CozyLaugh'
import CozyLock from 'cozy-ui/transpiled/react/Icons/CozyLock'
import CozyRelease from 'cozy-ui/transpiled/react/Icons/CozyRelease'
import CozyText from 'cozy-ui/transpiled/react/Icons/CozyText'
import Credit from 'cozy-ui/transpiled/react/Icons/Credit'
import CreditCard from 'cozy-ui/transpiled/react/Icons/CreditCard'
import CreditCardAdd from 'cozy-ui/transpiled/react/Icons/CreditCardAdd'
import Crop from 'cozy-ui/transpiled/react/Icons/Crop'
import Cross from 'cozy-ui/transpiled/react/Icons/Cross'
import CrossCircle from 'cozy-ui/transpiled/react/Icons/CrossCircle'
import CrossCircleOutline from 'cozy-ui/transpiled/react/Icons/CrossCircleOutline'
import CrossMedium from 'cozy-ui/transpiled/react/Icons/CrossMedium'
import CrossSmall from 'cozy-ui/transpiled/react/Icons/CrossSmall'
import Cube from 'cozy-ui/transpiled/react/Icons/Cube'
import Dash from 'cozy-ui/transpiled/react/Icons/Dash'
import Dashboard from 'cozy-ui/transpiled/react/Icons/Dashboard'
import DataControl from 'cozy-ui/transpiled/react/Icons/DataControl'
import Debit from 'cozy-ui/transpiled/react/Icons/Debit'
import Devices from 'cozy-ui/transpiled/react/Icons/Devices'
import Dots from 'cozy-ui/transpiled/react/Icons/Dots'
import Down from 'cozy-ui/transpiled/react/Icons/Down'
import Download from 'cozy-ui/transpiled/react/Icons/Download'
import DrawingArrowUp from 'cozy-ui/transpiled/react/Icons/DrawingArrowUp'
import Dropdown from 'cozy-ui/transpiled/react/Icons/Dropdown'
import DropdownClose from 'cozy-ui/transpiled/react/Icons/DropdownClose'
import DropdownOpen from 'cozy-ui/transpiled/react/Icons/DropdownOpen'
import Dropup from 'cozy-ui/transpiled/react/Icons/Dropup'
import ElectricBike from 'cozy-ui/transpiled/react/Icons/ElectricBike'
import ElectricCar from 'cozy-ui/transpiled/react/Icons/ElectricCar'
import ElectricScooter from 'cozy-ui/transpiled/react/Icons/ElectricScooter'
import Email from 'cozy-ui/transpiled/react/Icons/Email'
import EmailNotification from 'cozy-ui/transpiled/react/Icons/EmailNotification'
import Eu from 'cozy-ui/transpiled/react/Icons/Eu'
import Euro from 'cozy-ui/transpiled/react/Icons/Euro'
import Exchange from 'cozy-ui/transpiled/react/Icons/Exchange'
import Eye from 'cozy-ui/transpiled/react/Icons/Eye'
import EyeClosed from 'cozy-ui/transpiled/react/Icons/EyeClosed'
import FaceId from 'cozy-ui/transpiled/react/Icons/FaceId'
import File from 'cozy-ui/transpiled/react/Icons/File'
import FileAdd from 'cozy-ui/transpiled/react/Icons/FileAdd'
import FileDuotone from 'cozy-ui/transpiled/react/Icons/FileDuotone'
import FileNew from 'cozy-ui/transpiled/react/Icons/FileNew'
import FileNone from 'cozy-ui/transpiled/react/Icons/FileNone'
import FileOutline from 'cozy-ui/transpiled/react/Icons/FileOutline'
import Filter from 'cozy-ui/transpiled/react/Icons/Filter'
import Fingerprint from 'cozy-ui/transpiled/react/Icons/Fingerprint'
import Fitness from 'cozy-ui/transpiled/react/Icons/Fitness'
import Flag from 'cozy-ui/transpiled/react/Icons/Flag'
import FlagOutlined from 'cozy-ui/transpiled/react/Icons/FlagOutlined'
import FlashAuto from 'cozy-ui/transpiled/react/Icons/FlashAuto'
import Flashlight from 'cozy-ui/transpiled/react/Icons/Flashlight'
import Folder from 'cozy-ui/transpiled/react/Icons/Folder'
import FolderAdd from 'cozy-ui/transpiled/react/Icons/FolderAdd'
import FolderMoveto from 'cozy-ui/transpiled/react/Icons/FolderMoveto'
import Forbidden from 'cozy-ui/transpiled/react/Icons/Forbidden'
import FromUser from 'cozy-ui/transpiled/react/Icons/FromUser'
import Gear from 'cozy-ui/transpiled/react/Icons/Gear'
import Globe from 'cozy-ui/transpiled/react/Icons/Globe'
import Gouv from 'cozy-ui/transpiled/react/Icons/Gouv'
import GraphCircle from 'cozy-ui/transpiled/react/Icons/GraphCircle'
import Grid from 'cozy-ui/transpiled/react/Icons/Grid'
import GroupList from 'cozy-ui/transpiled/react/Icons/GroupList'
import Groups from 'cozy-ui/transpiled/react/Icons/Groups'
import Growth from 'cozy-ui/transpiled/react/Icons/Growth'
import Hand from 'cozy-ui/transpiled/react/Icons/Hand'
import Heart from 'cozy-ui/transpiled/react/Icons/Heart'
import Help from 'cozy-ui/transpiled/react/Icons/Help'
import HelpOutlined from 'cozy-ui/transpiled/react/Icons/HelpOutlined'
import History from 'cozy-ui/transpiled/react/Icons/History'
import Home from 'cozy-ui/transpiled/react/Icons/Home'
import Hourglass from 'cozy-ui/transpiled/react/Icons/Hourglass'
import Image from 'cozy-ui/transpiled/react/Icons/Image'
import Info from 'cozy-ui/transpiled/react/Icons/Info'
import InfoOutlined from 'cozy-ui/transpiled/react/Icons/InfoOutlined'
import Justice from 'cozy-ui/transpiled/react/Icons/Justice'
import Key from 'cozy-ui/transpiled/react/Icons/Key'
import LabelOutlined from 'cozy-ui/transpiled/react/Icons/LabelOutlined'
import Laudry from 'cozy-ui/transpiled/react/Icons/Laudry'
import Laptop from 'cozy-ui/transpiled/react/Icons/Laptop'
import Left from 'cozy-ui/transpiled/react/Icons/Left'
import Library from 'cozy-ui/transpiled/react/Icons/Library'
import Lightbulb from 'cozy-ui/transpiled/react/Icons/Lightbulb'
import Lightning from 'cozy-ui/transpiled/react/Icons/Lightning'
import Link from 'cozy-ui/transpiled/react/Icons/Link'
import LinkOut from 'cozy-ui/transpiled/react/Icons/LinkOut'
import List from 'cozy-ui/transpiled/react/Icons/List'
import ListMin from 'cozy-ui/transpiled/react/Icons/ListMin'
import Location from 'cozy-ui/transpiled/react/Icons/Location'
import Lock from 'cozy-ui/transpiled/react/Icons/Lock'
import LockScreen from 'cozy-ui/transpiled/react/Icons/LockScreen'
import Logout from 'cozy-ui/transpiled/react/Icons/Logout'
import MagicTrick from 'cozy-ui/transpiled/react/Icons/MagicTrick'
import Magnet from 'cozy-ui/transpiled/react/Icons/Magnet'
import Magnifier from 'cozy-ui/transpiled/react/Icons/Magnifier'
import Merge from 'cozy-ui/transpiled/react/Icons/Merge'
import Moped from 'cozy-ui/transpiled/react/Icons/Moped'
import MosaicMin from 'cozy-ui/transpiled/react/Icons/MosaicMin'
import Motorcycle from 'cozy-ui/transpiled/react/Icons/Motorcycle'
import Mountain from 'cozy-ui/transpiled/react/Icons/Mountain'
import Movement from 'cozy-ui/transpiled/react/Icons/Movement'
import MovementIn from 'cozy-ui/transpiled/react/Icons/MovementIn'
import MovementOut from 'cozy-ui/transpiled/react/Icons/MovementOut'
import Moveto from 'cozy-ui/transpiled/react/Icons/Moveto'
import MultiFiles from 'cozy-ui/transpiled/react/Icons/MultiFiles'
import Music from 'cozy-ui/transpiled/react/Icons/Music'
import New from 'cozy-ui/transpiled/react/Icons/New'
import Next from 'cozy-ui/transpiled/react/Icons/Next'
import Note from 'cozy-ui/transpiled/react/Icons/Note'
import NotificationEmail from 'cozy-ui/transpiled/react/Icons/NotificationEmail'
import Offline from 'cozy-ui/transpiled/react/Icons/Offline'
import Online from 'cozy-ui/transpiled/react/Icons/Online'
import Openapp from 'cozy-ui/transpiled/react/Icons/Openapp'
import Openwith from 'cozy-ui/transpiled/react/Icons/Openwith'
import Palette from 'cozy-ui/transpiled/react/Icons/Palette'
import Paper from 'cozy-ui/transpiled/react/Icons/Paper'
import Paperplane from 'cozy-ui/transpiled/react/Icons/Paperplane'
import Password from 'cozy-ui/transpiled/react/Icons/Password'
import Pen from 'cozy-ui/transpiled/react/Icons/Pen'
import People from 'cozy-ui/transpiled/react/Icons/People'
import Percent from 'cozy-ui/transpiled/react/Icons/Percent'
import PercentCircle from 'cozy-ui/transpiled/react/Icons/PercentCircle'
import PersonalData from 'cozy-ui/transpiled/react/Icons/PersonalData'
import Phone from 'cozy-ui/transpiled/react/Icons/Phone'
import PhoneDownload from 'cozy-ui/transpiled/react/Icons/PhoneDownload'
import PhoneUpload from 'cozy-ui/transpiled/react/Icons/PhoneUpload'
import PieChart from 'cozy-ui/transpiled/react/Icons/PieChart'
import Pin from 'cozy-ui/transpiled/react/Icons/Pin'
import Plane from 'cozy-ui/transpiled/react/Icons/Plane'
import Plus from 'cozy-ui/transpiled/react/Icons/Plus'
import PlusSmall from 'cozy-ui/transpiled/react/Icons/PlusSmall'
import PopInside from 'cozy-ui/transpiled/react/Icons/PopInside'
import Previous from 'cozy-ui/transpiled/react/Icons/Previous'
import Printer from 'cozy-ui/transpiled/react/Icons/Printer'
import Qualify from 'cozy-ui/transpiled/react/Icons/Qualify'
import RadioChecked from 'cozy-ui/transpiled/react/Icons/RadioChecked'
import RadioUnchecked from 'cozy-ui/transpiled/react/Icons/RadioUnchecked'
import Refresh from 'cozy-ui/transpiled/react/Icons/Refresh'
import Relationship from 'cozy-ui/transpiled/react/Icons/Relationship'
import Remboursement from 'cozy-ui/transpiled/react/Icons/Remboursement'
import Rename from 'cozy-ui/transpiled/react/Icons/Rename'
import Repare from 'cozy-ui/transpiled/react/Icons/Repare'
import Reply from 'cozy-ui/transpiled/react/Icons/Reply'
import Restaurant from 'cozy-ui/transpiled/react/Icons/Restaurant'
import Restore from 'cozy-ui/transpiled/react/Icons/Restore'
import RestoreStraight from 'cozy-ui/transpiled/react/Icons/RestoreStraight'
import Right from 'cozy-ui/transpiled/react/Icons/Right'
import Rise from 'cozy-ui/transpiled/react/Icons/Rise'
import RotateLeft from 'cozy-ui/transpiled/react/Icons/RotateLeft'
import RotateRight from 'cozy-ui/transpiled/react/Icons/RotateRight'
import SadCozy from 'cozy-ui/transpiled/react/Icons/SadCozy'
import Safe from 'cozy-ui/transpiled/react/Icons/Safe'
import School from 'cozy-ui/transpiled/react/Icons/School'
import Scooter from 'cozy-ui/transpiled/react/Icons/Scooter'
import SelectAll from 'cozy-ui/transpiled/react/Icons/SelectAll'
import Setting from 'cozy-ui/transpiled/react/Icons/Setting'
import Share from 'cozy-ui/transpiled/react/Icons/Share'
import ShareCircle from 'cozy-ui/transpiled/react/Icons/ShareCircle'
import Shield from 'cozy-ui/transpiled/react/Icons/Shield'
import Shop from 'cozy-ui/transpiled/react/Icons/Shop'
import Sound from 'cozy-ui/transpiled/react/Icons/Sound'
import Spinner from 'cozy-ui/transpiled/react/Icons/Spinner'
import SportBag from 'cozy-ui/transpiled/react/Icons/SportBag'
import Stack from 'cozy-ui/transpiled/react/Icons/Stack'
import Star from 'cozy-ui/transpiled/react/Icons/Star'
import StarOutline from 'cozy-ui/transpiled/react/Icons/StarOutline'
import Stats from 'cozy-ui/transpiled/react/Icons/Stats'
import Subway from 'cozy-ui/transpiled/react/Icons/Subway'
import Support from 'cozy-ui/transpiled/react/Icons/Support'
import Swap from 'cozy-ui/transpiled/react/Icons/Swap'
import Sync from 'cozy-ui/transpiled/react/Icons/Sync'
import SyncCozy from 'cozy-ui/transpiled/react/Icons/SyncCozy'
import Tag from 'cozy-ui/transpiled/react/Icons/Tag'
import Target from 'cozy-ui/transpiled/react/Icons/Target'
import Task from 'cozy-ui/transpiled/react/Icons/Task'
import Team from 'cozy-ui/transpiled/react/Icons/Team'
import Telecom from 'cozy-ui/transpiled/react/Icons/Telecom'
import Telephone from 'cozy-ui/transpiled/react/Icons/Telephone'
import TextInfo from 'cozy-ui/transpiled/react/Icons/TextInfo'
import Top from 'cozy-ui/transpiled/react/Icons/Top'
import ToTheCloud from 'cozy-ui/transpiled/react/Icons/ToTheCloud'
import Train from 'cozy-ui/transpiled/react/Icons/Train'
import Tram from 'cozy-ui/transpiled/react/Icons/Tram'
import Trash from 'cozy-ui/transpiled/react/Icons/Trash'
import Trophy from 'cozy-ui/transpiled/react/Icons/Trophy'
import Uncloud from 'cozy-ui/transpiled/react/Icons/Uncloud'
import Unknow from 'cozy-ui/transpiled/react/Icons/Unknow'
import Unlink from 'cozy-ui/transpiled/react/Icons/Unlink'
import Unlock from 'cozy-ui/transpiled/react/Icons/Unlock'
import Up from 'cozy-ui/transpiled/react/Icons/Up'
import Upload from 'cozy-ui/transpiled/react/Icons/Upload'
import Videos from 'cozy-ui/transpiled/react/Icons/Videos'
import Walk from 'cozy-ui/transpiled/react/Icons/Walk'
import Wallet from 'cozy-ui/transpiled/react/Icons/Wallet'
import WalletAdd from 'cozy-ui/transpiled/react/Icons/WalletAdd'
import WalletNew from 'cozy-ui/transpiled/react/Icons/WalletNew'
import Warn from 'cozy-ui/transpiled/react/Icons/Warn'
import Warning from 'cozy-ui/transpiled/react/Icons/Warning'
import Water from 'cozy-ui/transpiled/react/Icons/Water'
import WarningCircle from 'cozy-ui/transpiled/react/Icons/WarningCircle'
import Work from 'cozy-ui/transpiled/react/Icons/Work'
import WrenchCircle from 'cozy-ui/transpiled/react/Icons/WrenchCircle'

const icons = [
  AlbumAdd,
  AlbumRemove,
  Album,
  Answer,
  Apple,
  Archive,
  ArrowUp,
  Attachment,
  Attention,
  BankCheck,
  Bank,
  BankingAdd,
  Banking,
  Bell,
  Benefit,
  Bike,
  Bill,
  Bottom,
  BrowserBrave,
  BrowserChrome,
  BrowserDuckduckgo,
  BrowserEdge,
  BrowserEdgeChromium,
  BrowserFirefox,
  BrowserIe,
  BrowserOpera,
  BrowserSafari,
  Burger,
  Bus,
  Calendar,
  Camera,
  Car,
  CarbonCopy,
  CarPooling,
  Categories,
  Certified,
  Check,
  Checkbox,
  CheckCircle,
  CheckList,
  CheckSquare,
  Chess,
  Child,
  CircleFilled,
  Clock,
  ClockOutline,
  Cloud,
  CloudHappy,
  Collect,
  Cocktail,
  Comment,
  Company,
  Compare,
  Compass,
  Connector,
  Contract,
  Contrast,
  Copy,
  CozyCircle,
  CozyLaugh,
  CozyLock,
  CozyRelease,
  CozyText,
  Credit,
  CreditCard,
  CreditCardAdd,
  Crop,
  CrossCircleOutline,
  CrossCircle,
  CrossMedium,
  CrossSmall,
  Cross,
  Cube,
  Dash,
  Dashboard,
  DataControl,
  Debit,
  Devices,
  Dots,
  Down,
  Download,
  DrawingArrowUp,
  DropdownClose,
  DropdownOpen,
  Dropdown,
  Dropup,
  ElectricBike,
  ElectricCar,
  ElectricScooter,
  EmailNotification,
  Email,
  Eu,
  Euro,
  Exchange,
  Eye,
  EyeClosed,
  FaceId,
  FileAdd,
  FileDuotone,
  FileNew,
  FileNone,
  FileOutline,
  File,
  Filter,
  Fingerprint,
  Fitness,
  Flag,
  FlagOutlined,
  FlashAuto,
  Flashlight,
  Folder,
  FolderAdd,
  FolderMoveto,
  Forbidden,
  FromUser,
  Gear,
  Globe,
  Gouv,
  GraphCircle,
  Grid,
  GroupList,
  Groups,
  Growth,
  Hand,
  Heart,
  Help,
  HelpOutlined,
  History,
  Home,
  Hourglass,
  Image,
  InfoOutlined,
  Info,
  Justice,
  Key,
  LabelOutlined,
  Laudry,
  Laptop,
  Left,
  Library,
  Lightbulb,
  Lightning,
  Link,
  LinkOut,
  List,
  ListMin,
  Location,
  Lock,
  LockScreen,
  Logout,
  MagicTrick,
  Magnet,
  Magnifier,
  Merge,
  Moped,
  MosaicMin,
  Motorcycle,
  Mountain,
  MovementIn,
  MovementOut,
  Movement,
  Moveto,
  MultiFiles,
  Music,
  New,
  Next,
  Note,
  NotificationEmail,
  Offline,
  Online,
  Openapp,
  Openwith,
  Palette,
  Paper,
  Paperplane,
  Password,
  Pen,
  People,
  Percent,
  PercentCircle,
  PersonalData,
  PhoneDownload,
  PhoneUpload,
  Phone,
  PieChart,
  Pin,
  Plane,
  PlusSmall,
  Plus,
  PopInside,
  Previous,
  Printer,
  Qualify,
  RadioChecked,
  RadioUnchecked,
  Refresh,
  Relationship,
  Remboursement,
  Rename,
  Repare,
  Reply,
  Restaurant,
  Restore,
  RestoreStraight,
  Right,
  Rise,
  RotateLeft,
  RotateRight,
  SadCozy,
  Safe,
  School,
  Scooter,
  SelectAll,
  Setting,
  Share,
  ShareCircle,
  Shield,
  Shop,
  Sound,
  Spinner,
  SportBag,
  Stack,
  Star,
  StarOutline,
  Stats,
  Subway,
  Support,
  Swap,
  Sync,
  SyncCozy,
  Tag,
  Target,
  Task,
  Team,
  Telecom,
  Telephone,
  TextInfo,
  Top,
  ToTheCloud,
  Train,
  Tram,
  Trash,
  Trophy,
  Uncloud,
  Unknow,
  Unlink,
  Unlock,
  Up,
  Upload,
  Videos,
  Walk,
  WalletAdd,
  WalletNew,
  Wallet,
  Warn,
  WarningCircle,
  Warning,
  Water,
  WrenchCircle,
  Work
]
const locale = {}
const wrapperStyle = {
  fontSize: '2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)'
}

initialState = { size: 16 };

const handleInputRangeChange = ev => {
  setState({ size: parseInt(ev.target.value, 10) })
}

const getNameFromIcon = icon => {
  return icon.name.replace(/^Svg/, '')
}

const InfoModal = ({ icon }) => {
  const iconName = getNameFromIcon(icon)
  return <Dialog
    size='large'
    open={true}
    title={<div className='u-ta-center'>{ iconName }</div>}
    onClose={() => setState({ selected: null })}
    content={
      <>
        <Typography variant='body1'>To import {iconName}, copy/paste the following line:</Typography>
        <pre>
          import {iconName}Icon from 'cozy-ui/transpiled/react/Icons/{iconName}'
        </pre>
      </>
    }
  />
}

const Example = () => {
  return (
    <DemoProvider>
      <Typography component='p' variant='body1' className='u-mb-1'>
        Font size: <input type='range' min='8' max='48' value={state.size} onChange={handleInputRangeChange} /> {state.size}px
      </Typography>
      <div style={wrapperStyle}>
        {
        icons.map(icon => <div
            key={icon}
            className="u-c-pointer u-ta-center u-mb-1"
            onClick={() => setState({ selected: icon })}
          >
            <Icon icon={ icon } size={state.size} />
            <Typography variant='body1' className='u-mt-half'>
              { getNameFromIcon(icon) }
            </Typography>
          </div>
        )}
      { state.selected ? <InfoModal icon={state.selected} /> : null }
      </div>
    </DemoProvider>
  )
}

;

<Example />
```

## SVGr illustrations

```jsx
import Icon from 'cozy-ui/transpiled/react/Icon'
import Typography from 'cozy-ui/transpiled/react/Typography'

import AccountIcon from 'cozy-ui/transpiled/react/Icons/Account'
import BottomSelectIcon from 'cozy-ui/transpiled/react/Icons/BottomSelect'
import CreditCardLargeIcon from 'cozy-ui/transpiled/react/Icons/CreditCardLarge'
import CheckWhiteIcon from 'cozy-ui/transpiled/react/Icons/CheckWhite'
import CloudBrokenIcon from 'cozy-ui/transpiled/react/Icons/CloudBroken'
import CloudSync2 from 'cozy-ui/transpiled/react/Icons/CloudSync2'
import ContactsIcon from 'cozy-ui/transpiled/react/Icons/Contacts'
import CozyAuthentificationIcon from 'cozy-ui/transpiled/react/Icons/CozyAuthentification'
import CozyIcon from 'cozy-ui/transpiled/react/Icons/Cozy'
import CozyLogoIcon from 'cozy-ui/transpiled/react/Icons/CozyLogo'
import CozyUpgradeIcon from 'cozy-ui/transpiled/react/Icons/CozyUpgrade'
import DashWhiteIcon from 'cozy-ui/transpiled/react/Icons/DashWhite'
import DeviceBrowserIcon from 'cozy-ui/transpiled/react/Icons/DeviceBrowser'
import DeviceLaptopIcon from 'cozy-ui/transpiled/react/Icons/DeviceLaptop'
import DevicePhoneIcon from 'cozy-ui/transpiled/react/Icons/DevicePhone'
import DeviceTabletIcon from 'cozy-ui/transpiled/react/Icons/DeviceTablet'
import FileTypeAudioIcon from 'cozy-ui/transpiled/react/Icons/FileTypeAudio'
import FileTypeBankingAccountIcon from 'cozy-ui/transpiled/react/Icons/FileTypeBankingAccount'
import FileTypeBinIcon from 'cozy-ui/transpiled/react/Icons/FileTypeBin'
import FileTypeCodeIcon from 'cozy-ui/transpiled/react/Icons/FileTypeCode'
import FileTypeFilesIcon from 'cozy-ui/transpiled/react/Icons/FileTypeFiles'
import FileTypeFolderIcon from 'cozy-ui/transpiled/react/Icons/FileTypeFolder'
import FileTypeImageIcon from 'cozy-ui/transpiled/react/Icons/FileTypeImage'
import FileTypePdfIcon from 'cozy-ui/transpiled/react/Icons/FileTypePdf'
import FileTypeSheetIcon from 'cozy-ui/transpiled/react/Icons/FileTypeSheet'
import FileTypeSlideIcon from 'cozy-ui/transpiled/react/Icons/FileTypeSlide'
import FileTypeTextIcon from 'cozy-ui/transpiled/react/Icons/FileTypeText'
import FileTypeVideoIcon from 'cozy-ui/transpiled/react/Icons/FileTypeVideo'
import FileTypeZipIcon from 'cozy-ui/transpiled/react/Icons/FileTypeZip'
import ForbiddenSignIcon from 'cozy-ui/transpiled/react/Icons/ForbiddenSign'
import GoogleIcon from 'cozy-ui/transpiled/react/Icons/Google'
import KeychainIcon from 'cozy-ui/transpiled/react/Icons/Keychain'
import LogoutLargeIcon from 'cozy-ui/transpiled/react/Icons/LogoutLarge'
import PapersIcon from 'cozy-ui/transpiled/react/Icons/Papers'
import StoreIcon from 'cozy-ui/transpiled/react/Icons/Store'
import TopSelectIcon from 'cozy-ui/transpiled/react/Icons/TopSelect'
import TrashDuotoneIcon from 'cozy-ui/transpiled/react/Icons/TrashDuotone'

const icons = [
  AccountIcon,
  BottomSelectIcon,
  CheckWhiteIcon,
  CloudBrokenIcon,
  CloudSync2,
  ContactsIcon,
  CozyAuthentificationIcon,
  CozyIcon,
  CozyLogoIcon,
  CozyUpgradeIcon,
  CreditCardLargeIcon,
  DashWhiteIcon,
  DeviceBrowserIcon,
  DeviceLaptopIcon,
  DevicePhoneIcon,
  DeviceTabletIcon,
  FileTypeAudioIcon,
  FileTypeBankingAccountIcon,
  FileTypeBinIcon,
  FileTypeCodeIcon,
  FileTypeFilesIcon,
  FileTypeFolderIcon,
  FileTypeImageIcon,
  FileTypePdfIcon,
  FileTypeSheetIcon,
  FileTypeSlideIcon,
  FileTypeTextIcon,
  FileTypeVideoIcon,
  FileTypeZipIcon,
  ForbiddenSignIcon,
  GoogleIcon,
  KeychainIcon,
  LogoutLargeIcon,
  PapersIcon,
  StoreIcon,
  TopSelectIcon,
  TrashDuotoneIcon
]

const wrapperStyle = {
  fontSize: '2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  color: '#444'
}

initialState = { size: 16 }

const handleInputRangeChange = ev => {
  setState({ size: parseInt(ev.target.value, 10) })
}

;

<div>
  <Typography component='p' variant='body1' className='u-mb-1'>
    Font size: <input type='range' min='8' max='48' value={state.size} onChange={handleInputRangeChange} /> {state.size}px
  </Typography>
  <div style={wrapperStyle}>
    {
    icons.map(icon => <div key={icon} className='u-ta-center u-mb-1'>
        <Icon icon={ icon } size={state.size} />
        <Typography variant='body1' className='u-mt-half'>{ icon.name.replace(/^Svg/, '') }</Typography>
      </div>
    )}
  </div>
</div>
```

### Available illustrations

```jsx
import Icon from 'cozy-ui/transpiled/react/Icon'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Sprite from 'cozy-ui/transpiled/react/Icon/Sprite'

const availableIcons = ['account', 'bottom-select', 'check-white', 'cloud-broken', 'contacts', 'cozy-authentification', 'cozy-logo', 'cozy-upgrade', 'credit-card-large', 'dash-white', 'device-browser', 'device-laptop', 'device-phone', 'device-tablet', 'file-type-audio', 'file-type-banking-account' , 'file-type-bin', 'file-type-code', 'file-type-files', 'file-type-folder', 'file-type-image', 'file-type-note', 'file-type-pdf', 'file-type-sheet', 'file-type-slide', 'file-type-text', 'file-type-video', 'file-type-zip', 'forbidden-sign', 'google', 'keychain', 'logout-large', 'papers', 'store', 'top-select', 'trash-duotone', 'cozy']

;

<div style={{ fontSize: '2rem', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
  <Sprite />
  {availableIcons.map(icon => <div key={icon} style={{ textAlign: 'center'}}>
      <Icon icon={ icon }/>
      <Typography variant='body1' className='u-mb-1 u-mt-half'>{ icon }</Typography>
    </div>
  )}
</div>
```

### Permissions Icons

```jsx
import Icon from 'cozy-ui/transpiled/react/Icon'
import Typography from 'cozy-ui/transpiled/react/Typography'
import Dialog from 'cozy-ui/transpiled/react/CozyDialogs/Dialog'
import DemoProvider from 'cozy-ui/docs/components/DemoProvider'
import cx from 'classnames'

import { makeStyles } from 'cozy-ui/transpiled/react/styles'
import Accounts from 'cozy-ui/transpiled/react/Icons/Accounts'
import Apps from 'cozy-ui/transpiled/react/Icons/Apps'
import BankAccounts from 'cozy-ui/transpiled/react/Icons/BankAccounts'
import BankGroups from 'cozy-ui/transpiled/react/Icons/BankGroups'
import BankOperations from 'cozy-ui/transpiled/react/Icons/BankOperations'
import BankRecurrence from 'cozy-ui/transpiled/react/Icons/BankRecurrence'
import BillPermissions from 'cozy-ui/transpiled/react/Icons/BillPermissions'
import BugReport from 'cozy-ui/transpiled/react/Icons/BugReport'
import CalendarPermissions from 'cozy-ui/transpiled/react/Icons/CalendarPermissions'
import Category from 'cozy-ui/transpiled/react/Icons/Category'
import CertifiedPermissions from 'cozy-ui/transpiled/react/Icons/CertifiedPermissions'
import ConnectedClients from 'cozy-ui/transpiled/react/Icons/ConnectedClients'
import Consumption from 'cozy-ui/transpiled/react/Icons/Consumption'
import ContactsAccounts from 'cozy-ui/transpiled/react/Icons/ContactsAccounts'
import ContactsGroups from 'cozy-ui/transpiled/react/Icons/ContactsGroups'
import Contacts from 'cozy-ui/transpiled/react/Icons/Contacts'
import Contract from 'cozy-ui/transpiled/react/Icons/Contract'
import Ecolyo from 'cozy-ui/transpiled/react/Icons/Ecolyo'
import Energy from 'cozy-ui/transpiled/react/Icons/Energy'
import Energybreakdown from 'cozy-ui/transpiled/react/Icons/Energybreakdown'
import Fallback from 'cozy-ui/transpiled/react/Icons/Fallback'
import Family from 'cozy-ui/transpiled/react/Icons/Family'
import FilesPen from 'cozy-ui/transpiled/react/Icons/FilesPen'
import FilesVersions from 'cozy-ui/transpiled/react/Icons/FilesVersions'
import Files from 'cozy-ui/transpiled/react/Icons/Files'
import HomePermissions from 'cozy-ui/transpiled/react/Icons/HomePermissions'
import Identities from 'cozy-ui/transpiled/react/Icons/Identities'
import KonnectorsResult from 'cozy-ui/transpiled/react/Icons/KonnectorsResult'
import Konnectors from 'cozy-ui/transpiled/react/Icons/Konnectors'
import LocationPermissions from 'cozy-ui/transpiled/react/Icons/LocationPermissions'
import Notifications from 'cozy-ui/transpiled/react/Icons/Notifications'
import Opinions from 'cozy-ui/transpiled/react/Icons/Opinions'
import Passwords from 'cozy-ui/transpiled/react/Icons/Passwords'
import Permissions from 'cozy-ui/transpiled/react/Icons/Permissions'
import PhotosAlbum from 'cozy-ui/transpiled/react/Icons/PhotosAlbum'
import PhotosSettings from 'cozy-ui/transpiled/react/Icons/PhotosSettings'
import Profile from 'cozy-ui/transpiled/react/Icons/Profile'
import SafePermissions from 'cozy-ui/transpiled/react/Icons/SafePermissions'
import Settings from 'cozy-ui/transpiled/react/Icons/Settings'
import Sharings from 'cozy-ui/transpiled/react/Icons/Sharings'
import Sinister from 'cozy-ui/transpiled/react/Icons/Sinister'
import Tags from 'cozy-ui/transpiled/react/Icons/Tags'
import TaskToEffectuate from 'cozy-ui/transpiled/react/Icons/TaskToEffectuate'
import Triggers from 'cozy-ui/transpiled/react/Icons/Triggers'
import Versioning from 'cozy-ui/transpiled/react/Icons/Versioning'

const icons = [Accounts, Apps, BankAccounts, BankGroups, BankOperations, BankRecurrence, BillPermissions, BugReport, CalendarPermissions, Category, CertifiedPermissions, ConnectedClients, Consumption, ContactsAccounts, ContactsGroups, Contacts, Contract, Ecolyo, Energy, Energybreakdown, Fallback, Family, FilesPen, FilesVersions, Files, HomePermissions, Identities, KonnectorsResult, Konnectors, LocationPermissions, Notifications, Opinions, Passwords, Permissions, PhotosAlbum, PhotosSettings, Profile, SafePermissions, Settings, Sharings, Sinister, Tags,TaskToEffectuate, Triggers, Versioning]
const locale = {}
const wrapperStyle = {
  fontSize: '2rem',
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)'
}

initialState = { size: 16 };

const handleInputRangeChange = ev => {
  setState({ size: parseInt(ev.target.value, 10) })
}

const getNameFromIcon = icon => {
  return icon.name.replace(/^Svg/, '')
}

const InfoModal = ({ icon }) => {
  const iconName = getNameFromIcon(icon)
  return <Dialog
    size='large'
    open={true}
    title={<div className='u-ta-center'>{ iconName }</div>}
    onClose={() => setState({ selected: null })}
    content={
      <>
        <Typography variant='body1'>To import {iconName}, copy/paste the following line:</Typography>
        <pre>
          import {iconName}Icon from 'cozy-ui/transpiled/react/Icons/{iconName}'
        </pre>
      </>
    }
  />
}

const Example = () => {
  return (
    <DemoProvider>
      <Typography component='p' variant='body1' className='u-mb-1'>
        Font size: <input type='range' min='8' max='48' value={state.size} onChange={handleInputRangeChange} /> {state.size}px
      </Typography>
      <div style={wrapperStyle}>
        {
        icons.map(icon => <div
            key={icon}
            className="u-c-pointer u-ta-center u-mb-1"
            onClick={() => setState({ selected: icon })}
          >
            <Icon icon={ icon } size={state.size} />
            <Typography variant='body1' className='u-mt-half'>
              { getNameFromIcon(icon) }
            </Typography>
          </div>
        )}
      { state.selected ? <InfoModal icon={state.selected} /> : null }
      </div>
    </DemoProvider>
  )
}

;

<Example />
```

### Available UI icons from Sprite

When using `Icon`, you can either give a React component or use the identifier
of an already loaded one. `cozy-ui` is shipped with built-in icons, containing Illustrations and SVGr Icons that you can
include via `Sprite`.
`Sprite` can for example be included in the main `Layout` of your application.

```jsx
import Icon from 'cozy-ui/transpiled/react/Icon'
// Sprite is necessary in order to add in the html rendering
import Sprite from 'cozy-ui/transpiled/react/Icon/Sprite'
import Typography from 'cozy-ui/transpiled/react/Typography'

const colors = ['#297EF2', '#08b442', '#B449E7', '#F52D2D', '#FF962F']
let i = 0
const availableIcons = ['album-add','album-remove','album','answer','apple','archive','arrowUp','attachment','attention','bank-check','bank','banking-add','banking','bell','benefit','bike','bill','bottom','browser-brave','browser-chrome','browser-duckduckgo','browser-edge','browser-edge-chromium','browser-firefox','browser-ie','browser-opera','browser-safari','burger','bus','calendar','camera','car','carbonCopy','carpooling','categories','certified','check-circle','check-list','check-square','check','checkbox','chess','child','circle-filled','clock','clock-outline','cloud-happy','cloud','collect','cocktail','comment','company','compare','compass','connector','contract','contrast','copy','cozy-circle','cozy-laugh', 'cozy-lock', 'cozy-text', 'cozy-release', 'credit-card-add','credit-card','credit','crop','cross-circle-outline','cross-circle','cross-medium','cross-small','cross','cube','dash','dashboard','data-control','debit','devices','dots','down','download','drawing-arrow-up','dropdown-close','dropdown-open','dropdown','dropup','electric-bike','electric-car','electric-scooter','email-notification','email','eu','euro','exchange','eye-closed','eye','face-id','file-add','file-duotone','file-new','file-none','file-outline','file','filter','fingerprint','fitness','flag-outlined','flag','flash-auto','flashlight','folder-add','folder-moveto','folder','forbidden','from-user','gear','globe','gouv','graph-circle','grid','group-list','groups','growth','hand','heart','help','help-outlined','history','home','hourglass','image','info-outlined','info','justice','key','label-outlined','laudry','laptop','left','library','lightbulb','lightning','link-out','link','list','list-min','location','lock', 'lock-screen', 'logout','magic-trick','magnet','magnifier','merge','moped','mosaic-min','motorcycle','mountain','movement-in','movement-out','mouvement','moveto','multi-files','music','new','next','note','notification-email','offline','online', 'openapp', 'openwith','palette','paper','paperplane','password','pen','people','percent-circle','percent','personal-data','phone-download','phone-upload','phone','pie-chart','pin','plane','plus-small','plus', 'pop-inside', 'previous','printer','qualify','radio-checked','radio-unchecked','refresh','relationship','remboursement','rename','repare','reply','restaurant','restore-straight','restore','right','rise','rotate-left','rotate-right','sad-cozy','safe','school','scooter','select-all','setting','share-circle','share','shield','shop','sound','spinner','sport-bag','stack','star','star-outline','stats','subway', 'support', 'swap', 'sync-cozy','sync','tag','target','task','team','telecom','telephone','text-info','to-the-cloud','top','train','tram','trash','trophy', 'uncloud', 'unknow','unlink','unlock','up','upload','videos','walk','wallet-add','wallet-new','wallet','warn','warning-circle','warning','water','wrench-circle','work']
;
<div style={{ fontSize: '2rem', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
  <Sprite />
  {availableIcons.map(icon => <div key={icon} style={{ textAlign: 'center'}}>
      <Icon icon={ icon } color={ colors[i++ % colors.length] }/>
      <Typography variant='body1' className='u-mt-half u-mb-1'>{ icon }</Typography>
    </div>
  )}
</div>
```
