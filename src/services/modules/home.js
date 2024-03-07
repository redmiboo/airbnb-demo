import wqRequest from "../request";

export function getHomeGoodPriceData() {
  return wqRequest.get({url:"/home/goodprice"})
}