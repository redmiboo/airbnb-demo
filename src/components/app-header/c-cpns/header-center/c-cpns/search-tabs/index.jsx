import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SearchTabs = memo((props) => {
  const { titles, tabClick } = props
  const [currentIndex, setcurrentIndex] = useState(0);
  // console.log(titles)

  function itemClickHandle(index) {
    setcurrentIndex(index);
    tabClick(index);
  }
  return (
    <TabsWrapper>
      {
        titles.map((item, index) => {
          return (
            <div 
            className = {classNames("subtitle", {active: index === currentIndex})}
            key={item}
            onClick={e => itemClickHandle(index)}
            >
              <span className='text'>{item}</span>
              <div className = "bottom"></div>
            </div>
          )
        })
      }
    </TabsWrapper>
  )
})

SearchTabs.propTypes = {
  titles: PropTypes.array
}

export default SearchTabs