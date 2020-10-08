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