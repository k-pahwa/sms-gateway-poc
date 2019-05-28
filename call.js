const accountSid = "ACe7052284e7ac8ba78bd33d26189ae3ca";
const authToken = "dba0ca48b08de8714cc022d56d578041";
const client = require("twilio")(accountSid, authToken);

// const numbers = ["+919878335575", "+919876830251"];

client.calls
  .create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+919780047975",
    from: "+18326788823"
  })
  .then(call => console.log(call.sid));
