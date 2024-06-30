// 1. So Sánh Tư Duy ReactJs và Js thuần
// 1.1 js thuần
// Tư duy để tạo ra object từ giao diện người dùng.
const h1 = document.createElement('h1');
h1.innerText = 'Hello world';
h1.className = 'hello';
console.log(h1);
// reactjs 
const domContainer = document.getElementById('root');
const h1React = React.createElement(
    'h1',
    {
        className: 'hello'
    }, 
    'Hello World'
);
const root = ReactDOM.createRoot(domContainer);
// root.render(h1React);
// console.log(h1React);


const h2React = React.createElement(
    'h1',
    {
        className: 'hello'
    },
    React.createElement('h2', 
        null, 
        React.createElement('span', null, 'Xin chào')
    )
);
root.render(h2React);


// babel
// 1. chuyển đổi xml (khá giống html) -> React.createElement tự động
// 2. cho phép bạn nhúng biểu thức javascript vào thư viện người dùng
