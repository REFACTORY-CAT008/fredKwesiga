//iteration
/*
let number = 1;
console.log(number);
number += 1;
console.log(number);
console.log(number);
*/
/*
//using while loops
//while num is <=100 print num from 1 to 100
let num = 1;
while(num<=100){
    console.log(num);
    num += 1;
}
*/
//using the for loop
/*
for(variable; Condition; update) {
    code
}
*/
/*
let age = 20;
for(age; age<=50; age++){
    console.log(age);
    age += 1;
}
*/

//using iterations

for(let years = 30; years<=50; years++){
    if(years % 3 === 0){
        console.log("multiples of 3");
    }else{
        console.log(years);
    }
}

//using arrays
const love = ["leah", "nesli"];
console.log(love[0]);
love[0] = "Frances";
console.log(love[0]);

let team = ["realmadrid", "chelsea", "realmadrid-fem", "olreign"];
for(i=0; i<3; i++){
    console.log(team[i]);
}

//the length property 
let team2 = ["realmadrid", "chelsea", "realmadrid-fem", "olreign"];
for(i=0; i<team2.length; i++){
    console.log(team2.length);
}

//objects:Objects, like arrays, are used to group and manage multiple values.While arrays arrange values in order by index, objects manage values by giving them names called properties. {property1:value1, property2:value2, property3:value3 } {property1: value1, property2: value2}

