import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })

global.mount = mount
global.shallow = shallow
