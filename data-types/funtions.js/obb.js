//objects
//we start looking at software as objects
//objects have characteristics
//objects can be inherited 
//an object is an instance of a class. a class is a blue print of an object
//abstruction the top most representation of a class
//encapsulation: the ability of class or object to hide its implimentation

var mountain = {
    name: "rwenzori",
    height: 1000,
    location: "kasese",
    type: "dormant"

}
/*
//defining an empty object
let emptyobject = {}
//
console.log(mountain.name);
console.log(mountain.height);
*/

var book = {
    pages: 100,
    covers: 2,
    title: "the great gatsby",
    author: "mago-yusuf",
    color: "grey",
    genre: function(){
        console.log('sci-fi');
    }
}

book.review = function(){
    console.log('this book is about redemption and love');
} 
 console.log(book.genre());

/*
//accessing using the dot notation
console.log(book.author);


//using the array notation
console.log(book[title]);
*/

//looping through ojects
for(let value in book){
    console.log(value);
}

//methods of the objects
//defines what an object does to itself or others
//method is a function in orient orientation 
//using functions as parameters create a javascript programme that calculates someones net salary
//where nssf is 0.11(11%) and payee which is 0.30