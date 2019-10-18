// Greeter.js
// es5 old styling exports/require
// es6 new styling export/import
module.exports = function () {
    var greet = document.createElement('div');
    greet.textContent = "Hi there and greetings! Only Me";
    return greet;
};