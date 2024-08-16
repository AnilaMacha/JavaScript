let increase=document.getElementById("i-btn");
let decrease=document.getElementById("d-btn");
let reset=document.getElementById("r-btn");
let counterlabel=document.getElementById("h1");

let count=0;

increase.onclick=function(){
  count++;
  counterlabel.textContent=`${count}`}

decrease.onclick=function(){
  count--;
  counterlabel.textContent=`${count}`
}

reset.onclick=function(){
  count=0;
  counterlabel.textContent=`${count}`
}