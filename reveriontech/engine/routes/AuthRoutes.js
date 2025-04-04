import express from 'express'
import { google, facebook } from '../auth/AuthApi.js'
import { chatBot } from '../auth/ChatBot.js'

const router = express.Router()

router.post('/google', google)
router.post('/facebook', facebook)
router.post('/chat', chatBot)

export default router