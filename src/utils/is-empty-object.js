export function isEmptyObj(obj) {
  if(obj === null || obj === undefined || obj === 0) obj = {a:"xx"};
  console.log(obj)
  return !!Object?.keys(obj)?.length;
}