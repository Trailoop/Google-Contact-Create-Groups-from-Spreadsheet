// The onOpen function is executed automatically every time a Spreadsheet is loaded
 function onOpen() {
   var ss = SpreadsheetApp.getActiveSpreadsheet();
   var menuEntries = [];
   // When the user clicks on "addMenuExample" then "Menu Entry 1", the function function1 is
   // executed.
   menuEntries.push({name: "Create Contact Group", functionName: "setupContactGroup"});
   menuEntries.push(null); // line separator
   

   ss.addMenu("Custom Menu", menuEntries);
 }
