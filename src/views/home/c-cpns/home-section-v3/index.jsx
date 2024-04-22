import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import SectionFooter from '@/components/section-footer'
import ScrollView from '@/base-ui/scroll-view'

const SectionV3 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV3Wrapper>
      <SectionHeader title = {infoData.title} subtitle = {infoData.subtitle}/>
      <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem itemData={item} itemWidth="20%" key={item.id}/>
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name = {infoData.type}/>
    </SectionV3Wrapper>
  )
})

SectionV3.propTypes = {
  infoData: PropTypes.object
}

export default SectionV3