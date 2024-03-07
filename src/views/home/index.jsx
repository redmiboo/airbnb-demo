import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { fetchHomeDataAction } from '@/store/modules/home'


const Home = memo(() => {
  const {goodPriceInfo} = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction("xxx"));
  }, [dispatch])
  return (
    <HomeWrapper>
      <HomeBanner />
{/* 第一层content定位，第二层good-price布局 */}
      <div className='content'>
        <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRooms roomList={goodPriceInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home