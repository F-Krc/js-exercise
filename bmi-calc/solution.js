//Q1 Store Mark's and John's mass and height in variables.
let markHeight = 1.86;
let markMass = 76;
let johnHeight = 1.82;
let johnMass = 73.5;

//Q2 Calculate both their BMIs and store their BMIs in variables. 
let markBMI = markMass/(markHeight * markHeight);
let johnBMI = johnMass/(johnHeight * johnHeight);


//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.
let markMoreBeefCake = markBMI > johnBMI;


//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 
console.log(`Q4: Is Mark's BMI higher than John's? Why yes, it's ${markMoreBeefCake}, it is`);


//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI. 

if(markMoreBeefCake === true){
    console.log(`Q5: Mark ${markBMI.toFixed(2)}`)
}else{
    console.log(`Q5: John ${johnBMI.toFixed(2)}`);

}