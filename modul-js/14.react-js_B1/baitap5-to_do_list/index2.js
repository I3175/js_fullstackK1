const domContainer = document.getElementById('root');

// Component
function Todo() {
    const [todos, setTodos] = React.useState([
        "Hit the text",
        "Another task",
        "Yet another task"
    ]);
    const [inputValue, setInputValue] = React.useState("");

    const handleAdd = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue("");
        }
    };

    const handleDelete = (index) => {
        const newTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
        setTodos(newTodos);
    };

    return (
        <div className="content_wrapper">
            <form onSubmit={handleAdd}>
                <input 
                    type="text" 
                    placeholder="Title..." 
                    className="input_text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="add" type="submit">Add</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <span>{todo}</span>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(domContainer);
root.render(<Todo />);
