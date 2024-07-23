// Khởi tạo mảng
// Cách 1
// const arr1 = [];
// console.log(arr1);
// const arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//  'i', 'j', 'k'];
// console.log(arr2);
// Cách 2
// const arr3 = new Array();
// console.log(arr3);
// const arr4 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
// console.log(arr4);

// Các thao tác trên mảng
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[10]);

// console.log(numbers);
// numbers[3] = 'bốn';
// numbers[4] = 'năm';
// console.log(numbers);
// console.log(numbers.length)

// console.log(numbers.length);
// for (let i = 0; i < numbers.length; i++) {
// 	console.log('i: ', i);
// 	console.log(numbers[i]);
// 	console.log('--------------------------');
// }

// for (let element of numbers) {
// 	console.log('element: ', element);
// }

// VD1: Khai báo 1 mảng gồm 4 số bất kỳ khác nhau.
// const numbersVD1 = [3, 9, 20, 67];
// -In ra phần tử có chỉ số 0 và 3 trong mảng.
// console.log(numbersVD1[0]);
// console.log(numbersVD1[3]);
// -Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2.
// const sum = numbersVD1[1] + numbersVD1[2];
// console.log(sum);
// -Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.
// Mảng ban đầu: numbersVD1 = [3, 9, 20, 67];
// Mảng mong muốn numbersVD1 = [3, 67, 20, 9];

// let temp = numbersVD1[1];
// numbersVD1[1] = numbersVD1[3];
// numbersVD1[3] = temp;
// console.log(numbersVD1);

// VD2: Khai báo 1 mảng gồm các số bất kỳ.
// const numbersVD2 = [10, -10, -3, 100, 53, 49, 67, 68, 70, 99, 91];
// -Hãy in ra các số chẵn trong mảng đó.
// for (let number of numbersVD2) {
// 	if (number % 2 === 0) {
// 		console.log(number);
// 	}
// }

// -Hãy tính tổng các phần tử trong mảng.
// let sum = 0;
// for (let number of numbersVD2) {
// 	sum = sum + number;
// }
// console.log(sum);

// -Hãy tìm phần tử nhỏ nhất trong mảng.
// let min = numbersVD2[0];
// for(let number of numbersVD2) {
//     if(number < min){
//         min = number;
//     }
// }
// console.log(min);

// Phương thức push
// const arr1 = ['a', 'b', 'c', 'd'];
// console.log(arr1);
// arr1.push(1, 2, 3, 4);
// console.log(arr1);
// arr1.unshift(-2, -1, 0);
// console.log(arr1);
// arr1.pop();
// arr1.pop();
// console.log(arr1);
// arr1.shift();
// arr1.shift();
// console.log(arr1);

// const arr2 = ['a', 'b', 'c', 'd'];
// sử dụng splice để xóa phần tử
// console.log(arr2);
// arr2.splice(1, 1);
// console.log(arr2);

// sử dụng splice để thêm phần tử
// ['a', 'b', 1, 2, 3, 'c', 'd'];
// console.log(arr2);
// arr2.splice(2, 0, 1, 2, 3);
// console.log(arr2);

// sử dụng splice để thay thế
// console.log(arr2);
// arr2.splice(1, 1, 'B');
// console.log(arr2);

// Mảng đa chiều
// const arrMultiple = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// console.log(arrMultiple[1][1]);

// for (let arr of arrMultiple) {
// 	for (let number of arr) {
// 		console.log(number);
// 	}
// }
