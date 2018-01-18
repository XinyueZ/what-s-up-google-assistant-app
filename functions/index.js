'use strict';

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').DialogflowApp;
const functions = require('firebase-functions');


// a. the action name from the ask_news Dialogflow intent
const ACTION_ASK_NEWS = 'ask_news';
const ACTION_APP_EXIT = 'app_exit'
// b. the parameters that are parsed from the ask_news intent 
const ARG_GEO_CITY = 'geo-city';
const ARG_GEO_COUNTRY = 'geo-country';

exports.whatsup = functions.https.onRequest((request, response) => {
  const app = new App({request, response});
  console.log('Request headers: ' + JSON.stringify(request.headers));
  console.log('Request body: ' + JSON.stringify(request.body));


  // c. The function that generates the news to ask
  function askNews(app) {
    let geoCity = app.getArgument(ARG_GEO_CITY);
    let geoCountry = app.getArgument(ARG_GEO_COUNTRY);

    if(geoCity != null && geoCity != "")
      app.tell('I will give you some news about ' + geoCity);
    else if(geoCountry != null && geoCountry != "") 
      app.tell('I will give you some news about ' + geoCountry);
  }

  function sayBye(app) {
    app.tell(`Okay, thanks you for having me, good-bye.`);
  }

  // d. build an action map, which maps intent names to functions
  let actionMap = new Map();
  actionMap.set(ACTION_ASK_NEWS, askNews);
  actionMap.set(ACTION_APP_EXIT, sayBye);

  app.handleRequest(actionMap);
});
