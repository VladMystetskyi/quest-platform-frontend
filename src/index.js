import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import langReducer from './features/changeLang/reducer'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const logger = createLogger()
const reducers = combineReducers({langReducer})
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(logger)
))

let currLang = store.getState().langReducer.lang
store.subscribe(() => {
  const newLang = store.getState().langReducer.lang
  if (newLang !== currLang && window.location) {
    window.location.search = `lng=${newLang}`
    currLang = newLang
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
