// render giao diện
const domContainer = document.getElementById('root');

// component
function BackgroundChange() {
    // 1. Khai báo state
    let [bg, setBg] = React.useState('lightgray');

    // 2. xử lý hoạt động
    const handleBox1 = function() {
        setBg(bg = "lightgray")
    }
    const handleBox2 = function() {
        setBg(bg = "lightgreen")
    }
    const handleBox3 = function() {
        setBg(bg = "lightsalmon")
    }
    // 3. render giao diện
    return (
        <div className="box_wrapper" style={{ background: bg }}>
            <div className="box box1" onClick={handleBox1}></div>
            <div className="box box2" onClick={handleBox2}></div>
            <div className="box box3" onClick={handleBox3}></div>
        </div>
    );
}

const root = ReactDOM.createRoot(domContainer);
root.render(<BackgroundChange/>);
