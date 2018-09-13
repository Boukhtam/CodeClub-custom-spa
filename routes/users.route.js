import express from 'express'
import passport from 'passport' 
import {userController} from './../controllers'

const router = express.Router();

// router.use()

router.get('/login', userController.renderLogin)

export default router