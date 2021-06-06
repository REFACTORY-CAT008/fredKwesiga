// Using functions paramters create a js program that can calculate someone's pay as a net salary after NSS of 11% and Pay As You Earn of 30%.
// Using at least 3 functions that retains someone's value after payment.

//Define the function as 'fredtaxes' and pass the parameters 'mykaMoney' to the function.
function fredtaxes(mykaMoney) {
    //declares variable 'fredtaxes' as a variable after adding percentages of 'paye' and 'nssf'
    let paye = (30/100)*mykaMoney;
    let nssf = (11/100)*mykaMoney;
    let fredtaxes = paye + nssf
    //return the value of 'fredtaxes' such that it can be used by external function.
    return fredtaxes
}
//Define the function as 'netsalary' and pass the parameters 'mykaMoney' to the function.
function netsalary(mykaMoney){

    //declares variable of 'netsalary' as a result of the subtraction of 'mykaMoney' and the value of 'fredtaxes' passed in this function.
    let netsalary = mykaMoney - fredtaxes(5000000)
    //logs the value of 'netsalary'
    console.log(netsalary)
}
netsalary(5000000)


