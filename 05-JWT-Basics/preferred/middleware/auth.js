const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError('Authentication invalid', 401)  
  }
  const token = authHeader.split(' ')[1]
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { name: decoded.name }
    next()
  } catch (error) {
    throw new CustomAPIError('Authentication invalid', 401)
  }
}

module.exports = auth