function highestSum(x, y) {                                        //Implement the function highestSum(x, y) where x and y are both arrays, 
                                             
return Math.max(x.reduce((a, b) => a + b), y.reduce((a, b) => a + b));
                                                              //return the sum of the array with the highest value .
  }                                                          // when it's elements are summed respectively

console.log(highestSum([2,5,1,0,5,7], [2,3,5,6,2,1]))   
console.log(highestSum([15,7], [12,17]))  
console.log(highestSum([30], [3,6,2,6]))

module.exports = highestSum