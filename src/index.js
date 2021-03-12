
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let sortedMatrix = [];
  matrix.forEach((item, index) => {
    (index % 2 == 0) ? 
    sortedMatrix.push(item) : 
    sortedMatrix.push(item.reverse());
  }
  );
  return sortedMatrix.flat();
}
