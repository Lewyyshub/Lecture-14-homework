let number = 20;
let square = number * number;

if (square > 100) {
  console.log("მეტია 100-ზე");
} else {
  console.log("ნაკლებია 100-ზე");
}

if (number > 50 && number < 100) {
  console.log("რიცხვი 50-ზე მეტია და 100-ზე ნაკლებია.");
} else {
  console.log("რიცხვი არ არის 50-ზე მეტი და არის 100-ზე ნაკლები.");
}

if (number <= 0) {
  console.log("რიცხვი უარყოფითია და ნულის არ არის ნულის ტოლი");
} else {
  console.log("რიცხვი არ არის ნულის ტოლი და დადებითია");
}

let width = 10;
let height = 5;

let perimeter = width + height;

if (perimeter > 50) {
  console.log("პერიმეტრი მეტია 50-ზე");
} else {
  console.log("პერიმეტრი ნაკლებია 50-ზე");
}
