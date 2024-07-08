const domContainer = document.getElementById('root');


function Change() {
    const [celsius, setCelsius] = React.useState('');
    const [fahrenheit, setFahrenheit] = React.useState('');
    const [kelvin, setKelvin] = React.useState('');

    const tems = [
        'Celsius',
        'Fahrenheit',
        'Kelvin'
    ];

    const handleCelsiusChange = (event) => {
        const value = event.target.value;
        setCelsius(value);
        setFahrenheit((value * 9/5 + 32).toFixed(2));
        setKelvin((parseFloat(value) + 273.15).toFixed(2));
    };

    const handleFahrenheitChange = (event) => {
        const value = event.target.value;
        setFahrenheit(value);
        setCelsius(((value - 32) * 5/9).toFixed(2));
        setKelvin((((value - 32) * 5/9) + 273.15).toFixed(2));
    };

    const handleKelvinChange = (event) => {
        const value = event.target.value;
        setKelvin(value);
        setCelsius((value - 273.15).toFixed(2));
        setFahrenheit(((value - 273.15) * 9/5 + 32).toFixed(2));
    };

    function renderTem(tem, index) {
        let value, handleChange;
        if (tem === 'Celsius') {
            value = celsius;
            handleChange = handleCelsiusChange;
        } else if (tem === 'Fahrenheit') {
            value = fahrenheit;
            handleChange = handleFahrenheitChange;
        } else if (tem === 'Kelvin') {
            value = kelvin;
            handleChange = handleKelvinChange;
        }

        return (
            <div class={tem} key={index}>
                <label htmlFor={tem}>{tem}</label><br />
                <input
                    type="number"
                    class="temp-input"
                    value={value}
                    onChange={handleChange}
                />
            </div>
        );
    }

    return (
        <div class="container">
            <h1>The Temperature Converter App</h1>

            <div class="body">

                <form action="handleTemperature">
                    {tems.map(renderTem)}
                </form>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(domContainer);
root.render(<Change/>);