
var conv = require('.');

describe("Convert deg to decimal degree", function() {
  it("should convert latitude and longitude", function() {
    var coord = conv("4025.35N", "11354.3277E");

    expect(coord.lat).toEqual(40.4225);
    expect(coord.lon).toEqual(113.905462);
  });

  it("should convert latitude and longitude with negatives", function() {
    var coord = conv("4107.12N", "709.2W");

    expect(coord.lat).toEqual(41.118667);
    expect(coord.lon).toEqual(-7.153333);
  });


  it("should convert latitude and longitude with lat negatives", function() {
    var coord = conv("405.60S", "14209.72E");

    expect(coord.lat).toEqual(-4.093333);
    expect(coord.lon).toEqual(142.162);
  });
});
