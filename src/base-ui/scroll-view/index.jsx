import React, { memo, useRef, useState, useEffect } from 'react';

import { ScrollViewWrapper } from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';


const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const scrollContentRef = useRef(null);
  const totalDistanceRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 可见的宽度
    // console.log (scrollWidth, clientWidth)
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    // console.log(scrollContentRef.current.children[0])
    const newEl = scrollContentRef.current.children[newIndex];
    const newScrollLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newScrollLeft}px)`;
    setPosIndex(newIndex)
    setShowRight(totalDistanceRef.current > newScrollLeft)
    setShowLeft(newScrollLeft > 0)
  }

  return (
    <ScrollViewWrapper>
      {showLeft && 
      <div className='control left' onClick={e => controlClickHandle(false)}>
        <IconArrowLeft/>
      </div>}
      {showRight &&
      <div className='control right' onClick={e => controlClickHandle(true)}>
        <IconArrowRight/>
      </div>}
      
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

export default ScrollView