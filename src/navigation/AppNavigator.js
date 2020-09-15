import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomeScreen, LoginScreen } from '@screens/index'
import PrivateRoute from './PrivateRoute'
import Header from '@components/Header'
import NavBar from '@components/NavBar'

export class AppNavigator extends Component {
  render() {
    return (
      <Router>
        <Route path="/Login" exact component={LoginScreen} />
        <Route path="/Home" exact component={HomeScreen} />
        <PrivateRoute path="/" exact Component={MainNavigator} />
      </Router>
    )
  }
}

class MainNavigator extends Component {
  render() {
    return (
      <>
        <Header />
        <NavBar />
        <Switch>
          <PrivateRoute path="/" exact Component={HomeScreen} />
        </Switch>
      </>
    )
  }
}

export default AppNavigator
