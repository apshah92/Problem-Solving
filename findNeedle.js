function findNeedle(haystack) {
  for(var i = 0; i < haystack.length ; i++) {
    if(haystack[i] === 'needle'){
      break;
    }
  }
  return 'found the needle at position ' + i ;
}