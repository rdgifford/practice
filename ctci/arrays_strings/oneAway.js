var str = 'hello';
var del = 'helo';
var ins = 'hellos';
var rep = 'helxo';
var insertableChars = ['x'];

var oneAway = (str1, str2) => {
  // if difference between strs is greater than 1 return false
  
  if(str1.length === str2.length) {
    var replacement;
    for(var i = 0; i < str1.length; i++) {
      // if char don't match
      if(str1[i] !== str2[i]) {
        insertableChars.forEach(char => {
          var strWChar = str1.substr(0, i) + char + str1.substr(i + 1, str1.length);
          replacement = strWChar === str2 ? strWChar : null;
        })
        if(replacement === undefined) {
          return false;
        } else {
          return true;
        }
      }
    }
  } else {
    var longerStr = str1.length > str2.length ? str1 : str2;
    var shorterStr = str1.length > str2.length ? str2 : str1;
    if(longerStr.length - 1 !== shorterStr.length) {
      return false;
    }
    // perform change check after matched segment
    for(var i = 0; i < longerStr.length; i++) {
      // if char don't match
      if(str1[i] !== str2[i]) {
        // change check
        var change = longerStr.substr(0, i) + longerStr.substr(i + 1, longerStr.length);
        console.log('change ', change, longerStr);
        if(change === shorterStr) {
          return true;
        }
      }
    }      
  }
}

console.log('one away change check should be true', oneAway(str, del));
console.log('one away insertion check should be true', oneAway(str, ins));
console.log('one away replacement check should be true', oneAway(str, rep));
