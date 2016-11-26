import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import ActionLogin from 'material-ui/svg-icons/social/person'
import FacebookLogin from 'react-fb-auth'
import i18n from 'i18n'

const Login = ({isLoggedIn, onLogin, name, className}) => {
  const loginButton = ({onClick}) => (
    <RaisedButton
      onClick={onClick}
      label={isLoggedIn ? name : i18n.t('login')}
      primary
      icon={<ActionLogin />}
    />
  )
  return <div className={className}>
    <FacebookLogin
      appId='666255023554708'
      autoLoad
      fields='name,email,picture'
      component={loginButton}
      callback={onLogin}
      cssClass='my-facebook-button-class'
      icon='fa-facebook'
    />
  </div>
}
Login.propTypes = {
  onClick: PropTypes.func
}

export default Login
