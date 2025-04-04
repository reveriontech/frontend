import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import AuthRoutes from './routes/AuthRoutes.js'

const app = express()

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000' || 'http://127.0.0.1:3000' || 'http://127.0.0.1:5173', credentials: true }))

app.use(helmet())

dotenv.config({ path: "./engine/.env" })

app.use(express.json())

app.use('/', AuthRoutes)

const port = process.env.PORT || 3500

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})