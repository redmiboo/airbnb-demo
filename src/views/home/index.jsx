import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import SectionV1 from './c-cpns/home-section-v1'
import SectionV2 from './c-cpns/home-section-v2'
import SectionV3 from './c-cpns/home-section-v3'
import { isEmptyObj } from '@/utils/is-empty-object'
import LongFor from './c-cpns/home-longfor'
import { changeHeaderConfigAction } from '@/store/modules/main'
import AppHeader from '@/components/app-header'


const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longForInfo, plusInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longForInfo: state.home.longForInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomeDataAction("xxx"));
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: true, topAlpha: true}))
  }, [dispatch])

  return (
    <HomeWrapper>
      <AppHeader/>
      <HomeBanner />
      <div className="content">
        {isEmptyObj(discountInfo) && <SectionV2 infoData={discountInfo} />}
        {isEmptyObj(recommendInfo) && <SectionV2 infoData={recommendInfo} />}
        {isEmptyObj(longForInfo) && <LongFor infoData={longForInfo} />}
        {isEmptyObj(goodPriceInfo) && <SectionV1 infoData={goodPriceInfo} />}
        {isEmptyObj(highScoreInfo) && <SectionV1 infoData={highScoreInfo} />}
        {isEmptyObj(plusInfo) && <SectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  )
})

export default Home