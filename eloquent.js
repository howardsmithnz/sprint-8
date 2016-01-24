// Eloquent Javascript Ch.3 Ex.1

var min = function(a, b){
  if(a < b) {
    return a;
  }
  else {
    return b;
  }
}

console.log(min(0, 10));

console.log(min(0, -10));

// Eloquent Javascript Ch.3 Ex.2

function isEven(num) {
  if(num === 0){
    return true;
  }
  else if(num === 1) {
    return false;
  } 
  else if(num > 0) {
    return isEven(num - 2);
  }
  else {
    return isEven(num + 2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));

// Eloquent Javascript Ch.3 Ex.3

var countBs = function(string) {
  number = 0;
  for(var i = 0; i < string.length;i++) {
   if(string[i] == 'B') { 
     number++;
   } 
  }
  return number;
}

function countChar(string, character) {
  var counter = 0;
  for(var i = 0; i < string.length;i++) {
    if(string[i] == character) {
      counter++;
    }
  }
  return counter;
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));
