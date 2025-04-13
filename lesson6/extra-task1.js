//Task 1
function shortLongShort(str1 = '', str2 = '') {
    if(str1.length > str2.length) {
        console.log(`${str2}${str1}${str2}`)
    } else if (str1.length < str2.length) {
        console.log(`${str1}${str2}${str1}`)
    }
}

shortLongShort('AAAA', 'bbb')
shortLongShort('AA', 'bbb')
shortLongShort('1', '22')
shortLongShort('22', '1')
shortLongShort('  ', '1')


//Task 2
function checkPairNumber(n) {
    if(Number.isInteger(n)) {
        return n % 2 === 0
    } else {
        return false
    }
}

console.log(checkPairNumber(2))
console.log(checkPairNumber(3))
console.log(checkPairNumber(-2))
console.log(checkPairNumber(-5))
console.log(checkPairNumber(2.0))


//Task 3
function rentCost(d) {
    if(d >= 7) {
        return rentSum = 40 * d - 50
    } else if (d >= 3 && d < 7) {
        return rentSum = 40 * d - 20
    } else {
        return rentSum = 40 * d
    }
}

console.log(rentCost(2))
console.log(rentCost(3))
console.log(rentCost(5))
console.log(rentCost(7))
console.log(rentCost(8))