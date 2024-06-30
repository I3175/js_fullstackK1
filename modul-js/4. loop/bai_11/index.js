for(let row = 1; row <= 5; row++ ){
    let result = '';
    const star = 9;
    for (let i = 1;  i <= star; i++){
        // in sao 
        if (row === 1 || i === row || i === 10 - row){
            result += '*';
        }else {
            result += ' ';
        }
    }
    console.log(result);
}

// cach 2 
for (let row = 1; row <= 5; row ++){
    let result = '';
     for (let i = 0; i <= row-1; i++){
        result += ' ';
     }
     for (let j = 0; j <= 11 - 2 * row; j++){
        if ( row === 1  || j === 11 - 2 * row  || j === 1){
            result += '*';
        }else {
            result += ' ';
        }
     }
     console.log(result);
}