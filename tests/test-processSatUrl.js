const ohta = require('ohta');
const magicEden = require("../lib/processSatUrl");
const { rareSatsFilters } = require("../lib/rareSatsFilters");

var satType = "Rare"

var gg = magicEden.processSatUrl(rareSatsFilters[satType]);
ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-sat-url', "FUNCTION - processSatUrl");
ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-sat-url', "FUNCTION - processSatUrl - " + satType);
gg.then(function(data) {
    ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-sat-url', JSON.parse(data));
}).catch(err => {
    ohta.askOhtaAbout('error', 'MagicEdenJS', 'app.js - /magiceden/process-sat-url', err);
});