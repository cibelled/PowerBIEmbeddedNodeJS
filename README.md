# API Sample - NodeJS
Contains several API calls samples for App Owns Data.

After registering an app, Fill config parameters under config.json.

Use one of the methods in **powerbi-api-calls-sample.js** to make the coresponding api call.


Additonal Installation using visual studio code editor

1. execute command "npm init" to create package.json if doesn't exists
2. execute command "npm install --save-dev nodemon". This command helps us to keep track of changes to our application by watching   
   changed files and automatically restart the server
3. execute command "npm install express --save". This command will create the server 
4. execute command "npm install request -g"


Steps to run application

1. npm run start or node server.js
2. Open browser and run: http://localhost:3000/test. This will display "this is test"
3. run http://localhost:3000/getReport 
