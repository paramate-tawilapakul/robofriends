import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import { searchRobots, requestRobots } from './reducers'
import 'tachyons'
import './index.css'

const middleware = [thunk]
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
