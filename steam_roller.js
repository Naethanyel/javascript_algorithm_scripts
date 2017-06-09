//only works for 4 levels of nesting. needs recursion

function steamrollArray(arr) {
  var steamRolled = [];

 arr.forEach(function (element) {
    if(!Array.isArray(element)) {
    steamRolled.push(element);
    } else {
      element.forEach(function (elem){
        if(!Array.isArray(elem)) {
        steamRolled.push(elem);
        } else {
          elem.forEach(function(e){
            if(!Array.isArray(e)) {
              steamRolled.push(e);
            } else {
              e.forEach(function(d){
                steamRolled.push(d);
              });
            }
          });
        }
      });
    }
  }); 
  
  return steamRolled;
}

steamrollArray([1, [2], [3, [[4]]]]);