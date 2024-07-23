let arr1 = [1, 2, 3, 4, 5, 6, 7];

// arr2 = [2,4,6];
// let arr3 = arr1.map(function(v){
//     return v * 3
// });
let arr3 = arr1.map((v) => v * 3);
console.log(arr3);

// array.map(callback);
// array.filter(callback);

// let arr2 = arr1.filter(function (value) {
// 	return value > 5;
// });
let arr2 = arr1.filter((value) => value > 5);

console.log(arr2);

// find, findIndex, reduce
