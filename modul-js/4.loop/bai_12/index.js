for(let row = 1; row <=3; row++ ){

    let result = '';
    for(let k = 1; k <= 3 - row; k++){
        result += ' ';
    }
    for(let col = 1; col <= 2*row-1; col++){
        result += '*';
    }
    console.log(result);
}