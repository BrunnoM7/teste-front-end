import axios from 'axios'

const api = axios.create({
  baseURL: 'https://front-end-test-app.s3.amazonaws.com',
  // headers: {  
  //   'Content-Type': 'application/json'  
  // } 
})

export default api