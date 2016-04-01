// Store Objects
var CookieStore = function(location, min, max, avgSale) {
  this.location = location;
  this.min =  min;
  this.max = max;
  this.avgSale = avgSale;
  this.cookieSimArray = [];
  this.custHourlySim = function() {
    return Math.floor(((Math.random() * (this.max - this.min)) + this.min) * this.avgSale);
  };
}

var pioneerPlace = new CookieStore("Pioneer Place", 17, 88, 5.2);
var pdxAirport = new CookieStore("Portland Airport", 6, 24, 1.2);
var waSquare = new CookieStore("Washington Square", 11, 38, 1.9);
var sellwood = new CookieStore("Sellwood", 20, 48, 3.3);
var pearlDist = new CookieStore("Pearl District", 3, 24, 2.6);

var storesArray = new Array();
storesArray.push(new CookieStore("Pioneer Place", 17, 88, 5.2));
storesArray.push(new CookieStore("Portland Airport", 6, 24, 1.2));
storesArray.push(new CookieStore("Washington Square", 11, 38, 1.9));
storesArray.push(new CookieStore("Sellwood", 20, 48, 3.3));
storesArray.push(new CookieStore("Pearl District", 3, 24, 2.6));

var storeHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
// Create table header for store hours
function domAppend(element, text, parent) {
  console.log(element, text, parent);
  var elementName = document.createElement(element);
  var textNode = document.createTextNode(text);
  elementName.appendChild(textNode);
  var elementPosition = document.getElementsByTagName(parent)[0];
  elementPosition.appendChild(elementName);
  }

function tableHeader() {
  for (var tableIndex = 0; tableIndex < storeHours.length; tableIndex++) {
      var headerText = storeHours[tableIndex];
      console.log(headerText);
      domAppend("th", headerText, "tr");
    };

    domAppend("th", "Total", "tr");
    // Add total header
    // var tableTotal = document.createElement('th');
    // var tableTotalText = document.createTextNode('Total');
    // tableTotal.appendChild(tableTotalText);
    // var totalPosition = document.getElementsByTagName('tr')[0];
    // totalPosition.appendChild(tableTotal);
  }

  tableHeader()

// Create store rows, get store names as row headers, populate with sales simulations
  for (var storeIndex = 0; storeIndex < storesArray.length; storeIndex++) {
    cookiesHourlySim(storesArray[storeIndex]); // call function for each store

    function cookiesHourlySim(store) {
      var cookiesTotal = 0; // sums hourly estimates for daily total
      var newTableElement = document.createElement('tr');
      var trPosition = document.getElementsByTagName('tbody')[0]; // find location for tr
      trPosition.appendChild(newTableElement); // post to page
      // create tr for each store
      var thStoreName = document.createElement('th');
      var thNameText = document.createTextNode(store.location); // store name as text node
      thStoreName.appendChild(thNameText); //append name to tr
      var thStorePosition =
      document.getElementsByTagName('tr')[storeIndex + 1];
      thStorePosition.appendChild(thStoreName);

      for (var tableIndex = 0; tableIndex < storeHours.length; tableIndex++) {
        var cookiePurchase = store.custHourlySim();// estimates sales for hour
        cookiesTotal += cookiePurchase; // sums total sales
        var newTableItem = document.createElement('td'); // create td for each hour
        var tableItemText = document.createTextNode(cookiePurchase) // create text for hourly li
        newTableItem.appendChild(tableItemText); // add text to td
        var tdPosition = document.getElementsByTagName('tr')[storeIndex + 1]; // get location post to page
        tdPosition.appendChild(newTableItem); // post element & text to page
        store.cookieSimArray.push(cookiePurchase); // push estimate to store array
    };
    // add total sales to bottom of store list
      var newTotalItem = document.createElement('th');
      var totalText = document.createTextNode(cookiesTotal);
      newTotalItem.appendChild(totalText);
      var tdTotalPosition = document.getElementsByTagName('tr')[storeIndex + 1];
      tdTotalPosition.appendChild(newTotalItem);
    }
  };
