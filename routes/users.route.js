import express from 'express'
import passport from 'passport'
import {userController} from './../controllers'
import {authenticateLocal, ensureAuthenticated} from './../middlewares/auth.middleware'

const router = express.Router();

// router.use()
router.post('/register', userController.create);
router.post('/login', authenticateLocal, userController.login)

router.get('/', passport.authenticate('jwt', {session: false}), userController.get)
router.put('/', passport.authenticate('jwt', {session: false}), userController.update)
router.delete('/', passport.authenticate('jwt', {session: false}), userController.remove)

router.post('/complete', userController.registerInterstitial)
router.get('/confirm/:code', userController.confirmEmail)

export default router