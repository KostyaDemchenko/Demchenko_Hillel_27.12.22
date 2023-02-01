const columnArr = parseInt(prompt('Enter number of columns:'), 10);
const rowsArr = parseInt(prompt('Enter number of rows:'), 10);

if (!Number.isNaN(columnArr) && !Number.isNaN(rowsArr)) {
  const array = [];

  for (let i = 0; i < rowsArr; i++) {
    array.push([]);
    for (let j = 0; j < columnArr; j++) {
      const num = j + i;

      if (!Number.isNaN(num)) {
        array[i].push(num);
      } else {
        console.error('Invalid input: not a number');
        j -= 1;
      }
    }
  }
  console.table(array);
} else {
  console.error('Invalid input: not a number');
}