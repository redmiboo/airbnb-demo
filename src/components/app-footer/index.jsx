import React, { memo } from 'react'

import { FooterWrapper } from './style'
import footerList from '@/assets/data/footer.json'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="wrapper">
        <div className="service">
          {
            footerList.map((item) => {
              return (
                <div className="item" key = {item.name}>
                  <div className="list">
                    <div className='name'>{item.name}</div>
                    {
                      item.list.map ((iten) => {
                        return (
                          <div className="iten" key={iten}>{iten}</div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className='statement'>© 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter