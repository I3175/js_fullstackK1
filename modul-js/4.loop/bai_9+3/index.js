// cách 1: chúng ta in ra space và * trên 2 vòng for khác nhau
/**
 * cách này phải tìm ra biểu thức phụ thuộc của space hoặc *
 * thông qua điểm mà chúng ta cần tìm
 */
for (let row = 0; row <= 5 ; row++) {
    // i = số hàng (row)
    let str = '';
    for ( let j = 1; j <= 5 - row; j++){
        // bên trong tạo 4 space
        str = str + ' ';
    }
    for (let k = 1; k <= 2 * row - 1; k++){
        str = str + '*';
    }
    console.log(str);
}



// cách 2: 
for(let row = 1; row <= 5 ; row++) {
    let str = '';
    // ---> space cũng phụ thuộc row 
    // ---> sao cũng phụ thuộc row
    for(let j = 0; j <= 4 + row; j++) {
        // nếu như thế này thì hiện sao
        if(j > 5-row) {
            str += '*';
        }
        //nếu như thế kia thì hiện space
        else {
            str += ' ';
        }
    }
    console.log(str);
}


//cách 3:
for(let row = 1; row <= 5; row++){
    
    let str = '';
    

    // in ra space đứng trước mỗi hàng
    str = str + ' '.repeat(5-row);

    //in ra sao
    str = str + '*'.repeat(2 * row - 1);

    console.log(str);
}

//