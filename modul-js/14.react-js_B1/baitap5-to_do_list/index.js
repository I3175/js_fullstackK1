// render giao diện khi bắt đầu
const domContainer = document.getElementById('root');

//component
function Todo() {
    const [todo, setTodo] = React.useState(1);

    const handleAdd = function() {

    }

    const handleDelete = function() {
       
    }

    return (
        <div class="content_wrapper">

            <form>
                <input type="text" placeholder="Title..." class="input_text"/>
                <button class="add" onClick={handleAdd}>Add</button>
            </form>

            <ul>
                <li>
                    <span>Hit the text</span>
                    <button onClick={handleDelete}>Delete</button>
                </li>
                <li>
                    <span>Hit the text</span>
                    <button onClick={handleDelete}>Delete</button>
                </li>
                <li>
                    <span>Hit the text</span>
                    <button onClick={handleDelete}>Delete</button>
                </li>
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(domContainer);
root.render(<Todo/>);