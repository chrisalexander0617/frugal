//variables for total values
let totalIncome = $("#total-income");
let totalExpense = $("#total-expense");

//income input
let incomeDes = $("#description");
let incomeVal = $("#value-income");
let incomeCheck = $("#income-check");
let incomeDescription = $("#description");
let defaultIncome = 0;

//expense input
let expenseDes = $("#description-exp");
let expenseVal = $("#value-expense");
let expenseCheck = $("#exp-check");
let expenseDescription = $("#description-exp");
let defaultExpense = 0;

//  Controller interface  //

//updates the ul of expenses and total income displayed in header 
$(incomeCheck).on("click", function(){
    console.log("user clicked on income check");

   

    //updating total income 
    console.log(defaultExpense)
    defaultIncome +=  parseInt($(incomeVal).val());
    totalIncome.text("$"+ defaultIncome)
    console.log("The expense Value is " + defaultIncome);

     //checking for empty text inputs 
     if($(incomeVal).val() == "" || $(incomeDescription).val() == "")
     {
        return alert("empty input");
     }

    //taking value of description  
    var incomeText = $(incomeDescription).val();
    console.log("The income text is " + incomeText);

    //creating a list item from that value 
    $("#income-ul").append("<li>" + incomeText+ "</li>");

    //clearing the description box
    $(incomeDescription).val("");
    //clearing value input
    $(incomeVal).val("");

    


    //enter code here....

});


//updates the ul of expenses and total income displayed in header 
$(expenseCheck).on("click", function(){
    console.log("user clicked on expense check");

    //updating total income 
    //$(totalExpense).text("$"+$(expenseVal).val());

    console.log(defaultExpense)
    defaultExpense +=  parseInt($(expenseVal).val());
    totalExpense.text("$"+ defaultExpense)
    console.log("The expense Value is " + defaultExpense);
    





    

     //checking for empty text inputs 
     if($(expenseVal).val() == "" || $(expenseDescription).val() == "")
     {
        return alert("empty input");
     }


    //taking value of description  
    var expenseText = $(expenseDescription).val();
    console.log("The income text is " + expenseText);

    //creating a list item from that value 
    $("#expense-ul").append("<li>" + expenseText+ "</li>");

    //clearing the description box
    $(expenseDescription).val("");



      //enter code here....

});


