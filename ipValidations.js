function isValidIP(str) {
  var octets = str.split('.');
  var isValid = true;
  if (octets.length == 4) {
    for(let i = 0; i < octets.length ; i++) {
      if ( octets[i]=='' || (octets[i].length > 1 && octets[i][0] == '0') || ( /[^0-9]/.test(octets[i])) || ( Number(octets[i])>255 || Number(octets[i])<0 ) ) {
        isValid = false;
        break;
       }      
    }    
  }else {
    isValid = false; 
  }
  return isValid;
  
}