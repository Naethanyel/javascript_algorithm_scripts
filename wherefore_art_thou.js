
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var srcKeys = Object.keys(source);

  collection.forEach(function(collectionObject) { 
   
    var goodObject = true; // used for process of elimination

    Object.keys(collectionObject).forEach(function(prop) {// for each property in object
      if(source.hasOwnProperty(prop)) { //check that object's key is in srcKEys
        if(collectionObject[prop] !== source[prop]) { // check that value of the key is the same
          goodObject = false;
        }
      } 
    });

    if(goodObject) { //check if object has all the srcKeys
      srcKeys.forEach(function(key) {
        if(!collectionObject.hasOwnProperty(key)) {
          goodObject = false;
        }
      }); 
    }

    if(goodObject) {
      arr.push(collectionObject);
    }

  });
  // Only change code above this line

  return arr;
  
}

whatIsInAName([{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });