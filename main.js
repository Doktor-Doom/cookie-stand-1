// Store Objects

var pioneerPlace = {
    location: "pioneerPlace",
    min: 17,
    max: 88,
    avgSale: 5.2
  };
  pioneerPlace.custHourlySim = function() {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);

  }

var pdxAirport = {
    location: "pdxAirport",
    min: 6,
    max: 24,
    avgSale: 1.2
  };
  pdxAirport.custHourlySim = function() {
     return Math.floor(Math.random() * (this.max - this.min) + this.min);
  }
var waSquare = {
    location: "waSquare",
    min: 11,
    max: 38,
    avgSale: 1.9
  };
  waSquare.custHourlySim = function() {
    return Math.floor (Math.random() * (this.max - this.min) + this.min);
  }

var sellwood = {
    location: "sellwood",
    min: 20,
    max: 48,
    avgSale: 3.3
  };
  sellwood.custHourlySim = function() {
    return Math.floor (Math.random() * (this.max - this.min) + this.min);
  }

var pearlDist = {
    location: "pearlDist",
    min: 3,
    max: 24,
    avgSale: 2.6
  };
  pearlDist.custHourlySim = function() {
    return Math.floor (Math.random() * (this.max - this.min) + this.min);
  }


//

 // hourly cookie simulator
function cookiesHourlySim (store) {
  var storeHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
  var cookieSimArray = [];
  var cookiesTotal = 0;
  for (var index = 0; index < storeHours.length; index++) {
    var cookiePurchase = Math.floor(store.custHourlySim() * store.avgSale)
    cookiesTotal += cookiePurchase;
    cookieSimArray.push(cookiePurchase);
    var listItem = document.getElementById(store.location);
    listItem.innerHTML += "<li>" + (storeHours[index]) + ": " + cookieSimArray[index] + "</li>";
  };
  listItem.innerHTML += "<li>" + ("Total") + ": " + cookiesTotal + "</li>";
}

cookiesHourlySim(pioneerPlace);
cookiesHourlySim(pdxAirport);
cookiesHourlySim(waSquare);
cookiesHourlySim(sellwood);
cookiesHourlySim(pearlDist);
