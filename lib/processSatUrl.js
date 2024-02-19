/**
 * processSatUrl.js
 * @author Christopher Konopka
 * @description 
 */

/**
 * processSatUrl
 * @params
 */

function processSatUrl(uri) {
  var output = new Promise(async (resolve, reject) => {
    const encoded = encodeURI(uri);
    try {
      let decodedone = decodeURI(uri);
      let maintextURI = decodedone;

      let swapFrontBracket = maintextURI.replace("%7B%22", '{"');
      let swapBackBracket = swapFrontBracket.replace(
        "%22%3A%5B%7B%22",
        '":[{"'
      );
      let swapCommaParanthesis = swapBackBracket.replace("%22%2C%22", '","');
      let swapColonParanthesis = swapCommaParanthesis.replace(
        "%22%3A%22",
        '":"'
      );
      let swapParanthesis = swapColonParanthesis.replace("%22%3A%22", '":"');
      let swapParanthesis2 = swapParanthesis.replace("%22%2C%22", '","');
      let swapParanthesis3 = swapParanthesis2.replace("%22%3A", '":');
      let swapParanthesis4 = swapParanthesis3.replace("%7D%5D%7D", "}]}");
      let swapParanthesis5 = decodeURI(swapParanthesis4);

      let string = swapParanthesis5.split("=");
      resolve(string[1]);
    } catch (e) {
      console.error(e);
    }
  });
  return output;
}

module.exports = { processSatUrl }