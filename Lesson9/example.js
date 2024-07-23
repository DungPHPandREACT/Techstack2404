// Cho mảng sau: numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
const numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
// +Tìm phần tử nhỏ nhất / lớn nhất trong mảng.
let min = numbers[0];
let max = numbers[0];
for (let number of numbers) {
	if (number < min) {
		min = number;
	}
	if (number > max) {
		max = number;
	}
}
// console.log('min: ', min);
// console.log('max: ', max);

// +Tính tổng các phần tử trong mảng.
let sum = 0;
for (let number of numbers) {
	sum = sum + number;
}
// console.log('sum: ', sum);

// +Tính trung bình cộng.
const avg = sum / numbers.length;
// console.log('avg: ', avg);

// +Tìm phần tử đầu tiên chia hết cho 3 trong mảng.
for (let number of numbers) {
	if (number % 3 === 0) {
		console.log('number: ', number);
		break;
	}
}

// +Tìm các phần tử là số nguyên tố trong mảng.
for (let number of numbers) {
	let count = 0;
	for (let i = 1; i <= number; i++) {
		if (number % i === 0) {
			count++;
		}
	}
	if (count === 2) {
		console.log(number, ' là số nguyên số');
	}
}


