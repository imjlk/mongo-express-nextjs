import UserModel from './User.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.User = new UserModel(mongoose)

export default db
