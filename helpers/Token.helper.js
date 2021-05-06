const jwt = require("jsonwebtoken");

module.exports = {
  createToken: (payload) =>
    jwt.sign(payload, process.env.JWT_SECRETE, {
      expiresIn: "1d",
    }),

  verifyToken: (token) =>
    new Promise((resolve, reject) => {
      jwt.verify(token, process.env.JWT_SECRETE, (err, payload) => {
        if (err) {
          reject({ error: error, message: "Token is not valid." });
        }
        resolve(payload);
      });
    }),

  extractTokenFromHeader: (req) => {
    const bearer = req.header("Authorization");
    if (!bearer) {
      return undefined;
    }
    const token = bearer.split(" ")[1];

    return token;
  },
};
