import { Router } from 'express'

import {ping} from '../controllers/index.controller.js'

const router = Router()

// Enpoints
router.get('/ping', ping);



export default router