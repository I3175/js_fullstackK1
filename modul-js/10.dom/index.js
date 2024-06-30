// 1. DOM --- (document object model)
// từ 1 tài liệu -> tạo ra 1 mô hình gồm nhiều object

// 2. DOM cso thuộc về ngôn ngữ js?
// DOM thuộc về web api

// 2.1 Khái niệm api
 

// 2.2 api có phải luôn luôn là 1 request và 1 response ?

//  2.3 Sử dụng 2 câu lệnh để làm được tất cả về DOM

//  2.4 Lấy ra 1 object trên cây DOM
const objectHeader = document.querySelector('.header');

console.log(objectHeader.innerText);

// thay đổi giá trị trong object
objectHeader.innerText = 'header 1 edit';

//  2.5 Lấy ra nhiều object trên cây DOM
const objectAll = document.querySelectorALL('.header');
console.log(objectAll);