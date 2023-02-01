const num = parseInt(prompt("Enter the number: "));
let degree = parseInt(prompt("Enter the degree: "));

function pow(num, degree) {
    if (degree === 0) {
        return 1;
    }
    return num * pow(num, degree - 1);
}

console.log(pow(num, degree));
