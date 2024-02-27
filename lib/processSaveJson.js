/**
 * @function save2JSON
 * @param {int} coinID
 */

const fs = require("fs");
const ohta = require('ohta');

function saveJSON(filename, passedOBJ) {
  let savedAddress = "./exports/" + Math.floor(Date.now() / 1000)+ "-" + filename +".json";
  fs.writeFileSync(savedAddress, JSON.stringify(passedOBJ));
}

module.exports = { saveJSON };
