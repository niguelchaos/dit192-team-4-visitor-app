const fs = require('fs');
const jwt = require('jsonwebtoken');
const privateKey = fs.readFileSync('./env/secret', 'utf8'); // to sign JWT
const publicKey = fs.readFileSync('./env/secret.pub', 'utf8'); // to verify JWT

module.exports = {
  sign: (payload, options) => {
    const signingOptions = {
      algorithm: 'ES512',
      audience: options.audience,
      expiresIn: 86400,
      issuer: 'team4db',
      subject: options.subject
    };
    return jwt.sign(payload, privateKey, signingOptions);
  },

  parseTokenFromAuthorizationHeader: (req) => {
    const authorizationHeader = req.headers['authorization']
    if (!authorizationHeader || !authorizationHeader.includes('Bearer ') ) {
      return null
    }
    return req.headers['authorization'].split(' ')[1]
  },

  verify: (token, options) => {
    const verifyOptions = {
      algorithm: ['ES512'],
      audience: options.audience,
      expiresIn: 86400,
      issuer: 'team4db'
    };
    try {
      return jwt.verify(token, publicKey, verifyOptions);
    } catch(err){
      return null;
    }
  },

  decode: (token) => {
    return jwt.decode(token, {complete: true});
  }
}
