//using querySelector
const div=window.document.querySelector("div");
const btn=window.document.querySelector("button");
btn.addEventListener("click",function(){
div.innerHTML+=`<h1>DOM METHOD ${Math.random()}</h1>`;
const h1Elements=window.document.querySelectorAll("h1");
console.clear();
h1Elements.forEach((h)=>console.log(h));     //To side by side add in console
});

//using getElementById -->We need to define ids and class names
const div1=window.document.getElementById("hi_im_div");
const btn1=window.document.getElementById("yeh_hai_button1");
btn2.addEventListener("click",function(){
div2.innerHTML+=`<h2>Random Numbers : ${Math.random()}</h2>`;
const h1Elements=window.document.querySelectorAll("h1");
console.clear();
h1Elements.forEach((h)=>console.log(h));     //To side by side add in console
});

//using Class Name
const div2=window.document.getElementById("hi_im_div");
const btn2=window.document.getElementById("yeh_hai_button1");
btn2.addEventListener("click",function(){
div2.innerHTML+=`<h2>Random Numbers : ${Math.random()}</h2>`;
const h2Elements=window.document.getElementsByClassName("div_class");
console.clear();
});

const h1=window.document.querySelectorAll("h1");
console.log(h1);
//or
// const allHeadings=window.document.querySelectorAll("h1");
// allHeadings.forEach((h1)=>console.log());
// console.log(allHeadings);