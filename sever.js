const accountSid = "ACe7052284e7ac8ba78bd33d26189ae3ca";
const authToken = "dba0ca48b08de8714cc022d56d578041";
const client = require("twilio")(accountSid, authToken);

const numbers = ["+919878335575", "+919876830251"];
numbers.forEach(number => {
  client.messages
    .create({ from: "+18326788823", body: "testing twilio", to: number })
    .then(message => console.log(message.sid));
});
