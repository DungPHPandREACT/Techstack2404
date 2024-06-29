// const score = 3;

// if (score >= 8.0) {
//   console.log("Học sinh giỏi");
// } else if (score < 8.0 && score >= 6.5) {
//   console.log("Học sinh khá");
// } else if (score < 6.5 && score >= 4) {
//   console.log("Học sinh trung bình");
// } else {
//   console.log("Học sinh yếu");
// }

// let day = 2;
// day = 2 => Thứ hai
// day = 3 => Thứ ba
// day = 4 => Thứ tư
// day = 5 => Thứ năm
// day = 6 => Thứ sáu
// day = 7 => Thứ 7
// day = 8 => Chủ nhật

// switch(variable){
//     case value1:
//         code value1
//     case value2:
//         code value2
//     case value3:
//         code value3
//     case value4:
//         code value4
//     case value5:
//         code value5
//     case value6:
//         code value6
//     ...
//     default:
//         code default

// }

// switch(day){
//     case 2:
//         console.log("Thứ hai");
//         break;
//     case 3:
//         console.log("Thứ ba");
//         break;
//     case 4:
//         console.log("Thứ tư");
//         break;
//     case 5:
//         console.log("Thứ năm");
//         break;
//     case 6:
//         console.log("Thứ sáu");
//         break;
//     case 7:
//         console.log("Thứ 7");
//         break;
//     case 8:
//         console.log("Chủ nhật");
//         break;
//     default:
//         console.log("Ngày không hợp lệ");
//         break;
// }

// let score = prompt("Mời bạn nhập điểm cho học sinh");

// console.log("Giá trị score: ", score)

// let score = prompt("Nhập điểm: ");
// let hocluc =  score >= 8.0 ? "Học sinh giỏi" : "Chưa đạt học sinh giỏi"
// if(score >= 8.0){
//     hocluc = "Học sinh giỏi"
// } else{
//     hocluc = "Chưa đạt học sinh giỏi"
// }

// console.log(hocluc)

// In ra màn hình các số từ -10 đến 10
// for(let j = -10; j<=10; j=j+1){
//     console.log(j)
// }

// Hãy in ra màn hình console các số chia hết cho 9 trong đoạn [-100; 100]
// for(let i = -100; i<=100;i++){
//     if(i % 9 === 0){
//         console.log(i)
//     }
// }
// Hãy tính tổng các số chẵn từ -10 đến 50.
// let sum = 0;

// for (let i = -10; i <= 50; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
// }

// console.log("sum: ", sum);

// let i = 6;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// }while(i <= 5)

// for(let i = 1; i<=5 ;i++){
//     if(i == 3){
//         continue;
//     }
//     console.log(i);
// }

// 1. In ra dãy số từ 1 đến 500.
// let i = 1;
// while(i<=500){
//     console.log(i);
//     i++;
// }

// 2. In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// let i =1;
// do{
//     if(i%2 ===0 && i %3===0){
//         console.log(i);
//     }
//     i++;
// } while(i<=300)

// 4. Nhập vào số n. Tính giai thừa của số n.
// const n = prompt("Nhập n: ");
// let factorial = 1;
// for(let i = 1; i<=n;i++){
//     factorial = factorial * i;
// }
// console.log(factorial);

// 5. Nhập vào 3 số a, b, x (a < b && x != 0).
// Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
// let a, b, x;
// do {
//   a = prompt("Nhập a");
//   b = prompt("Nhập b");
// } while (a >= b);
// do {
//   x = prompt("Nhập x");
// } while (x === 0);
// for (let i = b; i >a; i--) {
//   if (i % x === 0) {
//     console.log(i);
//     break;
//   }
// }

// 8. Nhập vào số n. Viết chương trình kiểm tra xem n
// có phải số nguyên tố không.
// let n = prompt("Nhập n: ");

// if(n <= 0){
//     console.log(n, " không phải số nguyên số")
// }

// let count  = 0;
// for(let i = 1; i<=n; i++){
//     if(n % i === 0){
//         count++;
//     }
// }

// if(count === 2){
//     console.log(n, " là số nguyên tố")
// } else{
//     console.log(n, " không phải là số nguyên tố")
// }



let a, b , x;
a = prompt('Nhập số a');
b = prompt('Nhập số b');
if(a > b){
    // break;
}
x = prompt('Nhập số x');
for(;a < b ; a++){
    if( a % x === 0 ){
        console.log(a);
    }
}