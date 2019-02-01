//variables for total values
let totalIncome = $("#total-income");
let totalExpense = $("#total-expense");
//income inoput
let incomeDes = $("#description");
let incomeVal = $("#value-income");
let incomeCheck = $("#income-check");
//expense input
let expenseDes = $("#description-exp");
let expenseVal = $("#value-expense");
let expenseCheck = $("#exp-check");

//         Controller interface         //

//updates the array of expenses and total income displayed in header 
$(incomeCheck).on("click", function(){
    console.log("user clicked on income check");
    //updating total income 
    $(totalIncome).text("$"+$(incomeVal).val());
    //adding to array og expenses
});
//updates the array of expenses and total income displayed in header 
$(expenseCheck).on("click", function(){
    console.log("user clicked on expense check");
    //updating total income 
    $(totalExpense).text("$"+$(expenseVal).val());
    //adding to array og expenses
});
