
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var srcKeys = Object.keys(source);
  
  var k = 0;

  while(k < collection.length) {
    var colObject = collection[k];
    var goodObject = true; // used for process of elimination
    for(var m = 0; m < Object.keys(colObject).length; m++) {// for each property in object
      var objKey = Object.keys(colObject)[m]; // make objKey = to key of current obj property
      var objValue = colObject[Object.keys(colObject)[m]]; // make objValue = to value of current obj property
      if(srcKeys.indexOf(objKey) > -1) { //check that object's key is in srcKEys
        if(objValue !== source[objKey]) { // check that value of the key is the same
          goodObject = false;
        }
      } 
    }

    if(goodObject) { //check if object has all the srcKeys
      for (var p = 0; p < srcKeys.length; p++) {
        if(!colObject.hasOwnProperty(srcKeys[p])) {
          goodObject = false;
        }
      }
    }

    if(goodObject) {
      arr.push(colObject);
    }
    k++;  

  }
  // Only change code above this line

  return arr;
 
}

whatIsInAName([{ "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });