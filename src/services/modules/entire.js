import wqRequest from "../request"

export function getEntireFilterData(offset = 0, size = 20) {
  return wqRequest.get({
    url: "entire/list",
    params:{
      offset,
      size
    }
  })
}