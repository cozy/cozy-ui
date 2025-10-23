var styles = {
  "Panel-group": "styles__Panel-group___1txSp",
  "Panel-main": "styles__Panel-main___2BRfq",
  "Panel-side": "styles__Panel-side___327EK"
};
import { mkComponent } from "cozy-ui/transpiled/react/utils";
export var Group = mkComponent('div', {
  className: styles['Panel-group']
});
export var Main = mkComponent('div', {
  className: styles['Panel-main']
});
export var Side = mkComponent('aside', {
  className: styles['Panel-side']
});
export default {
  Group: Group,
  Main: Main,
  Side: Side
};