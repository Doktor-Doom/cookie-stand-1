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

// Store and store hours array
var storeItemIds = [pioneerPlace, pdxAirport, waSquare, sellwood, pearlDist];
var storeHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// hourly cookie simulator and post to page
// for (var storeIndex = 0; storeIndex < storeItemIds.length; storeIndex++) {
//   cookiesHourlySim(storeItemIds[storeIndex]); // call function for each store
//
//     function cookiesHourlySim(store) {
//       var cookiesTotal = 0; // sums hourly estimates for daily total
//       var newElement = document.createElement('ul'); // create ul for each store
//       var ulNameText = document.createTextNode(store.location); // store name as text node
//       newElement.appendChild(ulNameText); //append name to ul
//       var ulPosition = document.getElementsByTagName('div')[0]; // find location for ul
//       ulPosition.appendChild(newElement); // post to page
//
//       for (var index = 0; index < storeHours.length; index++) {
//         var cookiePurchase = Math.floor(store.custHourlySim() * store.avgSale) // estimates sales for hour
//         cookiesTotal += cookiePurchase; // sums total sales
//         var newListItem = document.createElement('li'); // create li for each hour
//         var listItemText = document.createTextNode(storeHours[index] + ": " + cookiePurchase) // create text for hourly li
//         newListItem.appendChild(listItemText); // add text to li
//         var liPosition = document.getElementsByTagName('ul')[storeIndex]; // get location post to page
//         liPosition.appendChild(newListItem); // post element & text to page
//         store.cookieSimArray.push(cookiePurchase); // push estimate to store array
//       };
//         // add total sales to bottom of store list
//         var newListItem = document.createElement('li');
//         var listItemText = document.createTextNode("Total" + ": " + cookiesTotal);
//         newListItem.appendChild(listItemText);
//         var liPosition = document.getElementsByTagName('ul')[storeIndex];
//         liPosition.appendChild(newListItem);
//         }
//       }

function tableHeader() {
  for (var tableIndex = 0; tableIndex < storeHours.length; tableIndex++) {
    var newTableHours = document.createElement('th');
    var listHoursText = document.createTextNode(storeHours[tableIndex]);
    newTableHours.appendChild(listHoursText);
    var thPosition = document.getElementsByTagName('tr')[0];
    thPosition.appendChild(newTableHours);
    };

    var tableTotal = document.createElement('th');
    var tableTotalText = document.createTextNode('Total');
    tableTotal.appendChild(tableTotalText);
    var totalPosition = document.getElementsByTagName('tr')[0];
    totalPosition.appendChild(tableTotal);
    }

  tableHeader()

  for (var storeIndex = 0; storeIndex < storeItemIds.length; storeIndex++) {
    cookiesHourlySim(storeItemIds[storeIndex]); // call function for each store

    function cookiesHourlySim(store) {
      var cookiesTotal = 0; // sums hourly estimates for daily total
      var newTableElement = document.createElement('tr'); // create tr for each store
      var trNameText = document.createTextNode(store.location); // store name as text node
      newTableElement.appendChild(trNameText); //append name to tr
      var trPosition = document.getElementsByTagName('tbody')[0]; // find location for tr
      trPosition.appendChild(newTableElement); // post to page

      for (var tableIndex = 0; tableIndex < storeHours.length; tableIndex++) {
        var cookiePurchase = Math.floor(store.custHourlySim() * store.avgSale) // estimates sales for hour
        cookiesTotal += cookiePurchase; // sums total sales
        var newTableItem = document.createElement('td'); // create td for each hour
        var tableItemText = document.createTextNode(cookiePurchase) // create text for hourly li
        newTableItem.appendChild(tableItemText); // add text to td
        var tdPosition = document.getElementsByTagName('tr')[storeIndex + 1]; // get location post to page
        tdPosition.appendChild(newTableItem); // post element & text to page
        store.cookieSimArray.push(cookiePurchase); // push estimate to store array
    };
    // add total sales to bottom of store list
      var newTotalItem = document.createElement('td');
      var totalText = document.createTextNode(cookiesTotal);
      newTotalItem.appendChild(totalText);
      var tdTotalPosition = document.getElementsByTagName('tr')[storeIndex + 1];
      tdTotalPosition.appendChild(newTotalItem);
    }
  };
