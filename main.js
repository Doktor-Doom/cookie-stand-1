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


// Store hours array

var storeHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

 // hourly cookie simulator
function cookiesHourlySim (store) {
  var cookieSimArray = []; //array holds hourly estimates
  var cookiesTotal = 0; //sums hourly estimates for daily total
  for (var index = 0; index < storeHours.length; index++) {
    var cookiePurchase = Math.floor(store.custHourlySim() * store.avgSale) //estimates sales for hour
    cookiesTotal += cookiePurchase; //sums salesr
    cookieSimArray.push(cookiePurchase); //pushes estimate to array
    var listItem = document.getElementById(store.location); //finds ist location on page
    listItem.innerHTML += "<li>" + (storeHours[index]) + ": " + cookieSimArray[index] + "</li>"; //posts to page
  };
  listItem.innerHTML += "<li>" + ("Total") + ": " + cookiesTotal + "</li>"; //posts daily total to page
}

// call each store in estimator function
cookiesHourlySim(pioneerPlace);
cookiesHourlySim(pdxAirport);
cookiesHourlySim(waSquare);
cookiesHourlySim(sellwood);
cookiesHourlySim(pearlDist);
