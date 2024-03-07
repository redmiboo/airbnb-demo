import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './routers'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'

const App = memo(() => {
  return (
    <div>
      <AppHeader/>
      {useRoutes(routes)}
      <AppFooter/>
    </div>
  )
})

export default App