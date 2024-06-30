const container = document.getElementById('container');
let counter = 1;









function renderHtmlView() {
    const htmlRender = `

        <div class="counter_wrapper">
                <span>${counter}</span>
            <div class="button_wrapper">
                <button class="increment">Increment</button>
                <button class="decrement">Decrement</button>
            </div>
    </div>
    `;
        container.innerHTML = htmlRender;
}


function handleProcessData(event) {
    //1. Xử lý data
    
    const clicked = event.target;
    if (clicked.classList.contains('increment')) {
        counter++;
    } else if(clicked.classList.contains('decrement')) {
        counter--;
    }


    //2. Render lại giao diện
    renderHtmlView();
}








//Khi trang load lần đầu chạy hàm này
renderHtmlView();

container.addEventListener('click', handleProcessData);






