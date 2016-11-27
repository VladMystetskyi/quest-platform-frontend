import i18n from 'locale'

const lang = (state = {lang: i18n.language}, action) => {
  switch (action.type) {
    case 'CHANGE_LANG':
      return {
        ...state,
        lang: action.lang
      }
    default:
      return state
  }
}

export default lang
