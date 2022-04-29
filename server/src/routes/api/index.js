import express from 'express'
import currentServerTimestamp from './currentServerTime.js'

const router = express.Router()

router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})
router.get('/now', currentServerTimestamp)

export default router
