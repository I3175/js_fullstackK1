// Những trường hợp thực tế dùng this và những sai lầm mắc phải

const video = {
    title: 'Vui lên nào anh em ơi',
    tags: ['vtv', 'phim truyền hình', 'top phim thịnh hành'],
    play: function() {
        this.tags.forEach(
            
            
            // function tạo scope -> hàm dược gọi () -> từ khoá this chính là 
            // đối tượng gọi hàm này -> window
            
            // cách 1
            // function(tagName) { 
            //     console.log(this.title, tagName);
            // }.bind(this)

            // cách 2
            // khi dùng arrow function thì sẽ hiểu được
            // do không bị cô lập trong scope của hàm
            // bởi arrow function thừa hưởng this từ cha
            (tagName) => {
                console.log(this.title, tagName);
            }
        )
    }
}



// Yêu cầu in ra tiêu đề cộng với tag của bộ phim
video.play();



const obj = {
    name: 'doan'
}


function playVideo() {
    console.log(this);
}


playVideo.call(obj, 1, 2);

playVideo.apply(obj, [1, 2]);

// nó sẽ thay đổi this tương ứng với obj đang gọi và không chạy hàm
// và return cái hàm mới được gọi bởi object bạn đưa gọi

const playVideoCopy = playVideo.bind(obj);
playVideoCopy();


// this, cha con = quá trình runtime

// closure  quá trình defind