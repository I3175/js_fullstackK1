const buttonSelector = document.querySelector('button');
const modalWrapper = document.querySelector('.wrapper');
const close = document.querySelector('.close');




function showModal() {
    modalWrapper.classList.remove('hide');
}
function hideModal() {
    modalWrapper.classList.add('hide');
}






buttonSelector.addEventListener('click', showModal);
close.addEventListener('click', hideModal);