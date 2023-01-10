const mongoose = require ('mongoose')

const ticketSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User' 
  },
  product: {
    type: String,
    required: [true, 'Lütfen ürün seçin.'],
    enum: ['iPhone', 'Macbook', 'iMac', 'iPad'],
  },
  description: {
    type: String,
    required: [true, 'Lütfen konuyu tanımlayın.'],
  },
  status: {
    type: String,
    required: true,
    enum: ['new', 'open', 'closed'],
    default: 'new',
  },
},
{
  timestamps: true,
}
)

module.exports = mongoose.model('Ticket', ticketSchema)