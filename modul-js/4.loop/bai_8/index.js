for (let row = 1; row <= 5; row++){
    let str = '';
    for(let j = 1; j <= 5; j++){
        if(row === 1 || j === 5 || j === row){  
                str += '*';
        }else {
                str += ' ';
        }
    }    
    console.log(str);
}
// Cách 2 in ra spcae trước mõi hàng
let str2 = '';
for (let row = 1; row <= 5; row++){
    let str2 = '';
    for(let j = 1; j <= row -1 ; j++){
        str2 += ' ';
    }
    // in ra space + sao trên mỗi hàng
    for(let k = 1; k <= 6 - row; k++){
        if(row === 1 || k === 1 || k === 6 - row){
            str2 += '*';
        } else{
            str2 += ' ';
        }
    }
    console.log(str2);
}