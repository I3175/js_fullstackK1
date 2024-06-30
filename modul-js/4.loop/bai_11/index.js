for(let row = 1; row <= 5; row++ ){
    let result = '';
    
    for (let i = 1;  i <= 9; i++){
        // in sao 
        if (i === row || row === 1 || i === 10 - row){
            result += '*';
        }else {
            result += ' ';
        }
    }
    console.log(result);
}
