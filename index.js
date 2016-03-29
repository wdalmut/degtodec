var _ = require('underscore');

module.exports = function(lat, lon) {

  lat = _.compact(lat.split(/([0-9]+\.[0-9]+)([NS]{1})/i));
  lon = _.compact(lon.split(/([0-9]+\.[0-9]+)([EW]{1})/i));

  return {
    "lat": conv(lat),
    "lon": conv(lon),
  };
};

var conv = function(deg) {
  var i = ~~(Math.round(deg[0])/100);
  var d = (deg[0] - (i * 100)) / 60;

  return (i + d).toFixed(6) * sign(deg[1]);
};

var sign = function(letter) {
  return letter === "S" || letter === "W" ? -1 : 1;
};
