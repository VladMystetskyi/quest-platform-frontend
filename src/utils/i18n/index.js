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
          'introToQuestomania': 'Intro to Questomania',
          'changeLanguageButton': 'Change language',
          'eof': 'eof'
        }
      },
      ru: {
        translation: {
          'welcomeToQuestomania': 'Добро пожаловать в Questomania',
          'introToQuestomania': 'О Questomania',
          'changeLanguageButton': 'Изменить язык',
          'eof': 'eof'
        }
      }
    }
  })

export default i18next
