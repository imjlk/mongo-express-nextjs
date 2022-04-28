const currentServerTimestamp = (req, res, next) => {
  return res.status(200).json({ now: +new Date() })
}

export default currentServerTimestamp