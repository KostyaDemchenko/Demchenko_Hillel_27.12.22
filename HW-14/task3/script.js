const columnAmnt = parseInt(prompt('Enter number of columns:'), 10);
const rowsAmnt = parseInt(prompt('Enter number of rows:'), 10);

if (!Number.isNaN(columnAmnt) && !Number.isNaN(rowsAmnt)) {
  const array = [];

  for (let i = 0; i < rowsAmnt; i++) {
    array.push([]);
    for (let j = 0; j < columnAmnt; j++) {
      const num = parseInt(prompt(`Enter number for column ${j + 1} and row ${i + 1}:`), 10);
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