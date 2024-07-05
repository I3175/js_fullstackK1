// render giao diện khi bắt đầu chạy
const domContainer = document.getElementById('root');

// component
function Slider() {
    const [slider, setSlider] = React.useState(1);

    let hide = 'hide';

    const handleNextButton = function () {
        slider + 1;
        setSlider(slider);
    }
    const handlePreButton = function () {
        slider - 1;
        setSlider(slider);
    }
    return (
    <div class="content">
        <div class="slider_top">
             <div class="images" id="imgs">
                <img src="img/1.jpg" alt="" class={`${hide} ${slider}`}/>
                <img src="img/2.jpg" alt="" class={hide}/>
                <img src="img/3.jpg" alt="" class={hide}/>
                <img src="img/4.jpg" alt="" class={hide}/>
                <img src="img/5.jpg" alt="" class={hide}/>
             </div>

             <div class="icon_click">
                <button class="next" onClick={handleNextButton}>Next</button>
                <button class="previous" onClick={handlePreButton}>Previous</button>
             </div>
        </div>

        <div class="dots">
            <button class="active"></button>
            <button ></button>
            <button ></button>
            <button ></button>
            <button ></button>
        </div>
    </div>
    );
}

const root = ReactDOM.createRoot(domContainer);
root.render(<Slider/>);