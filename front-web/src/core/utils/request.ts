import axios, { Method } from 'axios'

type RequestParams = {
   method?: Method
   url: string
   params?: object
}

const BASE_URL = 'http://localhost:3000'

export const makeRequest = ({ method = 'GET', url, params }:RequestParams ) => {
   return axios({
      method,
      url: `${BASE_URL}${url}`,
      params
   })
}