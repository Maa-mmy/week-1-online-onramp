function replaceDivisible(x, y) {            //Implement the function replaceDivisible(x, y) which replaces all numbers in an array,
                                                //x divisible by an integer, y with string “isDivisible”
    let arr = []
    for (let i = 0 ; i < x.length; i++) {
        if(x[i] % y === 0) {
            arr.push('isDivisible')
        } else if (x[i] % y !== 0) {
            arr.push(x[i])
        }
    }
    return arr
}

console.log(replaceDivisible([2,4,3,6,5], 3)) 
console.log(replaceDivisible([12,4,3,6,5], 2))

module.exports = replaceDivisible