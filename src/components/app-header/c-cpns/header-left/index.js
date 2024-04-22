import React, { memo } from 'react'

import { LeftWrapper } from './style'
import LeftIcon from '@/assets/svg/left_icon'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  function toHome() {
    navigate("/home");
  }
  return (
    <LeftWrapper>
      <div className='logo' onClick={toHome}>
      <LeftIcon/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft