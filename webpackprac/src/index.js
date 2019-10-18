//webpack to generate main.js 
// Import Icons and App Custom Styles

import './css/app.css';
import './css/custom.css';

const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());