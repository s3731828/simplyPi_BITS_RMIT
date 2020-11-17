/**
 * Sends emails with data from the current spreadsheet.
 */
function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 3; // First row of data to process
  var numRows = 1; // Number of rows to process
  // Fetch the range of cells A2:B2
  var dataRange = sheet.getRange(startRow, 1, numRows, 2);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();

  var emailAddress = "simplypi08@gmail.com";
  var subject = 'Simply Pi update';
    

  
  var lightMessage
  

  var ideallightMeasurement = "The ideal light measurement should be between 45 and 75"
  var lightMeasurement = data[0][0]; // first column
  var lightErrorMessage = "";
  if (lightMeasurement < 45){
    lightErrorMessage = `Your current lighting is below the optimum level\n`;
  } else if (lightMeasurement > 75){
    lightErrorMessage = `Your current lighting is above the optimum level\n`;
  }
  
  lightMessage = `${lightErrorMessage}Your current light measurement is ${lightMeasurement}\n${ideallightMeasurement}`;
    
  
    var moistureErrorMessage = "";
  
  var idealMoistureMeasurement = "The ideal soil moisture should be between 40% and 60%"
  var soilMoisture = data[0][1]; // second column
  if (soilMoisture < 40){
    moistureErrorMessage = `Your soil is too dry\n`;
  } else if (soilMoisture > 60){
    moistureErrorMessage = `Your soil is too wet\n`;
  } 
  var moistureMessage = `${moistureErrorMessage}Your current soil moisture measurement is ${soilMoisture}%\n${idealMoistureMeasurement}`; 
  
  
  var message = `${lightMessage}\n\n${moistureMessage}`;
  
  MailApp.sendEmail(emailAddress, subject, message);

}
