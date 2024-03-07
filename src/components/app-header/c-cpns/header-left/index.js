import React, { memo } from 'react'

import { LeftWrapper } from './style'
import LeftIcon from '@/assets/svg/left_icon'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className='logo'>
      <LeftIcon/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft