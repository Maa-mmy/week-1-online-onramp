function isDivisbleByN(arr, n) {             //Arr consist of the numbers to be divivded by n - which is the divisor 
    let divisibleArr = []                   //extracts all the values in the input array, arr that are divisible by n into another array

    for ( i = 0; i < arr.length; i++) {
        if (arr[i] % n === 0) {
            divisibleArr.push(arr[i]);   
        }
    }
return divisibleArr                   //returning the new array
}


console.log(isDivisbleByN([1,3,5,6,3,6,7,4], 2))
console.log(isDivisbleByN([21,3,5,6,3,6,7,4], 7))

module.exports = isDivisbleByN
