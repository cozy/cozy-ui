import PropTypes from 'prop-types';
import { useI18n } from "cozy-ui/transpiled/react/I18n";
import withListItemLocales from "cozy-ui/transpiled/react/ListItem/hoc/withListItemLocales";

var PrimaryText = function PrimaryText(_ref) {
  var _file$metadata, _file$metadata$qualif;

  var primary = _ref.primary,
      file = _ref.file;

  var _useI18n = useI18n(),
      t = _useI18n.t;

  if (primary) return primary;
  var pageQualification = file === null || file === void 0 ? void 0 : (_file$metadata = file.metadata) === null || _file$metadata === void 0 ? void 0 : (_file$metadata$qualif = _file$metadata.qualification) === null || _file$metadata$qualif === void 0 ? void 0 : _file$metadata$qualif.page;
  return pageQualification === 'front' || pageQualification === 'back' ? t("ListItem.file.page.".concat(pageQualification)) : file.name;
};

PrimaryText.propTypes = {
  primary: PropTypes.node,
  file: PropTypes.object
};
export default withListItemLocales(PrimaryText);