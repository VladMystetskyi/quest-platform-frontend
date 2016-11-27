import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import ActionLogin from 'material-ui/svg-icons/social/person'
import FacebookLogin from 'react-fb-auth'
import i18n from 'locale'
import Avatar from 'material-ui/Avatar'
import CircularProgress from 'material-ui/CircularProgress'

const Login = ({isLoggedIn, onLogin, name, picture, id, className}) => {
  const loginButton = ({onClick}) => (
    <RaisedButton
      onClick={onClick}
      label={isLoggedIn ? name : i18n.t('login')}
      primary
      icon={<ActionLogin />}
    />
  )
  const waitForResponse = () => (
    <CircularProgress size={20} />
  )
  if (isLoggedIn) {
    return <div className={`${className} loggedIn`}>
      <Avatar src={picture.data.url} />
      <span className='login__username'>{name}</span>
    </div>
  } else {
    return <div className={className}>
      <FacebookLogin
        appId='666255023554708'
        autoLoad
        fields='name,email,picture'
        component={id ? waitForResponse : loginButton}
        callback={onLogin}
        cssClass='my-facebook-button-class'
        icon='fa-facebook'
      />
    </div>
  }
}

Login.propTypes = {
  onClick: PropTypes.func
}

export default Login
