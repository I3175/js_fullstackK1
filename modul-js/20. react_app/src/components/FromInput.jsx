// muốn truyền dữ liệu thông qua props
// giá trị truyền từ cha sẽ là 1 hàm
// mục đích trong con sẽ gọi hàm đấy -> đây là callback

function FormInput(props) {
  const { valueInput,handleSubmit, handleInput } = props;

  const handleChange = function (event) {
    const valueInput = event.target.value;
    // Gọi hàm cha khai báo ở trên cha
    handleInput(valueInput);
  };

  const handleSubmitChild = function(event) {
    event.preventDefault();
    // chạy hàm callback
    handleSubmit();
  }


  return (
    <div className="input_wrapper">
      <div className="col-6">
        <div className="mb-3">
          <form onSubmit={handleSubmitChild}>
            <label
              htmlFor="name"
              className="form-label"
              >
              Thêm
            </label>
            <input
              onChange={handleChange}
              value={valueInput}
              type="text"
              className="form-control"
              id="name"
              placeholder="Nhập tên"
            />
            <button className="btn btn-primary mb-5">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormInput;
