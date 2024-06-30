// #   Tạo ra một Album ảnh theo ý thích: (h5.png)

// ● Cho phép xem ảnh tiếp theo (click next)

// ● Cho phép xem ảnh trước đó (click previous)

const photos = [
    'https://images.pexels.com/photos/977878/pexels-photo-977878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

let PhotoIndex = 0;

document.querySelector('.next').addEventListener('click', showNextPhoto);
document.querySelector('.prev').addEventListener('click', showPreviousPhoto);

function showPhoto(index) {
    const photo = document.querySelector('.photo');
    photo.src = photos[index];
}

function showNextPhoto() {
    PhotoIndex = (PhotoIndex + 1) % photos.length;
    showPhoto(PhotoIndex);
}

function showPreviousPhoto() {
    PhotoIndex = (PhotoIndex - 1 + photos.length) % photos.length;
    showPhoto(PhotoIndex);
}



// Initialize the album with the first photo
showPhoto(PhotoIndex);