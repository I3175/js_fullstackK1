import { useState } from "react";
import "./App.css";
import userAll from "./data/user.js";
import FormInput from "./components/FromInput.jsx";
import Table from "./components/Table.jsx";

function App() {

    const [valueInput, setValueInput] = useState('');
    const [users, setUsers] = useState(userAll);

    

    const handleInput = function(valueInput) {
      setValueInput(valueInput);
    }

    const handleSubmit = function() {
      const newStateUser = [{id: crypto.randomUUID(), name: valueInput}, ...users];
      // render lại giao diện
      setUsers(newStateUser);
      setValueInput('');
    }


  return (
    <div className="container">
      <h1>CRUD USER</h1>
      <div className="row">
        {/* phần nhập thông tin */}
        <FormInput 
            handleInput = {handleInput}
            valueInput = {valueInput}
            handleSubmit = {handleSubmit}
        />

        {/* phần hiển thị thông tin */}
        <div className="col-md-12">   
          <h2>Thông tin User</h2>

          {/* Dữ liệu table */}
          <Table
            users={users}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// 1. Lần đầu tiên khi hàm được chạy
// 1.1 count = 0
// 1.2 hàm này có nghĩa : {
// count chính là bên ngoài và đang được hàm này tham chiếu đến
// }

// khi function app chạy xong lần đầu
// ? tại sao count vẫn dùng được

// khi còn 1 đối tượng tham chiếu đến biến của bộ nhớ thì sẽ không giải phóng vùng nhớ đó

// 2. Người dùng click button count
// 2.1 lúc này hàm mới chạy
// -> hàm app render lại
