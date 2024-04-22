import React, { memo, useState } from 'react'
import { IndicatorDemoWrapper } from './style'

import Indicator from '@/base-ui/indicator';

const IndicatorDemo = memo(() => {
  // const {pictureUrl} = useSelector((state) =>({
  //   pictureUrl: state.detail.detailInfo.picture_url
  // }), shallowEqual)

  // console.log(pictureUrl)
  const [newIndex, setNewIndex] = useState(0);
  const arrList = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg"];
  //1. 监听是要播放上一张还是下一张图片
  function toggleClickHandle(isNext) {
    let nIndex = isNext ? newIndex + 1 : newIndex - 1;

    if (nIndex >= arrList.length) {
      nIndex = 0;
    } else if (nIndex === -1) {
      nIndex = arrList.length - 1;
    }
    setNewIndex(nIndex)
    
  }

  return (
    <IndicatorDemoWrapper>
      <button onClick={e => toggleClickHandle(false)}>上</button>
      <button onClick={e => toggleClickHandle(true)}>下</button>
      <div className="list">
        {/* 2. 将要播放的图片的index传给Indicator */}
        <Indicator newIndex={newIndex}>
          {
            arrList.map((item) => {
              return (
                <button key={item}>{item}</button>
              )
            })
          }
        </Indicator>
      </div>
    </IndicatorDemoWrapper>
  )
})

export default IndicatorDemo