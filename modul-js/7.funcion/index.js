/**
 * I. Học về Function
 */

//  2. Tại sao cần hàm
// Nó cần tái sử dụng những đoạn code bao gồm các câu lệnh
// khác nhau

//Function = chức năng đưa người dùng đến 1 thế giới gần hơn

/**
 * hàm console.log có phải do ngôn ngữ js cung cấp cho chúng
 * ta không ?
 * là 1 web api
 * api là các giao thức giúp lập trình viên làm những công
 * việc phức tạp, trừu tượng trở nên đơn giản hơn
 * 
 * api cung cấp các tiêu chuẩn trừu tượng hoá giúp làm những 
 * bài toán phức tạp trở nên đơn giản hơn
 * 
 */
// Cho nên API có thế viết bằng bất cứ ngôn ngữ nào

// có 2 loại api
// web API và third party API


/**
 * 3. Khai báo hàm
 */
function getTotal() {
 console.log('total');   
 console.log('total');   
}
// thực thi hàm
getTotal();

// 3.2 function expression hay là biểu thức
// (function(){
//     console.log('anonymus hacker');
// })()

let getproduct = function() {
    console.log('product');
};
getproduct();

/**
 * 4. Tại sao cần tham số đối số trong hàm, pramater và argument
 */