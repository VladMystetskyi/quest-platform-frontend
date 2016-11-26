import React from 'react'
import './AppHeader.less'
import ChangeLangContainer from '../../changeLang/containers/ChangeLangContainer'
import LoginContainerFB from '../../login/containers/LoginContainerFB'
import i18n from 'i18n'

const AppHeader = () => (
  <div className='app-header'>
    <span className='app-header__title'>{i18n.t('Questomania')}</span>
    <div className='app-header__settings'>
      <ChangeLangContainer className='app-header__change-lang' />
      <LoginContainerFB className='app-header__login-button' />
    </div>
  </div>
)

export default AppHeader
