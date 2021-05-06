var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(arr, ele) {
  [ele, ...arr]
}
function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr.unshift(ele)
}
