let bulb = document.querySelector("#bulb");

let btn1 = document.querySelector(".btn1");

let btn2 = document.querySelector(".btn2");


btn1.addEventListener("click",function(){
    bulb.style.backgroundColor = "yellow";    
});

btn2.addEventListener("click",function(){
    bulb.style.backgroundColor = "transparent";
});