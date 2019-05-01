import axios from 'axios'

const options = {
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'content-type': 'application/json'
  }
}

const http = axios.create(options)

export default http
