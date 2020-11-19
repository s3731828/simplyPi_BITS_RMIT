/**
 * Sends emails with data from the current spreadsheet.
 */
function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
<<<<<<< HEAD
  var startRow = 2; // First row of data to process
=======
  var startRow = 3; // First row of data to process
>>>>>>> f59b8863cb6c0787b8bc33a0aa299cd413a4c171
  var numRows = 1; // Number of rows to process
  // Fetch the range of cells A2:B2
  var dataRange = sheet.getRange(startRow, 1, numRows, 2);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
<<<<<<< HEAD
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
=======

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

>>>>>>> f59b8863cb6c0787b8bc33a0aa299cd413a4c171
}
