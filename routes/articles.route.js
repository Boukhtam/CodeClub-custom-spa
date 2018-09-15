import express from 'express'
import passport from 'passport'
import {articleController} from './../controllers'
import {authenticateLocal, ensureAuthenticated} from './../middlewares/auth.middleware'

const router = express.Router();

// router.use()



export default router