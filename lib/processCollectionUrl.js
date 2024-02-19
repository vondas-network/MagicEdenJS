/**
 * processCollectionUrl.js
 * @author Christopher Konopka
 * @description 
 */

/**
 * processCollectionUrl
 * @description 
 */

function processCollectionUrl(uri) {

  /*
    %257B%2522 = {
    %22 = "
    %3A = :
    %5B = [
    %2C = ,    
    %7D = }
    %5D = ]
    
*/

  var output = new Promise(async (resolve, reject) => {
    console.log(uri);
    const encoded = encodeURI(uri);
    try {

      console.log("=======");
      console.log(encoded);
      // let decodedone = decodeURI(uri);
      // let maintextURI = decodedone;

      // let swapFrontBracket = maintextURI.replace("%7B%22", '{"');

      // let swapBackBracket = swapFrontBracket.replace(
      //   "%22%3A%5B%7B%22",
      //   '":[{"'
      // );
      // let swapCommaParanthesis = swapBackBracket.replace("%22%2C%22", '","');
      // let swapColonParanthesis = swapCommaParanthesis.replace(
      //   "%22%3A%22",
      //   '":"'
      // );
      // let swapParanthesis = swapColonParanthesis.replace("%22%3A%22", '":"');
      // let swapParanthesis2 = swapParanthesis.replace("%22%2C%22", '","');
      // let swapParanthesis3 = swapParanthesis2.replace("%22%3A", '":');
      // let swapParanthesis4 = swapParanthesis3.replace("%7D%5D%7D", "}]}");
      // let swapParanthesis5 = decodeURI(swapParanthesis4);



      // console.log('-----------------------')
      // console.log(swapParanthesis5);
      // let string = swapParanthesis5.split("=");
      // console.log(string[1]);
      // resolve(string[1]);
    } catch (e) {
      console.error(e);
    }
  });
  return output;
}

module.exports = { processCollectionUrl }