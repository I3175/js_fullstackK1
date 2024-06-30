// Bước 1: render giao diện người dùng khi load trang đầu tiên
const domContainer = document.getElementById('root');

// let counter = 1;
// const handleIncrement = function() {
//     // 1. tăng biến lên 1 đơn vị
//     counter++;
//     // 2. render lại giao diện
//    mountView();
// }


// function renderView() {


//     return (
//         <div className="counter">
//             <div className="result">
//                 {counter}
//             </div>


//             <button onClick={handleIncrement}>Increment</button>
//             <button>Decrement</button>
//         </div>
//     );
// }

// function mountView() {
//     const renderHtmlView = renderView();
//     const root = ReactDOM.createRoot(domContainer);
//     root.render(renderHtmlView);
// }

// mountView();




// v3

function Counter() {

    // 1. khai báo state 
    // giá trị bên tay phải truyền vào đầu tiên là giá trị khởi tạo ban đầu của biến
    // khi cần update biến -> gọi đến séttate -> hàm render lại -> counter lại
    const [counter, setCounter] = React.useState(1);

    const handleIncrement = function() {
        setCounter(counter + 1);
    }

    const handleDecrement = function() {
        setCounter(counter - 1);
    }

    return (
        <div className="counter">
                    <div className="result">
                        {counter}
                    </div>
        
        
                    <button onClick={handleIncrement}>Increment</button>
                    <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}


    const root = ReactDOM.createRoot(domContainer);
    root.render(<Counter/>);

// với state của react 
// khi gọi setstate -> component nhận vào giá trị mới

