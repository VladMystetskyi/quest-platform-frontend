import React, { Component } from 'react'
import logo from './logo.svg'
import './App.less'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>Welcome to React</h2>
          </div>
          <p className='App-intro'>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <RaisedButton />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
