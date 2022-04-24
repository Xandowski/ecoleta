import { Router } from "express"
import multer from 'multer'
import multerConfig from './config/multer'
import { ItemsController } from "./controllers/ItemsController"
import { PointsController } from "./controllers/PointsController"


const router = Router()
const upload = multer(multerConfig)

const createPoint = new PointsController()
const getItems = new ItemsController

router.get('/point', createPoint.index)
router.get('/items', getItems.index)
router.post(
  '/point', 
  upload.single('image'),
  createPoint.create)

export { router }
