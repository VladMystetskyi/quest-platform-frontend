import React from 'react'
import './AppHeader.less'
import ChangeLangContainer from '../../changeLang/containers/ChangeLangContainer'
import i18n from 'i18n'

const AppHeader = () => (
  <div className='app-header'>
    <span className='app-header__title'>{i18n.t('Questomania')}</span>
    <ChangeLangContainer className='app-header__change-lang' />
  </div>
)

export default AppHeader
