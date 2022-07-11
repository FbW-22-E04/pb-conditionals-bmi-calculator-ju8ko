//Q1 Store Mark's and John's mass and height in variables.
const markHeight = 1.93;
const markMass = 89;
const johnHeight = 1.81;
const johnMass = 80;

//Q2 Calculate both their BMIs and store their BMIs in variables.
const markBMI = (markMass / markHeight ** 2).toFixed(2);
const johnBMI = (johnMass / johnHeight ** 2).toFixed(2);

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.
const markMoreBeefCake = markBMI > johnBMI ? true : false;
console.log(markMoreBeefCake);
//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").
console.log(`Q4: Is Mark's BMI higher than John's? It's ${markMoreBeefCake}`);
//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI.
if (markBMI > johnBMI) {
  console.log(`Q5: Mark ${markBMI}`);
} else {
  console.log(`Q5: John ${johnBMI}`);
}
