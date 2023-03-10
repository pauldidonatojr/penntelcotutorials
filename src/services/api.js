import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api' // Replace with your backend API URL

export const login = async (email, password) => {
 try {
  const response = await axios.post(`${BASE_URL}/auth/login`, {
   email,
   password,
  })

  return response.data
 } catch (error) {
  console.error(error)
 }
}

export const signup = async (name, email, password) => {
 try {
  const response = await axios.post(`${BASE_URL}/auth/signup`, {
   name,
   email,
   password,
  })

  return response.data
 } catch (error) {
  console.error(error)
 }
}

export const logout = async () => {
 try {
  const response = await axios.post(`${BASE_URL}/auth/logout`)

  return response.data
 } catch (error) {
  console.error(error)
 }
}
