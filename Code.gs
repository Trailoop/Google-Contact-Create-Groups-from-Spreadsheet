function setupContactGroup() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var range = sheet.getRange(sheet.getDataRange().getRow() + 1, 1, sheet.getDataRange().getLastRow() -1, sheet.getDataRange().getLastColumn());
  

  var groupName = sheet.getSheetName();
  var group = ContactsApp.createContactGroup(groupName);

  var contacts = getRowsData(sheet, range);
  var contactsCount = contacts.length;
  
  contacts.forEach(function(contact){var addContact = group.addContact(ContactsApp.createContact(contact.firstname, contact.lastname, contact.email));});
  
  var groupContactCount = group.getContacts().length;
  
  Browser.msgBox(groupName + "now contains" + groupContactCount + ": of " + contactsCount + "on the sheet");
  
}


function debugContacts() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var range = sheet.getRange(sheet.getDataRange().getRow() + 1, 1, sheet.getDataRange().getLastRow() -1, sheet.getDataRange().getLastColumn());
  
  var contacts = getRowsData(sheet, range, 1);
  
    contacts.forEach(function(contact){
    Logger.log(contact.firstname + contact.lastname + contact.email);
  });

}
