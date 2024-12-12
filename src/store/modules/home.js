import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getHomeDiscountData,
  getHomeGoodPriceData, 
  getHomeHighScoreData, 
  getHomeHotRecommendData, 
  getHomeLongforData, 
  getHomePlusData
} from "@/services/modules/home"

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, {dispatch}) => {
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfoAction(res));
  });
  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreInfoAction(res));
  });
  getHomeDiscountData().then((res) => {
    dispatch(changeDiscountInfoAction(res));
  });
  getHomeHotRecommendData().then((res) => {
    dispatch(changeHotRecommendAction(res));
  });
  getHomeLongforData().then((res) => {
    dispatch(changeLongForInfoAction(res));
  });
  getHomePlusData().then((res) => {
    dispatch(changePlusInfoAction(res));
  });
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo:{},
    discountInfo: {},
    recommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload
    },
    changePlusInfoAction(state, {payload}) {
      state.plusInfo = payload
    }
  }

})

export const {
  changeGoodPriceInfoAction,
   changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeHotRecommendAction,
    changeLongForInfoAction,
    changePlusInfoAction
  } 
  = homeSlice.actions

export default homeSlice.reducer