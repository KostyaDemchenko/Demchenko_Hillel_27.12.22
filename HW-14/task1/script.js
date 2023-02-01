const arr = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78, NaN];

let sum = 0;

for (const element of arr) {
    if (typeof element === 'number' && !Number.isNaN(element)) {
        sum += element;
    }
}
console.log(sum);
