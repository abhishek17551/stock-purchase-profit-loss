const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitButton = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");



function calculateProfitAndLoss(initial,quantity,current){
    if (initial <= 0 || current<=0 || quantity <=0){
        showOutput("Please enter positive values");
        return lossPercentage;
        
    }
    else if(initial > current){
        //logic for loss
        var loss = (initial-current) * quantity;
        var lossPercentage = (loss/initial) * 100;

        showOutput("The loss is " + loss + " and the percent is " + lossPercentage +"%");
    }
    else if(initial < current){
        //logic for loss
        var profit = (current-initial) * quantity;
        var profitPercentage = (profit/initial) * 100;

        showOutput("The profit is " + profit + " and the percent is " + profitPercentage +"%");
    }
    else {
        //rest of the logic
        showOutput("No pain No gain, No gain No pain");
    }
}


function submitHandler(){
    var ip = Number(initialPrice.value).toFixed(3);
    var qty = Number(stocksQuantity.value).toFixed(3);
    var curr = Number(currentPrice.value).toFixed(3);

    calculateProfitAndLoss(ip, qty, curr);

}

function showOutput(message){
    outputBox.innerHTML = message;
}




submitButton.addEventListener('click', submitHandler);