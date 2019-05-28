const accountSid = "ACe7052284e7ac8ba78bd33d26189ae3ca";
const authToken = "dba0ca48b08de8714cc022d56d578041";
const client = require("twilio")(accountSid, authToken);

// const numbers = ["+919878335575", "+919876830251"];

client.messages
  .create({
    from: "whatsapp:+14155238886",
    body: "testing twilio",
    to: "whatsapp:+919878335575"
  })
  .then(message => console.log(message.sid));
