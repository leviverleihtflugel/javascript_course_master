const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const mass2Mark = 95;
const height2Mark = 1.88;
const mass2John = 85;
const height2John = 1.76;

const BMI2Mark = mass2Mark / height2Mark ** 2;
const BMI2John = mass2John / height2John ** 2;
const mark2HigherBMI = BMI2Mark > BMI2John;

console.log(BMI2Mark, BMI2John, mark2HigherBMI);
