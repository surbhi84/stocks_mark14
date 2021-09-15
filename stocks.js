const initialPrice  = document.querySelector("#initial-price")
const stockQty = document.querySelector("#stock-qty")
const finalPrice = document.querySelector("#final-price")
const calcBtn = document.querySelector(".calc-btn")
const outputDiv = document.querySelector(".output-div")

console.log(initialPrice,stockQty,finalPrice,calcBtn,outputDiv);

calcBtn.addEventListener("click",clickHandler);

function clickHandler(){
    console.log("hello")
}