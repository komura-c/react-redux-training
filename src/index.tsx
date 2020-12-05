import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css'
import reducer from 'reducers'
import EventsIndex from './components/events/EventsIndex'
import EventsNew from './components/events/EventsNew'
import App from './components/App'
import reportWebVitals from './reportWebVitals'

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Switch>
          <Route exact path="/events/new" component={EventsNew} />
          <Route exact path="/" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
