export function isEmptyObj(obj) {
  if(obj === null || obj === undefined || obj === 0) obj = {a:"xx"};
  return !!Object?.keys(obj)?.length;
}