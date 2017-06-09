function steamrollArray(arr) {
  var steamRolled = [];

  var myFunc = function (array) {
    array.forEach(function(element) {
      if(!Array.isArray(element)) {
        steamRolled.push(element);
      } else {
        myFunc(element);
      }
    });
  };

  myFunc(arr);
  return steamRolled;
}

steamrollArray([1, [2], [3, [[4]]]]);