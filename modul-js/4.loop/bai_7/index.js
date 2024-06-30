for (let row = 1; row <= 5; row++){
    let str = '';
    for(let j = 1; j <= 5; j++){
        if(j === 1 || row === 5 || j === row){  
                str += '*';
        }else {
                str += ' ';
        }
    }    
    console.log(str);
}