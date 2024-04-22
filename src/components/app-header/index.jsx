import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useScrollPosition } from '@/hooks/useScrollPosition'

import { HeaderWrapper, SearchAreaPlaceholder } from './style'
import HerderRight from './c-cpns/header-right'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import classNames from 'classnames'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  const [isSearch, setIsSearch] = useState(false);

  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const { isFixed, topAlpha } = headerConfig

  /** 事件处理逻辑 */
  function searchBarClickHandle() {
    setIsSearch(true)
  }

  /** 其他hooks的逻辑 */
  // 首页首部透明度效果

  const { scrollY } = useScrollPosition()
  let isAlpha = scrollY === 0 && topAlpha
  // console.log(isAlpha)

  /*功能：滚动使得"搜索房源 搜索体验"这部分消失 */
  const prevY = useRef(0)//存储上一次“搜索”弹出时，scrollY的值
  useEffect(() => { prevY.current = 0 }, [])
  if (!isSearch) prevY.current = scrollY;//当“搜索”没有弹出时，prevY的值应该和当前的scrollY保持一致
  if (Math.abs(prevY.current - scrollY) > 30 && isSearch) //当弹出“搜索”时，向上向下滚动一定距离后都要隐藏“搜索”
  {
    prevY.current = scrollY;
    setIsSearch(false);
  }

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={searchBarClickHandle} />
            <HerderRight />
          </div>
          <SearchAreaPlaceholder $isSearch={isAlpha || isSearch} />
        </div>
        {isSearch && !isAlpha && <div className='cover' onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader