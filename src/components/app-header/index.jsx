import React, { memo } from 'react'

import { HeaderWrapper } from './style'
import HerderRight from './c-cpns/header-right'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft/>
      <HeaderCenter/>
      <HerderRight/>
    </HeaderWrapper>
  )
})

export default AppHeader