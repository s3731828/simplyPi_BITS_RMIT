/**
 * Sends emails with data from the current spreadsheet.
 */
function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; // First row of data to process
  var numRows = 1; // Number of rows to process
  // Fetch the range of cells A2:B2
  var dataRange = sheet.getRange(startRow, 1, numRows, 2);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (var i in data) {
    var row = data[i];
    var emailAddress = "simplypi08@gmail.com";
    var soilMoisture = row[1]; // Second column
    var subject = 'Simply Pi update';
    if (soilMoisture < 10){
      var message = `Your soil is too dry \n your current soil moisture measurement is ${soilMoisture}`;
    } else {
       var message = `Your current soil moisture measurement is ${soilMoisture}`;
    }
    MailApp.sendEmail(emailAddress, subject, message);
  }
}
