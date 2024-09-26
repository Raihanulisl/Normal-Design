//Add Money to the Account

document.getElementById('add-money-btn')
.addEventListener('click', function(event){
    //prevent page reload after the submit
    event.preventDefault();

    //get money to be added to the account

    const addMoneyInput = document.getElementById('add-money-input').value;
    console.log(addMoneyInput);

        //get the current balance

        const balance = document.getElementById('account-balance')
        console.log( balance);

        // add addmoney input with balace

        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log( newBalance)

         //update the balance in the dom
        document.getElementById('account-balance')


})



