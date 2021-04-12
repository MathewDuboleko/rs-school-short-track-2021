/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indx = [];
  const sortArr = arr
    .filter((val, index) => {
      if (val === -1) {
        indx.push(index);
        return false;
      }
      return true;
    })
    .sort((a, b) => a - b);
  indx.forEach((val) => sortArr.splice(val, 0, -1));
  return sortArr;
}

module.exports = sortByHeight;
