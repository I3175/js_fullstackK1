/**
 * I.Khai báo biến
*/

// 1. Tìm hiểu câu lệnh in ra tab console của trình duyệt
console.log("Tôi là Đoàn Nguyễn, thuộc CodeLove");

// 2. Học cách khai báo biến trong JS
var nameInfo;
// trong đó nameInfo là tên định danh
//var là keyword khai báo biến

// 3. Khởi tạo giá trị ban đầu cho biến
nameInfo = "doannguyen";

// 4. Khai báo biến + khởi tạo giá trị ban đầu trong cùng 1 
// câu lệnh 

// Biến được sinh ra khi sử dụng từ khoá khai báo biến
var company = "CodeLove";

// Biến được update (biến được sử dụng)
company = "CodeLove 2";

// Biến được sử dụng
var companyEnd = company;

/**
 * II. Các kiểu dữ liệu trong js
 * Kiểu dữ liệu của biến là kiểu dữ liệu của value
 * Vì biến được gán băng value
 */
// 1. Kiểu dữ liệu boolean (true ,false)
// 1.1 log ra kiểu dữ liệu theo value
console.log(typeof true);
console.log(typeof false);
// 1.2 lấy ví dụ về biến chứa value theo kiểu dữ liệu đấy
var isCofirm = true;
var isCancel = false;
// 1.3 log ra kiểu dữ liệu của biến
console.log(typeof isCofirm,typeof isCancel);

// 2. Kiểu dữ liệu string (''; ""; ``)
// 'doannguyen', "doannguyen", `doannguyen`
console.log(typeof 'doannguyen');
var nameInfoClone = 'doannguyen';
console.log(typeof nameInfoClone);

// 3. Kiểu dữ liệu number 
console.log(typeof 2);
var age = 2;
console.log(typeof age);

console.log(typeof 1.2);
var b = 1.2;
console.log(typeof b);

// 4. Kiểu dữ liệu undefined
console.log(typeof undefined);
var birthDay;
console.log(typeof birthDay);
 
// 5. Kiểu dữ liệu null (duy nhất value null)
console.log(typeof null);
var isNull = null;
console.log(typeof isNull);

// 6. Kiểu dữ liệu object (lưu trữ nhiều value)
console.log(typeof {});
console.log(typeof []);

// 7. Các hàm thông dụng trong js
// 7.1 Hàm alert
alert('Bạn đã về quê chưa');
// 7.2 Hàm confirm
var isConfirm = confirm('Bạn đã đủ 18 tuổi chưa');
console.log(isConfirm);
// 7.3 Hàm promp
var nameUser = prompt('xin bạn nhập tên: ');
console.log(nameUser);