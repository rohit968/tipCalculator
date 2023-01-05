// Global variables access to all the inputs/ ids here

const bill__amount = document.getElementById('bill__amount');
const tip__amount = document.getElementById('tip__amount');
const total__bill__amount = document.getElementById('total__bill__amount');
const total__tip__amount = document.getElementById('total__tip__amount');
const people = document.getElementById('people');
const increasePeople = document.getElementById('increasePeople');
const decreasePeople = document.getElementById('decreasePeople');;

// adding event listener to get the input by the user and calling the calculateTip function
const amounts = document.querySelectorAll('input');
amounts.forEach((amount) => {
  amount.addEventListener('input', calculateTip);
})

// Get number of people alue
let numberOfPeople = Number(people.innerText); 


//Calculate tip function
function calculateTip() {

  // getting the total bill amount and converting to number
  let bill = Number(bill__amount.value);

  //getting the total tip amount
  let tip = tip__amount.value;

  //Calculating total tip and total amount and also fixing them to 2 decimal places
  let total_tip = parseFloat((bill * (tip / 100)).toFixed(2));  
  let total_amount = parseFloat((bill + total_tip).toFixed(2));

  //calculating total amount and total tip for number of people
  total_amount /= numberOfPeople;
  total_tip /= numberOfPeople;

  // Updating the DOM with the value of total tip and total amount
  total__tip__amount.innerText = `$${total_tip.toFixed(2)}`
  total__bill__amount.innerText = `$${total_amount.toFixed(2)}`;

}



increasePeople.addEventListener('click', () => {
//increasing number of people when clicked on + icon
  numberOfPeople += 1;
  //Updating the DOM
    people.innerText = numberOfPeople
    //Calling calculateTip function to calculate total amount and tip for number of people
  calculateTip();
})

decreasePeople.addEventListener('click', () => {
  //checking if number of people is less than one or not
  if (numberOfPeople <= 1) {
    return;
  }
  //decreasing number of people when clicked on - icon
  numberOfPeople -= 1;
  //Updating the DOM
  people.innerText = numberOfPeople;
  //Calling calculateTip function to calculate total amount and tip for number of people
  calculateTip();
})


