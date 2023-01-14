const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Note = require('../models/noteModel')
const Ticket = require('../models/ticketModel')

// @desc Get notes for a ticket
// route GET /api/tickets/:TicketId/notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if(!user) {
    res.status(401)
    throw new Error('Kullanıcı bulunamadı.')
  }

  const ticket = await Ticket.findById(req.params.ticketId)

  if (ticket.user.toString() !== req.user.id){
    res.status(401)
    throw new Error('Kullanıcı yetkili değil.')
  }

  const notes = await Note.find({ ticket: req.params.ticketId })

  res.status(200).json(notes)
})

// @desc Create ticket note
// route POST /api/tickets/:TicketId/notes
// @access Private
const addNote = asyncHandler(async (req, res) => {
  // Get user using the id in the JWT
  const user = await User.findById(req.user.id)

  if(!user) {
    res.status(401)
    throw new Error('Kullanıcı bulunamadı.')
  }

  const ticket = await Ticket.findById(req.params.ticketId)

  if (ticket.user.toString() !== req.user.id){
    res.status(401)
    throw new Error('Kullanıcı yetkili değil.')
  }

  const note = await Note.create({ 
    text: req.body.text,
    ticket: req.params.ticketId,
    isStaff: false,
    user: req.user.id,
   })

  res.status(200).json(note)
})

module.exports = {
  getNotes,
  addNote
}