import users from "./data/user.js";


function CrudUser() {

    const [userAll, setUserAll] = React.useState(users);

    const [inputName, setInputName] = React.useState('');

    const [inputFind, setInputFind] = React.useState('');

    const [isEditting, setIsEditting] = React.useState(false);

    const [userEditting, setuserEditting] = React.useState('');

    const handleChangeName = function (event) {
        setInputName(event.target.value)
    }

    const handleChangeFind = (event) => {
        setInputFind(event.target.value);
    };
    const handleSubmit = function (event) {
        event.preventDefault();
        if (isEditting) {
            // xử lí phần edit
            // thay đổi dữ liệu mảng cần update
            const usersUpdate = userAll.map(
                function (element) {
                    if (element.id === userEditting.id) {
                        return {
                            id: element.id,
                            name: inputName
                        };
                    } else {
                        return element;
                    }
                }
            );
            // render lại giao diện
            setUserAll(usersUpdate);
            setInputName('');
            setuserEditting(true);

        } else {

            const user = {

                id: crypto.randomUUID(),
                name: inputName
            }

            const userAllNew = [...userAll, user];

            //render
            setUserAll(userAllNew);
            setInputName('');
        }

    }
    const handleFind = function () {
        const userFind = userAll.filter((element) => element.name === inputFind);
        setUserAll(userFind);
        setInputFind('');
    }

    const handleDelete = (idUser) => {
        //1. lấy ra 1 id cần xoá
        //2. xoá phần đã lấy ra dựa trên id đã có
        const userFilterData = userAll.filter(element => element.id !== idUser)
        // if(element.id !== idUser) {
        //     return true;
        // } else {
        //     return false;
        // }
        //3. render lại giao diện
        setUserAll(userFilterData);
        // set lại state khi đã xoá => giao diện mới
    }

    const handleShowFormEdit = (idUser) => {
        //1. thay đổi giao diện form submit form submit(thay đổi text)
        setIsEditting(true);
        // 2. tìm ra object cần edit
        const userEditting = userAll.find((element) => element.id === idUser);
        // 3. đưa thông tin vào ô input
        setInputName(userEditting.name);
        // 4. lưu thông tin user đang edit đến state dành cho userEditting
        setuserEditting(userEditting);
    }

    const handleSortASC = () => {
        // sort
        const strAscending = [...userAll].sort((a, b) => (a.name > b.name ? 1 : -1));
        setUserAll(strAscending);
    }   
    const handleSortDSC = () => {
        // reverse
        const strDescending = [...userAll].sort((a, b) => (a.name > b.name ? -1 : 1));
        setUserAll(strDescending);
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
                                    Thêm
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
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="btn btn-primary mb-5"
                                    >
                                        {isEditting ? 'Update' : 'Add'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* phần tìm kiếm thông tin */}
                <div className="input_find">
                    <div className="col-6">
                        <div className="mb-3">
                            <form onSubmit={handleFind}>
                                <label
                                    htmlFor="name"
                                    className="form-label"
                                >
                                    Tìm kiếm
                                </label>
                                <input
                                    value={inputFind}
                                    onChange={handleChangeFind}
                                    type="text"
                                    className="form-control"
                                    id="find"
                                    placeholder="Nhập nội dung tìm kiếm"
                                />
                                <div className="col-6">
                                    <button
                                        type="button"
                                        onClick={handleFind}
                                        className="btn btn-primary mb-5"
                                    >
                                        Tìm kiếm
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* phần hiển thị thông tin */}
                <div className="col-6">
                    <h2>Thông tin User</h2>
                        <div className="btn-group sort-btn">
                            {/* sort tăng dần */}
                            <button 
                            className="btn btn-primary me-2 asc" 
                            type="button" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                            onClick = {handleSortASC}
                            >
                                Sort ASC
                            </button>
                            {/* sort giảm dần */}

                            {/* sort tăng dân */}
                            <button 
                            className="btn btn-primary me-1 dsc" 
                            type="button" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                            onClick = {handleSortDSC}
                            >
                                Sort DSC
                            </button>
                            {/* sort tăng dân */}
                        </div>
                    <table className="table table-striped" >
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">AGE</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userAll.map(
                                    function (user, index) {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{user.name}</td>
                                                <td>{user.age}</td>
                                                <td>{user.gender}</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary me-2"
                                                        onClick={() => handleShowFormEdit(user.id)}
                                                    >Edit</button>
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        // onClick nhận vào 1 fuction khai báo
                                                        // khi function khai báo chạy thì tất cả phần body chạy 
                                                        // phần body chạy thì hàm handleDelete chạy
                                                        // nhận vào user.id 
                                                        onClick={() => { handleDelete(user.id) }}
                                                    >
                                                        Delete
                                                    </button>
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
