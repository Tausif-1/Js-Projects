let counters = 0;

let counterValue = document.querySelector("#counter1")



let btn1 = document.querySelector("#inc-btn1");

btn1.addEventListener("click", function(){
    counters++;
    counterValue.innerHTML = counters;

})

let btn2 = document.querySelector("#res-btn2");

btn2.addEventListener("click", function(){
    counters = 0;
    counterValue.innerHTML = counters;
})

let btn3 = document.querySelector("#dec-btn3");

btn3.addEventListener("click", function(){
    counters--;
    counterValue.innerHTML = counters;
})