import mongoose from 'mongoose'

const connection = {}

;(async function dbConnect() {
  if (connection.isConnected) {
    return
  }

  try {
    console.log(process.env.MONGO_URI)
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    connection.isConnected = db.connections[0].readyState

    console.log('MongoDB Connected')
  } catch (error) {
    console.log(error)
  }
})()