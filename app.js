//variables
let totalIncome = $("#total-income");
let totalExpense = $("#total-expense");

let incomeDes = $("#description");
let incomeVal = $("#value-income");
let incomeCheck = $("income-check");

let expenseDes = $("#description-exp");
let expenseVal = $("#value-expense");
let expCheck = $("exp-check");


//testing
$(totalIncome).on("click", function() {
    //testing DOM element
    console.log("total income clicked");
});

$(totalExpense).on("click", function() {
    //testing DOM element
    console.log("total expense clicked");
});