for(let row = 1; row <= 5; row++) {
    let result = '';
    for(let j = 5; j >= 1; j--) {
        if((j - row) % -2 == 0 || row === 5){
            result += '*';
        }else {
            result += ' ';
        }
    }
    console.log(result);
}