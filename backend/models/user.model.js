const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  tickets: [String],
  reservations: [{
    name: String,
    slot: String,
    time: String
  }]
},
{
  timestamps: true
});

userSchema.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.validatePassword = function validatePassword(pass) {
  return bcrypt.compare(pass, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;