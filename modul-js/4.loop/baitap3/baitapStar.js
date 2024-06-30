
// in ra tất cả các hàng
let starItem = '';
for (let row = 1; row < 11; row++){
   // in ra hàng thứ row
    for (let starCharacter = 1; starCharacter < 11 - row;  starCharacter++) {
        starItem += '*';
    }
    starItem += '</br>';
}
document.write(starItem);
/** row   *     space
 *  
 *  1   10    0
 *  2   9     1
 *  3   8     2
 *  4   7     3
 *  5   6     4
 *  6   5     5
 *  7   4     6
 *  8   3     7
 *  9   2     8  
 *  10  1     9
 */