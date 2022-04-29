import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import dotenv from 'dotenv'

import indexRouter from './src/routes/index.js'
import usersRouter from './src/routes/users.js'
import apiRouter from './src/routes/api/index.js'
import applyDotenv from './src/lambdas/applyDotenv.js'

const app = express()
const { mongoUri, port, jwtSecret } = applyDotenv(dotenv)
console.log(mongoUri, port, jwtSecret)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static('public')) // TODO: 필요한지 확인

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/api', apiRouter)

export default app
