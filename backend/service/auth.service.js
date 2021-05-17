const jwtModule = require('../lib/jwtModule')
const httpStatus = require('../lib/httpStatus');
const User = require('../models/user.model')

const AUDIENCE_TARGET = 'webapp';

exports.verifyToken = async function verifyToken(req, res, next) {
  const token = jwtModule.parseTokenFromAuthorizationHeader(req)
  if (token) {
    const verifyResult = jwtModule.verify(token, {AUDIENCE_TARGET})
    if (verifyResult && verifyResult.id) {
      req.userId = verifyResult.id;
      next();
    } else {
      return res.status(httpStatus.FORBIDDEN).send({ status: false, message: `Auth: bearer token failed verification.` });
    }
  } else {
    return res.status(httpStatus.FORBIDDEN).send({ status: false, message: `Auth: bearer token not provided as expected in authorization header.` });
  }
}

exports.authorizeSame = function() {
  return async (req, res, next) => {
    User.findById(req.userId, function(error, user) {
      if (error) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: false, message: `Server error: ${error.message}` });
      //arr1.some(r=> arr2.includes(r))

      if (req.userId != req.params.id) {
        return res.status(httpStatus.UNAUTHORIZED).send({ status: false, message: `Auth: unauthorized access.` });
      }
      next();
    });
  }
}