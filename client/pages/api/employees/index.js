import Employee from '@/models/Employee'
import '@/models/dbConnect'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const {
    query: { token },
    method,
  } = req
  const EXPRESS_SERVER = process.env.EXPRESS_SERVER

  switch (method) {
    case 'GET':
      try {
        const employees = await Employee.find({}).sort({
          createdAt: 'desc',
        })

        return res.status(200).json({
          success: true,
          data: employees,
        })
      } catch (error) {
        return res.status(400).json({
          success: false,
        })
      }
    case 'POST':
      try {
        const { isAuthorized } = await (
          await fetch(`${EXPRESS_SERVER}/user/verifyToken/${token}`)
        ).json()
        if (!isAuthorized)
          return res.status(401).json({
            success: false,
          })

        const employees = await Employee.create(req.body)
        return res.status(201).json({
          success: true,
          data: employees,
        })
      } catch (error) {
        return res.status(400).json({
          success: false,
        })
      }
    default:
      res.setHeaders('Allow', ['GET', 'POST'])
      return res
        .status(405)
        .json({ success: false })
        .end(`Method ${method} Not Allowed`)
  }
}
