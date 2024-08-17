// 1. Khi nào closure được sinh ra
// closure là 1 hàm bao đóng trong 1 hàm khác
function init() 
{

    let name = 'Doan';
    let age = 20;
    function displayName() 
    {
        console.log('name', name);
        age++;
    }

    console.dir(displayName);
    // closure được tạo khi hàm dược tạo

    // gọi hàm displayName
    return displayName;
}
let displayNameInstance = init();
// khi chạy xong return nó đã bao gồm các tham chiếu đến  môi trường bên ngài


// khi chạy thì nó lấy từ bộ nhớ ra và in kết quả
displayNameInstance();
// 2. Khi hàm được khai báo trong 1 hàm khác nó được hiểu là 1 closure -> nó được bao đóng trong 1 hàm khác
// -> thừa hưởng -> sinh ra để giả quyết vấn đề của OOP


// function initParents() 
// {
    

//     let moneys = '1 triệu đô';
//     let land = '10 sổ đỏ'
//     return {
//         firstChild: function()
//         {
//             moneys = moneys + ' đi chơi với bạn gái';
//         },
//         secondChild: function()
//         {
//             land = land + 'chơi cờ bạc';
//         },
//         result: function() {
//             console.log('moneys', moneys);
//             console.log('land', land);
//         }
//     }

// }
// let initParentsIns = initParents();


// // đứa con đầu tiên mang tiền thừa hưởng từ bố mẹ đi chơi với bạn gái
// initParentsIns.firstChild();
// initParentsIns.result();

function counter() {

    let counter = 1;
    
    function increment() {
        counter++
    }

    function decrement() {
        counter--;
    }

    function getValue() {
        return counter;
    }

    return {
        increment,
        decrement,
        getValue
    }

}

let instanceCounter = counter();
instanceCounter.increment();
instanceCounter.increment();
instanceCounter.decrement();
console.log(instanceCounter.getValue());

let instanceCounter2 = counter();
instanceCounter2.decrement();
console.log((instanceCounter2.getValue()));