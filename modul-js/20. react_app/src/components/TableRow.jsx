function TableRow({user, index}) {

  
    return (
        <tr key={user.id}>
        <th scope="row">{index + 1}</th>
        <td>{user.name}</td>
        {/* <td>{user.age}</td>
        <td>{user.gender}</td> */}
        <td>
          <button type="button" className="btn btn-primary me-2">
            Edit
          </button>
          <button
            onClick={handleDelete}
            type="button"
            className="btn btn-danger"
            // onClick nhận vào 1 fuction khai báo
            // khi function khai báo chạy thì tất cả phần body chạy
            // phần body chạy thì hàm handleDelete chạy
            // nhận vào user.id
          >
            Delete
          </button>
        </td>
      </tr>
    );
}
export default TableRow;