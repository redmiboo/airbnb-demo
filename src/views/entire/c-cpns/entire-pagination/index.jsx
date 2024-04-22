// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Pagination } from '@material-ui/lab';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { PaginationWrapper } from './style'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators ';


const EntirePagination = memo((props) => {
  const { currentPage, totalCount } = useSelector((state) => ({
    currentPage: state.entire.currentPage,
    totalCount: state.entire.totalCount
  }), shallowEqual)

  const dispatch = useDispatch();
  function paginationClickHandle(event, page) {
    window.scrollTo(0, 0)
    dispatch(fetchRoomListAction(page - 1))
  }

  const start = currentPage * 20 + 1
  const end = (currentPage + 1) * 20

  return (
    <PaginationWrapper>
      <div className="page-info">
        <Pagination
          count={totalCount / 20}
          onChange={paginationClickHandle}
        />

        <div className='info'>
          第 {start} - {end} 个房源, 共超过 {totalCount} 个
        </div>
      </div>
    </PaginationWrapper>
  )
})


export default EntirePagination