// Khi click vào button “Toggle dark mode”, toàn bộ giao diện sẽ được đổi sang chế độ tối (background, text)

// Khi click vào button “Toggle dark mode”, một lần nữa, giao diện tối sẽ bị tắt đi và quay trở lại bình thường

//selector
const buttonDarkMode = document.querySelector('.button');
const changeModal = document.querySelector('body');











//xử lý click
function changeBackground() {
    changeModal.classList.toggle('dark_mode');
}










//thêm sự kiện
buttonDarkMode.addEventListener('click', changeBackground);