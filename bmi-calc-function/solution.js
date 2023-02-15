// 1-
const calculateBMI = (weight, height) => {
  let bmi = (weight / (((height / 100) * height) / 100)).toFixed(2);
  return bmi;
};

// 2-
const whoIsBiggest = (per1, per2, bmi1, bmi2) => (bmi1 > bmi2 ? per1 : per2);

console.log(whoIsBiggest('Frank', 'Mark', 26.72, 28.33));

// 2- Bonus
const whoIsBiggest2 = (per1, per2, weight1, weight2, height1, height2) => {
  let per1bmi = calculateBMI(weight1, height1);
  let per2bmi = calculateBMI(weight2, height2);
  if (per1bmi > per2bmi) {
    return per1;
  } else {
    return per2;
  }
};

console.log(whoIsBiggest2('Max','Martin', 95, 86, 193, 186))