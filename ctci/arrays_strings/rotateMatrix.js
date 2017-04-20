const expect = require('chai').expect;

var bigMatrix = [
  [1, 2, 3, 4],
  [6, 7, 8, 9],
  [11, 12, 13, 14],
  [16, 17, 18, 19],
]

var rotatedBigMatrix = [
  [16, 11, 6, 1],
  [17, 12, 7, 2],
  [18, 13, 8, 3],
  [19, 14, 9, 4],
];

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var simpleMatrix = [
  ['a', 'b'],
  ['c', 'd']
];

// 0 0 , 0 1 , 0 2 , 0 3
// 1 0 , 1 1 , 1 2 , 1 3
// 2 0 , 2 1 , 2 2 , 2 3
// 3 0 , 3 1 , 3 2 , 3 3
//
// >>>
//
// 3 0 , 2 0 , 1 0 , 0 0
// 3 1 , 2 1 , 1 1 , 0 1
// 3 2 , 2 2 , 1 2 , 0 2
// 3 3 , 2 3 , 1 3 , 0 3

var rotatedMatrix = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
];

var rotateSimpleMatrix = [
  ['c', 'a'],
  ['d', 'b']
];

// how to you do this in place?
// swap with var like typical swap function
// pattern is unique -- run to last element of column or n

// naive solution
// var rotateMatrix = (matrix) => {
//   var m = [];
//   for (var i = 0, l = matrix.length; i < l; i++) {
//     m[i] = [];
//     var counter = 0;
//     for (var x = matrix[i].length - 1; x >= 0; x--) {
//       m[i][counter] = matrix[x][i];
//       counter++;
//     }
//   }
//   return m;
// }

var rotateMatrix = (matrix) => {
  var innerLayer = 0, lastIndex = matrix.length - 1;
  while(innerLayer < Math.floor(matrix.length / 2)) {
    var outerLayer = lastIndex - innerLayer;
    for(var increase = innerLayer; increase < outerLayer; increase++) {
      var decrease = lastIndex - increase
      var up = matrix[decrease][innerLayer];
      matrix[decrease][innerLayer] = matrix[outerLayer][decrease];
      matrix[outerLayer][decrease] = matrix[increase][outerLayer];
      matrix[increase][outerLayer] = matrix[innerLayer][increase];
      matrix[innerLayer][increase] = up;
    }
    innerLayer++;
  }
  return matrix;
}

it('rotateMatrix', () => {
  describe('should rotate 90 degrees clockwise', () => {
    expect(rotateMatrix(simpleMatrix)).to.eql(rotateSimpleMatrix);
    expect(rotateMatrix(matrix)).to.eql(rotatedMatrix);
    expect(rotateMatrix(bigMatrix)).to.eql(rotatedBigMatrix);
  })
})
