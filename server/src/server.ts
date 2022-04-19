import express from 'express'
import { router } from './Routes'

export const app = express()

app.use(express.json())
app.use(router)

app.listen(3333, () => {
  console.log('HTTP server running, https://localhost:3333')
})