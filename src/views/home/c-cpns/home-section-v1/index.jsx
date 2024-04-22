import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const SectionV1 = memo((props) => {
  const {infoData} = props
  return (
    <SectionV1Wrapper>
      {/* 第一层content定位，第二层good-price布局 */}
      {/* <div className='content'>
        <div className='high-score'> */}
          <SectionHeader title={infoData.title} />
          <SectionRooms roomList={infoData.list} itemWidth="25%"/>
          <SectionFooter/>
        {/* </div>
      </div> */}
    </SectionV1Wrapper>
  )
})

SectionV1.propTypes = {
  infoData: PropTypes.object
}

export default SectionV1