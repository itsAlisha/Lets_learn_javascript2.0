const h1=document.querySelector("h1");
const button=document.querySelector("button");
console.log(h1);  //loads h1 statement
h1.innerText="Hello, let's know more abt DOM sounds better, No?";  //changing HTML text
// button.addEventListener("click",function(){
//     h1.innerText="DOM Manipulation stands for Document Object Model Manipulation. It is about modifying HTML content w/o refreshing";
// });

// button.addEventListener("click", function()
// {
// h1.innerText=`Hello This is ${Math.random()}`;                          //decimal
// });

// button.addEventListener("click",function()
// {
//     h1.innerText=`Hello This is ${Math.floor(Math.random()*(99))}`;          //whole numbers
// },1000);

setInterval(function(){
h1.innerText=`Hello This is ${Math.floor(Math.random()*(99))}`;
},1000);