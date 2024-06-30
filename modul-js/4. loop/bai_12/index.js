let center = 3;
for (let row = 1; row <= center; row++) {
    let str = '';
    for (let j = 1; j <= center - row; j++) {
        str += ' ';
    }
    for (let k = 1; k <= 2 * row - 1; k++) {
        str += '*';
    }
    console.log(str);
}

for (let row = center - 1; row >= 1; row--) {
    let str = '';
    for (let j = 1; j <= center - row; j++) {
        str += ' ';
    }
    for (let k = 1; k <= 2 * row - 1; k++) {
        str += '*';
    }
    console.log(str);
}

// cach 2

for (let row = 1; row <= 5; row++){
    let result = '';
    for (i = 1; i <= Math.abs(3 - row); i++){
        result += ' ';
    }
    for (let i = 1; i<= 5 - Math.abs(6 - 2*row); i++){
            result += '*';
    }
console.log(result);
}