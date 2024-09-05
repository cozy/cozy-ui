import { getActionsI18n } from "cozy-ui/transpiled/react/ActionsMenu/Actions/locales/withActionsLocales";
import DotsIcon from "cozy-ui/transpiled/react/Icons/Dots";
export var others = function others() {
  var _getActionsI18n = getActionsI18n(),
      t = _getActionsI18n.t;

  return {
    name: 'others',
    label: t('others'),
    icon: DotsIcon
  };
};