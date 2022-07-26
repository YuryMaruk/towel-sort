
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix.length === 0 ) {
    return [];
  } else {
    return matrix.map( (item, i) => i % 2 !== 0 ? item.reverse() : item).flat(Infinity);
  }
};