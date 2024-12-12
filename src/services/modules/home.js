import wqRequest from "../request";

export function getHomeGoodPriceData() {
  return wqRequest.get({url:"/home/goodprice"})
}

export function getHomeHighScoreData() {
  return wqRequest.get({url:"/home/highscore"})
}

export function getHomeDiscountData() {
  return wqRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return wqRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeLongforData() {
  return wqRequest.get({
    url: "/home/longfor"
  })
}

export function getHomePlusData() {
  return wqRequest.get({
    url: "/home/plus"
  })
}