// render giao diện 
const domContainer = document.getElementById('root');

// component
function Slider() {
    const [slider, setSlider] = React.useState(0);

    const images = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
    ];

    const handleNextButton = function()  {
        setSlider((slider) => {
            const newSlider = slider + 1;
            if (newSlider >= images.length) {
                return 0;
            }
            return newSlider;
        });
    };

    const handlePreButton = function() {
        setSlider((slider) => {
            const newSlider = slider - 1;
            if (newSlider < 0) {
                return images.length - 1;
            }
            return newSlider;
        });
    };


    return (
        <div className="content">
            <div className="slider_top">
                <div className="images" id="imgs">
                    {/* render images */}
                    {images.map( function (image, index) {
                    return (
                            <img
                                key={index}
                                src={
                                    `img/${image}`
                                }
                                className={
                                    slider === index ? '' : 'hide'
                                }
                            />
                        );
                    })}
                </div>

                <div className="icon_click">
                    <button className="next" onClick={handleNextButton}><i class="fa-solid fa-chevron-right"></i></button>
                    <button className="previous" onClick={handlePreButton}><i class="fa-solid fa-chevron-left"></i></button>
                </div>
            </div>
                    {/* render dots */}
            <div className="dots">
                {images.map(function(image, index) {
                return    (
                        <button 
                            key={index} 
                            className={
                                slider === index ? 'active' : ''
                            }
                            onClick= {
                                function handleDotsButton() {
                                setSlider(index);
                            }}
                            >
                        </button>
                    )
                } )}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(domContainer);
root.render(<Slider/>);
