const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Lütfen isim giriniz.'],
  },
  email: {
    type: String,
    required: [true, 'Lütfen mail adresinizi giriniz.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Lütfen şifrenizi giriniz.'],
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
},
{
  timestamps: true,
}
)

module.exports = mongoose.model('User', userSchema)