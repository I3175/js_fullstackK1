// 1. Lịch sử của this -- class(lớp) -- đối tượng(object)
// lớp -> mô tả chung chung
// đối tượng -> đối tượng cụ thể

// 2. từ khoá this bản thân nó ra đời cho sự cụ thể
// hay là đại diện cho đối tượng
// khi ban đầu chưa có class (hiện tại đã có)

// chung chung -> first class
function Human(name, age) {

    // khi dùng this khởi tạo đối tượng rỗng rồi truyền vào value
    this.name = name;
    this.age = age;
    // ngầm định là return this;

    // thông thường
    // const obj = {};
    // obj.name = name;
    // obj.age = age;
    // return obj;

    // khai báo phương thức
    this.run = function () {
        console.log(this);
        console.log('running is' , this.name, this.age);
    }

}

const Thang = new Human('Thang', 20);

Thang.run();

const Hung = new Human('Hung', 18);

Hung.run();


// this giúp linh động thay đổi đối tượng
//3. Cách sử dụng this

// This chính là đối tượng trong quá trình hàm được thực thi


const video = {
    title: 'vui lên nào',
    play: function(){
        console.log(this);
    }
}

// this là đối tượng trong quá trình thực thi, thực thi cái phương thức đó
video.play();

// thêm sự kiện cho button

const buttonSelector = document.querySelector('.demo');

function handleClick() {
    console.log(this);
}

buttonSelector.addEventListener('click', handleClick);

// 4. Bài toán sử dụng thực tế (index2)