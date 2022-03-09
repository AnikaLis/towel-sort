
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  let sum;
  if (!matrix) {
    return [];
  }
  for(let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      for (let n = matrix[i].length - 1; n >= 0; n--) {
        sum = matrix[i][n];
        result.push(sum);
      }
    } else {
      for(let n = 0; n < matrix[i].length; n++) {
        sum = matrix[i][n];
        result.push(sum);
      }
    }
  } 
  return result;
}
