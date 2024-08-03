import users from "./data/user.js";


function CrudUser() {

    const [userAll, setUserAll] = React.useState(users);

    const [inputName, setInputName] = React.useState('');

    const handleChangeName = function (event) {
        setInputName(event.target.value)
    }

    const handleSubmit = function(event) {
        event.preventDefault();

        const user = {
            id: crypto.randomUUID(),
            name: inputName
        }
        const userAllNew = [...userAll, user];

        //render
        setUserAll(userAllNew);
        setInputName('');
    }

    return (
        <div className="container">
            <h1>CRUD USER</h1>
            <div className="row">
                {/* phần nhập thông tin */}
                <div className="input_wrapper">
                    <div className="col-6">
                        <div className="mb-3">
                            <form onSubmit={handleSubmit}>
                                <label
                                    htmlFor="name"
                                    className="form-label"
                                >
                                    Name
                                </label>
                                <input
                                    value={inputName}
                                    onChange={handleChangeName}
                                    type="email"
                                    className="form-control"
                                    id="name"
                                    placeholder="Nhập tên"
                                    
                                />
                                <div className="col-6">
                                    <button type="button" onClick={handleSubmit} className="btn btn-primary mb-5">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>

                {/* phần hiển thị thông tin */}
                <div className="col-6">
                    <h2>Thông tin User</h2>
                    <table className="table table-striped" >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userAll.map(
                                    function (user, index) {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index+1}</th>
                                                <td>{user.name}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary me-3">Edit</button>
                                                    <button type="button" className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<CrudUser />);
