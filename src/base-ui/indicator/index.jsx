import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'
/**
 * 功能：可以将包裹在indicator组件的组件以类似指示器的方式展示
 * 参数：newIndex
 * 目前展示的组件编号
 */
const Indicator = memo((props) => {
  const {newIndex = 0} = props
  /** 
   * 4. 获取要播放的图片的DOM
  */
  const scrollRef = useRef();

  /** 
   * 3.设计让 要播放的图片到中间来的方法：每个元素的offsetleft + 每个元素的宽度 * 0.5 - 指示器容器的宽度 * 0.5
   */
  useEffect(() => {
    const itemEl = scrollRef.current.children[newIndex];
    // console.log(itemElOffset)
    const itemElOffset = itemEl.offsetLeft;
    const itemElWidth = itemEl.clientWidth;
    const scrollElWidth = scrollRef.current.clientWidth;
    const scrollElScroll = scrollRef.current.scrollWidth;
    // console.log(scrollElScroll)
    let distance = itemElOffset + itemElWidth * 0.5 - scrollElWidth * 0.5;
    if (distance < 0) {
      //不移动指示器容器
      distance = 0;
    }else if (distance > scrollElScroll - scrollElWidth) {
      //当scrollRef绑定的元素不能一直向左位移，至少要留宽度为scrollElWidth的内容放到用户可视的区域。也就是要distance + scrollElWidth < scrollElScroll
      distance = scrollElScroll - scrollElWidth;
    }
    scrollRef.current.style.transform = `translate(${-distance}px)`  
  }, [newIndex])

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={scrollRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  newIndex:PropTypes.number
}

export default Indicator