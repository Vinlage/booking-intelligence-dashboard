import express from 'express'
import bookingsRouter from './routes/bookings'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/bookings', bookingsRouter)

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})