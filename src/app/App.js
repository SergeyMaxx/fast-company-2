import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Login from './layouts/login'
import Main from './layouts/main'
import NavBar from './components/UI/navBar'
import Users from './layouts/users'

const App = () => (
  <div>
    <NavBar/>
    <Switch>
      <Route path="/users/:userId?/:edit?" component={Users}/>
      <Route path="/login/:type?" component={Login}/>
      <Route path="/" exact component={Main}/>
      <Redirect to="/"/>
    </Switch>
  </div>
)

export default App