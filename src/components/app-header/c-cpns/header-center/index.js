import React, { memo, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import searchTitles from "@/assets/data/search_titles.json"
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;
  const [currentTab, setCurrentTab] = useState(0);

  const barRef = useRef();
  const detailRef = useRef();

  /** 过滤数据 */
  const titles = searchTitles.map(item => item.title)

  /** 事件处理 */
  function tabClickHandle(index) {
    setCurrentTab(index)
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
        nodeRef={barRef}
      >
        <div className='search-bar'
        onClick={e => searchBarClick()}
        ref={barRef}
        >
          <div className='text'>搜索房源和体验</div>
          <span className='icon'>
            <IconSearchBar />
          </span>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
        nodeRef={detailRef}
      >
        <div
        className='search-detail'
        ref={detailRef}
        >
          <SearchTabs titles={titles} tabClick={tabClickHandle} />
          {/* 这部分是溢出的，只是没有用overflow隐藏而已 */}
          <div className='infos'>
            <SearchSections searchInfos={searchTitles[currentTab].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter