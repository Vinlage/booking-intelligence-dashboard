import express from 'express'
const router = express.Router()

interface Booking {
  id: number;
  patient: string;
  therapist: string;
  date: string;
}

const mockBookings: Booking[] = [];
let idcounter = 1;

router.get('/', async (req, res) => {
  res.json(mockBookings)
})

router.post('/', async (req, res) => {
  const newBooking = req.body;

  if (!newBooking || !newBooking.patient || !newBooking.therapist || !newBooking.date) {
    return res.status(400).json({ error: 'Invalid booking data' });
  }

  newBooking.id = idcounter++;
  mockBookings.push(newBooking);
  res.status(201).json({ message: 'Booking created', booking: newBooking });
})

export default router