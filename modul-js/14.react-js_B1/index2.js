// Version 2: Làm thế nào để tự động hoá REact.createElement
// jsx: mở rộng của js -> (js + phần mở rộng của js)


// tạo object 
const name = 'doannguyen';
const age = 20;
const course = [
    {name: 'toan', time: '2h'},
    {name: 'ly', time: '2h'},
    {name: 'hoa', time: '2h'},

]
const helloReact = <h1 class='hello'>
    <h2>
        <span>
            Hello React {name} {age}
        </span>
        <ul>
            {
                course.map(
                    function(element) {
                        return <li>{element.name}</li>;
                    }
                )
            }
        </ul>
    </h2>
</h1>


// render ra người dùng
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(helloReact);


console.log(helloReact);

