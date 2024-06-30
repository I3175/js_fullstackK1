// # Tạo ra một ứng dụng quy đổi nhiệt độ (C - F - K)

// Yêu cầu giao diện(h7.png)

// - Khi đánh vào bất kỳ 1 ô input nào, nhiệt độ ở các ô input còn lại sẽ tự động được fill vào làm value
const celsiusInput = document.querySelector("[data-type='celsius']");
const fahrenheitInput = document.querySelector("[data-type='fahrenheit']");
const kelvinInput = document.querySelector("[data-type='kelvin']");

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function toKelvin(celsius) {
    return parseFloat(celsius) + 273.15;
}

function fromFahrenheit(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function fromKelvin(kelvin) {
    return kelvin - 273.15;
}

celsiusInput.addEventListener("input", function () {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        fahrenheitInput.value = toFahrenheit(celsius).toFixed(2);
        kelvinInput.value = toKelvin(celsius).toFixed(2);
    }
});

fahrenheitInput.addEventListener("input", function () {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        const celsius = fromFahrenheit(fahrenheit);
        celsiusInput.value = celsius.toFixed(2);
        kelvinInput.value = toKelvin(celsius).toFixed(2);
    }
});

kelvinInput.addEventListener("input", function () {
    const kelvin = parseFloat(kelvinInput.value);
    if (!isNaN(kelvin)) {
        const celsius = fromKelvin(kelvin);
        celsiusInput.value = celsius.toFixed(2);
        fahrenheitInput.value = toFahrenheit(celsius).toFixed(2);
    }
});



