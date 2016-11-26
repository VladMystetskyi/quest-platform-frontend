import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(LanguageDetector)
  .init({
    lngs: ['en', 'ru'],
    resources: {
      en: {
        translation: {
          'welcomeToQuestomania': 'Welcome to Questomania',
          'language': 'Language',
          'introToQuestomania': 'Intro to Questomania',
          'changeLanguageButton': 'Change language',
          'en': 'en',
          'ru': 'ru',
          'he': 'he',
          'eof': 'eof'
        }
      },
      ru: {
        translation: {
          'welcomeToQuestomania': 'Добро пожаловать в Questomania',
          'language': 'Язык',
          'introToQuestomania': 'О Questomania',
          'changeLanguageButton': 'Изменить язык',
          'en': 'en',
          'ru': 'ru',
          'he': 'he',
          'eof': 'eof'
        }
      },
      he: {
        translation: {
          'welcomeToQuestomania': 'Welcome to Questomania',
          'language': 'Language',
          'introToQuestomania': 'Intro to Questomania',
          'changeLanguageButton': 'Change language',
          'en': 'en',
          'ru': 'ru',
          'he': 'he',
          'eof': 'eof'
        }
      }
    }
  })

export default i18next
