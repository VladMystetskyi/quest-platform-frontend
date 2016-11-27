import React, { Component } from 'react'
import './App.less'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import i18n from 'locale'
import geo from 'geo'
import Appheader from '../../features/appHeader/components/AppHeader'

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
          <Appheader />
          <p className='App-intro'>
            {i18n.t('introToQuestomania')}
          </p>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
