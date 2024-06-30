// selector
const buttonHideTextSelector = document.querySelector('.hide_text');
const pElement = document.querySelector('.result p');
const buttonShowTextSelector = document.querySelector('.show_text');
const buttonToggleTextSelector = document.querySelector('.toggle_text');
let isShow = true;

// khai báo hàm sử lý click
function handleClickHideText() {
    isShow = false;
    renderResult();
    // pElement.classList.add('hide');
    
}
function handleClickShowText() {
    isShow = true;
    renderResult();
    // pElement.classList.remove('hide');
}
function handleClickToggleText() {
    isShow = !isShow;
    renderResult();
    // pElement.classList.toggle('hide');
}

function renderResult(){
    let htmlResult = '';
    if(isShow){
        htmlResult = `<p>This is text This is text</p>`;
    }else {
        htmlResult = `<p class="hide">This is text This is text</p>`;
    }
    document.querySelector('.result').innerHTML = htmlResult;
}

// thêm sự kiện
buttonHideTextSelector.addEventListener('click', handleClickHideText);
buttonShowTextSelector.addEventListener('click', handleClickShowText);
buttonToggleTextSelector.addEventListener('click', handleClickToggleText);