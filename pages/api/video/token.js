const twilio = require("twilio");
const AccessToken = twilio.jwt.AccessToken;
const { VideoGrant } = AccessToken;

const config = {
  accountSid: process.env.twilioAccountSid,
  apiKey: process.env.twilioApiKey,
  apiSecret: process.env.twilioApiSecret
};

const generateToken = config => {
  return new AccessToken(config.accountSid, config.apiKey, config.apiSecret);
};

const videoToken = (identity, room, config) => {
  let videoGrant;
  if (typeof room !== "undefined") {
    videoGrant = new VideoGrant({ room });
  } else {
    videoGrant = new VideoGrant();
  }
  const token = generateToken(config);
  token.addGrant(videoGrant);
  token.identity = identity;
  return token;
};

export default (req, res) => {
  if (req.method === "POST") {
    // Process a POST request
    const identity = req.body.identity;
    const room = req.body.room;
    const token = videoToken(identity, room, config);

    res.send(
      JSON.stringify({
        token: token.toJwt()
      })
    );
  }
};
