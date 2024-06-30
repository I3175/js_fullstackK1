const boxALL = document.querySelectorAll('.box');
const colors = [
    'lightgray',
    'lightgreen',
    'lightsalmon'
];



function changeBackground(color) {

    return function() {
        boxWrapper.setAttribute('style', `background: ${color}`);
    }
}

const boxWrapper = document.querySelector('.box_wrapper');
for(let i = 0; i < boxALL.length; i++){
    boxALL[i].addEventListener('click', changeBackground(colors[i]));
}



// sự kiện hover chuột qua
// for (i = 0; i < boxALL.length; i++){
//     boxALL[i].addEventListener('mouseover', changeBackground);
// }