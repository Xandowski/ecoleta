import cors from 'cors'
import express from 'express'
import path from 'path'
import { router } from './Routes'

export const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333, () => {
  console.log('HTTP server running, http://localhost:3333')
})