// Course By Fatah Gabrial on Udemy https://www.udemy.com/course/complete-javascript-es6-course/

// var and let

for (let i = 0; i < 45; i++) {
    var div = document.createElement('div');
    div.onclick = function () {
        alert("Hello this is " + i + " Box ");
    };

    document.getElementsByTagName('section')[0].appendChild(div);
}
// --------------------------------------------------------------------------


// Using the const keyword

const birthYear = 1999;
const currentYear = 2020;

// birthYear = 1998;
// Uncaught TypeError: Assignment to constant variable.

const age = currentYear - birthYear;
console.log(age);
// --------------------------------------------------------------------------


// Working with Template Strings
function sendEmail(name, price) {
    const shippingPrice = 50;

    var TotalPrice = price + shippingPrice;

    console.log(`Hi, ${name}, Thank you for buying
                        Shipping charges: $${shippingPrice}
                        Grand Total: $${TotalPrice}`);
}

sendEmail('Darshan', 300);
// --------------------------------------------------------------------------


// Spread Oprator 
var mobiles = ["Oppo", "Vivo", "Mi"];
var electronics = ["TV", "Fridge", "Home Theatre"];
var allDevices = ["Amazon Alexa", ...mobiles, "Air purifier", ...electronics];

console.log(allDevices);
// --------------------------------------------------------------------------

// Working with objects

var sounds = {
    alarm: function (times) {
        console.log("Beep ".repeat(times));
    },
    ringTone: function (times) {
        console.log("Songs ".repeat(times));
    }
}

sounds.alarm(3);
sounds.ringTone(5);
// --------------------------------------------------------------------------

// Arrow functions 
let developersList = developers => console.log(developers);

developersList(["Darshan", "John", "Jane"]);
// --------------------------------------------------------------------------

// Arrow functions with this scope
var person = {
    first: "John",
    actions: ["Bike", "Hike", "Ski", "Suri"],
    printAction: function () {
        this.actions.forEach(function (action) {
            var str = this.first + " likes to " + action;
            console.log(str);
        }.bind(this))
    }
}

person.printAction();
// --------------------------------------------------------------------------

// Destructuring in JavaScript ES6
// destructuring in array
let [first, , third] = ["Banglore", "Mysore", "Manglore"];
console.log(first)
console.log(third)

// Destructuring in objects
let { title, price } = {
    title: "Cheese sandwich",
    price: 40,
    description: "Chinese sandwih in banglore",
    ingredients: ["Bread", "Butter", "Cheese"]
};

console.log(title)
console.log(price)

// Little bit complex object destructuring
let vacation = {
    destination: "Manglore",
    travelers: 2,
    activity: "Beach",
    cost: 4000
};

function vacationMarketing({ destination, activity }) {
    return `Let's go to ${destination} near ${activity}`;
}

console.log(vacationMarketing(vacation));
// --------------------------------------------------------------------------

// Generator in JavaScript ES6

function* movie() {
    yield 'Lights';
    yield 'Camera';
    yield 'Action';
}

let action = movie();

console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);

function* eachItem(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}

let myNumbers = eachItem([1, 2, 3, 4, 5, 6, 7]);
var myNum = setInterval(function () {
    let myNuber = myNumbers.next();
    if (myNuber.done) {
        clearInterval(myNum);
        console.log("These are my numbers");
    } else {
        console.log(myNuber.value);
    }
}, 500)
// --------------------------------------------------------------------------

// Working with Class Syntax in JavaScript ES6

class Mobiles {
    constructor(storage, ram) {
        this.storage = storage;
        this.ram = ram;
    }

    phoneDetails() {
        console.log(`This mobile has ${this.storage} storage and ${this.ram} RAM`);
    }
}

class oldPhones extends Mobiles {
    constructor() {
        super("4GB", "1GB");
    }
}

let myPhone = new Mobiles("64GB", "8GB");
myPhone.phoneDetails();

let myOldPhone = new oldPhones();
myOldPhone.phoneDetails();