const subscribeBtn=document.getElementById("subscribeBtn");
const visaBtn= document.getElementById("visaBtn");
const mastercardBtn=document.getElementById("mastercardBtn");
const paypalBtn= document.getElementById("paypalBtn");
const mysubmit=document.getElementById("mysubmit");
const subscribeResult=document.getElementById("subscribeResult");
const paymentResult=document.getElementById("paymentResult");

mysubmit.onclick=function(){
  if(subscribeBtn.checked){
    subscribeResult.textContent=`you are subscribed!`;
  }
  else{
    subscribeResult.textContent=`you are not subscribed, Please Subscribe!`
  }
  if(visaBtn.checked){
    paymentResult.textContent=`you choose visa card for payment!`;
  }
  else if(mastercardBtn.checked){
    paymentResult.textContent=`you choose master-card for payment!`;
  }
  else if(paypalBtn.checked){
    paymentResult.textContent=`you choose paypal for payment!`;
  }
  else{
    paymentResult.textContent=`you must choose card type for payment`;
  }
}

