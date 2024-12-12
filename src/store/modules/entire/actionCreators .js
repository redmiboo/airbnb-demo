import * as actionTypes from './contants';
import { getEntireFilterData } from '@/services/modules/entire'

export const changCurrentPageAction =(currentPage) =>({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changRoomListAction =(roomList) =>({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changTotalCountAction =(totalCount) =>({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changIsLoadingAction =(isLoading) =>({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction =(newPage = 0) => {
  return async (dispatch, getState) => {
    // getEntireFilterData(0).then(res => {
    //   dispatch(changRoomListAction(res.list));
    //   dispatch(changTotalCountAction(res.totalCount));
    // })


    /**
     * 请求的数据不应该永远从offset = 0开始请求。
     * 应该由currentPage决定要从服务器的哪个地方开始拿数据：
     * 一次拿20条数据，偏移量为 currentPage * 20 
     * */ 
    dispatch(changIsLoadingAction(true));
    const res = await getEntireFilterData(newPage * 20);
    dispatch(changIsLoadingAction(false));

    dispatch( changCurrentPageAction(newPage));
    dispatch(changRoomListAction(res.list));
    dispatch(changTotalCountAction(res.totalCount));
  }
}