function dropElements(arr, func) {
  var wanted = [];
  var unwanted = [];
  var stop = false;
  
  arr.forEach(function(num){
    if(!func(num) && !stop) {
      unwanted.push(num);
    } else {
      stop = true;
    }
  });
  
  wanted = arr.slice(unwanted.length, arr.length);
  return wanted;
}

dropElements([1, 2, 3], function(n) {return n < 3; });