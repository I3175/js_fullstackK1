// 8 dọc 8 ngang
// row lẻ in lẻ
// row chẵn in chẵn

for(let row = 1; row <= 8; row++){
    let result = '';
    for(let j = 1; j <= 8; j++){
        if((j + row) % 2 == 0){
            result += '*';
        }else{
            result += ' ';
        }
    }
    console.log(result);
}
