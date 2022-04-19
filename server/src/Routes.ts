import { Router } from "express"
import { celebrate, Joi } from 'celebrate'
import { PointsController } from "./controllers/PointsController"

import multer from 'multer'
import multerConfig from './config/multer'

const router = Router()
const upload = multer(multerConfig)

const createPoint = new PointsController()

// router.get('/point', createPoint.index)
router.post(
  '/point', createPoint.create)

export { router }