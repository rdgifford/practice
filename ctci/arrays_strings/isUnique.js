var unique = 'abcdefgh';
var notUnique = 'absdfa';

// O(n) solution using space equal to no. of unique characters
var isUnique = (str) => {
  var obj = {}
  for (var char = 0; char < str.length; char++) {
    if(obj[str[char]]) {
      return false;
    } else {
      obj[str[char]] = true;
    }
  }
  return true;
}


console.log('unique should be true', isUnique(unique));
console.log('notUnique should be false', isUnique(notUnique));
