import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'

import { SectionTabWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const { nameList =[], tabClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle (index, item) {
    setCurrentIndex(index)
    tabClick(item)
  }
  return (
    <SectionTabWrapper>
      <ScrollView>
        {
          nameList?.map((item, index) => {
            return (
              <div 
              className= {classNames("item", {'active': index === currentIndex})}
              key={item}
              onClick={e => itemClickHandle(index, item)}
              >{item}</div>
            )
          })
        }
      </ScrollView>
    </SectionTabWrapper>
  )
})

SectionTabs.propTypes = {
  nameList: PropTypes.array
}

export default SectionTabs