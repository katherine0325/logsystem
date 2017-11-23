import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect } from 'react-router'

// 引入页面
import Crmerror from './routes/crmerror/Crmerror'
import Layout01 from './layout/Layout01'
import Log from './routes/log/Log'

// 引入路由
var Routes = (
  <Router>
    <Route path="/" component={Log} />
    <Route path="/remove" component={Layout01}>
      <IndexRedirect to="/log/crm_error" />
      <Route path="log/:log" component={Crmerror}/>
    </Route>
  </Router>
)

// 渲染至html
render(Routes, document.getElementById('root'));