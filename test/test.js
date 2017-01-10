if (typeof window === 'undefined') {
  var chai = require('chai');
}

var assert = chai.assert

describe('Array', ()=> {
  describe('Index Of', ()=> {
    it('Should return -1 when the value is not present', ()=> {
      assert.equal(-1, [1,2,3].indexOf(4), 'If not found returns -1');
    });
  });
  describe('Push', ()=> {
    it('Should push new elements to the array', ()=> {
      var array = [1,2]
      array.push(3);
      assert.deepEqual([1,2,3], array, 'Pushes elements okay');
    });
  });
});

describe('Math', ()=> {
  describe('Sum', ()=> {
    it('Basic math', ()=> {
      assert.equal(4, 2+2, 'Sums work ok');
    });
    it('Negative numbers', ()=> {
      assert.equal(3, 4+(-1), 'Sums negative numbers');
    });
  });
});
