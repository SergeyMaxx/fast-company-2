import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import Login from './layouts/login'
import Main from './layouts/main'
import NavBar from './components/UI/navBar'
import Users from './layouts/users'
import {ToastContainer} from 'react-toastify'
import {ProfessionProvider} from './hooks/useProfession'
import {QualitiesProvider} from './hooks/useQualities'
import AuthProvider from './hooks/useAuth'
import ProtectedRoute from './components/common/protectedRoute'
import LogOut from './layouts/logOut'

const App = () => (
  <div>
    <AuthProvider>
      <NavBar/>
      <QualitiesProvider>
        <ProfessionProvider>
          <Switch>
            <ProtectedRoute path="/users/:userId?/:edit?" component={Users}/>
            <Route path="/login/:type?" component={Login}/>
            <Route path="/logout" component={LogOut}/>
            <Route path="/" exact component={Main}/>
            <Redirect to="/"/>
          </Switch>
        </ProfessionProvider>
      </QualitiesProvider>
    </AuthProvider>
    <ToastContainer/>
  </div>
)

export default App