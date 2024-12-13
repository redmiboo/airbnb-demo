import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const SectionV2 = memo((props) => {
  const { infoData } = props;
  const [tabName, setTabName] = useState(Object?.keys(infoData?.dest_list)[0]);
  const nameList = infoData?.dest_address?.map(item => item.name);
  
  const tabClickHandle = useCallback((item) => {
    setTabName(item)
  }, [])
  return (
    <SectionV2Wrapper>
          <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
          <SectionTabs nameList = {nameList} tabClick = {tabClickHandle}/>
          <SectionRooms roomList={infoData?.dest_list?.[tabName]} itemWidth="33.33333%"/>
          <SectionFooter name={tabName}/>
    </SectionV2Wrapper>
  )
})

SectionV2.propTypes = {
  infoData: PropTypes.object
}

export default SectionV2