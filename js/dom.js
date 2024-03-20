const deposit = document.getElementById('deposit');

deposit.addEventListener('click',function(){
     let depositInput = document.getElementById('deposit-input');
     const depositInputText = depositInput.value ;
     const depositValue = parseInt(depositInputText);
     let balance = document.getElementById('balance');
     let total = parseInt(balance);
     balance.innerText = depositValue;
     
     depositInput.value = '';
})


const withdraw = document.getElementById('withdraw');

withdraw.addEventListener('click', function() {
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawInputText = withdrawInput.value;
    let withdrawInputValue = parseInt(withdrawInputText);

    let balance = document.getElementById('balance');
    let total = parseInt(balance.innerText);

    let withdrawMoney = total - withdrawInputValue;

    balance.innerText = withdrawMoney;

    // Clearing the input field
    withdrawInput.value = '';
});
