// Bước 1: render lại giao diện khi người dùng load trang lần đầu tiên

// lấy gốc để render giao diện
const domContainer = document.getElementById('root');

// component
function Change() {
    // 1. Khai báo state 
    let [change, setChange] = React.useState('');

    // xử lý hoạt động xảy ra
    const handleHideText = function() {
        change = 'hide';
        setChange(change);
    }
    const handleShowText = function() {
        change = '';
        setChange(change);
    }
    const handleToggleText = function() {
        if(change == ''){
            change = 'hide';
        } else if(change == 'hide') {
            change = '';
        }
        setChange(change);
    }

    // Trả về giao diện
    return (
        <div class="content_wrapper">
            <div class="result">
                <p class={change}>This is text</p>
            </div>

                <button onClick={handleHideText}>Hide Text</button>
                <button onClick={handleShowText}>Show Text</button>
                <button onClick={handleToggleText}>Toggle Text</button>
        </div>
    );
}


const root = ReactDOM.createRoot(domContainer);

root.render(<Change/>);


// luồng chạy
// Lần chạy đầu
// bắt đầu với change = ''
// return về giao diện 

// click vào nút bất kỳ (hide text)
// callback handleHideText
// set lại value cho change
// get value cho setChange
// đẩy value cho usestate (khi này React.useState('hide');)
// render lại giao diện