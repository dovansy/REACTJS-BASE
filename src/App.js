import React from 'react'
import './App.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import AppNavigator from './navigation/AppNavigator'
import 'bootstrap/dist/css/bootstrap.min.css'
import Toast from '@src/components/Toast'

function App() {
  return (
    <Provider store={store}>
      <Toast />
      <AppNavigator />
    </Provider>
  )
}

export default App
