import axios from 'axios'

const baseUrl = axios.create({
  baseURL: 'https://stayhoops-serv.herokuapp.com'
})

export default baseUrl