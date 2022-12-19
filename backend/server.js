const express = require('express')
const doteenv = require('dotenv').config()
const PORT = process.env.PORT || 8000

const app = express()

app.get('/', (reg, res) => {
  res.status(200).json({message: 'Support Desk API'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.listen(PORT, () => console.log(`Server ${PORT} portunda başlatıldı.`))