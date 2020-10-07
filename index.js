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