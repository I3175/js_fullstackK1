// tạo object root dựa trên cây dom thật
const domContainer = document.getElementById('root');
function ShowHideTex() {
    const [isShow, setIsShow] = React.useState(true);
    
    function handleShow() {
        setIsShow(true);
    }

    function handleHide() {
        setIsShow(false);
    }

    function handleToggle() {
        setIsShow(!isShow);
    }
    return (
        <div className="container">
            <p className={isShow === true ? '' : 'hide'}>This is text</p>
        
        <div className="button">
            <button onClick={handleShow}>Show</button>
            <button onClick={handleHide}>Hide</button>
            <button onClick={handleToggle}>Toggle</button>
        </div>

        </div>
    );
}

// tạo ra object root trên cây dom ảo
const root = ReactDOM.createRoot(domContainer);
root.render(<ShowHideTex/>);