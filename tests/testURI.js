/*
    %7B = {
    %22 = "
    %3A = :
    %5B = [
    %2C = ,    
    %7D = }
    %5D = ]
    
*/

const { rare_sats_filters } = require("./lib/rare_sats_filters");

urlProcessor(rare_sats_filters[0]);

function urlProcessor(uri) {
  var output = new Promise(async (resolve, reject) => {
    const encoded = encodeURI(uri);
    try {
      let decodedone = decodeURI(uri);
      // console.log("----DECODED------------------------------");
      // console.log(decodedone);
      // console.log("-----------------------------------------");
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

      // console.log(swapParanthesis5);
      let string = swapParanthesis5.split("=");
      console.log(string[1]);
    } catch (e) {
      console.error(e);
    }
  });
  return output;
}
