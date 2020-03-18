function isValidWalk(walk) {
  var walkstring = walk.join('');
  var northSteps =  (walkstring.match(/n/g) || []).length;
  var southSteps =  (walkstring.match(/s/g) || []).length;
  var westSteps  =  (walkstring.match(/w/g) || []).length;
  var eastSteps  =  (walkstring.match(/e/g) || []).length;
  if ( (walk.length != 10) || (northSteps != southSteps) || (westSteps != eastSteps) ){  
    return false;  
  }
  else{
  return true;
  }
  
}