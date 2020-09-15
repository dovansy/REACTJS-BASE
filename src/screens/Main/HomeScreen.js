import React, { Component } from 'react'
import Header from 'src/components/Header'
import SideBar from 'src/components/SideBar'
import '@styles/UserScreen.css'

// import reactotron from 'reactotron-react-js'

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Header />
        <SideBar />
      </div>
    )
  }
}
