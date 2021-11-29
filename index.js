function scuberGreetingForFeet(someValue) {
  // Write your code here!
  let result
if (someValue <= 400) {
  result = "This one is on me!";
return result;
}
 else if (someValue <= 2499 && someValue >= 2000) {
result = "I will gladly take your thirty bucks."
return result;
 }
 else if(someValue >= 2500) {
   result = "No can do."
   return result;
 }
 }

function ternaryCheckCity(city){
  // Write your code here!
 const cityMessage = (city === 'NYC') ? ('Ok, sounds good.') : ('No go.');
 
 return cityMessage;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
  case 'generous':
    return 'Thank you so much.';
    break;
    case 'not as generous':
      return 'Thank you.';
      break;
      default:
        return 'Bye.';
        break;
  }

tip;
}
