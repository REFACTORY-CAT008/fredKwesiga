//Defines the fuction as 'shoe' and pass different paramenters which are brand, size, design, type, color, weight, solewear.
function shoe(brand, size, design, type, color, weight, solewear) 
{
    //'this' is a keyword that indentifies the property of an object
    this.brand = brand
    this.size = size
    this.design = design
    this.type = type
    this.color = color
    this.weight = weight
    this.solewear = solewear
    //method evokes the retun value of "this.brand + " is " + this.color" to be used by external codes.
    this.purchase = function(){
    return this.brand + " is " + this.type
    }
    this.covers = function(){
    return this.size + " is the size of these " + this.type
    }
    this.scale = function(){
        return this.type + " has a weight of " + this.weight
    }
    this.scale = function(){
        return this.brand + " is " + this.size
    }
}
// The "new" keyword is called a constructor
//the "new" keyword is used to initialize an instanciated object or create examples of an object.
let shoe1 = new shoe("Nike", "42", "curveshaped", "sneakers", "maroon", "0.5kg", "flat")
let shoe2 = new shoe("puma", "32", "pivot", "skates", "white", "1kg", "hardwood")
let shoe3= new shoe("gucci", "30", "redheels", "heels", "black", "0.7kg", "curvy")
let shoe4= new shoe("reebok", "30", "curved", "golf", "yellow", "0.4kg" ,"moscowrubber")
console.log(shoe3.purchase())


//Defines the fuction as 'phone' and pass different paramenters which are nname, size, color, batterylife, weight, camera, storage.
function phone(name, size, color, batterylife, weight, camera, storage)
{
       this.name = name
       this.size = size
       this.color = color
       this.batterylife = batterylife
       this.weight = weight
       this.camera = camera
       this.storage = storage
       //this method evokes the retun value of "this.name + " is " + this.weight" to be used by external codes.
       this.record = function() {
       return this.name + " is " + this.weight
    }
       this.use = function() {
       return this.name + " has " + this.storage
    }
     this.picture = function() {
        return this.name + " has got a " + this.camera
    }
     this.designed = function() {
        return this.name + " is " + this.color
    }
}
//the "new" keyword is used to initialize an instanciated object or create examples of an object.
let phone1 = new phone("iphone", "15inch", "black", "8hours", "140g", "64mpx", "120gb")
let phone2 = new phone("samsung", "8inch", "grey", "6hours", "120g", "32mpx", "64gb")
let phone3 = new phone("mi", "10inch", "golden", "10hours", "64g", "48mpx", "32gb")
let phone4 = new phone("blackberry", "12inch", "blue", "32hours", "32g", "128mpx", "128gb")
console.log(phone1.record())
console.log(phone1.use())
console.log(phone1.picture())


//Defines the fuction as 'television' and pass different paramenters which arename, color, screensize, soundquality, picturequality, weight, connectivity
function television(name, color, screensize, soundquality, picturequality, weight, connectivity)
{   this.name = name
    this.color = color
    this.screensize = screensize
    this.soundquality = soundquality
    this.picturequality = picturequality
    this.weight = weight
    this.connectivity = connectivity
    //this method evokes the retun value of "this.name + " is " + this.screensize" to be used by external codes.
    this.register = function() {
        return this.name + " is " + this.screensize
    }
    this.audio = function() {
        return this.name + " has " + this.soundquality
    }
    this.weighs = function() {
        return this.screensize + " has " + this.weight
    }
    this.designed = function() {
        return this.name + " is " + this.color
    }

}
//the "new" keyword is used to initialize an instanciated object or create examples of an object.    
let television1 = new television("Samsung", "grey", "50inch", "dolby", "8k","40kg","HDMI")
let television2 = new television("Sony", "black", "32inch", "monostero", "4k", "30kg", "DVI")
let television3 = new television("LG", "white", "60inch", "", "auto", "10k", "50kg", "composite")
let television4 = new television("Hisense", "purple", "65inch", "cinema", "16k", "55kg", "coaxial")
console.log(television3.register())


//Defines the fuction as 'soundPeat' and pass different paramenters which are Brand, color, batterylife, design, weight, soundquality, bluetooth
function soundPeat(Brand, color, batterylife, design, weight, soundquality, bluetooth)
{   this.Brand = Brand
    this.color = color
    this.batterylife =  batterylife
    this.design = design
    this.weight = weight
    this.soundquality = soundquality
    this.bluetooth = this.bluetooth
    //this method evokes the retun value of "this.Brand + " is " + this.soundquality" to be used by external codes.
    this.gift = function() {
        return this.Brand + " is " + this.soundquality

    }
    this.connection = function() {
        return this.Brand  + " is " + this.bluetooth 

    }
    this.packed = function() {
        return this.Brand + " is " + this.color

    }
    this.gift = function() {
        return this.Brand + " is " + this.design

    }
    
}
//the "new" keyword is used to initialize an instanciated object or create examples of an object.  
let soundPeat1 = new soundPeat("jbl", "brown", "8hoursperday", "fit", "o.5g","40kg","auto", "5m")
let soundPeat2 = new soundPeat("Q4", "red", "10hoursperday", "string", "0.6g", "bass", "4m")
let soundPeat3 = new soundPeat("apple", "green", "4hoursperday", "neckband", "1g", "stero", "8m")
let soundPeat4 = new soundPeat("samsung", "white", "6hoursperday", "overhead", "1.5g", "dynamic", "10m")
console.log(soundPeat4.gift())

function toothpaste(name, flavour, exiprydate, age, color, effect, weight) 
{
    //'this' is a keyword that indentifies the property of an object
    this.name = name
    this.flavour = flavour
    this.exiprydate = exiprydate
    this.age = age
    this.color = color
    this.effect = effect
    this.weight = weight
    //method evokes the retun value of "this.brand + " is " + this.color" to be used by external codes.
    this.purpose = function(){
    return this.name + " is " + this.effect
    }
    this.brand = function(){
        return this.name + " is " + this.flavour
        }
    this.weighs = function(){
        return this.name + " is " + this.weight
    }
    this.life = function(){
        return this.name + " is " + this.exiprydate
        }
}
// The "new" keyword is called a constructor
//the "new" keyword is used to initialize an instanciated object or create examples of an object.
let toothpaste1 = new toothpaste("colgate", "Honey", "2022", "10yearolds", "brown", "breathfresh", "o.5g")
let toothpaste2 = new toothpaste("close-up", "Charcoal", "2021", "20yearolds", "black", "teethwhitner", "1g")
let toothpaste3 = new toothpaste("Blu-M", "coffee", "2030", "30yearolds", "darkbrown", "strength", ".8g")
console.log(toothpaste2.purpose())

function dog(name, months, type, eyecolor, strength, height, bodysize) 
{
    //'this' is a keyword that indentifies the property of an object
    this.name = name
    this.months = months
    this.type = type
    this.eyecolor = eyecolor
    this.strength = strength
    this.height = height
    this.bodysize = bodysize
    //method evokes the retun value of "this.brand + " is " + this.color" to be used by external codes.
    this.character = function(){
    return this.type + " is " + this.strength
    }
    this.tag = function(){
    return this.name + " is a " + this.type
    }
    this.tall = function(){
    return this.type + " has a height of " + this.height
    }
    this.old = function(){
    return this.name + " is " + this.months
    } 
}
// The "new" keyword is called a constructor
//the "new" keyword is used to initialize an instanciated object or create examples of an object.
let dog1 = new dog("scoby", "3", "Chihuahua", "10yearolds", "blue", "companion", "2m", "2pounds")
let dog2 = new dog("police", "6", "German Shepherd", "brown", "protective", "8m", "12pounds")
let dog3 = new dog("simba", "12", "2030", "Bulldog", "black", "swimmer", ".6m", "10pounds")
console.log(dog2.character())
console.log(dog2.tall())

function farm(name, location, size, owner, activity, worker, tools) 
 {
    //this' is a keyword that indentifies the property of an object
    this.name = name
    this.location = location
    this.size = size
    this.owner = owner
    this.activity = activity
    this.worker = worker
    this.tools = tools
    //method evokes the retun value of "this.brand + " is " + this.color" to be used by external codes.
    this.lays = function(){
    return this.name + " sits on " + this.size
    }
    this.educate = function(){
    return this.name + " teaches about " + this.activity
    }
    this.managing = function(){
    return this.owner+ " is the manager of " + this.name
    }
    this.found = function(){
    return this.name + " is found in " + this.location
    }  
 }
 // The "new" keyword is called a constructor
//the "new" keyword is used to initialize an instanciated object or create examples of an object.
let farm1 = new farm("Rugendo", "mukono", "2acres", "Salim", "piggery", "Allan", "spades")
let farm2 = new farm("kanu", "kasagato", "6acres", "Besigye", "poutry", "Kato", "forks")
let farm3 = new farm("topowa", "nateete", "8acres", "Fred", "mixed farming", "Winnie", "pangas")
console.log(farm1.lays())
console.log(farm1.educate())
console.log(farm1.found())
