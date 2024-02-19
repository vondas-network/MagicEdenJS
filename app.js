/**
 * app.js
 * @author Christopher Konopka
 * @description 
*/

/**
 **************************
* DEPENDENCIES ***********
************************** 
*/
const fs = require("fs");
const ohta = require('ohta');
var express = require('express')
const cfonts = require('cfonts');
const sats = require("./lib/processSatUrl");
const btc = require("./lib/processBtcListings");
const { rareSatsFilters } = require("./lib/rareSatsFilters");
 
/**
 **************************
* EXPRESS ****************
************************** 
*/
 var app = express()
 var port = 8888;
 var HOST = '0.0.0.0';
 
/**
**************************
* DYNAMIC ****************
************************** 
*/

/**
 * /magiceden/process-btc-listings
 * @param timeInterval  
 * @description 
 * 
*/

app.get('/magiceden/process-btc-listings', function(req, res) {  
    ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-btc-listings', "REQUEST");   
    var timeInterval = req.query.timeInterval;
    var gg = btc.processBtcListings(timeInterval);
    ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-btc-listings', "FUNCTION - processBtcListings");
    ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-btc-listings', "FUNCTION - processBtcListings - " + timeInterval);
    gg.then(function(data) {
        ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-btc-listings', data);
        res.send(data);
    }).catch(err => {
        ohta.askOhtaAbout('error', 'MagicEdenJS', 'app.js - /magiceden/process-btc-listings', err);
    });
})
 
/**
 * /magiceden/process-sat-url
 * @param satTypes  
 * @description 
 * 
*/

app.get('/magiceden/process-sat-url', function(req, res) {  
    ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-sat-url', "REQUEST");   
    var satType = req.query.satType;
    var gg = sats.processSatUrl(rareSatsFilters[satType]);
    ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-sat-url', "FUNCTION - processSatUrl");
    ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-sat-url', "FUNCTION - processSatUrl - " + satType);
    gg.then(function(data) {
        ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-sat-url', data);
        res.send(data);
    }).catch(err => {
        ohta.askOhtaAbout('error', 'MagicEdenJS', 'app.js - /magiceden/process-sat-url', err);
    });
})
 
/**
 **************************
* CFONT LOGO *************
************************** 
*/
cfonts.say('MagicEdenJS', {
    font: 'block', // define the font face
    align: 'left', // define text alignment
    colors: ['white', 'magentaBright'], // define all colors
    background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: '0', // define how many character can be on one line
    gradient: false, // define your two gradient colors
    independentGradient: true, // define if you want to recalculate the gradient for each new line
    transitionGradient: false, // define if this is a transition between colors directly
    env: 'node' // define the environment cfonts is being executed in
});
 
/**
 **************************
* SERVER OP **************
************************** 
*/
app.listen(port, HOST, function() {
    ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - init', "PORT - " + port);
})