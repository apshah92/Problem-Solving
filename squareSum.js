function squareSum(numbers){
  return numbers.map( x => x*x ).reduce( (total,num) => total + num , 0 );
}