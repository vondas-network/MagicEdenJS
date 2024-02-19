const cheerio = require("cheerio");
const axios = require("axios");
const ohta = require('ohta');
const magicEden = require("../lib/processCollectionUrl");
const { rareSatsFilters } = require("../lib/rareSatsFilters");

var satType = "Rare"


var timeInterval = ['10m', "1h", "6h", "1d", "7d", "30d"]

// console.log(testURL);

// axios.get(testURL).then((response) => {
//     console.log(response.data);
//   });



async function getForum() {
    try {
        const response = await axios.get(testURL)
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}

getForum()