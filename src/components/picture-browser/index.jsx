import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

import { PictureBrowserWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isNext, setIsNext] = useState(true)
  const [showList, setShowList] = useState(true)
  const imgref = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden"
  }, [])

  function closeClickHandle() {
    document.body.style.overflow = "auto"
    closeClick()
  }

  function controlClickHandle(isNext = true) {
     let newIndex = isNext ? currentIndex + 1 : currentIndex  - 1;
     if (newIndex >= pictureUrls.length) {
      newIndex = 0;
     }
     if (newIndex < 0) {
      newIndex = pictureUrls.length - 1;
     }

     setCurrentIndex(newIndex);
     setIsNext(isNext);
  }

  function toggleShowListHandle() {
    setShowList(!showList)
  }

  function showClickedImgHandle(index) {
    setIsNext(index > currentIndex);
    setCurrentIndex(index);
  }

  return (
    <PictureBrowserWrapper $isNext = {isNext}>
      <div className="top">
        <div className="close-btn" onClick={closeClickHandle}>
          <IconClose />
        </div>
      </div>

      <div className="list">
        <div className="control">
          <div className="btn left" onClick={e =>controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>

          <div className="btn right" onClick={e =>controlClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>

        <div className="pictures">
         <SwitchTransition
           mode='in-out'
         >
          <CSSTransition
            // appear
            nodeRef={imgref}
            key={currentIndex}
            timeout={150}
            classNames= "fade"
          >
            {
              <img 
              src={pictureUrls?.[currentIndex]} 
              alt="" 
              key={pictureUrls?.[currentIndex]}
              ref={imgref}
              />
            }
          </CSSTransition>
          
          </SwitchTransition> 

        </div>

      </div>

      <div className="indicator">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{pictureUrls.length}:</span>
              <span>room Apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle"  onClick={toggleShowListHandle}>
              <span>{showList ? "隐藏":"显示"}照片列表</span>
              {showList ? <IconTriangleBottom/> : <IconTriangleTop/>}
            </div>
          </div>

          <div className="list" style={{height: showList? "67px": "0"}}>
            <Indicator newIndex = {currentIndex}>
              {
                pictureUrls?.map((item, index) => {
                  return (
                    <div
                    onClick={e => showClickedImgHandle(index)}
                    className= {classNames('item', {active : index === currentIndex} )}
                    key={item}
                    >
                      <img src={item} alt=""/>
                    </div>
                  )
                })
              }
            </Indicator>
          </div>

        </div>
      </div>
    </PictureBrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser