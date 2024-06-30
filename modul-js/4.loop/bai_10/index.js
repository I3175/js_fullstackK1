for(let row = 1; row <= 5; row++ ){
    let result = '';
    
    for(let i = 0; i <= row - 1; i++){
        result += ' ';
    }
    for(let k = 1; k <= 11 - 2*row; k ++){
        result += '*';
    }
    console.log(result);
}
