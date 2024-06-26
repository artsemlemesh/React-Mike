import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { fetchUsers } from './features/users/usersSlice'

import App from './App'
import { store } from './app/store'

import './index.css'

import { worker } from './api/server'

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
  // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' })

store.dispatch(fetchUsers())//fetches the list of users once, right when the app starts

  const root = createRoot(document.getElementById('root'))

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
}

start()
