import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import "./less/project.less"
import App from './components/App'
import itemsKartApp from './reducers'
import initialItems from './data/data.json'

let store = createStore(itemsKartApp,initialItems)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)