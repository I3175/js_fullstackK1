// 1. Mảng

// 1.1 Tại sao chúng ta cần mảng
// Khi không có mảng, tốn quá nhiều dung lượng
// Thao tác dễ dàng
// Tạo ra 1 vùng để lưu trữ dữ liệu


// 1.2 cách khai báo mảng trong js

let coursesOfMy = [
    'Jonas',
    'CodewithMosh',
    'Jonas2'
];

// 2. Các thông tin liên quan đến mảng
// 2.1 Chiều dài của mảng hay giới hạn mảng
console.log(coursesOfMy.length);
// Truy cập dưới dạng ngoặc vuông
// [0 - length - 1]x        
console.log(coursesOfMy[0]);
console.log(coursesOfMy[1]);
console.log(coursesOfMy[2]);







// 3. Tìm ra index hay vị trí của phần tử với value bất kì (Jonas)
console.log('index cần tìm', coursesOfMy.indexOf('Jonas'));
console.log('index cần tìm', coursesOfMy.indexOf('Jonas2'));
console.log('index cần tìm', coursesOfMy.indexOf('CodewithMosh'));


// 4. Thêm phần tử vào mảng
// vào cuối mảng

coursesOfMy.push('React', 'Vue');
console.log(coursesOfMy);

// vào đầu mảng
coursesOfMy.unshift('HTML/CSS', 'JavaScript');
console.log(coursesOfMy);

// 5. Xóa phần tử khỏi mảng
// xóa đầu 
coursesOfMy.shift();

// xóa cuối 
coursesOfMy.pop();
console.log(coursesOfMy);

// xóa ở bất kì vị trí nào
// 1. Tìm ra index -> xóa
coursesOfMy.splice(1, 1);
console.log(coursesOfMy);


// 6. Cách truy cập phần tử mảng dynamic
// length = 100 -> index cuối cùng là 99
// mảng [0],,,,mảng[99]

for (let index = 0; index < coursesOfMy.length; index++) {
    const element = coursesOfMy[index];
    document.write(element + '<br>');
}

// 7. convert string to array và ngược lại
// string to array sử dụng split 

let strConvert = 'duc, dung, manh, huynh';
let arrConvert = strConvert.split(',');
console.log(arrConvert);

// array to string 
let joinResult = arrConvert.join('-');
let toStringarr = arrConvert.toString();
console.log(joinResult);