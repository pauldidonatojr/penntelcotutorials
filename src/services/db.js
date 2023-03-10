import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const secretKey = 'your-secret-key' // Replace with your own secret key

export const generateToken = (user) => {
 const payload = {
  id: user.id,
  email: user.email,
  // Any other relevant user data
 }

 return jwt.sign(payload, secretKey, { expiresIn: '1h' }) // Expires in 1 hour
}

export const verifyToken = (token) => {
 try {
  const decoded = jwt.verify(token, secretKey)

  return decoded
 } catch (error) {
  console.error(error)
  return null
 }
}

export const hashPassword = async (password) => {
 const salt = await bcrypt.genSalt(10)
 const hash = await bcrypt.hash(password, salt)

 return hash
}

export const comparePassword = async (password, hash) => {
 const match = await bcrypt.compare(password, hash)

 return match
}
