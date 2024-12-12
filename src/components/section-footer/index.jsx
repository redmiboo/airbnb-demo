// import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom';

const SectionFooter = memo((props) => {
  const { name } = props;
  let message = "";
  if (name)
  {
    message = name
  }

  const navigate = useNavigate();
  function moreClickHandle () {
    navigate('/entire');
  }
  return (
    <FooterWrapper color={name ? "#00848A": "#000"}>
      <div 
      className='textContent'
      onClick={moreClickHandle}
      >显示更多{message}房源</div>
      <IconMoreArrow/>
    </FooterWrapper>
  )
})


export default SectionFooter