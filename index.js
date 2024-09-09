//getting input 
balance = document.getElementById('current-balance'),
depositInput = document.getElementById('deposit-amount'),
withdrawInput = document.getElementById('withdraw-amount'),
depositBtn = document.getElementById('deposit-btn'),
withdrawBtn = document.getElementById('withdraw-btn');


//deposit button event handler

depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    const balanceValue = Number(balance.innerText) + Number(value);
    balance.innerText = balanceValue;

    //setting up the input field blank when clicked

    depositInput.value = '';
})

//withdraw button event handler

withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value;
    if (Number(value) === 0)
    {
        alert("You don't have any balance to withdraw");
    } 
    else if (Number(value) > Number(balance.innerText))
    {
        alert("You don't have that much balance to withdraw");
    } 
    else 
    {
        const balanceValue = Number(balance.innerText) - Number(value);
        balance.innerText = balanceValue;

        //setting up the input field blank when clicked
        withdrawInput.value = '';
    }
})