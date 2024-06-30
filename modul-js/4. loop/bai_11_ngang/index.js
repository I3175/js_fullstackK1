for(row = 1; row <= 10; row++){

    let str = '';
    for(let i = 1; i <= 5- Math.abs(5 - row); i++){
        str += '*';
    }
    console.log(str);
}