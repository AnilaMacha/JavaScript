const text=document.getElementById("text");
const celsiusToFahrenheit=document.getElementById("celsiusToFahrenheit");
const FahrenheitToCelsius=document.getElementById("FahrenheitToCelsius");
const result=document.getElementById("result");

let temp;

function convert(){
  temp=Number(text.value);
  if(celsiusToFahrenheit.checked){
    temp= temp*9/5 +32;
    result.textContent=`${temp} °F`;
  }
  else if(FahrenheitToCelsius.checked){
    temp=temp-32*(5/9);
    result.textContent=`${temp} °c`;
  }
  else{
    result.textContent="Select an Option to convert";
  }
}