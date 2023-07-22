//Method 1 : Query Selector
console.log(window.document);
const body1 = document.querySelector("body");
console.log(body1);
const h2 = document.createElement("h1");
h2.innerText = 'How to use create Element API';
console.log(h2);
body1.appendChild(h2);
console.log(window.document);

function createInput(inputType, inputId, inputPlaceholder)
{
const input=window.document.createElement("input");
input.setAttribute("type",inputType);
input.setAttribute("id",inputId);
input.setAttribute("name",inputId);
input.setAttribute("placeholder",inputPlaceholder);
return input;
}

body1.appendChild(createInput("text","username","Enter your username"));
body1.appendChild(createInput("password","password","Enter secure password"));

//Method 2 : Get Element by ID
const body2=document.getElementById("body");
const div=document.createElement("div");
div.setAttribute("id","root");
const h1=document.createElement("h1");
h1.innerText="Hello World";
h1.style.background="pink";
h1.style.color="blue";
h1.style.textAlign="center";
div.appendChild(h1);
body2.appendChild(div);
console.log(window.document);

const rootDiv=document.getElementById("root");
console.log(rootDiv);
rootDiv.addEventListener("click",function(){
h1.style.background="blue";
h1.style.color="pink";
h1.style.textAlign="center";
});