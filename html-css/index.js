/**
 * 1. Viết câu lệnh đầu tiên 
 * hello world
 */
console.log('Hello World!');

/**
 * Biến
 */


// 1.Khai báo biến

var nameInfo;

// 2.Gán giá trị khởi tạo ban đầu cho biến

nameInfo//cam1 case = 'Doan';

// 3. Khai báo và khởi tạo giá trị cho biến

var name = 'Doan';

/**
 * Có 2 quá trình là khai báo và khởi tạo giá trị cho biến
 */

/**
 * 3. Các kiểu dữ liệu trong biến
 */
//1. Kiểu dữ liệu boolean (luận lý : true : false)
console.log(typeof true);
console.log(typeof false);

//typeof là 1 kiểu kết quả trả về kiểu dữ liệu
var isTrue = true;
var isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * Kiểu dữ liệu của biến được quyết định bởi kiểu dữ liệu của values 
 */

//2. Kiểu dữ liệu number
console.log(typeof 1);
console.log(typeof 1.5);

var isA = 3;
var isB = 4;

console.log(typeof isA);
console.log(typeof isB);

//3. Kiểu dữ liệu String

console.log(typeof 'Doan Nguyen');
console.log(typeof "Doan Nguyen");
console.log(typeof `Doan Nguyen`);
//3.1 Tạo ra biến lưu dữ liệu string
var string1 = 'Doan nguyen';
var string2 = "Doan Nguyen";
var string3 = `Doan Nguyen`;
//3.2 Log ra kiểu dữ liệu của biến
console.log(typeof string1);
console.log(typeof string2);
console.log(typeof string3);

//4. Kiểu dữ liệu underfined
var und;
console.log(typeof und);

//5. Kiểu dữ liệu null
var nameNull = null;

//6. Kiểu dữ liệu object
console.log(typeof []);
console.log(typeof {});

var arr = [];
var obj = {};

console.log(typeof arr);
console.log(typeof obj);
/**
 * Kiểu dữ liệu nguyên thủy chưa trong đó 1 values
 * 
 */

/**
 * 5. Một số câu hỏi thường gặp khi sử dụng biến
 */

//4.1 Tại sao cần biến
//Nếu không có biến thì thế nào
//1.Sử dụng nhiều lần
//2.Update giá trị
//4.2 Quy tắc đặt tên biến
/**
 * Number không thể bắt đầu tên biến
 * --Giả sử number có thể bắt đầu khi đặt tên biến
 * vậy khi tên biến là 1 thì trùng với values -> sai
 * --Không thể đặt tên biến chứa space or tab
 * Nó làm giảm hiệu quả khi code chạy và người tạo ra ngôn ngữ lập trình 
 * ép người dùng không dùng space và tab
 *  */ 