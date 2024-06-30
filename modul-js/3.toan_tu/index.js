/**
 * 1. Toán tử số học
 * 
 */
var x = 10;
var y = 2;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
//Phép chia lấy dư
console.log(x % y);
// x mũ y
console.log(x ** y);

/**
 * 2. Toán tử gán
 */
// Khai báo biến
var z = 15;
// tăng z lên 1 đơn vị
z = z + 1;
// viết tắt
z++;

z = z + 5;
z += 5;
console.log(z);
z *= 10;
z -= 5;
z /= 12;
console.log(z);

/**
 * 3. Toán tử so sánh (quan hệ)
 */
var numberCompare = 1;
console.log(numberCompare > 1);
console.log(numberCompare >= 1);
console.log(numberCompare < 1);
console.log(numberCompare <= 1);

// so sánh bằng (equality)
// so sánh nghiêm ngặt (value + type)
console.log(numberCompare === 1);
// so sánh lỏng lẻo (value)
console.log(numberCompare == '1');
// Lưu ý: nên dùng nghiêm ngặt (===) 

/**
 * 4. Toán tử logical operator
 */
var age = 18;
var isHaveHome = true;
// xét logical operator &&
var isCheck = age >= 18 && isHaveHome;
console.log(isCheck);

// Tất cả những giá trị được xem xét là false
// null
// undefined
// ''
// false
// NAN
// 0

// Còn lại là true
console.log(null && true);

// Nhớ: Đi từ trái sang phải sẽ đánh giá từng value một
// nếu gặp value nào đó tương đương false nó sẽ trả về false
// cho kết quả còn không sẽ trả về value cuối cùng


// 4.2 Xét logical operator
console.log(false || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log(false || 1);
console.log(false || false || 2 || true);
// Nhớ: Đi từ trái sang phải sẽ đánh giá từng value một
// nếu gặp value nào đó tương đương false nó sẽ trả về false
// cho kết quả còn không sẽ trả về value cuối cùng


// 4.3 Xét logical operator 
console.log(!true);
console.log(!false);
console.log(!2);
console.log(!'');


/**
 * 5. Lưu ý về thứ tự ưu tiên khi tính toán
 */
var total = (2 + 3) * 4;
console.log(total);
// Lưu ý: Nhân chia trước cộng trừ sau
// Trong ngoặc trước ngoài ngoặc sau

/**
 * 6. Control flow  (if, else)
 */
var isCondition = false;
if (isCondition) {
    console.log('Đi cắm trại');
} else {
    console.log('ở nhà thôi');
}