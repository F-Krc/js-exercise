function validateCreditCard(creditCardNum) {
  let cardNumber = creditCardNum.replaceAll('-', '').split('');
  let result = {
    valid: true,
    number: creditCardNum,
  };

  // Input must be numbers only
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < cardNumber.length; i++) {
    if (num.indexOf(parseInt(cardNumber[i])) === -1) {
      result.valid = false;
      result.error = 'invalid characters';
      return result;
    }
  }

  // Check if input has 16 digits
  if (cardNumber.length !== 16) {
    result.valid = false;
    result.error = 'not 16 digits';
    return result;
  }

  // Number must consist of at least two different digits (all of the digits cannot be the same one)
  let temp = [];
  for (let i = 0; i < cardNumber.length; i++) {
    if (temp.indexOf(cardNumber[i]) === -1) {
      temp.push(cardNumber[i]);
    }
  }

  if (temp.length === 1) {
    result.valid = false;
    result.error = 'need more than 1 unique digit';
    return result;
  }

  // The final digit must be even
  if (cardNumber[cardNumber.length - 1] % 2 !== 0) {
    result.valid = false;
    result.error = 'the last digit is odd';
    return result;
  }

  // The sum of all the digits must be greater than 16
  var sum = 0;
  for (let i = 0; i < cardNumber.length; i++) {
    sum += parseInt(cardNumber[i]);
  }
  if (sum <= 16) {
    result.valid = false;
    result.error = 'sum less than 16';
    return result;
  }

  // If all checks pass, the credit card number is valid
  return result;
}

/**** tests *****/
console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
console.log(validateCreditCard('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false, number: 'a923-3211-9c01-1112', error: 'invalid characters' }
console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false, number: '4444-4444-4444-4444', error: 'need more than 1 unique digit' }
console.log(validateCreditCard('1211-1111-1111-1111')); //{ valid: true, number: '1211-1111-1111-1112' }
console.log(validateCreditCard('1011-1101-1111-1110')); //{ valid: false,number: '1011-1101-1111-1110', error: 'sum less than 16'}
console.log(validateCreditCard('6666-6666-6666-166')); //{ valid: false, number: '6666-6666-6666-166', error: 'not 16 digits' }
