import express from 'express'
import passport from 'passport'
import {authenticateLocal, ensureAuthenticated} from './../middlewares/auth.middleware'
import {exposeTemplates} from './../middlewares/hbs.middleware'
import hbs from './../configurations/hbs.config'


const router = express.Router();

// router.use()

router.get('/', exposeTemplates, (req, res) => {
    res.render('CodeClub', {
        layout: false
    })
})

router.get('/t', (req, res) => {
    hbs.getTemplate('views/shared/shell.hbs', {
        precompiled: false
    }).then((template) => {
        res.json(template)
    })
})

export default router