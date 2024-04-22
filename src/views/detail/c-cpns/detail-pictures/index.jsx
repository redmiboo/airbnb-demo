import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import { DEtailPicturesWrapper } from './style'
import PictureBrowser from '@/components/picture-browser'

const DetailPictures = memo((props) => {
  const [showBrowser, setShowBrowser] = useState(false)
  const { pictureUrls } = props
  // console.log(pictureUrls)

  function showBrowserHandle() {
    setShowBrowser(true);
  }

  function closeBrowserHandle() {
    setShowBrowser(false);
  }

  return (
    <DEtailPicturesWrapper>
      <div className="img-wrapper">
        <div className="img-wrapper-left">
          <div className="item"  onClick={showBrowserHandle}>
            <img src={pictureUrls?.[0]} alt='' key={pictureUrls?.[0]}/>
            <div className="cover"></div>
          </div>
        </div>
        <div className="img-wrapper-right">
          {
            pictureUrls?.slice(1, 5)?.map((item) => {
              return (
                <div
                className="item"
                key={item}
                onClick={showBrowserHandle}
                >
                  <img src={item} alt=''/>
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="show-btn" onClick={showBrowserHandle}>查看照片</div>
      { showBrowser && <PictureBrowser pictureUrls={pictureUrls} closeClick = {closeBrowserHandle}/>}
    </DEtailPicturesWrapper>
  )
})

DetailPictures.propTypes = {
  pictureUrls:PropTypes.array
}

export default DetailPictures