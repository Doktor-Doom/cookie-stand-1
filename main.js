// Store Objects

var pioneerPlace = {
    min: 17;
    max: 88;
    avgSale: 5.2
  };
  pioneerPlace.custHourlySim = function() {
    return Math.random() * (this.max - this.min) + this.min;
  }

var pdxAirport = {
    min: 6;
    max: 24;
    avgSale: 1.2
  };
  pdxAirport.custHourlySim = function() {
    return Math.random() * (this.max - this.min) + this.min;
  }
var waSquare = {
    min: 11;
    max: 38;
    avgSale: 1.9
  };
  waSquare.custHourlySim = function() {
    return Math.random() * (this.max - this.min) + this.min;
  }

var sellwood = {
    min: 20;
    max: 48;
    avgSale: 3.3
  };
  sellwood.custHourlySim = function() {
    return Math.random() * (this.max - this.min) + this.min;
  }

var pearlDist = {
    min: 3;
    max: 24;
    avgSale: 2.6
  };
  pearlDist.custHourlySim = function() {
    return Math.random() * (this.max - this.min) + this.min;
  }

//TODO: complete hourly cookie simulator
function cookiesHourlySim () {
  var cookieSimArray = [];
  for (index = 0; index < 8; index++) {
    var cookiePurchase =
  }
};
