// Bước 1: render giao diện người dùng.
const domContainer = document.getElementById('root');

// component
function Modal() {
    // 1. Khai báo state
    // giá trị bên tay phải truyền vào đầu tiên là giá trị khởi tạo ban đầu
    // khi cần update biến -> gọi đến séttate -> hàm render lại -> modal thay đổi
    let [modal, setModal] = React.useState('');

    const handleClose = function() {
        setModal(modal = 'hide');
    }

    const handleOpen = function() {
        setModal(modal = '');
    }

    return (
    <div class="container">
        <h2>Modal Example</h2>
        <button onClick={handleOpen}>Open Modal</button>
        <div class={modal}>
            <div class="wrapper_modal">
                <div class="content_modal">
                    <h2>Code Love</h2>
                    <p>
                        Chúng tôi muốn giúp bạn trên con đường trở thành lập trình viên chuyên nghiệp
                    </p>
                    <p class="close" onClick={handleClose}>X</p>
                </div>
            </div>
        </div>
    </div>
    );
}
const root = ReactDOM.createRoot(domContainer);
root.render(<Modal/>);