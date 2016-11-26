import React, { Component } from 'react'
import logo from './logo.svg'
import './App.less'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import i18n from './i18n'
import geo from './geo'

class App extends Component {
  constructor (props) {
    super(props)
    this.onChangeLanguageClick = this.onChangeLanguageClick.bind(this)
    this.state = {}
  }
  onChangeLanguageClick () {
    this.setState({lng: (i18n.language === 'en') ? 'ru' : 'en'})
  }
  render () {
    this.state.lng && i18n.changeLanguage(this.state.lng)
    geo
      .then((position) => {
        console.debug('position: ', position)
      })
      .catch(() => {
        console.debug('location is not supported')
      })
    return (
      <MuiThemeProvider>
        <div className='App'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2>{i18n.t('welcomeToQuestomania')}</h2>
          </div>
          <p className='App-intro'>
            {i18n.t('introToQuestomania')}
          </p>
          <RaisedButton label={i18n.t('changeLanguageButton')} onClick={this.onChangeLanguageClick} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
