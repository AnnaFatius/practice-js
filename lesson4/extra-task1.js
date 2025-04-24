function sumWithoutMinMax(arr) {
    if (arr.length < 3) return 0; 
    return arr.reduce((sum, num) => sum + num, 0) - Math.max(...arr) - Math.min(...arr);
}


console.log(sumWithoutMinMax([6, 2, 1, 8, 10])); 
console.log(sumWithoutMinMax([3, 2, 13, 8, 16, 2, 1, 28, 10])); 
console.log(sumWithoutMinMax([3, 2, 8, 16, 2, 1, 28, 5, 9, 11, 33, 31, 2])); 
console.log(sumWithoutMinMax([6, 10])); 
console.log(sumWithoutMinMax([10, 5, 9])); 
