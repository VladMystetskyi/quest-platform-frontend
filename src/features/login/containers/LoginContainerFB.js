import { connect } from 'react-redux'
import { loginFacebook } from '../actions'
import LoginButton from '../components/LoginButtonFB'

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    fbLogin: state.loginReducer.fbLogin,
    name: state.loginReducer.name,
    picture: state.loginReducer.picture,
    id: state.loginReducer.id
  }
}

const mapDispatchToProps = ({
  onLogin: loginFacebook
})

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButton)

export default LoginContainer
