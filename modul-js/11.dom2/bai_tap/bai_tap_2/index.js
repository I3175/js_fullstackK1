const container = document.getElementById('.container');

let isShow = null;


function htmlView() {
    const htmlView = `
    <!-- phần này phần web -->
        <h2>Modal Example</h2>
        <button>Open Modal</button>

        <!-- tạo modal nổi lên web -->
        <div class="wrapper_modal">  
                <div class="content_modal" >
                <h2>Codelove</h2>
                    <p>
                        Chúng tôi muốn giúp bạn
                        trên hành trình trở thành
                        lập trình viên 
                        chuyên nghiệp
                    </p>
                    <p class="close">X</p>
                <div>
            </div>
        </div>`;
        container.innerHTML = htmlView;
}

function handleClose(event) {
    
}


htmlView();

container.addEventListener('click', handleClose);




