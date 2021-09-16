const initialPrice  = document.querySelector("#initial-price")
const stockQty = document.querySelector("#stock-qty")
const finalPrice = document.querySelector("#final-price")
const calcBtn = document.querySelector(".calc-btn")
const outputDiv = document.querySelector(".output-div")


calcBtn.addEventListener("click",clickHandler);

function clickHandler(){
const inputs = inputValue() ;
if (validateInput(inputs)) {
const result =calculateResult(inputs);
output(result)
 }
else {
validationAlert()
}

//   console.log(inputs[0],inputs[1],inputs[2])   // to console log with inputVal
}


function inputValue(){
    return{
        initialPriceVal:parseFloat( initialPrice.value) ,
        stockQtyVal: parseFloat(stockQty.value) ,
        finalPriceVal: parseFloat(finalPrice.value) ,
    }
}

function validateInput(inputs){
if(isNaN(inputs.initialPriceVal) || isNaN(inputs.stockQtyVal) || isNaN(inputs.finalPriceVal) )
return false;
if (inputs.initialPriceVal<=0 || inputs.stockQtyVal<=0 || inputs.finalPriceVal<=0 )
return false;
return true;   
}

function validationAlert(){
    outputDiv.innerText = "Enter input values greater than 0 and fill all input tabs"
}

function calculateResult(inputs){
   const initialBuy =inputs.initialPriceVal*inputs.stockQtyVal
   const finalBuy = inputs.stockQtyVal*inputs.finalPriceVal
   const results = finalBuy-initialBuy
   const resultPerc = results/initialBuy* 100;

return { results , resultPerc }
}

function output(res){
    document.body.style.backgroundColor= 'white' ;
    if (res.results > 0) {
    if (res.resultPerc>50) {
        document.body.style.backgroundColor= 'green' ;
    }   
    outputDiv.innerText= `the profit is ${res.results.toFixed(2)} and percentage ${res.resultPerc.toFixed(2)}` ;}

    else if(res.results < 0) {
        res.results=res.results*(-1);
        res.resultPerc = res.resultPerc*(-1);
        if (res.resultPerc>50) {
            document.body.style.backgroundColor= 'red' ;
        }   
        outputDiv.innerText= `the loss is ${res.results.toFixed(2)} and percentage ${res.resultPerc.toFixed(2)}` ;}

    else {
        outputDiv.innerText= `you have no loss or profit`}
}



// function inputVal(){             // alternate function to take input values
//    var initialPriceVal=initialPrice.value ;
//    var stockQtyVal= stockQty.value ;
//    var finalPriceVal=finalPrice.value;
   
// return [initialPriceVal, stockQtyVal, finalPriceVal] // returning values inside an array

// }