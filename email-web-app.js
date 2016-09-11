//This Google Apps Script emails a specific address with the parameters passed using HTTP GET

// To setup:
// 1. Copy and paste into a new script project. 
// 2. Replace YOUR-EMAIL-ADDRESS-HERE below
// 3. Save script
// 4. Deploy web app using instructions here: https://developers.google.com/apps-script/guides/web#deploying_a_script_as_a_web_app
//     -> Menu "Publish" > "Deploy as web app..."
//     Set option: Execute App as "Me"  
//     Set option: Who has access as "Anyone, even anonymous"
//     Click Deploy
//     Review and Allow Permissions
//     Should get window that says "This project is now deployed as a web app"
//     Copy and Save the long "Current Web App URL"
//     --- final URL should look something like this: https://script.google.com/macros/s/.../exec

function doGet(e) {
  var toAddress="YOUR-EMAIL-ADDRESS-HERE"; //REPLACE WITH YOUR EMAIL
  var subjectLine="From your web app";
  var bodyText=JSON.stringify(e.parameters);
  MailApp.sendEmail(toAddress, subjectLine, bodyText); 
  return ContentService.createTextOutput('Email sent with following body:\n'+bodyText)
}

// Note that emails sent to yourself using MailApp do not appear in your Gmail Inbox -- so check your Sent Folder, or use a mail alias.
