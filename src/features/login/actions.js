export const loginFacebook = (fbLogin) => ({
  type: 'LOGIN_FACEBOOK',
  name: fbLogin.name,
  email: fbLogin.email,
  picture: fbLogin.picture,
  id: fbLogin.id,
  accessToken: fbLogin.accessToken
})
