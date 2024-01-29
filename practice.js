//1st task
let x = 1000;
let totalPrice = 700;
let returnValue = x - totalPrice;
//console.log(returnValue);


//2nd task
let math=75.25;
let bio=65;
let chem=80;
let phy=35.45;
let ban=99.50;

let total= (math + bio + chem + phy + ban)/5;
//console.log(total.toFixed(2));


//3rd task
let div=119;

let divAns= 119%5;
//console.log(divAns);


//free drinks
let price = 200;

if (price >= 500) {
    //console.log('Free Coke');
} else {
   // console.log('Add a 30tk Coke');
}


//BMI calculator
let weight = 81;
let heightInInches = 5.10;
let heightInMeters = heightInInches / 39.37;

let bmiNumber = weight / (heightInMeters ** 2);

if (bmiNumber < 18.5) {
    console.log('Underweight');
} else if (bmiNumber >= 18.5 && bmiNumber < 24.9) {
    console.log('Normal');
} else if (bmiNumber >= 25 && bmiNumber < 29.9) {
    console.log('Overweight');
} else if (bmiNumber > 29.9) {
    console.log('Obese');
}






