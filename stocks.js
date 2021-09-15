const initialPrice  = document.querySelector("#initial-price")
const stockQty = document.querySelector("#stock-qty")
const finalPrice = document.querySelector("#final-price")
const calcBtn = document.querySelector(".calc-btn")
const outputDiv = document.querySelector(".output-div")


calcBtn.addEventListener("click",clickHandler);

function clickHandler(){
const inputs = inputValue() ;
  
const result =calculateResult(inputs);
  
output(result) 

//   console.log(inputs[0],inputs[1],inputs[2])   // to console log with inputVal
}


function inputValue(){
    return{
        initialPriceVal: initialPrice.value ,
        stockQtyVal: stockQty.value ,
        finalPriceVal: finalPrice.value ,
    }
}

function calculateResult(inputs){
   const initialBuy =inputs.initialPriceVal*inputs.stockQtyVal
   const finalBuy = inputs.stockQtyVal*inputs.finalPriceVal
   const results = finalBuy-initialBuy
   const resultPerc = results/initialBuy* 100;

return { results , resultPerc}
}

function output(res){

    if (res.results > 0) {
    outputDiv.innerText= `the profit is ${res.results} and percentage ${res.resulttPerc}` ;}

    else if(res.results <0) {
        outputDiv.innerText= `the loss is ${res.results} and percentage ${res.resultPerc}` ;}

    else {
        outputDiv.innerText= `you have no loss or profit`}
}



// function inputVal(){             // alternate function to take input values
//    var initialPriceVal=initialPrice.value ;
//    var stockQtyVal= stockQty.value ;
//    var finalPriceVal=finalPrice.value;
   
// return [initialPriceVal, stockQtyVal, finalPriceVal] // returning values inside an array

// }