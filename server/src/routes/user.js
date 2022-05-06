import express from 'express'
import UserService from '../services/user.js'

const router = express.Router()

router.use(function (_req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  )
  next()
})

router.post('/join', (req, res) => {
  console.log(' 진행 5: 라우터 진입 ')
  UserService().join(req, res)
})
router.post('/login', (req, res) => {
  console.log(' 진행 5: 라우터 진입 ')
  UserService().login(req, res)
})
router.get('/logout', (req, res) => {
  console.log(' LOGOUT ')
  UserService().logout(req, res)
})
router.get('/getUsers', (req, res) => {
  UserService().getUsers(req, res)
})
router.get('/verifyToken/:token', (req, res) => {
  UserService().verifyToken(req, res)
})

export default router
