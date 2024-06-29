const $btnRegister = document.getElementById("register");
const $name = document.getElementById("name");
const $email = document.getElementById("email");
const $password = document.getElementById("password");


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
$btnRegister.onclick = function () {
  const name = $name.value.trim();
  const email = $email.value.trim();
  const password = $password.value.trim();

  if(email.length <1 || name.length <1|| password.length <1){
    alert('Nhập đủ thông tin')
  }else if(!validateEmail(email)){
    alert('Email chưa đúng định dạng')
  } else if(password.length < 6){
    alert('Mật khẩu tối thiểu 6 ký tự')
  } else {
    alert('Đăng ký thành công')
  }
  
};
