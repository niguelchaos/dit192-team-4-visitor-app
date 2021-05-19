const jwt = require('jsonwebtoken');
const httpStatus = require('../lib/httpStatus');
const jwtModule = require('../lib/jwtModule');
const userRole = require('../lib/userRole');
const User = require('../models/user.model');

const AUDIENCE_TARGET = 'webapp';

exports.login = async function (req, res) {
  const { phone, password } = req.body
  if (!phone || !password) {
    return res.status(httpStatus.BAD_REQUEST).send({ status: httpStatus.BAD_REQUEST, message: `Auth: invalid parameters in request.` })
  }

  User.findOne({ phone }, function (error, user) {
      if (error) { return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: httpStatus.INTERNAL_SERVER_ERROR, message: `Server error: ${e.message}` }) }
      if (user) {
        const {_id, phone } = user
        user.validatePassword(req.body.password).then(
          passwordMatch => {
            if (passwordMatch) {
              const payload = {id: _id}
              const signingOptions = {
                subject: phone,
                audience: AUDIENCE_TARGET
              }
              const signedToken = jwtModule.sign(payload, signingOptions)
              return res.status(httpStatus.OK).send({ status: httpStatus.OK, token: signedToken, message: `Auth: user logged in (#: ${user.phone}).` })
            }
            return res.status(httpStatus.UNAUTHORIZED).send({ status: httpStatus.UNAUTHORIZED, message: `Auth: incorrect phone number or password provided.` })
          }
        )
      } else {
        return res.status(httpStatus.NOT_FOUND).send({ status: httpStatus.NOT_FOUND, message: `Auth: user not found (phone #: ${req.body.phone}).` })
      }
  })
}

exports.register = async function (req, res) {
  const {name, phone, password} = req.body
  if (!name || !phone || !password) {
    return res.status(httpStatus.BAD_REQUEST).send({ status: httpStatus.BAD_REQUEST, message: `Auth: invalid parameters provided in the request.` })
  }

  let user = new User({
    name: name,
    phone: phone,
    password: password,
    role: userRole.USER
  })

  user.save(function(error) {
    if (error) {
      var message;
      switch (error.code) {
        case 11000: 
          message = `Server error: user already exists.`
          break
        default:
          message = `Server error: ${error.message}`
      }
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: httpStatus.INTERNAL_SERVER_ERROR, message: message })
    }

    const payload = { id: user._id }
    const options = { subject: phone, audience: AUDIENCE_TARGET }
    const signedToken = jwtModule.sign(payload, options)

    res.status(httpStatus.CREATED).send({ status: httpStatus.CREATED, token: signedToken, message: `Auth: user registered successfully (#: ${user.phone}).` })
  });
}

exports.me = async function (req, res) {
  User.findById(req.userId, { password: 0 }, function (error, user) {
    if (error) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: httpStatus.INTERNAL_SERVER_ERROR, message: `Server error: ${error.message}` })
    if (!user) return res.status(httpStatus.NOT_FOUND).send({ status: httpStatus.NOT_FOUND, message: `Auth: user not found (id: ${req.userId}).` })
    res.status(httpStatus.OK).send({ status: httpStatus.OK, data: { id: user.id, phone: user.phone, name: user.name }, message: `Auth: user is authenticated (#: ${user.phone}).` })
  });
}

exports.deregister = async function (req, res) {
  User.findByIdAndRemove(req.params.id, function (error, user) {
    if (error) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ status: httpStatus.INTERNAL_SERVER_ERROR, message: `Server error: ${error.message}` })
    if (!user) return res.status(httpStatus.NOT_FOUND).send({ status: httpStatus.NOT_FOUND, message: `User: ${req.params.id} was not found.` })
    res.status(httpStatus.OK).send({ status: httpStatus.OK, message: `User was removed.` })
  });
}