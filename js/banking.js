// hebdle deposit event
document.getElementById('deposit-button').addEventListener('click', function(){
  // get the amount deposited
    const depositFilde = document.getElementById ('deposit-input');
    const depositAmmount = depositFilde.value ;
//   console.log(depositAmmount);

// update deposit total
const depositTtotal = document.getElementById('deposit-tk');
const preountAmount = depositTtotal.innerText ;
const upbdeateAmount = parseFloat ( preountAmount) +parseFloat 
( depositAmmount) ;
depositFilde.value =' ';
// pera
depositTtotal.innerText = upbdeateAmount

 // update account balance 
 const balanceTotal = document.getElementById('balance-tkk');
const balanceTotaltext =  balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotaltext);
    const newBalanceTotal = previousBalanceTotal + upbdeateAmount ;
balanceTotal.innerText = newBalanceTotal ;
})

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
const widthoInput = document.getElementById ('withdraw-input');
const withaMountText = widthoInput.value;
const newWidowAmount = parseFloat (withaMountText);
// console.log(withaMountText)

// set-total
const widoAWtoal = document.getElementById('withdraw-tk');
const perWidoWtoal = widoAWtoal.innerText ;
const wTotal = parseFloat (perWidoWtoal);
const newTotal = newWidowAmount + wTotal ;
widoAWtoal.innerText =newTotal;
widthoInput.value =' ';

 // update balance
const balanceTotal = document.getElementById('balance-tkk');
const previousBalance = balanceTotal.innerText ;
const pretexyt = parseFloat (previousBalance);
const newblan = pretexyt -newTotal ;
balanceTotal.innerText =newblan ;



})
