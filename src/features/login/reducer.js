const login = (state = {isLoggedIn: false}, action) => {
  switch (action.type) {
    case 'LOGIN_FACEBOOK':
      return {
        ...state,
        isLoggedIn: true,
        name: action.name,
        email: action.email,
        picture: action.picture,
        id: action.id,
        accessToken: action.accessToken
      }
    default:
      return state
  }
}

export default login
