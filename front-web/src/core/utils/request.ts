import axios, { Method } from 'axios'

type RequestParams = {
   method?: Method
   url: string
   params?: object
}

// DEV URL
//const BASE_URL = 'http://localhost:3000'

// PROD URL
const BASE_URL = 'https://rcrdev-namelist.herokuapp.com'

export const makeRequest = ({ method = 'GET', url, params }:RequestParams ) => {
   return axios({
      method,
      url: `${BASE_URL}${url}`,
      params
   })
}