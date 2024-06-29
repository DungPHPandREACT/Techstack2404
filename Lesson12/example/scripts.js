// Local storage
// Lưu trữ và cập nhật dữ liệu
// Cách 1:
// localStorage.setItem('number', 20);
// Cách 2:
// localStorage.PI = 3.14;

// const student = {
//     name: 'Hung',
//     age: 20,
//     address: 'Ha Noi'
// }
// // localStorage không hỗ trợ lưu trữ các kiểu dữ liệu tham chiếu
// // JSON.stringify(data) => chuyển đổi kiểu dữ liệu ban đầu => thành kiểu dữ liệu string
// localStorage.setItem('student', JSON.stringify(student))

// Lấy dữ liệu từ localStorage
// const PI = localStorage.getItem('PI');
// console.log(PI);
// let student = localStorage.getItem('student');
// console.log(student);
// // JSON.parse() => chuyển đổi từ định dạng JSON về kiểu dữ liệu ban đầu
// student = JSON.parse(student);
// console.log(student); //

// Xóa dữ liệu từ localStorage
// localStorage.removeItem('key');
// localStorage.removeItem('PI')

// localStorage.clear();

// cookie
// document.cookie = 'username=T3H;max-age=9000';
// document.cookie = 'course=Javascript;max-age=9000';



function getValueCookie(name){
    let data = document.cookie;
    data = data.split(';');

    for(let element of data){
        const name_value = element.trim().split('=');
        console.log(name_value)
        if(name_value[0] === name){
            return name_value[1];
        }
    }
}

console.log(getValueCookie('username'))