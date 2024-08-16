let minNum=1;
let maxNum=100;
let answer=Math.floor(Math.random()*(maxNum-minNum+1))

let attempts=0;
let guess;
let running=true;

while(running){
  guess=window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
  guess=Number(guess);
  if(isNaN(guess)){
    window.alert("Please enter a valid Number");
  }
  else if(guess<minNum || guess>maxNum){
    window.alert("Please enter a valid Number");
  }
  else{
    attempts++;
    if(guess<answer){
      window.alert("You are Too LOW, Try gain!!");
    }
    else if(guess>answer){
      window.alert("You are Too High, Try again!!");
    }
    else{
      window.alert(`Yor are Correct!!, You took ${attempts} attempts`);
      running=false;
    }
  }
}