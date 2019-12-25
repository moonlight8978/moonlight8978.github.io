// @flow

import React from 'react'

import makePost from './utils/make-post'
import mysqlOptimizeWhere from './blog/mysql-optimize-where'

const MySqlOptimizeWhere = makePost(mysqlOptimizeWhere)

function App() {
  return <MySqlOptimizeWhere />
}

export default App
