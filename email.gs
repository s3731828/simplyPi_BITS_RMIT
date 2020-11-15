/**
 * Sends emails with data from the current spreadsheet.
 
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
**/
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

  var emailAddress = "simplypi08@gmail.com";
  var subject = 'Simply Pi update';
    
  var moistureErrorMessage = "";
  
  var row = data[0];
  var idealMoistureMeasurement = "The ideal soil moisture should be between 10 and 20"
  var soilMoisture = row[1]; // Second column
  if (soilMoisture < 10){
    moistureErrorMessage = `Your soil is too dry\n`;
  } else if (soilMoisture > 20){
    moistureErrorMessage = `Your soil is too wet\n`;
  } 
  var moistureMessage = `${moistureErrorMessage}Your current soil moisture measurement is ${soilMoisture}\n${idealMoistureMeasurement}`; 
  
  var lightMessage
  
  var row = data[1];
  var ideallightMeasurement = "The ideal light measurement should be between 20 and 30"
  var lightMeasurement = row[1]; // Second column
  var lightErrorMessage = "";
  if (lightMeasurement < 20){
    lightErrorMessage = `Your plant is in the dark\n`;
  } else if (lightMeasurement > 30){
    lightErrorMessage = `Your plant is to bright\n`;
  }
  
  lightMessage = `${lightErrorMessage}Your current light measurement is ${lightMeasurement}\n${ideallightMeasurement}`;
    
  var message = `${moistureMessage}\n\n${lightMessage}`;
  
  MailApp.sendEmail(emailAddress, subject, message);

}
