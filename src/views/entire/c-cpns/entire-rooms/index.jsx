// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { EntireRoomsWrapper } from './style'
import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  const { roomList, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleItemClick(item) {
    dispatch(changeDetailInfoAction(item));
    navigate("/detail");
  }

  return (
    <EntireRoomsWrapper>
      {/* <h2 className='title'>{totalCount}多处住所</h2> */}
      <div className="list">
        {
          roomList?.map((item) => {
            return <RoomItem 
            itemData = {item} 
            key={item._id} 
            itemWidth = "20%"
            itemClick={e => handleItemClick(item)}
            />
          })
        }
      </div>
      {isLoading && <div className='cover'></div>}
    </EntireRoomsWrapper>
  )
})

export default EntireRooms