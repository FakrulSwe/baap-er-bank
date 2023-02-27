document.getElementById("btn-deposit").addEventListener("click",function(){
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Clear the deposit field
    depositField.value = "";

    if(isNaN(newDepositAmount)){
        alert("Please provide a valid number");
        return;
    }

    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    //Get Current deposit total
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // Get Balance Current total
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Calculate current balance total
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    
    balanceTotalElement.innerText = currentBalanceTotal;

    
})