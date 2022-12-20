const express = require('express')
const doteenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.get('/', (reg, res) => {
  res.status(200).json({message: 'Support Desk API'})
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server ${PORT} portunda başlatıldı.`))