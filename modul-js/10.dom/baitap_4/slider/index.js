// 1. Khai báo
const nextButtonSelector = document.querySelector('.next');
const prevButtonSelector = document.querySelector('.previous');
const imageAllSelector = document.querySelectorAll('.images > img');
const buttonAllSelector = document.querySelectorAll('.dots > button');
let index = 0;






// 2. Các hàm sử lý 
function handleNextButton() {
    // 1. ẩn tất cả các ảnh khác 
    for(let i = 0; i < imageAllSelector.length ; i++){
        imageAllSelector[i].classList.add('hide');
    }
    // 2. Hiển thị ảnh kế tiếp
    index = index + 1;
    if (index > imageAllSelector.length - 1) {
        index = 0;
    }
    imageAllSelector[index].classList.remove('hide');

    // 3. xoá tất cả class active trong tất cả button
    for (let i = 0; i < buttonAllSelector.length; i++){
        buttonAllSelector[i].classList.remove('active');
        
    }
    buttonAllSelector[index].classList.add('active');
}

function handlePreviousButton(){
    // 1. ẩn tất cả các ảnh khác 
    for(let i = 0; i < imageAllSelector.length; i++){
        imageAllSelector[i].classList.add('hide');
    }
    // 2. Hiển thị ảnh kế tiếp
    index = index - 1;
    if (index < 0 ) {
        index = imageAllSelector.length - 1;
    }
    imageAllSelector[index].classList.remove('hide');

    // 3. xoá tất cả class active trong tất cả button
    for (let i = 0; i < buttonAllSelector.length; i++){
        buttonAllSelector[i].classList.remove('active');
    }
    buttonAllSelector[index].classList.add('active');
}

function handleActiveButton(event) {
    // 1. ẩn tất cả các ảnh khác
    for(let i = 0; i < imageAllSelector.length ; i++){
        imageAllSelector[i].classList.add('hide');
    }
    // 2. lấy index của button được kích
    const clickedButtonIndex = Array.from(buttonAllSelector).indexOf(event.target);
    index = clickedButtonIndex;

    // 3. Hiển thị ảnh tương ứng với button được kích
    imageAllSelector[index].classList.remove('hide');

    // 4. Xoá tất cả class active trong tất cả button
    for (let i = 0; i < buttonAllSelector.length; i++){
        buttonAllSelector[i].classList.remove('active');
    }
    // 5. thêm class active cho button được kích
    buttonAllSelector[index].classList.add('active');
}




















// 3. Các hàm sự kiện
nextButtonSelector.addEventListener('click', handleNextButton);
prevButtonSelector.addEventListener('click', handlePreviousButton);
for (let i = 0; i < buttonAllSelector.length; i++) {
    buttonAllSelector[i].addEventListener('click', handleActiveButton);
}