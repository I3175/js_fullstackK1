import TableRow from './TableRow';
function Table(props) {
  const {users: userAll} = props;


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          {/* <th scope="col">AGE</th>
          <th scope="col">Gender</th> */}
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        {
        userAll.map((user, index) => 
          <TableRow
            key={user.id}
            index={index}
            user={user}
          />
        )}
      </tbody>
    </table>
  );
}

export default Table;
