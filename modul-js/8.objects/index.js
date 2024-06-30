// 1. Cách khai báo 1 đối tượng (object)

const ducInfor = {
    // 1.Khai báo cụ thể thuộc tính
    name: 'duc',
    age: 33,
    sex: 'nam',

    // 2. Khai báo phương thức
    getName:  function() {
        console.log('show name');
    }
};

// 2. Tại sao chúng ta cần đối tượng (object)
// array là 1 trường hợp đặc biệt của obj trong đó với keyvalue là index
// Sở dĩ cần obj là do có thể lưu thông tin bằng từng keyvalue rõ ràng

// 3. Vậy thì chúng ta không cần array?
// 3.1 Lưu trữ thông tin của 1 lớn[array] với thông tin cụ thể của từng
// bạn gồm tên, tuổi giới tính.
[
    {
        name: 'duc',
        age: 33,
        sex: 'nam'
    },
    {
        name: 'trang',
        age: 25,
        sex: 'nữ' 
    }
];

// 4. Cách thể hiện object dưới góc độ hình học?
const courseJs = { 
    name: "JavaScript",
    time: '3h'
}

//5. Cách lấy value object hay còn gọi là get value
console.log(courseJs.name);
console.log(courseJs['name']);
// 6. Khi nào dùng [], khi nào dùng dấu .
const keyName = 'name';
console.log(courseJs.keyName);
console.log(courseJs[keyName]);

// 7. Loop object []
for(let key in courseJs){
     console.log(key + ": " + courseJs[key]);
}
// 8. set value
courseJs.name = 'php';
console.log(courseJs);
// 9. This là gì, tại sao chúng ta cần this
const people = {
    name: 'huy',
    getName: function(){
        console.log('Thông tin tên của bạn là: ', this.name);
    }
};
people.getName();

// this chính là đối tượng trong phương thức qua quá trình runtime
// this là tham chiếu 
// 10. Ý nghĩa thực sự mà this mang lại
function Init() {
    console.log('init object');
}

const initObject = new Init();

function createPersion(name) {
    const obj = {};

    obj.name = name;
    obj.introduce = function() {
        console.log('hi : ' + this.name);
    }

    return obj;
}

const ducPersion = createPersion('duc');
console.log(ducPersion);
const dungPersion = createPersion('dung');
console.log(dungPersion);

// 11. Chạy contructor thông qua từ khóa new
function Persion(name) {
    this.name = name;
    this.introduce = function() {
        console.log('hi : '+ this.name);
    }
};
const duc2 = new Persion('duc');
console.log(duc2);


