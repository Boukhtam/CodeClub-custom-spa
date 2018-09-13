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
import {usersRoute} from '../routes'
import CONFIG from './../configurations/env.vars'

const MongoStore = connectMongo(session)
const app = express()

// view engine setup
app.set('views', path.join(__dirname, './../views'))
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

// middlewares 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser(CONFIG.cookie_encryption))
app.use(compress())
app.use(helmet())
app.use(cors())
app.use('/public', express.static(path.resolve(__dirname, '../public')))
app.use(session({
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    secret: CONFIG.session_encryption,
    name: CONFIG.cookie_name,
    cookie: {maxAge: CONFIG.session_expiration},
    resave: false,
    saveUninitialized: true
}))

app.use(logger('dev'));

passport(app);
// routes(app);
app.use(usersRoute)

export default app