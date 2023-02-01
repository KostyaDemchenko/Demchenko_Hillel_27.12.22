function domath(x, sign, y) {
    let result;
  
    switch (sign.trim()) {
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '/':
        result = x / y;
        break;
      case '*':
        result = x * y;
        break;
      case '%':
        result = x % y;
        break;
      case '^':
        result = x ** y;
        break;
      default:
        return 'Error';
    }
  
    return result.toFixed(2);
  }
  
  const firstNum = parseFloat(prompt('Enter first number:'));
  const sign = prompt('Enter operator (+, -, /, *, %, ^):');
  const secondNum = parseFloat(prompt('Enter second number:'));
  
  if (!Number.isNaN(firstNum) && !Number.isNaN(secondNum)) {
    alert(`Result: ${domath(firstNum, sign, secondNum)}`);
  } else {
    alert('Error: Invalid input');
  }
  
  