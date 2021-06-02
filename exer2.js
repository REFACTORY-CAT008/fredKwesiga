/*using functions parameters, create a javascript program and calculate someone's net salary
where nssf is 0.11(11%) and PAYE which is 0.30 (30%)
use atleast 3 functions*/



//Define a function taxes and assign it one parameter. 
//Declare three variables that show the calculation of taxes
function taxes(gross){
let nssf = (11/100)*gross;
let paye = (30/100)*gross;
let taxes = nssf + paye
return taxes
}
 //Define another function salary and give it one parameter. 
function salary(gross){
    let salary = gross - taxes(gross)
//output the value of the salary function to get the final pay. 
    console.log(salary)
}
//Invoke the salary function and give it an argument. 
salary(8000000)




