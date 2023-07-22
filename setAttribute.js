const input=document.getElementById("i11");
const button=document.getElementById("1").addEventListener("click",function(){
input.setAttribute("id","i1");
input.setAttribute("name","inputbutton");
input.setAttribute("value","Alisha");
input.setAttribute("placeholder","Enter your name");
});
const input1=document.getElementById("i22");
const button2=document.getElementById("2").addEventListener("click",function()
{   
    input1.setAttribute("type","password");
    input1.setAttribute("id","p1");
    input1.setAttribute("value","12345");
    input1.setAttribute("placeholder","Enter your password");
    input1.setAttribute("data-person",JSON.stringify({Name:"Sid",Age:"35"}));
    input1.addEventListener("focus",function(){
        const person=input.getAttribute("data-person");
        window.alert(person);
    })
});
console.log(document);