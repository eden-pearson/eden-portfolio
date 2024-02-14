import express from 'express'

import * as db from '../functions/messages'

const router = express.Router()

// POST /api/v1/messages
router.post('/', async (req, res) => {
  const newMessage = req.body

  try {
    const response = await db.addMessage(newMessage)
    res.status(200).json(response[0])
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ error: 'There was an error trying to save your message' })
  }
})

export default router
