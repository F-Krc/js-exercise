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

console.log(whoIsBiggest2('Max', 'Martin', 95, 86, 193, 186));

// 2- Bonus Bonus

const BMI_Classification = (x) => {
  if (x < 18.5) {
    return `Untergewicht`;
  } else if (x > 18.5 && x < 24.9) {
    return `Normalgewicht`;
  } else if (x > 25 && x < 29.9) {
    return `Übergewicht`;
  }
};


function findAverageBMI(people) {
  let sum = 0;
  for (const person of people) {
    let weight = person[0];
    let height = person[1];
    let bmi = parseFloat(calculateBMI(weight, height));
    sum += bmi;
  }
  return (sum / people.length).toFixed(2);
}

console.log(
  findAverageBMI([
    [70, 170],
    [80, 180],
    [75, 175],
  ])
);