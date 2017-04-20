var str = 'abc';
var perm = 'bac';
var nPerm = 'ba';
var nPerm2 = 'bbac';

// sequence of elements where order disregarded

checkPermutation = (str, perm) => {
  var charCount = {};
  var forEachChar = (str, callback) => {
    for (var i = 0; i < str.length; i++) {
      callback(str[i]);
    }
  }

  if(str.length !== perm.length) { 
    return false; 
  }

  forEachChar(str, char => { charCount[char] = (charCount[char] || 0) + 1 });
  forEachChar(perm, char => {
    if(typeof charCount[char] === undefined || charCount[char] <= 0) {
      return false;
    } else {
      charCount[char]--;
    }
  })

  return true;
}

console.log('permutation should be true', checkPermutation(str, perm));
console.log('non-permutation should be false', checkPermutation(str, nPerm));
console.log('non-permutation should be false', checkPermutation(str, nPerm2));
