function ChangeColor() {
    const colorAllBox = [`lightgray`, `lightgreen`, `lightsalmon`];
    const [colorWrapper, setcolorWrapper] = React.useState(colorAllBox[0]);


    // khi người dùng click thay đổi màu sắc thì chúng ta thay đổi màu sắc
    function handleChangeColor(color) {
        const colorCurrentClick = color.target.getAttribute('data-color');
        setcolorWrapper(colorCurrentClick);
    }



    return (
        
        <div className="box_wrapper" style={{ background: colorWrapper }}>
            {/*chúng ta phải render tất cả các box */}

            {/* dâu này biểu thị map trả về value là mảng các react element */}
            {
                colorAllBox.map(
                    function(color, index) {
                        return (
                            <div className='box' data-color={color} onClick={handleChangeColor} key={index}></div>
                        );
                    }
                )
            }
        </div>
    );
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<ChangeColor/>);