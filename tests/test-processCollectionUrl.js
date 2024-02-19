const cheerio = require("cheerio");
const axios = require("axios");
const ohta = require('ohta');
const magicEden = require("../lib/processCollectionUrl");
const { rareSatsFilters } = require("../lib/rareSatsFilters");

var satType = "Rare"


var timeInterval = ['10m', "1h", "6h", "1d", "7d", "30d"]
var testURL = "https://magiceden.io/popular-collections?filters=%257B%2522timeWindow%2522%253A%2522" + timeInterval[1] +  "%2522%252C%2522collectionType%2522%253A%2522all%2522%252C%2522sortColumn%2522%253A%2522sales%2522%252C%2522sortDirection%2522%253A%2522desc%2522%257D"

console.log(testURL);



axios.get(testURL).then((response) => {
    console.log(response.data);
    // Load the HTML into cheerio
    const $ = cheerio.load(response.data);
    // // Create an empty array to store the products
    // console.log($);
    const products = [];
    // // Loop through each product on the page
    // $(".s-result-item").each((i, el) => {
    //   const product = $(el);

    //   const priceWhole = product.find(".a-price-whole").text();
    //   const priceFraction = product.find(".a-price-fraction").text();
    //   const price = priceWhole + priceFraction;
    //   const link = product.find(".a-link-normal.a-text-normal").attr("href");
    //   const title = generateTitle(product, link);

    //   // If both title, price and link are not empty, add to products array
    //   if (title !== "" && price !== "" && link !== "") {
    //     products.push({ title, price, link});
    //   }
    // });


    // return a success message with the number of products scraped and the filename
    // res.json({
    //   products_saved: products.length,
    //   message: "Products scraped successfully",
    //   filename: generateFilename(),
    // });
  });






// https://magiceden.io/popular-collections?filters=%7B%22timeWindow%22%3A%2210m%22%2C%22collectionType%22%3A%22all%22%2C%22sortColumn%22%3A%22volume%22%2C%22sortDirection%22%3A%22desc%22%7D


/*
    %2522%253A%2522     =      ":
    %257B%2522          =      {" 
    %7B%22              =      {" 
    %22%3A%22           =      ":"
    %2522%253A%2522     =      ":"
    %2522%252C%2522     =      ","
    %22%2C%22           =      ","
    %22%7D              =      "}

*/



console.log('--------');
// let swapFrontBracket = decoded.replace("%7B%22", '{"');
// console.log(swapFrontBracket);
// let swapCommaParanthesis = testURL.replace("%2522%252C%2522", '","');
// let swapParanthesis = swapCommaParanthesis.replace("%257B%2522", '{"');
// let swapParanthesis2 = swapParanthesis.replace("%2522%252C%2522", '","');
// let swapParanthesis3 = swapParanthesis2.replace("%2522%252C%2522", '","');
// console.log(swapParanthesis);


// let swapBackBracket = swapFrontBracket.replace(
// "%22%3A%5B%7B%22",
// '":[{"'
// );

// let swapColonParanthesis = swapCommaParanthesis.replace(
// "%22%3A%22",
// '":"'
// );
// let swapParanthesis = swapColonParanthesis.replace("%22%3A%22", '":"');
// let swapParanthesis2 = swapParanthesis.replace("%22%2C%22", '","');
// let swapParanthesis3 = swapParanthesis2.replace("%22%3A", '":');
// let swapParanthesis4 = swapParanthesis3.replace("%7D%5D%7D", "}]}");
// let swapParanthesis5 = decodeURI(swapParanthesis4);








// var gg = magicEden.processCollectionUrl(testURL);
// ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-sat-url', "FUNCTION - processSatUrl");
// ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-sat-url', "FUNCTION - processSatUrl - " + satType);
// gg.then(function(data) {
//     ohta.askOhtaAbout('info', 'MagicEdenJS', 'app.js - /magiceden/process-sat-url', JSON.parse(data));
// }).catch(err => {
//     ohta.askOhtaAbout('error', 'MagicEdenJS', 'app.js - /magiceden/process-sat-url', err);
// });