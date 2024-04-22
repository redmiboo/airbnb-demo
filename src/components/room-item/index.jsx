import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rating } from '@material-ui/lab'
import { Carousel } from 'antd';

import { RoomItemWrapper, useStyles } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { itemData, itemWidth, itemClick } = props;
  const [newIndex, setNewIndex] = useState(0);
  const classes = useStyles();
  const swiperRef = useRef();

  function controlClickHandle(isRight = true, event) {
    let nIndex = isRight ? newIndex + 1 : newIndex - 1;
    let pirturesLength = itemData.picture_urls.length;
    if (isRight) {
      swiperRef.current.next();
      if (nIndex === pirturesLength) {
        nIndex = 0;
      }
    } else {
      swiperRef.current.prev();

      if (nIndex < 0) {
        nIndex = pirturesLength - 1;
      }
    }

    setNewIndex(nIndex);
    event.stopPropagation();
  }

  function pictureClickHandle() {
    if (itemClick) {
      itemClick();
    }
  }


  return (
    <RoomItemWrapper
      $verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      $itemWidth={itemWidth}
    >
      <div className='inner'>
        {
          !itemData.picture_urls ? <div className='cover'>
            <img src={itemData.picture_url} alt="" />
          </div> :
            <div className="slider">
              <div className="control" onClick={pictureClickHandle}>
                <div
                  className="btn left"
                  onClick={e => controlClickHandle(false, e)}
                >
                  <IconArrowLeft height="30" width="30" />
                </div>

                <div
                  className="btn right"
                  onClick={e => controlClickHandle(true, e)}
                >
                  <IconArrowRight height="30" width="30" />
                </div>
              </div>

              <div className="indicator">
                <Indicator newIndex = {newIndex}>
                  {
                    itemData?.picture_urls?.map((item, index) => {
                      return (
                        <div className='item' key={item}>
                          <span className={classNames('dot', {active : index === newIndex})}></span>
                        </div>
                      )
                    })
                  }
                </Indicator>
              </div>

              <Carousel
                dots={false}
                ref={swiperRef}
              >
                {
                  itemData?.picture_urls?.map((item) => {
                    return (
                      <div className='cover' key={item}>
                        <img src={item} alt="" />
                      </div>
                    )
                  })
                }
              </Carousel>

            </div>
        }
      </div>

      <div className='desc'>
        {itemData?.verify_info?.messages?.join(" · ")}
      </div>
      <div className='name'>{itemData.name}</div>
      <div className="price">¥{itemData.price}/晚</div>

      <div className='bottom'>
        <Rating
          value={itemData.star_rating ?? 5}
          precision={0.1}
          readOnly
          className={classes.root}
        />
        <span className='count'>{itemData.reviews_count}</span>
        {
          itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
        }
      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
}

export default RoomItem