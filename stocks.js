const initialPrice  = document.querySelector("#initial-price")
const stockQty = document.querySelector("#stock-qty")
const finalPrice = document.querySelector("#final-price")
const calcBtn = document.querySelector(".calc-btn")
const outputDiv = document.querySelector(".output-div")


calcBtn.addEventListener("click",clickHandler);

function clickHandler(){
  const inputs = inputValue() ;
  
  console.log(inputs.initialPriceVal,inputs.stockQtyVal,inputs.finalPriceVal)
  

//   console.log(inputs[0],inputs[1],inputs[2])   // to console log with inputVal
}


function inputValue(){
    return{
        initialPriceVal: initialPrice.value ,
        stockQtyVal: stockQty.value ,
        finalPriceVal: finalPrice.value ,
    }
}


// function inputVal(){             // alternate function to take input values
//    var initialPriceVal=initialPrice.value ;
//    var stockQtyVal= stockQty.value ;
//    var finalPriceVal=finalPrice.value;
   
// return [initialPriceVal, stockQtyVal, finalPriceVal] // returning values inside an array

// }