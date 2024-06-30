for (let row = 1; row <= 5; row++) {
    let str = '';
    
    for (let j = 1; j <= 9; j++) {
        if (j >= row && j <= 2*5 - row ){
            str += '*';
        }else {
            str += ' ';
        }
    }
    console.log(str);
}
// cach 3 dung mang
// cach 4 dung 