var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(arr, ele) {
  [ele, ...arr]
}
function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele)
}
function addElementToEndOfArray(arr, ele) {
  [...arr, ele]
}
function destructivelyAddElementToEndOfArray(arr, ele) {
  arr.push(ele)
}
function accessElementInArray(arr, idx) {
  return(arr[idx])
}
