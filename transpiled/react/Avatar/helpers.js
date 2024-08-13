import palette from "cozy-ui/transpiled/react/palette";
export var nameToColor = function nameToColor() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var colors = [palette['azure'], palette['melon'], palette['blazeOrange'], palette['pomegranate'], palette['mango'], palette['pumpkinOrange'], palette['darkPeriwinkle'], palette['purpley'], palette['lightishPurple'], palette['weirdGreen'], palette['puertoRico'], palette['emerald'], palette['seafoamGreen'], palette['lavender'], palette['brightSun'], palette['fuchsia']];
  var key = Array.from(name.toUpperCase()).map(function (letter) {
    return letter.charCodeAt(0);
  }).reduce(function (sum, number) {
    return sum + number;
  }, 0) % colors.length;
  return colors[key];
};