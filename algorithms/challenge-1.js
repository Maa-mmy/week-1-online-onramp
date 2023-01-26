function noOfElements(x, y, z) {                  //Implement the function noOfElements(x, y, z) 
                                                  // which returns the number of elements in that array x,
  let count = 0                                   // that are greater than or equal to the variable y 
  for (let i = 0; i < x.length; i++) {            //and less than or equal to the variable z
    if (x[i] >= y && x[i] <= z) { 
         count++;
        }
    }
    return count;
}


console.log(noOfElements([2,3,0,1,7], 4, 8))  
console.log(noOfElements([3,3,3,5,18,6,20], 15, 30))  
console.log(noOfElements([4,6,2,6,7,7], 0, 7))

module.exports = noOfElements