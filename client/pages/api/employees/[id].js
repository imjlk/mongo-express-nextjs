import Employee from '@/models/Employee'
import '@/models/dbConnect'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const {
    query: { id, token },
    method,
  } = req
  const EXPRESS_SERVER = process.env.EXPRESS_SERVER

  switch (method) {
    case 'GET':
      try {
        const employee = await Employee.findById(id)

        return res.status(200).json({
          success: true,
          data: employee,
        })
      } catch (error) {
        return res.status(404).json({
          success: false,
        })
      }
    case 'PUT':
      try {
        const employee = await Employee.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })

        return res.status(200).json({
          success: true,
          data: employee,
        })
      } catch (error) {
        return res.status(400).json({
          success: false,
        })
      }
    case 'DELETE':
      try {
        const { isAuthorized } = await (
          await fetch(`${EXPRESS_SERVER}/user/verifyToken/${token}`)
        ).json()
        console.log(isAuthorized)
        if (!isAuthorized)
          return res.status(401).json({
            success: false,
          })

        await Employee.deleteOne({ _id: id })

        return res.status(200).json({
          success: true,
          data: { id },
        })
      } catch (error) {
        return res.status(400).json({
          success: false,
        })
      }
    default:
      res.setHeaders('Allow', ['GET', 'PUT', 'DELETE'])
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`)
  }
}
