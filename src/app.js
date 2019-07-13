import React from 'react'
import { Router } from '@reach/router'

import Home from './home'

export default function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}
