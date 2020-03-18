function persistence(num) {
   var temp = String(num) ;
   var multiplied = 0 ;
   var result ;
   while ( temp.length !=1 ) {
     result = '1';
     for(i=0; i <temp.length ; i++){
       result *= temp[i];
      }
      temp = String(result);
      multiplied +=1;   
   }
   return multiplied;
   
}