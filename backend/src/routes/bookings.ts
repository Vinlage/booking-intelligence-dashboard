import express from 'express'
const router = express.Router()

router.get('/', async (req, res) => {
  res.json([
    { id: 1, customer: 'John Doe', risk: 0.1 },
    { id: 2, customer: 'Jane Smith', risk: 0.5 },
    { id: 3, customer: 'Alice Johnson', risk: 0.8 },
    { id: 4, customer: 'Bob Brown', risk: 0.3 },
  ])
})

export default router