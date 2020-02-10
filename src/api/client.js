// istanbul ignore file
// @flow

import axios from 'axios'

const client = axios.create({
  headers: {
    'Cache-Control': 'no-cache',
  },
  timeout: 2000,
  responseType: 'text',
})

export default client
