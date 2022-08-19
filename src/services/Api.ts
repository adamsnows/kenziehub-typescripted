import React from 'react'
import axios from 'axios'

const api = axios.create({baseURL: 'https://kenziehub.herokuapp.com'})
const tokenzada = localStorage.getItem('token')


export default api