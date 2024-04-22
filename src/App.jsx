import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './routers'
import AppFooter from './components/app-footer'
// import AppHeader from './components/app-header'
import useScrollToTop from './hooks/ScrollTop'

const App = memo(() => {
  useScrollToTop();
  return (
    <div>
      <Suspense fallback={<h2>loading...</h2>}>
        {useRoutes(routes)}
      </Suspense>
      <AppFooter />
    </div>
  )
})

export default App