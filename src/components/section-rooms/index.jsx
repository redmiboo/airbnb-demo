import PropTypes from 'prop-types'
import React, { memo } from 'react'


import { RoomsWrapper } from './style'
import RoomItem from '../room-item'

const SectionRooms = memo((props) => {
  //当roomList为undifine时，设置为空数组
  const {roomList = [], itemWidth} = props
  return (
    <RoomsWrapper>
        {
        roomList?.slice(0, 8)?.map(item => {
          /**  roomItem在多个页面都用到，因此封装成一个组件，循环生成多个组件，要加上唯一的key*/
          return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}/>
        })
      }
    </RoomsWrapper>
  )
})

SectionRooms.prototype = {
  roomList:PropTypes.array,
  // itemWidth: PropTypes.string
}

export default SectionRooms