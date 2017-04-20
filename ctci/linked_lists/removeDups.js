const expect = require('chai').expect;

var list = {
  value: 5,
  next: {
    value: 5,
    next: {
      value: 7,
      next: {
        value: 5,
        next: {
          value: 7,
          next: null
        }
      }
    }
  }
}

var noDups = {
  value: 5,
  next: {
    value: 7,
    next: null
  }
}

var removeDups = (list) => {
  var node = list;
  while(node !== null) {
    var comNode = node;
    // var prev = node;
    while(comNode.next !== null) {
      if(node.value === comNode.next.value) {
        comNode.next = comNode.next.next;
      } else {
        comNode = comNode.next;
      }
    }
    node = node.next;
  }
  return list;
}

describe('removeDups', () => {
  it('should remove adjacent duplicates', () => {
  expect(removeDups(list)).to.eql(noDups);
  })
});
