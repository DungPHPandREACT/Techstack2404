// // Tìm element theo id
// const $paragraph = document.getElementById('paragraph');
// // console.log('$paragraph: ', $paragraph);

// // Tìm element theo tên thẻ
// const $tagP = document.getElementsByTagName('p');
// // console.log('$tagP: ', $tagP);

// // Tìm element theo class
// const $text = document.getElementsByClassName('text');
// // console.log('$text: ', $text);

// // document.querySelector
// const $element = document.querySelector('p#paragraph.text');
// console.log('$element:', $element);
// // document.querySelectorAll
// const $elements = document.querySelectorAll('p#paragraph.text');
// console.log('$elements:', $elements);

// const $h1 = document.getElementById('h1');
// console.log('$h1: ', $h1);
// innerHTML: thay đổi nội dung html bên trong element
// $h1.innerHTML = '<a href="#">Nội dung đã được thay đổi</a>';
// console.log($h1.innerHTML);
// innerText: thay đổi nội dung văn bản bên trong element
// $h1.innerText = '<a href="#">Nội dung đã được thay đổi</a>';

const $tagA = document.getElementById('tagA');
// Thay đổi giá trị của một thuộc tính trong thẻ html
// Cách 1
// $tagA.href = 'https://www.google.com/';
// console.log($tagA.href)

// Cách 2
// $tagA.setAttribute('href', 'https://www.youtube.com');
// console.log($tagA.getAttribute('href'))
// console.log($tagA.getAttribute('data-src'))

// Thay đổi style của 1 element
// $tagA.style.color = 'red';
// $tagA.style.fontSize = '30px';

// Xóa thuộc tính của 1 element
// $tagA.removeAttribute('data-src');

// // Tạo mới element
// let $tagH2 = document.createElement('h2');
// $tagH2.innerHTML = 'Nội dung thẻ h2';
// console.log('$tagH2: ', $tagH2);

// document.body.appendChild($tagH2);
// // $tagA.remove();

// $tagA.classList.toggle('test');

// Tạo một danh sách đồ vật yêu thích của bạn với ul#favorite-list
// và các li.favorite-list-item.

// Sử dụng DOM để thay đổi nội dung của tất cả
// li.favorite-list-item thành “I love this thing”.

// Sử dụng DOM để thay đổi màu chữ của các
// li.favorite-list-item thành màu đỏ.
const $tagsLi = document.querySelectorAll('li.favorite-list-item');
for (let tagLi of $tagsLi) {
	tagLi.innerText = 'I love this thing';
	tagLi.style.color = 'red';
}

// Nhập vào 1 đoạn text từ bàn phím. Thêm vào ul#favorite-list
// một li có nội dung là text vừa nhập vào.
const text = 'Xe máy';
const $tagLi = document.createElement('li');
$tagLi.innerText = text;
const $tagUl = document.getElementById('favorite-list');
$tagUl.appendChild($tagLi);
