// window.alert('hello');
// document.getElementById("myH1").textContent='hello';

//data types: Number, String, Boolean
//js is dynamically typed, data type is decided based the data we passed to the variable, we use let var const to create variables.

// let age=25;
// console.log(`your age is ${age}`);
// console.log(typeof age);


// let username;
// document.getElementById("submit-btn").onclick=function(){
//   username=document.getElementById("myText").value;
//   document.getElementById("myH1").textContent=`Hello ${username}`;
// }

// let username;
// username=window.prompt("what is user name");
// console.log(username);


//TypeCasting: Number(), String(), Boolean()
//let age=window.prompt("enter your age:");
// age=Number(age);
// age +=1;
// document.write(`your age is ${age}`);


// let radius;
// const pi=3.14;
// let circumference;

// document.getElementById("submit-btn").onclick=function(){
//   radius=document.getElementById("myRadius").value;
//   radius=Number(radius);
//   circumference= 2*pi*radius;
//   document.getElementById("myH3").textContent=`circumference of the circle is: ${circumference}`;
// }

//Math:built in object that provides a collection of properties and methods

// let a=10.5;
// let b=11;
// console.log(Math.pow(a, 2));
// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(Math.round(a));
// console.log(Math.sqrt(a));
// console.log(Math.abs(a));
// console.log(Math.trunc(a));
// console.log(Math.max(a,b));
// console.log(Math.min(a,b));
// console.log(Math.random());


// let min=20;
// let max=50;
// console.log(Math.floor(Math.random()*(max-min))+min);

//10. If Statements: if condition is true, execute some code, if not execute someother code

// let time=window.prompt("enter the time:")

// if(time<12){
//   document.write("Good Morning!");
// }
// else{
//   document.write("Good Afternoon");
// }

//11. Checked property: it determines the checked state of an html checkbox or radio button element

//12. Ternary Operator: a shortcut to if{} else{} statements, helps to assign a variable based in condition, condition?codeiftrue:codeiffalse;

// const age=window.prompt("enter your age:")
// const message=age>21?`you are an adult`:`you are a minor`;
// document.getElementById("myH1").textContent=`your age is:${age}, ${message}`;

//13.Switch: It can be an efficient replacement to many else if statements

// let testScore=window.prompt("enter your test score:")
// let grade;

// switch(true){
//   case testScore>90:
//     document.getElementById("myH1").textContent=`you got A grade, Congratulations 🥳`;
//     break;
//   case testScore>80:
//     document.getElementById("myH1").textContent=`you got B grade, Congratulations 🥳`;
//     break;
// }

//14:String Methods: allow you to manipulate and work with text(strings)

// let username="Anila";
// console.log(username.charAt(2));
// console.log(username.indexOf('n'));
// console.log(username.length);
// console.log(username.trim()); this will remove extra white spaces
// console.log(username.toLowerCase());
// console.log(username.toUpperCase());
// console.log(username.repeat(4)); this will repeat the string for 4 times

// let result=username.includes(" "); //we can also use startsWith and endsWith
// if(result){
//   console.log(`your username cannot include a space`)
// }
// else{
//   console.log(username);
// }

// let phoneNumber="123-456-7890";
// console.log(phoneNumber.replaceAll("-",""))

//15.String Slicing: Creating a substring from the portion of String, string_name.slice(start,end);

// const email="anila80@gmail.com";
// let username=email.slice(0,email.indexOf("@"));
// console.log(username);

//16.Method Chaining: calling one method after another in one continuous line of code.

// let username="AnilaMacha";
// //No Method Chaining
// let letter=username.charAt(0);
// letter=letter.toUpperCase();
// let extraChars=username.slice(1);
// extraChars=extraChars.toLowerCase();
// username=letter+extraChars;
// console.log(username);

// //with method chaining:
// username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

//17.Logical Operators: used to combine and manipulate boolean values AND:&&, OR:||, NOT:!

// let temp=window.prompt("enter the temperature:");
// if(temp>20 && temp<30){
//   console.log("weather is good");
// }
// else{ 
//   console.log("weather is bad");
// }

//18: STrict Equlity: 
// = assignment operator
// == comaprision operator(compares if values are equal)
// === StrictEquality operator(compares both values and data types)
/*!= inequality operator
!== strict inequality operator */

//19: While Loop: repeat some code while some condition is true.

//20:For Loop: Repeat some code a limited amount of times for(initialization;condition;increment)

// for(let i=10;i>=0;i--){
//   console.log(i);
// }

//21:Number Guessing game: 

//22:Functions: A section of reusable code, declare code once and use it whenever you want, Call the function to execute that code.

// function add(x,y){//parameters
//   return x+y;
// }
// console.log(add(4,4)); //arguments

// function isEven(x){
//   return x%2===0 ? true:false;
// }
// console.log(isEven(11));

// function isValidEmail(email){
//   return email.includes("@gmail.com")?true:false;
// }
// console.log(isValidEmail("anila@gmail.com"))

//23:Variable scope:where a variable is recognised and accessed(local vs global)

//a variable declared inside the function as local scope, we can declare another variable with the same name outside the function.

//we can use the variable inside functions,if is declared outside of function, but we cannot use the variables outside, if are declared inside function.

//if the variable is declared with the same name inside and outside the function, the variable declared inside function has larger scope, if we are using inside the function.

//24: Temperature Conversion project

//25: Arrays:A variable like structure that can hold more than 1 value.

// let fruits=["apple", "banana", "orange"];
// fruits[3]="grapes";
// fruits.push("pineapple");
// fruits.unshift("dragon");
// fruits.pop();
// fruits.shift();
// for(item of fruits){
//   console.log(item);
// }
// for(item in fruits){
//   console.log(fruits[item]);
// }
// console.log(fruits.indexOf("banana"));
// console.log(fruits.length);

//26:Spread Operator: ... allows an iterable such as an array or string to be expanded into seperate elements(unpacks the elements). we can create a copy and also add 2 arrays using spread operator.

// let numbers=[1,2,3,4,5];
// console.log(...numbers);
// console.log(Math.min(...numbers));
// let name="anila";
// console.log(...name);

//27: Rest parameters: (...rest) allows to bundle seperate elements to an array, whereas spread operator expands the array into seperate elements.
// function summ(...numbers){
//   let sum=0;
//   for(i in numbers){
//     sum+=Number(i);
//   }
//   return sum;
// }
// let numbers= summ(1,2,3,4,5);
// console.log(numbers);

// function fullName(...strings){
//   return strings.join(" ");
// }
// let strings=fullName("anila","macha");
// console.log(strings);

//28:RollingDice

//29: RAndomPassword Generator:

//30: callback: a function that is passed as an argument to another function.used to handle asynchronus operations:Reading the file,network requests, Interacting with databases.

// hello(hi);

// function hello(callback1){
//   console.log("hello");
//   callback1();
// }
// function hi(){
//   console.log("hi");
// }

//31: forEach()= method used to iterate over the elements of an array and apply a specific function (callback) to each element.
//array.forEach(callback)

// let arr=[1,2,3,4];
// arr.forEach(add);
// arr.forEach(display);
// function add(element,index,arr){
//   arr[index]=element*3;
// }
// function display(element){
//   console.log(element)
// }

//32:map()= accepts a callback function and applies that function to each element of an array, then return a new array.

// const numbers=[1,2,3,4];
// const squrs=numbers.map(square);
// console.log(squrs);
// console.log(squrs[3]);
// function square(element){
//   return element**2;
// }

// const dates=["2024-1-4","2023-2-5","2022-5-6"];
// const FD=dates.map(Format);
// console.log(FD);
// function Format(element){
//   const formateddates=element.split("-");
//   return `${formateddates[1]}/${formateddates[2]}/${formateddates[0]}`
// }

//33: .filter():creates a new array by filtering out elements

// let numbers=[1,2,3,4,5,6,7,8,9];
// const even=numbers.filter(isEVen);
// console.log(even);
// function isEVen(element){
//   return element%2==0;
// }

//34:reduce()= reduces the elements of an array to a single value

// let numbers=[1,2,3,4,5];
// const result=numbers.reduce(sum);
// console.log(result);
// function sum(accumulator, element){ //accumulator=previous result and element=next element
//   return accumulator+element;
// }

//35: function Expressions= a way to define functions as values or variables
// //passing a variable
// const hello=function hell(){
//   console.log("hello");
// }
// hello();
// //passing as a value
// setTimeout(function(){
//   console.log("hello");
// },3000)

// const nums=[1,2,3,4,5];
// const squrs=nums.map(function(element){
//   return Math.pow(element,2);
// })
// console.log(squrs);

//36: Arrow functions= a concise way to write function expressions. good for simple functions that we only use once. (parameters)=>somecode;

// const hello=(name)=>console.log(`Hello ${name}`);
// hello("anila");

// const nums=[1,2,3,4,5];
// const squrs=nums.map((element)=>Math.pow(element,2));
// console.log(squrs);
// const even=nums.filter((element)=>element%2===0)
// console.log(even);
// const total=nums.reduce((acc,ele)=>acc+ele);
// console.log(total);

//37: objects= a collection of related properties and methods can represent real world objects(people, products, places) 
//object={key:value, 
//        function()}

// const obj={
//   name:"anila",
//   age:25,
//   about:function(){console.log("i am a student")},
//   location:()=>console.log("i am from mlg"),
// }
// console.log(obj.name,obj.age);
// obj.about();
// obj.location();

//38:this= reference to the object where this is used(the object depends on immediate context). this doesn't work inside arrow functions.

// const person1={
//   name:"Anila",
//   about:function(){console.log(`my name is ${this.name}`)}
// }
// person1.about();

//39:constructors= special method for defining properties and methods of objects.
// function Person(name,age,gender){
//   this.name=name;
//   this.age=age;
//   this.gender=gender;
//   this.about=function(){console.log(`my name is ${this.name}, my age is ${this.age}`)}
// }

// const person1=new Person("anila",25,"female");
// console.log(person1.name);
// person1.about();

//40: class= classes provide a more structured and cleaner way to work with objects compared to traditional constructor functions. ex:static keyword, encapsulation, inheritence.

// class Product{
//   constructor(name,price){
//     this.name=name;
//     this.price=price;
//   }
//   displayProducts(){
//     console.log(`the product is ${this.name}, its price is $${this.price}`);
//   }
//   productCost(salesTax){
//     return this.price+(this.price*salesTax);
//   }
// }

// const prod1=new Product("shirts",25);
// prod1.displayProducts();
// console.log(prod1.productCost(0.05));

