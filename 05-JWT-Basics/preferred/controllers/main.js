const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
  const { name, password } = req.body
  
  if (!name || !password) {
    throw new CustomAPIError('Please provide name and password', 400)
  }
  const id = new Date().getDate()
  // Create token (consider adding user ID in production)
  const token = jwt.sign(
    { id, name }, 
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  )
  
  res.status(200).json({ 
     msg: 'user authenticated', 
    token,
    user: { name } 
  })
}
  
const hello = (req, res) => {
  const username = req.user.name
  res.status(200).json({ 
     message: `Hello,${username}!, Welcome to the protected world.`,secret: `Here is your authorized data,`
  })
}

module.exports = { login, hello }