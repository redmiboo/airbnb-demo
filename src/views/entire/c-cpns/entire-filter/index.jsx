// import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'

import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([])

  function itemClickHandle(item) {
    let newSelectItem = [...selectItems]
    const itemIndex = newSelectItem.findIndex(filterItem => filterItem === item);
    if (itemIndex === -1) {
      newSelectItem.push(item)
    }
    else {
      newSelectItem.splice(itemIndex, 1)
    }
    setSelectItems(newSelectItem)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map((item, index) => {
            return (
              <div 
              key={item}
              className={classNames('item', {'active': selectItems.includes(item)})}
              onClick={e => itemClickHandle(item)}
              >{item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

// EntireFilter.propTypes = {}

export default EntireFilter