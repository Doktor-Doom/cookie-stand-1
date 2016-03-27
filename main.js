// Store Objects
var pioneerPlace = {
    location: "Pioneer Place",
    itemId: "pioneerPlace",
    min: 17,
    max: 88,
    avgSale: 5.2,
    cookieSimArray: [],
  };
  pioneerPlace.custHourlySim = function() {
    return Math.floor(Math.random() * (this.max - this.min) + this.min);
  }

var pdxAirport = {
    location: "Portland Airport",
    itemId: "pdxAirport",
    min: 6,
    max: 24,
    avgSale: 1.2,
    cookieSimArray: [],
  };
  pdxAirport.custHourlySim = function() {
     return Math.floor(Math.random() * (this.max - this.min) + this.min);
  }
var waSquare = {
    location: "Washington Square",
    itemId: "waSquare",
    min: 11,
    max: 38,
    avgSale: 1.9,
    cookieSimArray: [],
  };
  waSquare.custHourlySim = function() {
    return Math.floor (Math.random() * (this.max - this.min) + this.min);
  }

var sellwood = {
    location: "Sellwood",
    itemId: "sellwood",
    min: 20,
    max: 48,
    avgSale: 3.3,
    cookieSimArray: [],
  };
  sellwood.custHourlySim = function() {
    return Math.floor (Math.random() * (this.max - this.min) + this.min);
  }

var pearlDist = {
    location: "Pearl District",
    itemI: "pearlDist",
    min: 3,
    max: 24,
    avgSale: 2.6,
    cookieSimArray: [],
  };
  pearlDist.custHourlySim = function() {
    return Math.floor (Math.random() * (this.max - this.min) + this.min);
  }


// Store and store hour array
var storeItemIds = [pioneerPlace, pdxAirport, waSquare,sellwood,
pearlDist];
var storeHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

 // hourly cookie simulator and post to page
for (var storeIndex = 0; storeIndex < storeItemIds.length; storeIndex++) {
  cookiesHourlySim(storeItemIds[storeIndex]); //call function for each store

    function cookiesHourlySim(store) {
      var cookiesTotal = 0; //sums hourly estimates for daily total
      var newElement = document.createElement('ul');
      var ulNameText = document.createTextNode(store.location);
      newElement.appendChild(ulNameText);
      var ulPosition = document.getElementsByTagName('div')[0];
      ulPosition.appendChild(newElement);

      for (var index = 0; index < storeHours.length; index++) {
        var cookiePurchase = Math.floor(store.custHourlySim() * store.avgSale) //estimates sales for hour
        cookiesTotal += cookiePurchase; //sums salesr
        var newListItem = document.createElement('li');
        var listItemText = document.createTextNode(storeHours[index] + ": " + cookiePurchase)
        newListItem.appendChild(listItemText);
        var liPosition = document.getElementsByTagName('ul')[storeIndex];
        liPosition.appendChild(newListItem);
        store.cookieSimArray.push(cookiePurchase);
      };
        var newListItem = document.createElement('li');
        var listItemText = document.createTextNode("Total" + ": " + cookiesTotal)
        newListItem.appendChild(listItemText);
        var liPosition = document.getElementsByTagName('ul')[storeIndex];
        liPosition.appendChild(newListItem);
        }
      }
