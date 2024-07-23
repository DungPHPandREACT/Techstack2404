// const obj = {};

// const trainingCenter = {
// 	name: 'T3H',
// 	address: 'Hồ Tùng Mậu',
// 	courses: ['ReactJS', 'NodeJS', '.Net', 'Java', 'Dev ops'],
// };
// Truy xuất
// console.log(trainingCenter);
// // Cách 1
// // console.log(trainingCenter.name);
// // console.log(trainingCenter.address);

// // Cách 2
// let variable = 'address';
// console.log(trainingCenter.variable);
// console.log(trainingCenter[variable]);

// // console.log(trainingCenter.1);
// console.log(trainingCenter.courses[1]); // 'NodeJS'

// Thay đổi và update
// console.log(trainingCenter);
// trainingCenter['1'] = 'Số một';
// console.log(trainingCenter);
// // Xóa key
// delete trainingCenter.address;
// console.log(trainingCenter);

// Duyệt object
// for (let key in trainingCenter) {
// 	console.log(key);
// 	console.log(trainingCenter[key]);
// 	console.log('--------------------------------');
// }

// const listKeyOfObject = Object.keys(trainingCenter);
// console.log(listKeyOfObject);

// const listValueOfObject = Object.values(trainingCenter);
// console.log(listValueOfObject);

// let variable = 'age';

// const listKey = ['name', 'age', 'gender'];
// const listValue = ['ABC', 18, 'nam'];

// const user = {};

// for (let i = 0; i < listKey.length; i++) {
// 	user[listKey[i]] = listValue[i];
// }

// console.log(user);

// let fruit = prompt('Which fruit to buy?', 'apple');

// let cart = {
// 	[fruit]: 5, // the name of the property is taken from the variable fruit
// };
// alert(cart.apple); // 5 if fruit="apple"

// const student1 = {
// 	name: 'Student 1',
// 	age: 18,
// }; // b1

// const student2 = student1; //b1
// // => student2 và student1 đều đang trỏ đến địa chỉ ô nhớ là b1

// console.log('student1: ', student1); // đang lấy giá trị được lưu ở địa chỉ ô nhớ b1 in lên màn hình
// console.log('student2: ', student2); // đang lấy giá trị được lưu ở địa chỉ ô nhớ b1 in lên màn hình

// student2.name = 'Student 2'; // đang thay đổi giá trị được lưu ở địa chỉ ô nhớ b1

// console.log('student1: ', student1); // đang lấy giá trị được lưu ở địa chỉ ô nhớ b1 in lên màn hình
// console.log('student2: ', student2); // đang lấy giá trị được lưu ở địa chỉ ô nhớ b1 in lên màn hình

// console.log(student1 === student2)

// const numbers = [1,2,3,4]; // c1
// numbers.push(5);

// numbers = [] //d1

// let number = 100;
// console.log(typeof number)

// 1. Khai báo 1 function nhận đầu vào là chuỗi name,
// thực hiện in ra màn hình “Hello world, ” + name.

// function logger(name) {
// 	console.log('Hello world, ' + name);
// }

// let nameStudent = 'Chiến';
// logger(nameStudent);

// 2. Khai báo 1 function nhận đầu vào là 2 số a, b.
// Đầu ra là kết quả của phép tính (a + b)^2 .

// function cal(a, b) {
// 	return (a + b) ** 2;
// }

// console.log(cal(2, 4));
// const number = cal(2, 4);
// console.log('number:', number);

// 3. Khai báo 1 function để nhập vào a từ bàn phím,
// tiếp tục nhập đến khi a là một số lớn hơn 0.
// Đầu ra là giá trị số vừa nhập.

function inputNumber() {
	let a;
	for (; true; ) {
		a = prompt('Nhập a');
		if (a > 0) {
			return a;
		}
	}
}

const number = inputNumber();
console.log('number: ', number);
