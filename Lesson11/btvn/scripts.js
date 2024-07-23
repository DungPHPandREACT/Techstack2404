// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// const n = prompt('Nhập n: ');
// for (let user of users) {
// 	if (user.id === Number(n)) {
// 		console.log(user);
// 	}
// }

// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// const keyword = prompt('Nhập keyword: ');
// for(let user of users){
//     const fullname = user.first_name + ' ' + user.last_name;
//     if(fullname.toLowerCase().includes(keyword.toLowerCase()) === true){
//         console.log(user.email);
//     }
// }

// -Đếm số lượng user có age > 50.
// let count = 0;
// for (let user of users) {
// 	if (user.age > 50) {
// 		count += 1;
// 	}
// }
// console.log(count);

// -Đếm số lượng user đã kết hôn và chưa kết hôn.
// let countMarried = 0;
// for (let user of users) {
// 	if (user.is_married === true) {
// 		countMarried = countMarried + 1;
// 	}
// }

// -Đếm số lượng user theo từng ngành nghề tương ứng.
//     Output:
//     {
//         "Dentist": 5,
//         "Developer": 13,
//         "Doctor": 6,
//         "Farmer": 8,
//         "Project Manager": 5,
//         "Teacher": 9,
//         "Worker" : 4
//     }

const result = {};
for (let user of users) {
	// if (result.hasOwnProperty(user.job) == true) {
	// 	result[user.job] = result[user.job] + 1;
	// } else {
	// 	result[user.job] = 1;
	// }
	result[user.job] = result[user.job] ? result[user.job] + 1 : 1;
}

console.log(result);
