'use strict'

import express from 'express'
import * as Users from '../controllers/users.controller'

const router = express.Router()

 router.get('/', Users.saveTest)
 router.get('/:id', Users.getOne)

export default router;