import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Login from './layouts/login'
import Main from './layouts/main'
import NavBar from './components/navBar'
import Users from './components/users'

const App = () => (
  <div>
    <NavBar/>
    <Switch>
      <Route path="/users/:userId?" component={Users}/>
      <Route path="/login" component={Login}/>
      <Route path="/" exact component={Main}/>
      <Redirect to="/"/>
    </Switch>
  </div>
)

export default App