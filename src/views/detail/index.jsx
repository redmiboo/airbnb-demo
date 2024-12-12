import React, { memo, useEffect } from 'react'

import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeHeaderConfigAction } from '@/store/modules/main'
import AppHeader from '@/components/app-header'

const Detail = memo(() => {
  const { detailInfo } = useSelector(state =>({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, isHome: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <AppHeader/>
      <DetailPictures pictureUrls={detailInfo.picture_urls}/>
    </DetailWrapper>
  )
})

export default Detail