function binaryAgent(str) {

    var binaryConverter = function (string) {

    string = string.split(" "); // change to array
    string = string.map(function(binaryCode){ //convert binary to character codes
      return parseInt(binaryCode, 2);
    });
    string = string.map(function(charCode){ //convert character codes to characters
      return String.fromCharCode(charCode);
    });
    return string.join(""); // convert to string 
  };
  
  return binaryConverter(str);
}


 /* original version
 
  var binaryArray = str.split(" ");
  var digitArray = [];
  var charArray = [];
  for (i = 0; i < binaryArray.length; i++){
    var digit = parseInt(binaryArray[i],2);
    var character = String.fromCharCode(digit);
    charArray.push(character);
  }
  return = charArray.join("");
  */
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");