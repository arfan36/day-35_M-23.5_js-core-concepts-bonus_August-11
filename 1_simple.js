// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 5; i >= 1; i--) {
//     sum += i; 
// }
// console.log(sum);

function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}
const result = sum(5);
console.log(result);

/* 
    i + sum(i-1)
    5 + sum(5-1)
    5 + sum(4)
    5 + i + sum(i-1)
    5 + 4 + sum(4-1)
    5 + 4 + sum(3)
    5 + 4 + 3 + sum(2)
    5 + 4 + 3 + 2 + sum(1)
    5 + 4 + 3 + 2 + 1
    15
 */