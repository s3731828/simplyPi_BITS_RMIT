from googleapiclient.discovery import build
from google.oauth2 import service_account


SERVICE_ACCOUNT_FILE = 'google-api-keys.json'
SCOPES = ['https://www.googleapis.com/auth/spreadsheets',
             'https://www.googleapis.com/auth/drive.file',
             'https://www.googleapis.com/auth/drive']

creds = None
creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)



# The Spreadsheet ID:
SPREADSHEET_ID = '1lMWehoENJt8pwV2yO0NpZLUy35-CTD5d0VuN6g48LCE'
   
service = build('sheets', 'v4', credentials=creds)
       
  
# Call the Sheets API
sheet = service.spreadsheets()

#Gets our result output
result = sheet.values().get(spreadsheetId=SPREADSHEET_ID,
                            range="Sheet1!a1:b2").execute()

#        values = result.get('values', [])
print(result)
