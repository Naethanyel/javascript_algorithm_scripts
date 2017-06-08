
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var srcKeys = Object.keys(source);

  collection.forEach(function(collectionObject) { 
   
    var goodObject = true; //presume object matches... used for process of elimination

    Object.keys(collectionObject).forEach(function(prop) {// for each property in object
      if(source.hasOwnProperty(prop)) { 
        if(collectionObject[prop] !== source[prop]) { // check if key value is the same
          goodObject = false;
        }
      } 
    });//

    srcKeys.forEach(function(key) {  //check if object has all the srcKeys
      if(!collectionObject.hasOwnProperty(key)) {
        goodObject = false;
      }
    }); 

    if(goodObject) {
      arr.push(collectionObject);
    }

  });
  // Only change code above this line

  return arr;
  
}

whatIsInAName([{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" });