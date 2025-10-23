import get from 'lodash/get';

var descendingComparator = function descendingComparator(_ref) {
  var a = _ref.a,
      b = _ref.b,
      orderDirection = _ref.orderDirection,
      orderBy = _ref.orderBy,
      lang = _ref.lang;
  var aValue = get(a, orderBy, '');
  var bValue = get(b, orderBy, '');

  if (typeof aValue === 'string') {
    var isDate = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}/.test(aValue);
    var isNumber = !isNaN(parseInt(aValue));

    if (isDate) {
      return new Date(bValue) - new Date(aValue);
    }

    if (isNumber) {
      return parseInt(bValue) - parseInt(aValue);
    }

    var _Intl$Collator = Intl.Collator(lang || 'en', {
      caseFirst: orderDirection === 'asc' ? 'upper' : 'lower'
    }),
        compare = _Intl$Collator.compare;

    return compare(bValue, aValue);
  }

  return bValue - aValue;
};

export var getComparator = function getComparator(orderDirection, orderBy, lang) {
  return orderDirection === 'desc' ? function (a, b) {
    return descendingComparator({
      a: a,
      b: b,
      orderDirection: orderDirection,
      orderBy: orderBy,
      lang: lang
    });
  } : function (a, b) {
    return -descendingComparator({
      a: a,
      b: b,
      orderDirection: orderDirection,
      orderBy: orderBy,
      lang: lang
    });
  };
};
export var stableSort = function stableSort(array, comparator) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
};