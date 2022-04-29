import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'

import indexRouter from './src/routes/index.js'
import usersRouter from './src/routes/user.js'
import apiRouter from './src/routes/api/index.js'
import applyDotenv from './src/lambdas/applyDotenv.js'
import db from './src/models/index.js'

const app = express()
const { mongoUri, port, jwtSecret, origin } = applyDotenv(dotenv)
const corsOptions = {
  origin,
  optionsSuccessStatus: 200,
}

db.mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(' ### 몽고DB 연결 성공 ### ')
  })
  .catch((err) => {
    console.log(' 몽고DB와 연결 실패', err)
    process.exit()
  })

app.use(cors(corsOptions))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/user', usersRouter)
app.use('/api', apiRouter)

export default app
