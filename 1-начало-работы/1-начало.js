'use strict';

const fs = require('fs');
const data = fs.readFileSync('./data.txt');
console.log(data); // Buffer
console.log(data.toString());