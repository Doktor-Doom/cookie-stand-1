// Store Objects

var pioneerPlace = {
    min: 17,
    max: 88,
    avgSale: 5.2
  };
  pioneerPlace.custHourlySim = function() {
    return Math.floor (Math.random() * (this.max - this.min) + this.min);
  }

var pdxAirport = {
    min: 6,
    max: 24,
    avgSale: 1.2
  };
  pdxAirport.custHourlySim = function() {
    Math.floor (Math.random() * (this.max - this.min) + this.min);
  }
var waSquare = {
    min: 11,
    max: 38,
    avgSale: 1.9
  };
  waSquare.custHourlySim = function() {
    Math.floor (Math.random() * (this.max - this.min) + this.min);
  }

var sellwood = {
    min: 20,
    max: 48,
    avgSale: 3.3
  };
  sellwood.custHourlySim = function() {
    Math.floor (Math.random() * (this.max - this.min) + this.min);
  }

var pearlDist = {
    min: 3,
    max: 24,
    avgSale: 2.6
  };
  pearlDist.custHourlySim = function() {
    Math.floor (Math.random() * (this.max - this.min) + this.min);
  }

// Store hours array

var storeHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

//TODO: complete hourly cookie simulator
function cookiesHourlySim (store) {
  var cookieSimArray = [];
  var cookiesTotal = 0;
  for (index = 0; index < 8; index++) {
    var cookiePurchase = Math.floor(store.custHourlySim() * store.avgSale)
    cookieSimArray.push(cookiePurchase);
    cookiesTotal =+ 
    }
console.log(cookieSimArray);
}

cookiesHourlySim(pioneerPlace);
