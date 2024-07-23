// Bài 9: Nhập vào chuỗi s (chỉ gồm chữ số) và số l.
// Hãy thêm vào đầu chuỗi s ký tự ‘0’
// cho đến khi độ dài chuỗi s >= l.

// let s = prompt('Nhập s');
// let l = prompt('Nhập l');

// for(let i = s.length; i < l; i++){
//     s = '0' + s;
// }

// console.log(s);
// console.log(s.length);

// Bài 10: Nhập vào 2 số m, n (m > 0, n > 0).
// Tìm ước chung lớn nhất, bội chung nhỏ nhất của m, n.

// let m, n;

// do {
// 	m = prompt('Nhập m: ');
// 	n = prompt('Nhập n: ');
// } while (m <= 0 || n <= 0);

// // Tìm ước chung lớn nhất
// let UCLN = 1;
// for (let i = 0; i <= m && i <= n; i++) {
// 	if (m % i === 0 && n % i === 0) {
// 		UCLN = i;
// 	}
// }

// console.log('Ước chung lớn nhất: ', UCLN);
// // Tìm bội chung nhỏ nhất
// let BCNN = (m * n) / UCLN;
// console.log('Bội chung nhỏ nhất: ', result);

// Bài 11: Trò chơi đoán số:
// Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
// Người dùng nhập vào 1 số answer.
// Nếu answer bằng correct → in ra “Đoán đúng”.
// Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.
// let correct = Math.random() * 100;
// correct = Math.floor(correct);
// console.log('correct: ', correct);
// for (let i = 1; i <= 5; i++) {
// 	let answer = prompt('Mời bạn nhập đáp án');

// 	if (answer == correct) {
// 		alert('Đoán đúng');
// 		break;
// 	}

// 	if (i === 5) {
// 		alert('Bạn đã thua cuộc');
// 	}
// }

// Bài 16: Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người.
// Hãy tính chỉ số BMI và đưa ra kết quả:
// Nếu BMI < 18.5 → in ra “Nhẹ cân”
// Nếu 18.5 <= BMI < 23 → in ra “Bình thường”
// Nếu 23 <= BMI < 25 → in ra “Thừa cân”
// Nếu BMI >= 25 → in ra “Béo phì”

// let w = prompt('Nhập cân nặng (kg)');
// let h = prompt('Nhập chiều cao (m)');

// const BMI = w / h ** 2;

// if (BMI < 18.5) {
// 	console.log('Nhẹ cân');
// } else if (BMI >= 18.5 && BMI < 23) {
// 	console.log('Bình thường');
// } else if (BMI >= 23 && BMI < 25) {
// 	console.log('Thừa cân');
// } else {
// 	console.log('Béo phì');
// }
