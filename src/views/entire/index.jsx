import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators '
import { changeHeaderConfigAction } from '@/store/modules/main'
import AppHeader from '@/components/app-header'


const Entire = memo(() => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRoomListAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, isHome: false }))
  }, [dispatch])
  return (
    <EntireWrapper>
      <AppHeader/>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

export default Entire