import { Farmbot } from "farmbot";
import request from "request";

var SUPER_SECRET_TOKEN = "YOUR TOKEN";
let bot = new Farmbot({ token: SUPER_SECRET_TOKEN });



bot
    .connect()
    .then(function () {
        //return bot.moveRelative({ x: -2600, y: -500, z: 0, speed: 100 });
        bot.home({axis: "x", speed: 100}).then(function (ack){
            console.log("Moving home has succeeded");
        } ).catch(function (err){
            console.log("Failed to bring X axis home.");
        })

    }).catch(function (err){
    console.log("Failed to connect.");
});
var options = {
    'method': 'GET',
    'url': 'https://my.farm.bot/api/sensor_readings',
    'headers': {
        'Authorization': 'Bearer ' + SUPER_SECRET_TOKEN,
        'Content-Type': 'application/json',

    }

};
/*request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
});*/
function request_tokens(email, password){
    var tok_config = {
        'method': 'POST',
        'url': 'https://my.farm.bot/api/tokens',
        body: JSON.stringify({
            "user": {
                "email": email,
                "password": password
            }
        })

    };
    request(tok_config, function (error, response) {
    if (error) throw new Error(error);
    const res = JSON.parse(response.body);
    console.log(res);
    return res.token.encoded;
});

}