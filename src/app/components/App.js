import React, { Component } from 'react'
import logo from '../../static/logo.svg'
import './App.less'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import i18n from 'i18n'
import geo from 'geo'
import ChangeLangContainer from '../../features/changeLang/containers/ChangeLangContainer'

class App extends Component {
  render () {
    geo
      .then((position) => {
        console.debug('position: ', position)
      })
      .catch(() => {
        console.debug('location is not supported')
      })
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>{i18n.t('welcomeToQuestomania')}</h2>
          </div>
          <p className='App-intro'>
            {i18n.t('introToQuestomania')}
          </p>
          <ChangeLangContainer />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
