/**
 * processBtcListing.js
 * @author Christopher Konopka
 * @description 
 */


/**
 **************************
 * DEPENDENCIES ***********
 ************************** 
 */

const axios = require("axios");
const ohta = require('ohta');

/**
 * processBtcListings.js
 * @author Christopher Konopka
 * @params
 */

function processBtcListings(timeInterval) {
  ohta.askOhtaAbout( "info", "MagicEdenJS", "processBtcListings.js - timeInterval - " + timeInterval, "START");
  var output = new Promise(async (resolve, reject) => {
    try {
      var testURL =
        "https://stats-mainnet.magiceden.io/collection_stats/search/bitcoin?window=" +
        timeInterval +
        "&limit=50&offset=0&sort=volume&direction=desc&filter=%7B%22timeWindow%22:%221d%22,%22collectionType%22:%22all%22,%22sortColumn%22:%22volume%22,%22sortDirection%22:%22desc%22%7D";

        ohta.askOhtaAbout( "info", "MagicEdenJS", "processBtcListings.js - url - " + testURL, "START");

      axios
        .get(testURL)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (e) {
      console.error(e);
    }
  });
  return output;
}

module.exports = { processBtcListings };