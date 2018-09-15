import express from 'express'
import session from 'express-session'
import connectMongo from 'connect-mongo'
import mongoose from 'mongoose'
import path from 'path'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import logger from 'morgan'

import hbs from './../configurations/hbs.config'
import passport from './../configurations/passport.config'
import routes from '../routes'
import CONFIG from './../configurations/env.vars'
const CURRENT_WORKING_DIR = process.cwd();

const MongoStore = connectMongo(session)

import devBundle from './dev.bundle' // To be commented out on production
const app = express()
devBundle.compile(app) // To be commented out on production

// view engine setup
app.set('views', path.resolve(CURRENT_WORKING_DIR, './views'))
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

// middlewares 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser(CONFIG.cookie_encryption))
app.use(compress())
app.use(helmet())
app.use(cors())
app.use('/public', express.static(path.resolve(CURRENT_WORKING_DIR, './public')))
app.use(session({
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    secret: CONFIG.session_encryption,
    name: CONFIG.cookie_name,
    cookie: {maxAge: CONFIG.session_expiration},
    resave: false,
    saveUninitialized: true
}))

app.use(logger('dev'))

passport(app)
routes(app)

export default app