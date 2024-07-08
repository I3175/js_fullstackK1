const domContainer = document.getElementById('root');

// Component
function Todo() {
    const [todos, setTodos] = React.useState([
        "Hit the text",
        "Another task",
        "Yet another task"
    ]);
    const [inputValue, setInputValue] = React.useState("");

    const handleAdd = function (event) {
        // event.preventDefault(); là một phương thức của đối tượng sự kiện (event object) trong JavaScript. 
        // Khi một sự kiện được kích hoạt, trình duyệt sẽ thực hiện hành vi mặc định liên quan đến sự kiện đó. 
        // preventDefault ngăn chặn hành vi mặc định này. (load lại trang)
        event.preventDefault();
        // xoá khoẳng trắng của chuỗi và nếu nó rỗng thì chạy đoạn code bên trong
        if (inputValue.trim()) {
            // Spread operator(...todos) trải ra và cập nhật lại mảng với nội dung mới ở cuối là inputValue
            setTodos([...todos, inputValue]);
            // xét lại cho state inputValue là rỗng
            setInputValue("");
        }
    };

    const handleDelete = function (index) {
        // tạo 1 biến mới lưu mảng mới khi dùng filter
        // filter là 1 hàm dùng để tạo ra mảng mới mà không có phần tử được chọn
        const newTodos = todos.filter(function (todo, todoIndex) {
            return todoIndex !== index;
        });
        setTodos(newTodos);
    }

    function handleInputChange(event) {
        // trả về một giá trị khi có data truyền vào
        setInputValue(event.target.value);
    }

    function renderTodoItem(todo, index) {
        return (
            <li key={index}>
                <span>{todo}</span>
                <button onClick={
                    function () {
                        handleDelete(index)

                    }}>
                    Delete
                </button>
            </li>
        );
    }
    return (
        <div className="content_wrapper">
            <form onSubmit={handleAdd}>
                <input
                    type="text"
                    placeholder="Title..."
                    className="input_text"
                    value={inputValue}
                    // dùng onChange để bắt sự kiện khi ô input bị thay đổi
                    onChange={handleInputChange}
                />
                <button className="add" type="submit">Add</button>
            </form>

            <ul>
                {/* loop qua các phần tử trong todos rồi trả về 1 tag li có index tương ứng */}
                {todos.map(renderTodoItem)}
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(domContainer);
root.render(<Todo />);
