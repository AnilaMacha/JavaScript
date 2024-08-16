
function rollDice(){
  const numOfDice=document.getElementById("text").value;
  const diceResult=document.getElementById("diceResult");
  const diceImage=document.getElementById("diceImage");
  const values=[];
  const images=[];
  for(let i=0;i<numOfDice;i++){
    const value=Math.floor(Math.random()*6)+1;
    values.push(value);
    images.push(`<img src="${value}.png">`)
    
  }
  diceResult.textContent=`dice: ${values.join(",")}`;
  diceImage.innerHTML=images.join('')
}