//VARIABLES FOR TOTAL VALUES
let totalIncome = $("#total-income");
let totalExpense = $("#total-expense");
let sum = 0;

//INCOME INPUT
let incomeDes = $("#description");
let incomeVal = $("#value-income");
let incomeCheck = $("#income-check");
let incomeDescription = $("#description");
let defaultIncome = 0;

//EXPENSE INPUT
let expenseDes = $("#description-exp");
let expenseVal = $("#value-expense");
let expenseCheck = $("#exp-check");
let expenseDescription = $("#description-exp");
let defaultExpense = 0;

// VALUE DEFAULTS //
$("#budget").text("$" + sum); 

//  Controller interface  //

//updates the ul of expenses and total income displayed in header 
$(incomeCheck).on("click", function(){
    console.log("user clicked on income check");
   
     //CHECKING FOR EMPTY INPUTS 
     if($(incomeVal).val() == "" || $(incomeDescription).val() == "")
     {

      //CHANGING EMPTY INPUTS INTO INT 0
      $(incomeVal).val() = 0;
      $(incomeDescription).val() = "";
      $("#budget").text("$" + (defaultIncome + 0));
         
     }
    //UPDATING TOTAL INCOME
    defaultIncome +=  parseInt($(incomeVal).val());
    totalIncome.text("$"+ defaultIncome);
    console.log("The income Value is " + defaultIncome);
    console.log(defaultIncome)
   
    $("#budget").text("$" + defaultIncome);

    //taking value of description  
    var incomeText = $(incomeDescription).val();
    var incomeInt = $(incomeVal).val();
    console.log("The income text is " + incomeText);

    //CREATING LIST ITEM
    $("#income-ul").append("<li>" + "<div>" + incomeText + "</div>" + "<div class='mid-div'>" + "+ " + incomeInt + "</div>" + "<div class='last'>" + "<i class='fas fa-minus-square'></i>" + "</div>" +  "</li>");
    //minus show on mouse hover
    $("li").mouseenter(function(){
        $(this).find("i").css("visibility", "visible");
    });
    $("li").mouseleave(function(){
        $(this).find("i").css("visibility", "hidden")
    });

    //REMOVING LIST ITEMS
    $("#income-ul").find("i").on("click", function(){
        
        console.log("Removing li");
        
        console.log("This li income value is " + incomeInt);
        $(this).closest('li').remove();
        defaultIncome = defaultIncome - incomeInt;

        $("#budget").text("$" + defaultIncome);
        totalIncome.text("$"+ defaultIncome);

        //resetting income text value to prevent multiple addition
        incomeInt = S0;
    });
 
 

    //CLEARING DESCRIPTION BOX
    $(incomeDescription).val("");

    //CLEARING INPUT VALUE
    $(incomeVal).val("");

    //ADDING VALUE TO TOTAL BUDGET IN HEADER
    $("#budget").text("$" + (defaultIncome - defaultExpense));

//END OF CLICK EVENT (INCOME)
});


//CALCULATING EXPENSES
$(expenseCheck).on("click", function(){
    console.log("user clicked on expense check");
   
   //CHECKING FOR EMPTY INPUTS
   if($(expenseVal).val() == "" || $(expenseDes).val() == "")
   {
   //CHANGING EMPTY INPUTS INTO INT 0
   $(expenseVal).val() = 0 
   $(expenseDes).val() = ""
   $("#budget").text("$" + (defaultExpense + 0));
   }

   //ADDING  THE EXPENSE
    defaultExpense +=  parseInt($(expenseVal).val());
    totalExpense.text("$"+ defaultExpense)
    console.log("The expense Value is " + defaultExpense);
    console.log(defaultExpense);
   
   

 
    //TAKING THE VALUE OF THE DESCRIPTION
    var expenseText = $(expenseDescription).val();
    var expenseInt = $(expenseVal).val();
    console.log("The expensetext is " + expenseText);
    

    //CREATEING A LIST ITEM FOR EACH EXPENSE
    $("#expense-ul").append("<li>" + "<div>" + expenseText + "</div>" + "<div class='mid-div'>" + "- " + expenseInt + "</div>" + "<div class='last'>" + "<i class='fas fa-minus-square'></i>" + "</div>" +  "</li>");
    
    $("li").mouseenter(function(){
        $(this).find("i").css("visibility", "visible");
    });

    $("li").mouseleave(function(){
        $(this).find("i").css("visibility", "hidden")
    });


    $("#expense-ul").find("i").on("click", function(){
   
        console.log("Removing li");
        
        console.log("This li expense value is " + expenseInt);
        $(this).closest('li').remove();

        defaultExpense = defaultExpense - expenseInt;

        $("#budget").text("$" + (defaultIncome - defaultExpense));
        totalExpense.text("$"+ defaultExpense);
        
        //resetting income text value to prevent multiple addition
        incomeInt = 0;
        expenseInt = 0;
    });
 
 

    //CLEARING THE DESCRIPTION BOX
    $(expenseDescription).val("");
    $(expenseVal).val("");



      //PRINTING THE TOTAL BUDGET IN HEADER
     $("#budget").text("$" + (defaultIncome - defaultExpense));
      
//END OF EXPENSE CLICK EVENT 
});




