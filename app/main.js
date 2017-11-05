import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'

// 引入页面
import Pageone from './routes/pageone/Pageone'
import Welcome from './routes/welcome/Welcome'
import Log from './routes/log/Log'
import Crmerror from './routes/crmerror/Crmerror'
import Layout01 from './layout/Layout01'

// 引入路由
var Routes = (
  <Router>
    <Route path="/" component={Layout01}>
      <IndexRoute component={Crmerror}/>
      {/*<Route path="/articles/:id" component={Art}/>*/}
    </Route>
    <Route path="/log" component={Log} />
  </Router>
)

// 渲染至html
render(Routes, document.getElementById('root'));