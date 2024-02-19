const { magicEden } = require("../lib/processUrl");
const { rare_sats_filters } = require("../lib/rare_sats_filters");

for (let i = 0; i < 2; i++) {
    let gg = magicEden(rare_sats_filters[i]);
    gg.then(function(data) {
        console.log(JSON.parse(data));
        // res.send(data);
    }).catch(err => {
        console.log(err);
    });
}
