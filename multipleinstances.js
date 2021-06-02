//Defines the fuction as 'shoes' and pass different paramenters which are brand, size, design, type, color, weight, solewear
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
    this.purchase = function(){
    return this.brand + " is " + this.color
    }
}
// The "new" keyword is called a constructor
//the "new" keyword is used to initialize an instanciated object or create examples of an object.
let sneakers = new shoe("Nike", "42", "curveshaped", "boat", "maroon", "0.5kg", "flat")
let skates = new shoe("puma", "32", "pivot", "roller", "white", "1kg", "hardwood")
let heels = new shoe("gucci", "30", "redheels", "highheels", "black", "0.7kg", "curvy")
let golf = new shoe("reebok", "30", "curved", "plastic", "yellow", "0.4kg" ,"moscowrubber")
console.log(skates.purchase())


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
       this.record = function() {
        return this.name + " is " + this.weight
    }
}
let phone1 = new phone("iphone", "15inch", "black", "8hours", "140g", "64mpx", "120gb")
let phone2 = new phone("samsung", "8inch", "grey", "6hours", "120g", "32mpx", "64gb")
let phone3 = new phone("mi", "10inch", "golden", "10hours", "64g", "48mpx", "32gb")
let phone4 = new phone("blackberry", "12inch", "blue", "32hours", "32g", "128mpx", "128gb")
console.log(phone1.record())


//Defines the fuction as 'television' and pass different paramenters which arename, color, screensize, soundquality, picturequality, weight, connectivity
function television(name, color, screensize, soundquality, picturequality, weight, connectivity)
{   this.name = name
    this.color = color
    this.screensize = screensize
    this.soundquality = soundquality
    this.picturequality = picturequality
    this.weight = weight,
    this.connectivity = connectivity
    this.register = function() {
        return this.name + " is " + this.screensize

    }
    
}
    
let television1 = new television("Samsung", "grey", "50inch", "dolby", "8k","40kg","HDMI")
let television2 = new television("Sony", "black", "32inch", "monostero", "4k", "30kg", "DVI")
let television3 = new television("LG", "white", "60inch", "", "auto", "10k", "50kg", "composite")
let television4 = new television("Hisense", "purple", "65inch", "cinema", "16k", "55kg", "coaxial")
console.log(television3.register())


//Defines the fuction as 'shoes' and pass different paramenters which arename, size, color, batterylife, weight, camera, storage
function soundPeat(Brand, color, batterylife, design, weight, soundquality, bluetooth)
{   this.Brand = Brand
    this.color = color
    this.batterylife =  batterylife
    this.design = design
    this.weight = weight
    this.soundquality = soundquality
    this.bluetooth = this.bluetooth
    this.gift = function() {
        return this.Brand + " is " + this.soundquality

    }
    
}   
let soundPeat1 = new soundPeat("jbl", "brown", "8hoursperday", "fit", "o.5g","40kg","auto", "5")
let soundPeat2 = new soundPeat("Q4", "red", "10hoursperday", "string", "0.6g", "bass", "4")
let soundPeat3 = new soundPeat("apple", "green", "4hoursperday", "neckband", "1g", "stero", "8")
let soundPeat4 = new soundPeat("samsung", "white", "6hoursperday", "overhead", "1.5g", "dynamic", "10")
console.log(soundPeat4.gift())
