// console.log("Starting...");

// setTimeout: là sẽ delay trong khoảng thời gian X, rồi mới thực thi
// setTimeout(callback, timeout);
// callback là function sẽ được thực thi sau 1 khoảng timeout miliseconds
// timeout: đơn vị là milisecond, ví dụ: 3000 miliseconds <=> 3 seconds

// const timeoutID = setTimeout(function (){
//     document.getElementById("greeting").innerHTML = "Chào mừng bạn đến với trang web"
// }, 5000)

// console.log(timeoutID);

// clearTimeout(timeoutID);

// setInterval(callback, time);
// callback sẽ được thực thi sau 1 khoảng thời gian là time 
// let count = 10;

// const id = setInterval(function(){
//     console.log("doing...: ", count)
//     document.getElementById("greeting").innerHTML = count
//     count = count - 1
//     if(count === 0){
//         document.getElementById("greeting").innerHTML = "End"
//         clearInterval(id);
//     }
// }, 1000)

