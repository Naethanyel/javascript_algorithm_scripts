function rot13(message){
  //dec codes from a - z are 97 - 122
  //from A - Z are 65 to 90
  var charCodeArray = [];
  var decypheredArray = [];
  for(var i = 0; i < message.length; i++) {
    charCodeArray.push(message[i].charCodeAt(0));
  }
    
  for(i = 0; i < charCodeArray.length; i++) {
    var charDecyphered = false;
    if((charCodeArray[i] >= 65 && charCodeArray[i] <= 77) ||
       (charCodeArray[i] >= 97 && charCodeArray[i] <= 109)) {
      charCodeArray[i] = charCodeArray[i] + 13; 
        charDecyphered = true;
    }
    if(charDecyphered == false) {
        if((charCodeArray[i] >= 78 && charCodeArray[i] <= 90) || 
           (charCodeArray[i] >= 110 && charCodeArray[i] <= 122)) {
          charCodeArray[i] = charCodeArray[i] - 13; 
        }
    }
  } 
    
  for(i = 0; i < charCodeArray.length; i++) {
    decypheredArray.push(String.fromCharCode(charCodeArray[i]));
  }
  console.log(decypheredArray.join(""));
}

rot13("abcdefghijklmnopqrstuvwxyz");
rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ")